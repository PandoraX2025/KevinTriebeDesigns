import { Router, Request, Response } from 'express';
import { db } from '../db';
import { testimonials, insertTestimonialSchema } from '@shared/schema';
import { eq } from 'drizzle-orm';

const router = Router();

// Hole alle Testimonials (ohne approved Filter)
router.get('/', async (_req: Request, res: Response) => {
  try {
    const results = await db.select().from(testimonials)
      .orderBy(testimonials.createdAt);
    
    res.json(results);
  } catch (error) {
    console.error('Fehler beim Abrufen der Testimonials:', error);
    res.status(500).json({ error: 'Fehler beim Abrufen der Testimonials' });
  }
});

// Füge neues Testimonial hinzu
router.post('/', async (req: Request, res: Response) => {
  try {
    // Parse und validiere die Eingabe mit Zod
    const testimonialData = insertTestimonialSchema.parse(req.body);
    
    // Füge die Daten in die Datenbank ein
    const [result] = await db.insert(testimonials)
      .values(testimonialData)
      .returning();
    
    res.status(201).json({ 
      success: true, 
      message: 'Vielen Dank für Ihre Bewertung! Sie wird nach Überprüfung veröffentlicht.',
      id: result.id 
    });
  } catch (error) {
    console.error('Fehler beim Hinzufügen des Testimonials:', error);
    res.status(400).json({ 
      success: false,
      error: 'Fehler beim Hinzufügen Ihrer Bewertung. Bitte überprüfen Sie Ihre Eingaben.' 
    });
  }
});

export default router;