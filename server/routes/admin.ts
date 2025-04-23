import { Router, Request, Response } from 'express';
import { db } from '../db';
import { testimonials } from '@shared/schema';
import { eq } from 'drizzle-orm';

const router = Router();

// Einfacher Schutz für Admin-Routen - In einer richtigen Produktionsumgebung würde man 
// hier eine richtige Authentifizierung verwenden
const adminToken = process.env.ADMIN_TOKEN || 'fd-developments-admin-2025';

// Middleware zum Überprüfen des Admin-Tokens
const requireAdminToken = (req: Request, res: Response, next: Function) => {
  const token = req.query.token as string;
  if (!token || token !== adminToken) {
    return res.status(401).json({ error: 'Nicht autorisiert' });
  }
  next();
};

// Hole alle Testimonials (inkl. nicht genehmigter)
router.get('/testimonials', requireAdminToken, async (_req: Request, res: Response) => {
  try {
    const results = await db.select().from(testimonials)
      .orderBy(testimonials.createdAt);
    
    res.json(results);
  } catch (error) {
    console.error('Fehler beim Abrufen der Testimonials:', error);
    res.status(500).json({ error: 'Fehler beim Abrufen der Testimonials' });
  }
});

// Genehmige ein Testimonial
router.post('/testimonials/:id/approve', requireAdminToken, async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Ungültige ID' });
  }

  try {
    await db.update(testimonials)
      .set({ approved: true })
      .where(eq(testimonials.id, id));
    
    res.json({ success: true, message: 'Testimonial erfolgreich genehmigt' });
  } catch (error) {
    console.error('Fehler beim Genehmigen des Testimonials:', error);
    res.status(500).json({ error: 'Fehler beim Genehmigen des Testimonials' });
  }
});

// Ablehnen (Löschen) eines Testimonials
router.delete('/testimonials/:id', requireAdminToken, async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Ungültige ID' });
  }

  try {
    await db.delete(testimonials)
      .where(eq(testimonials.id, id));
    
    res.json({ success: true, message: 'Testimonial erfolgreich gelöscht' });
  } catch (error) {
    console.error('Fehler beim Löschen des Testimonials:', error);
    res.status(500).json({ error: 'Fehler beim Löschen des Testimonials' });
  }
});

// Bearbeiten eines Testimonials
router.put('/testimonials/:id', requireAdminToken, async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Ungültige ID' });
  }

  const { content, name, serviceType } = req.body;
  if (!content || !name || !serviceType) {
    return res.status(400).json({ error: 'Fehlende Pflichtfelder' });
  }

  try {
    await db.update(testimonials)
      .set({ 
        content, 
        name, 
        serviceType 
      })
      .where(eq(testimonials.id, id));
    
    res.json({ success: true, message: 'Testimonial erfolgreich aktualisiert' });
  } catch (error) {
    console.error('Fehler beim Aktualisieren des Testimonials:', error);
    res.status(500).json({ error: 'Fehler beim Aktualisieren des Testimonials' });
  }
});

export default router;