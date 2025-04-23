import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import { contactSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import testimonialsRouter from "./routes/testimonials";
import adminRouter from "./routes/admin";

export async function registerRoutes(app: Express): Promise<Server> {
  // Testimonials API-Routen
  app.use('/api/testimonials', testimonialsRouter);
  
  // Admin API-Routen
  app.use('/api/admin', adminRouter);
  
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactSchema.parse(req.body);
      
      // For simplicity, we're using a test account for nodemailer
      // In production, you would use real SMTP credentials
      const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER || "ethereal.user@ethereal.email",
          pass: process.env.EMAIL_PASSWORD || "ethereal_password"
        }
      });
      
      // Send email
      await transporter.sendMail({
        from: `"Contact Form" <${validatedData.email}>`,
        to: "kevintriebe2025@gmail.com",
        subject: validatedData.subject,
        text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\nMessage: ${validatedData.message}`,
        html: `
          <h2>Neue Kontaktformular-Nachricht</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Betreff:</strong> ${validatedData.subject}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        `
      });
      
      res.status(200).json({ success: true, message: "Nachricht erfolgreich gesendet" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validierungsfehler", 
          errors: validationError.message 
        });
      } else {
        console.error("Error sending email:", error);
        res.status(500).json({ 
          success: false, 
          message: "Es gab ein Problem beim Senden der Nachricht. Bitte versuchen Sie es später erneut." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
