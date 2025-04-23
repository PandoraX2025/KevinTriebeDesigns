import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'wouter';

interface FooterProps {
  year: number;
}

// Login-Status als globale Variable (für ein einfaches Login)
// In einer richtigen App würde man hier Context oder Redux verwenden
let isLoggedIn = false;
let username = '';

// Login-Schema
const loginSchema = z.object({
  username: z.string().min(1, "Benutzername erforderlich"),
  password: z.string().min(1, "Passwort erforderlich")
});

type LoginFormValues = z.infer<typeof loginSchema>;

// Exportiere die Admin-Status-Funktion als konstante Variable
export const getAdminStatus = () => {
  return { isLoggedIn, username };
};

export default function Footer({ year }: FooterProps) {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginStatus, setLoginStatus] = useState({ isLoggedIn, username });
  const { toast } = useToast();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const response = await fetch('/api/testimonials/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Login erfolgreich
        isLoggedIn = true;
        username = values.username;
        setLoginStatus({ isLoggedIn: true, username: values.username });
        
        toast({
          title: "Login erfolgreich",
          description: "Sie sind jetzt als Administrator angemeldet.",
        });
        
        setShowLoginForm(false);
        form.reset();
      } else {
        // Login fehlgeschlagen
        toast({
          title: "Login fehlgeschlagen",
          description: "Ungültiger Benutzername oder Passwort.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Fehler beim Login",
        description: "Es gab ein Problem bei der Anmeldung. Bitte versuchen Sie es später erneut.",
        variant: "destructive"
      });
    }
  };

  const handleLogout = () => {
    isLoggedIn = false;
    username = '';
    setLoginStatus({ isLoggedIn: false, username: '' });
    
    toast({
      title: "Abgemeldet",
      description: "Sie wurden erfolgreich abgemeldet.",
    });
  };

  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* Linke Spalte - Über uns und Social Links */}
          <div className="md:w-1/2 lg:w-2/5">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4 text-white">FD Developments</h3>
              <p className="text-gray-300 mb-4">
                Web-Entwicklung, Scripting und Design-Lösungen für Ihre digitalen Projekte. 
                Wir bieten maßgeschneiderte digitale Lösungen für Ihre individuellen Bedürfnisse.
              </p>
              <div className="flex space-x-5 mt-4">
                <a href="https://discord.gg/qEy8xf6CyV" target="_blank" rel="noreferrer" 
                  className="bg-[#5865F2]/20 hover:bg-[#5865F2]/30 text-[#5865F2] p-2.5 rounded-lg transition">
                  <i className="fab fa-discord text-xl"></i>
                </a>
                <a href="mailto:kevintriebe2025@gmail.com" 
                  className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-500 p-2.5 rounded-lg transition">
                  <i className="fas fa-envelope text-xl"></i>
                </a>
                <a href="https://ktriebe.xyz" target="_blank" rel="noreferrer" 
                  className="bg-gray-500/20 hover:bg-gray-500/30 text-gray-300 p-2.5 rounded-lg transition">
                  <i className="fas fa-globe text-xl"></i>
                </a>
              </div>
            </div>
            
            {/* Copyright und Admin Login */}
            <div className="mt-8 border-t border-gray-700 pt-6 text-gray-400">
              <p>&copy; {year} FD Developments and Design. Alle Rechte vorbehalten.</p>
              <p className="mt-2 text-sm">Designed and developed by Kevin Triebe</p>
            </div>
          </div>
          
          {/* Rechte Spalte - Links */}
          <div className="md:w-1/2 lg:w-2/5 flex flex-col md:items-end">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 w-full">
              {/* Leistungen */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-white border-b border-gray-700 pb-2">Leistungen</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/services" className="hover:text-white transition flex items-center">
                    <i className="fas fa-chevron-right text-xs mr-2 text-primary"></i>Web-Entwicklung
                  </Link></li>
                  <li><Link href="/services" className="hover:text-white transition flex items-center">
                    <i className="fas fa-chevron-right text-xs mr-2 text-primary"></i>Scripting & Logik
                  </Link></li>
                  <li><Link href="/services" className="hover:text-white transition flex items-center">
                    <i className="fas fa-chevron-right text-xs mr-2 text-primary"></i>Discord Bots
                  </Link></li>
                  <li><Link href="/services" className="hover:text-white transition flex items-center">
                    <i className="fas fa-chevron-right text-xs mr-2 text-primary"></i>3D Design
                  </Link></li>
                  <li><Link href="/services" className="hover:text-white transition flex items-center">
                    <i className="fas fa-chevron-right text-xs mr-2 text-primary"></i>Grafikdesign
                  </Link></li>
                </ul>
              </div>
              
              {/* Seiten-Links */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-white border-b border-gray-700 pb-2">Navigation</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#home" className="hover:text-white transition flex items-center">
                    <i className="fas fa-chevron-right text-xs mr-2 text-primary"></i>Startseite
                  </a></li>
                  <li><a href="#about" className="hover:text-white transition flex items-center">
                    <i className="fas fa-chevron-right text-xs mr-2 text-primary"></i>Über uns
                  </a></li>
                  <li><a href="#teamspeak" className="hover:text-white transition flex items-center">
                    <i className="fas fa-chevron-right text-xs mr-2 text-primary"></i>TeamSpeak
                  </a></li>
                  <li><a href="#contact" className="hover:text-white transition flex items-center">
                    <i className="fas fa-chevron-right text-xs mr-2 text-primary"></i>Kontakt
                  </a></li>
                </ul>
              </div>
            </div>
            
            {/* Admin Login/Logout - rechts unten ausgerichtet */}
            <div className="mt-8 md:text-right border-t border-gray-700 pt-6 w-full">
              {loginStatus.isLoggedIn ? (
                <div className="text-right">
                  <p className="text-xs text-gray-400">Eingeloggt als <span className="font-medium">{loginStatus.username}</span></p>
                  <button 
                    onClick={handleLogout}
                    className="text-xs text-gray-400 underline hover:text-white mt-1"
                  >
                    Abmelden
                  </button>
                </div>
              ) : (
                <div className="text-right">
                  <button 
                    onClick={toggleLoginForm}
                    className="text-xs text-gray-500 hover:text-gray-300"
                  >
                    {showLoginForm ? 'Schließen' : 'Admin'}
                  </button>
                </div>
              )}
              
              {/* Login Form */}
              {showLoginForm && !loginStatus.isLoggedIn && (
                <div className="mt-4 md:max-w-xs ml-auto">
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Benutzername"
                        {...form.register('username')}
                        className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      {form.formState.errors.username && (
                        <p className="text-red-400 text-xs mt-1 text-right">{form.formState.errors.username.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <input
                        type="password"
                        placeholder="Passwort"
                        {...form.register('password')}
                        className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      {form.formState.errors.password && (
                        <p className="text-red-400 text-xs mt-1 text-right">{form.formState.errors.password.message}</p>
                      )}
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gray-600 hover:bg-gray-500 text-white font-medium py-1.5 px-4 rounded-md text-sm transition-colors"
                    >
                      Anmelden
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
