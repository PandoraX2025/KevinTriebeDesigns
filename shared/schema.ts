import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form schema
export const contactSchema = z.object({
  name: z.string().min(2, { message: "Name muss mindestens 2 Zeichen lang sein" }),
  email: z.string().email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein" }),
  subject: z.string().min(3, { message: "Betreff muss mindestens 3 Zeichen lang sein" }),
  message: z.string().min(10, { message: "Nachricht muss mindestens 10 Zeichen lang sein" }),
});

export type ContactForm = z.infer<typeof contactSchema>;
