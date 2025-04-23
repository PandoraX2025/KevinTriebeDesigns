import { Router, Request, Response } from 'express';
import { db } from '../db';
import { testimonials, insertTestimonialSchema } from '@shared/schema';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

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
    // Setze approved direkt auf true, damit keine Genehmigung nötig ist
    const [result] = await db.insert(testimonials)
      .values({
        ...testimonialData,
        approved: true // Automatisch genehmigen
      })
      .returning();
    
    res.status(201).json({ 
      success: true, 
      message: 'Vielen Dank für Ihre Bewertung! Sie wurde erfolgreich veröffentlicht.',
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

// Delete Testimonial (mit Auth Check)
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    // Validiere Login-Daten
    const authSchema = z.object({
      username: z.string(),
      password: z.string()
    });

    let authData;
    try {
      authData = authSchema.parse(req.body);
    } catch (error) {
      return res.status(401).json({ 
        success: false, 
        error: 'Ungültige Anmeldedaten' 
      });
    }

    // Überprüfe Benutzername und Passwort
    if (authData.username !== 'pandorax' || authData.password !== '2014201620162023') {
      return res.status(401).json({ 
        success: false, 
        error: 'Ungültige Anmeldedaten' 
      });
    }

    // Parse ID
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Ungültige ID' 
      });
    }

    // Lösche das Testimonial
    await db.delete(testimonials)
      .where(eq(testimonials.id, id));
    
    res.status(200).json({ 
      success: true, 
      message: 'Bewertung erfolgreich gelöscht' 
    });
  } catch (error) {
    console.error('Fehler beim Löschen des Testimonials:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Fehler beim Löschen der Bewertung' 
    });
  }
});

// Admin Login Check (für Frontend)
router.post('/login', async (req: Request, res: Response) => {
  try {
    const loginSchema = z.object({
      username: z.string(),
      password: z.string()
    });

    const loginData = loginSchema.parse(req.body);

    // Überprüfe Benutzername und Passwort
    if (loginData.username === 'pandorax' && loginData.password === '2014201620162023') {
      return res.status(200).json({ 
        success: true,
        isAdmin: true
      });
    } else {
      return res.status(401).json({ 
        success: false, 
        error: 'Ungültige Anmeldedaten' 
      });
    }
  } catch (error) {
    console.error('Fehler bei der Authentifizierung:', error);
    res.status(400).json({ 
      success: false, 
      error: 'Fehler bei der Authentifizierung' 
    });
  }
});

export default router;