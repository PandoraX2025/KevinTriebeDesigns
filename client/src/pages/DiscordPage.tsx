import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiscordWidget from "@/components/DiscordWidget";

export default function DiscordPage() {
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
                Discord Server
              </h1>
              <p className="text-base md:text-lg dark:text-gray-300 text-gray-600 mb-8">
                Treten Sie unserem Discord-Server bei für Updates, Community und schnellen Support
              </p>
            </div>
          </div>
        </section>

        {/* Discord Section */}
        <section className="py-12 md:py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-5">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-3 dark:text-white">FD Developments and Design's Server</h3>
                    <p className="dark:text-gray-300 text-gray-600 text-sm md:text-base mb-4">
                      Unser Discord-Server ist der zentrale Anlaufpunkt für unsere Community, wo wir Updates teilen, Support anbieten und uns mit unseren Kunden austauschen.
                    </p>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <a 
                      href="https://discord.gg/qEy8xf6CyV" 
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center bg-[#5865F2] hover:bg-[#4752c4] text-white font-medium py-4 px-6 rounded-lg transition text-lg"
                    >
                      <i className="fab fa-discord mr-2 text-xl"></i>
                      Discord-Server beitreten
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
                      Klicken Sie auf den Button, um direkt eine Einladung zu unserem Discord-Server zu erhalten.
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
                    <h4 className="font-semibold mb-2 dark:text-white">Was Sie auf unserem Discord finden:</h4>
                    <ul className="space-y-1 text-sm dark:text-gray-300 text-gray-600">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>
                        Support-Kanäle für schnelle Hilfe
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>
                        Projekt-Updates und Ankündigungen
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>
                        Community-Bereich für den Austausch
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>
                        Direkte Kommunikation mit unserem Team
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="h-[500px] flex justify-center">
                  <DiscordWidget 
                    serverId="1358889877562855494"
                    theme="dark" 
                    width="100%" 
                    height="100%" 
                  />
                </div>
              </div>
            </div>
            
            {/* Discord Vorteile */}
            <div className="max-w-4xl mx-auto mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center dark:text-white">Warum Discord?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
                  <div className="w-12 h-12 bg-[#5865F2]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-users text-[#5865F2] text-xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-center dark:text-white">Gemeinschaft</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    Treten Sie einer aktiven Community bei und tauschen Sie sich mit Gleichgesinnten aus.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
                  <div className="w-12 h-12 bg-[#5865F2]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-headset text-[#5865F2] text-xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-center dark:text-white">Direkter Support</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    Erhalten Sie schnellen und persönlichen Support direkt von unserem Team.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
                  <div className="w-12 h-12 bg-[#5865F2]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-bell text-[#5865F2] text-xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-center dark:text-white">Updates</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    Bleiben Sie über die neuesten Entwicklungen und Angebote auf dem Laufenden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer year={currentYear} />
    </div>
  );
}