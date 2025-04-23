import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import kiLogo from '../assets/ki-logo.png';

export default function AiPage() {
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
                KI-Entwicklung
              </h1>
              <p className="text-base md:text-lg dark:text-gray-300 text-gray-600 mb-8">
                Erfahren Sie, wie wir künstliche Intelligenz nutzen, um bessere 
                Ergebnisse zu erzielen und unsere Projekte zu optimieren.
              </p>
            </div>
          </div>
        </section>

        {/* KI/AI Section */}
        <section className="py-12 md:py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src={kiLogo}
                    alt="Künstliche Intelligenz" 
                    className="w-full max-w-xs md:max-w-md mx-auto"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 md:mb-6 dark:text-white">
                    KI-gestützte Entwicklung
                  </h2>
                  <p className="text-base md:text-lg mb-4 dark:text-gray-300 text-gray-600">
                    Wir nutzen moderne KI-Tools und -Technologien, um effizienter zu arbeiten und bessere Ergebnisse zu erzielen. Künstliche Intelligenz unterstützt uns in verschiedenen Phasen unserer Projektentwicklung.
                  </p>
                  <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 md:p-4 rounded-lg">
                      <h3 className="font-bold mb-1 md:mb-2 text-lg md:text-xl dark:text-white">Warum wir KI nutzen</h3>
                      <p className="text-sm md:text-base dark:text-gray-300 text-gray-600">
                        Künstliche Intelligenz ermöglicht uns, repetitive Aufgaben zu automatisieren, Code schneller zu schreiben, kreative Designs zu generieren und komplexe Probleme effizienter zu lösen - so können wir uns auf den kreativen Prozess und individuelle Kundenbedürfnisse konzentrieren.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 md:p-4 rounded-lg">
                      <h3 className="font-bold mb-1 md:mb-2 text-lg md:text-xl dark:text-white">Unsere KI-Tools</h3>
                      <ul className="list-disc pl-4 md:pl-5 dark:text-gray-300 text-gray-600 space-y-0.5 md:space-y-1 text-sm md:text-base">
                        <li><span className="font-medium">Replit</span> - für kollaborative Softwareentwicklung</li>
                        <li><span className="font-medium">ChatGPT</span> - für Codeoptimierung und kreative Inhalte</li>
                        <li><span className="font-medium">Google AI Studio</span> - für spezialisierte Aufgaben</li>
                        <li><span className="font-medium">Bolt</span> - für schnelle Prototypentwicklung</li>
                        <li><span className="font-medium">Claude</span> - für komplexe Analysen und Textgenerierung</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm italic dark:text-gray-400 text-gray-500">
                    Wir setzen KI als Unterstützungswerkzeug ein - die kreative Leitung, Qualitätskontrolle und persönliche Betreuung bleiben immer in menschlicher Hand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI Capabilities */}
        <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6 md:mb-8 text-center dark:text-white">
                Unsere KI-Fähigkeiten
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-code text-blue-600 dark:text-blue-400 text-xl"></i>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-white">Code-Generierung</h3>
                  <p className="text-sm md:text-base dark:text-gray-300 text-gray-600">
                    Wir nutzen KI, um boilerplate-Code zu generieren, repetitive Aufgaben zu automatisieren und komplexe Algorithmen zu optimieren. Dies beschleunigt unseren Entwicklungsprozess erheblich.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                  <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-paint-brush text-green-600 dark:text-green-400 text-xl"></i>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-white">Kreatives Design</h3>
                  <p className="text-sm md:text-base dark:text-gray-300 text-gray-600">
                    Mit KI-gestützten Designwerkzeugen können wir schneller kreative Konzepte erstellen, Bildmaterial generieren und Designs iterieren, um innovative visuelle Lösungen zu finden.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                  <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-comments text-purple-600 dark:text-purple-400 text-xl"></i>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-white">Natürliche Sprachverarbeitung</h3>
                  <p className="text-sm md:text-base dark:text-gray-300 text-gray-600">
                    Wir implementieren Chatbots, automatische Übersetzungsdienste und Textanalysen, um interaktive und personalisierte Benutzererlebnisse zu schaffen.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                  <div className="bg-amber-100 dark:bg-amber-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-cogs text-amber-600 dark:text-amber-400 text-xl"></i>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-white">Prozessoptimierung</h3>
                  <p className="text-sm md:text-base dark:text-gray-300 text-gray-600">
                    KI-Systeme helfen uns, Arbeitsabläufe zu analysieren und zu optimieren, Fehler zu erkennen und Vorschläge für Verbesserungen zu machen, um effizienter zu arbeiten.
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