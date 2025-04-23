import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ts3Screenshot from '../assets/ts3screenshot.png';

export default function TeamspeakPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="font-sans antialiased transition-colors duration-300">
      <Navbar />

      <main>
        {/* Header */}
        <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                TeamSpeak Support
              </h1>
              <p className="text-base md:text-lg dark:text-gray-300 text-gray-600 mb-8">
                Verbinden Sie sich mit unserem TeamSpeak Server für direkten Support und persönlichen Kontakt
              </p>
            </div>
          </div>
        </section>

        {/* TeamSpeak Support Section */}
        <section className="py-12 md:py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-5">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-3 dark:text-white">Server-Details</h3>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                      <p className="mb-2 dark:text-gray-300 font-mono">
                        <span className="font-medium block mb-1">Server-Adresse:</span> 
                        <span className="text-primary">2.59.134.241:9987</span>
                      </p>
                      <p className="dark:text-gray-300 font-mono">
                        <span className="font-medium block mb-1">Server-Name:</span> 
                        <span className="text-primary">Frozen District Services FD Developments</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <a 
                      href="ts3server://2.59.134.241:9987?nickname=FD-Website-Besucher" 
                      className="flex items-center justify-center bg-primary hover:bg-blue-600 text-white font-medium py-4 px-6 rounded-lg transition text-lg"
                    >
                      <i className="fas fa-headset mr-2"></i>
                      Mit TeamSpeak verbinden
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
                      Klicken Sie auf den Button, um direkt mit dem TeamSpeak-Client zu verbinden.
                      <br />Sie benötigen den TeamSpeak 3 Client auf Ihrem Gerät.
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
                    <h4 className="font-semibold mb-2 dark:text-white">Support-Zeiten:</h4>
                    <div className="grid grid-cols-2 gap-2 max-w-sm">
                      <div className="bg-white/50 dark:bg-gray-800/50 p-2 rounded text-center">
                        <p className="font-medium text-sm dark:text-white">Mo - Fr</p>
                        <p className="text-sm dark:text-gray-300">15:00 - 22:00 Uhr</p>
                      </div>
                      <div className="bg-white/50 dark:bg-gray-800/50 p-2 rounded text-center">
                        <p className="font-medium text-sm dark:text-white">Sa - So</p>
                        <p className="text-sm dark:text-gray-300">12:00 - 20:00 Uhr</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="border-4 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg max-w-md">
                    <img 
                      src={ts3Screenshot} 
                      alt="TeamSpeak 3 Server Struktur" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* TeamSpeak Vorteile */}
            <div className="max-w-4xl mx-auto mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center dark:text-white">Warum TeamSpeak?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-tachometer-alt text-blue-600 dark:text-blue-400 text-xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-center dark:text-white">Hohe Performance</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    TeamSpeak bietet minimale Latenz und niedriger Ressourcenverbrauch für klare Kommunikation.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-lock text-green-600 dark:text-green-400 text-xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-center dark:text-white">Sicherheit</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    Verschlüsselte Verbindungen und robuste Berechtigungssysteme für sicheren Datenaustausch.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-users-cog text-purple-600 dark:text-purple-400 text-xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-center dark:text-white">Anpassbarkeit</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    Umfangreiche Anpassungsoptionen für Kanäle, Berechtigungen und Server-Einstellungen.
                  </p>
                </div>
              </div>
            </div>
            
            {/* TeamSpeak Download */}
            <div className="max-w-lg mx-auto mt-12 bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md text-center">
              <h3 className="text-xl font-bold mb-3 dark:text-white">Haben Sie TeamSpeak noch nicht installiert?</h3>
              <p className="text-sm mb-4 dark:text-gray-300 text-gray-600">
                Laden Sie den offiziellen TeamSpeak 3 Client herunter, um sich mit unserem Server zu verbinden:
              </p>
              <a 
                href="https://www.teamspeak.com/de/downloads/" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200 font-medium py-3 px-5 rounded-lg transition"
              >
                <i className="fas fa-download mr-2"></i>
                TeamSpeak 3 herunterladen
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer year={currentYear} />
    </div>
  );
}