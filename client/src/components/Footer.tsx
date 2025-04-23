import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';

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

export function getAdminStatus() {
  return { isLoggedIn, username };
}

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">FD Developments</h3>
            <p className="text-gray-300 mb-4">
              Web-Entwicklung, Scripting und Design-Lösungen für Ihre digitalen Projekte.
            </p>
            <div className="flex space-x-4">
              <a href="https://discord.gg/qEy8xf6CyV" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition">
                <i className="fab fa-discord text-xl"></i>
              </a>
              <a href="mailto:kevintriebe2025@gmail.com" className="text-gray-300 hover:text-white transition">
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a href="https://ktriebe.xyz" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition">
                <i className="fas fa-globe text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Leistungen</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition">Web-Entwicklung</a></li>
              <li><a href="#services" className="hover:text-white transition">Scripting & Logik</a></li>
              <li><a href="#services" className="hover:text-white transition">Discord Bots</a></li>
              <li><a href="#services" className="hover:text-white transition">3D Design (Blender)</a></li>
              <li><a href="#services" className="hover:text-white transition">Grafikdesign</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-white transition">Startseite</a></li>
              <li><a href="#services" className="hover:text-white transition">Leistungen</a></li>
              <li><a href="#ai" className="hover:text-white transition">KI-Entwicklung</a></li>
              <li><a href="#about" className="hover:text-white transition">Über uns</a></li>
              <li><a href="#contact" className="hover:text-white transition">Kontakt</a></li>
              <li><a href="https://discord.gg/qEy8xf6CyV" target="_blank" rel="noreferrer" className="hover:text-white transition">Discord Server</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {year} FD Developments and Design. Alle Rechte vorbehalten.</p>
          <p className="mt-2">Designed and developed by Kevin Triebe</p>
          
          {/* Admin Login/Logout */}
          <div className="mt-4">
            {loginStatus.isLoggedIn ? (
              <div className="flex flex-col items-center justify-center mt-2">
                <p className="text-xs text-gray-400">Eingeloggt als {loginStatus.username}</p>
                <button 
                  onClick={handleLogout}
                  className="text-xs text-gray-400 underline hover:text-white mt-1"
                >
                  Abmelden
                </button>
              </div>
            ) : (
              <button 
                onClick={toggleLoginForm}
                className="text-xs text-gray-500 hover:text-gray-300"
              >
                {showLoginForm ? 'Schließen' : 'Admin'}
              </button>
            )}
            
            {/* Login Form */}
            {showLoginForm && !loginStatus.isLoggedIn && (
              <div className="mt-4 max-w-xs mx-auto">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Benutzername"
                      {...form.register('username')}
                      className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    {form.formState.errors.username && (
                      <p className="text-red-400 text-xs mt-1">{form.formState.errors.username.message}</p>
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
                      <p className="text-red-400 text-xs mt-1">{form.formState.errors.password.message}</p>
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
    </footer>
  );
}
