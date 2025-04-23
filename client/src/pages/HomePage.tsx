import { useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import Portfolio from "@/components/Portfolio";
import { services } from "@/lib/constants";
import kiLogo from '../assets/ki-logo.png';

export default function HomePage() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorLink = target.closest('a[href^="#"]');
      
      if (anchorLink) {
        const href = anchorLink.getAttribute('href');
        
        if (href && href !== '#') {
          e.preventDefault();
          
          const targetElement = document.querySelector(href);
          
          if (targetElement) {
            window.scrollTo({
              top: (targetElement as HTMLElement).offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div className="font-sans antialiased transition-colors duration-300">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="home" className="py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 dark:from-blue-900/20 dark:to-indigo-900/20 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                FD Developments and Design
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 dark:text-gray-300 text-gray-700">
                Moderne Web-Entwicklung und Design-Lösungen für Ihre digitalen Projekte
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <a href="#services" className="bg-primary hover:bg-blue-600 text-white font-medium py-2.5 md:py-3 px-5 md:px-6 rounded-lg transition text-sm md:text-base">
                  Unsere Leistungen
                </a>
                <a href="#contact" className="bg-white dark:bg-dark-card hover:bg-gray-100 dark:hover:bg-gray-800 text-primary border border-primary py-2.5 md:py-3 px-5 md:px-6 rounded-lg transition text-sm md:text-base">
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Unsere Leistungen</h2>
              <p className="text-lg max-w-2xl mx-auto dark:text-gray-300 text-gray-600">
                Wir bieten eine breite Palette an Entwicklungs- und Design-Dienstleistungen an
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* KI/AI Section */}
        <section id="ai" className="py-12 md:py-16 bg-white dark:bg-gray-800">
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

        {/* Portfolio Section */}
        <section id="portfolio" className="py-12 md:py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 md:mb-4 dark:text-white">Unser Portfolio</h2>
              <p className="text-base md:text-lg max-w-2xl mx-auto dark:text-gray-300 text-gray-600">
                Entdecken Sie eine Auswahl unserer Projekte aus den Bereichen Webentwicklung, Scripting, 3D-Design und Grafikdesign
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <Portfolio />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 md:mb-4 dark:text-white">Über uns</h2>
                <p className="text-base md:text-lg max-w-2xl mx-auto dark:text-gray-300 text-gray-600">
                  Ein kleines Team mit großen Ideen und der Leidenschaft, digitale Projekte zum Leben zu erwecken
                </p>
              </div>

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
                    <ul className="space-y-2 dark:text-gray-300 text-gray-600 text-sm md:text-base">
                      <li className="flex items-center">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full text-white flex items-center justify-center mr-2 md:mr-3">
                          <span className="font-bold text-xs md:text-sm">KT</span>
                        </div>
                        Kevin Triebe - Inhaber & Lead Developer
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-secondary rounded-full text-white flex items-center justify-center mr-2 md:mr-3">
                          <span className="font-bold text-xs md:text-sm">WS</span>
                        </div>
                        Winter Scripts - Designer & Grafiker
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 md:mb-4 dark:text-white">Kontakt</h2>
              <p className="text-base md:text-lg max-w-2xl mx-auto dark:text-gray-300 text-gray-600">
                Haben Sie Fragen oder möchten Sie mit uns zusammenarbeiten? Kontaktieren Sie uns über einen der folgenden Wege.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 dark:text-white">Angebot einholen</h3>
                <div className="space-y-6">
                  <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                    Sind Sie an einer Zusammenarbeit interessiert? Klicken Sie unten, um direkt ein Angebot anzufordern:
                  </div>
                  <a 
                    href="mailto:kevintriebe2025@gmail.com?subject=Anfrage%20für%20ein%20Angebot&body=Sehr%20geehrtes%20FD%20Developments%20and%20Design%20Team,%0A%0AIch%20interessiere%20mich%20für%20folgende%20Dienstleistung(en):%0A%0A-%20%0A%0AMeine%20Projektdetails:%0A%0A-%20%0A%0AVielen%20Dank%20für%20Ihre%20Zeit.%0A%0AMit%20freundlichen%20Grüßen,%0A%0AIhr%20Name:%0AKontakt:%0A" 
                    className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition flex items-center justify-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    Angebot einholen
                  </a>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Durch Klicken öffnet sich Ihr E-Mail-Programm mit einer vorbereiteten Anfrage.
                  </p>
                </div>
              </div>

              {/* Contact Info & Social Links */}
              <div className="space-y-6 md:space-y-8">
                {/* Contact Info */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 dark:text-white">Kontaktdaten</h3>
                  <ul className="space-y-3 md:space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 md:p-3 rounded-lg mr-3 md:mr-4 text-primary">
                        <i className="fas fa-envelope text-base md:text-lg"></i>
                      </div>
                      <div>
                        <span className="block font-medium mb-1 dark:text-gray-300 text-gray-700 text-sm md:text-base">E-Mail</span>
                        <a href="mailto:kevintriebe2025@gmail.com" className="text-primary hover:underline text-sm md:text-base">kevintriebe2025@gmail.com</a>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 md:p-3 rounded-lg mr-3 md:mr-4 text-indigo-500">
                        <i className="fab fa-discord text-base md:text-lg"></i>
                      </div>
                      <div>
                        <span className="block font-medium mb-1 dark:text-gray-300 text-gray-700 text-sm md:text-base">Discord</span>
                        <a href="https://discord.gg/qEy8xf6CyV" target="_blank" rel="noreferrer" className="text-indigo-500 hover:underline text-sm md:text-base">FD Developments and Design's Server</a>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 dark:bg-green-900/30 p-2 md:p-3 rounded-lg mr-3 md:mr-4 text-green-600">
                        <i className="fas fa-globe text-base md:text-lg"></i>
                      </div>
                      <div>
                        <span className="block font-medium mb-1 dark:text-gray-300 text-gray-700 text-sm md:text-base">Webseite</span>
                        <a href="https://ktriebe.xyz" target="_blank" rel="noreferrer" className="text-green-600 hover:underline text-sm md:text-base">ktriebe.xyz</a>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Social Links */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 dark:text-white">Folgen Sie uns</h3>
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <a href="https://discord.gg/qEy8xf6CyV" target="_blank" rel="noreferrer" className="flex items-center p-3 md:p-4 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 rounded-lg transition group">
                      <i className="fab fa-discord text-[#5865F2] text-xl md:text-2xl mr-3 md:mr-4 group-hover:scale-110 transition"></i>
                      <span className="font-medium dark:text-gray-300 text-gray-700 text-sm md:text-base">Discord</span>
                    </a>
                    <a href="https://ktriebe.xyz" target="_blank" rel="noreferrer" className="flex items-center p-3 md:p-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition group">
                      <i className="fas fa-globe text-gray-700 dark:text-gray-300 text-xl md:text-2xl mr-3 md:mr-4 group-hover:scale-110 transition"></i>
                      <span className="font-medium dark:text-gray-300 text-gray-700 text-sm md:text-base">Website</span>
                    </a>
                  </div>
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
