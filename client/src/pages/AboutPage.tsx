import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/SkillsSection";

export default function AboutPage() {
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
                Über Uns
              </h1>
              <p className="text-base md:text-lg dark:text-gray-300 text-gray-600 mb-8">
                Lernen Sie unser Team kennen und erfahren Sie mehr über unsere Geschichte,
                Werte und Vision für die digitale Zukunft.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="aspect-square rounded-xl overflow-hidden mb-4 md:mb-6 bg-gray-200 dark:bg-gray-800 shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&w=800&q=80" 
                      alt="Team FD Developments" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-center space-x-3 md:space-x-4">
                    <a href="https://discord.gg/qEy8xf6CyV" target="_blank" rel="noreferrer" className="bg-[#5865F2] hover:bg-opacity-90 text-white p-2 md:p-3 rounded-lg transition">
                      <i className="fab fa-discord text-lg md:text-xl"></i>
                    </a>
                    <a href="https://ktriebe.xyz" target="_blank" rel="noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white p-2 md:p-3 rounded-lg transition">
                      <i className="fas fa-globe text-lg md:text-xl"></i>
                    </a>
                    <a href="mailto:kevintriebe2025@gmail.com" className="bg-primary hover:bg-blue-600 text-white p-2 md:p-3 rounded-lg transition">
                      <i className="fas fa-envelope text-lg md:text-xl"></i>
                    </a>
                  </div>
                </div>
                
                <div className="order-1 md:order-2">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 dark:text-white">FD Developments and Design</h3>
                  <p className="text-sm md:text-base mb-3 md:mb-4 dark:text-gray-300 text-gray-600">
                    Wir sind ein junges, dynamisches Team bestehend aus einem Entwickler und einem Designer mit Sitz in Deutschland, die sich auf die Erstellung moderner Webanwendungen, Skripte und Designs spezialisiert haben.
                  </p>
                  <p className="text-sm md:text-base mb-3 md:mb-4 dark:text-gray-300 text-gray-600">
                    Unter der Leitung von Kevin Triebe (Entwickler) und mit Winter Scripts (Designer & Grafiker) an unserer Seite bieten wir maßgeschneiderte Lösungen für verschiedene digitale Bedürfnisse, von einfachen Websites bis hin zu komplexen Web-Anwendungen, Lua-Scripting für FiveM/GTA, Grafikdesign und 3D-Design mit Blender.
                  </p>
                  <p className="text-sm md:text-base mb-4 md:mb-6 dark:text-gray-300 text-gray-600">
                    Unser Ziel ist es, qualitativ hochwertige und kreative Lösungen zu liefern, die die Erwartungen unserer Kunden übertreffen und ihre digitale Präsenz auf die nächste Ebene bringen.
                  </p>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 md:p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2 text-sm md:text-base">Team-Mitglieder:</h4>
                    <ul className="space-y-2">
                      <li className="text-sm md:text-base flex items-start">
                        <i className="fas fa-user-circle text-primary mr-2 mt-0.5"></i>
                        <div>
                          <span className="font-medium dark:text-white">Kevin Triebe</span>
                          <span className="text-gray-600 dark:text-gray-300 block text-xs md:text-sm">Gründer & Entwickler</span>
                        </div>
                      </li>
                      <li className="text-sm md:text-base flex items-start">
                        <i className="fas fa-user-circle text-primary mr-2 mt-0.5"></i>
                        <div>
                          <span className="font-medium dark:text-white">Winter Scripts</span>
                          <span className="text-gray-600 dark:text-gray-300 block text-xs md:text-sm">Designer & Grafiker</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 md:mb-4 dark:text-white">
                Unsere Vision
              </h2>
              <p className="text-base md:text-lg dark:text-gray-300 text-gray-600">
                Was uns antreibt und wie wir arbeiten
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 md:p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4 text-3xl">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-white">Innovation</h3>
                <p className="text-sm md:text-base dark:text-gray-300 text-gray-600">
                  Wir streben danach, neue Technologien und kreative Ansätze zu nutzen, um innovative Lösungen für unsere Kunden zu entwickeln.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 md:p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4 text-3xl">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-white">Kundenzufriedenheit</h3>
                <p className="text-sm md:text-base dark:text-gray-300 text-gray-600">
                  Die Zufriedenheit unserer Kunden steht für uns an erster Stelle. Wir arbeiten eng mit ihnen zusammen, um ihre Visionen zu verwirklichen.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 md:p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4 text-3xl">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-white">Qualität</h3>
                <p className="text-sm md:text-base dark:text-gray-300 text-gray-600">
                  Wir legen großen Wert auf hochwertige Arbeit und setzen hohe Standards für alle unsere Projekte, um herausragende Ergebnisse zu erzielen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12 md:py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 md:mb-4 dark:text-white">Technische Kenntnisse</h2>
              <p className="text-base md:text-lg max-w-2xl mx-auto dark:text-gray-300 text-gray-600">
                Unsere Expertise in verschiedenen Technologien und Tools
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <SkillsSection />
            </div>
          </div>
        </section>
      </main>

      <Footer year={currentYear} />
    </div>
  );
}