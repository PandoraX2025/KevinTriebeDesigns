import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '@shared/schema';
import ws from 'ws';

// WebSocket wird für Neon-Verbindungen benötigt
neonConfig.webSocketConstructor = ws;

// Überprüfe, ob die Datenbankverbindungs-URL vorhanden ist
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL muss in den Umgebungsvariablen gesetzt sein');
}

// Erstelle einen SQL-Client mit Neon
const sql = neon(process.env.DATABASE_URL);

// Erstelle einen Drizzle ORM-Client mit unserem Schema
export const db = drizzle(sql, { schema });