import { Pool } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '@shared/schema';

// Überprüfe, ob die Datenbankverbindungs-URL vorhanden ist
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL muss in den Umgebungsvariablen gesetzt sein');
}

// Erstelle einen Pool für die Datenbankverbindung
export const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Erstelle einen Drizzle ORM-Client mit unserem Schema
export const db = drizzle(pool, { schema });