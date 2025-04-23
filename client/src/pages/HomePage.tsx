import { useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { services } from "@/lib/constants";

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
      <ThemeToggle />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="home" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 dark:from-blue-900/20 dark:to-indigo-900/20 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                FD Developments and Design
              </h1>
              <p className="text-xl md:text-2xl mb-8 dark:text-gray-300 text-gray-700">
                Moderne Web-Entwicklung und Design-Lösungen für Ihre digitalen Projekte
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#services" className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition">
                  Unsere Leistungen
                </a>
                <a href="#contact" className="bg-white dark:bg-dark-card hover:bg-gray-100 dark:hover:bg-gray-800 text-primary border border-primary py-3 px-6 rounded-lg transition">
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

        {/* About Section */}
        <section id="about" className="py-16 bg-white dark:bg-dark-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Über uns</h2>
                <p className="text-lg max-w-2xl mx-auto dark:text-gray-300 text-gray-600">
                  Ein kleines Team mit großen Ideen und der Leidenschaft, digitale Projekte zum Leben zu erwecken
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="aspect-square rounded-xl overflow-hidden mb-6 bg-gray-200 dark:bg-gray-800 shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&w=800&q=80" 
                      alt="Team FD Developments" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-center space-x-4">
                    <a href="https://discord.gg/qEy8xf6CyV" target="_blank" rel="noreferrer" className="bg-[#5865F2] hover:bg-opacity-90 text-white p-3 rounded-lg transition">
                      <i className="fab fa-discord text-xl"></i>
                    </a>
                    <a href="https://ktriebe.xyz" target="_blank" rel="noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg transition">
                      <i className="fas fa-globe text-xl"></i>
                    </a>
                    <a href="mailto:kevintriebe2025@gmail.com" className="bg-primary hover:bg-blue-600 text-white p-3 rounded-lg transition">
                      <i className="fas fa-envelope text-xl"></i>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">FD Developments and Design</h3>
                  <p className="mb-4 dark:text-gray-300 text-gray-600">
                    Wir sind ein junges, dynamisches Team von zwei Entwicklern mit Sitz in Deutschland, die sich auf die Erstellung moderner Webanwendungen, Skripte und Designs spezialisiert haben.
                  </p>
                  <p className="mb-4 dark:text-gray-300 text-gray-600">
                    Unter der Leitung von Kevin Triebe bieten wir maßgeschneiderte Lösungen für verschiedene digitale Bedürfnisse, von einfachen Websites bis hin zu komplexen Web-Anwendungen, Lua-Scripting für FiveM/GTA, Python-Discord-Bots und 3D-Design mit Blender.
                  </p>
                  <p className="mb-6 dark:text-gray-300 text-gray-600">
                    Unser Ziel ist es, qualitativ hochwertige und kreative Lösungen zu liefern, die die Erwartungen unserer Kunden übertreffen und ihre digitale Präsenz auf die nächste Ebene bringen.
                  </p>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Team-Mitglieder:</h4>
                    <ul className="space-y-2 dark:text-gray-300 text-gray-600">
                      <li className="flex items-center">
                        <div className="w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center mr-3">
                          <span className="font-bold">KT</span>
                        </div>
                        Kevin Triebe - Inhaber & Lead Developer
                      </li>
                      <li className="flex items-center">
                        <div className="w-8 h-8 bg-secondary rounded-full text-white flex items-center justify-center mr-3">
                          <span className="font-bold">WS</span>
                        </div>
                        Winter Scripts - Partner Developer
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Kontakt</h2>
              <p className="text-lg max-w-2xl mx-auto dark:text-gray-300 text-gray-600">
                Haben Sie Fragen oder möchten Sie mit uns zusammenarbeiten? Kontaktieren Sie uns über einen der folgenden Wege.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-6 dark:text-white">Nachricht senden</h3>
                <ContactForm />
              </div>

              {/* Contact Info & Social Links */}
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-6 dark:text-white">Kontaktdaten</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4 text-primary">
                        <i className="fas fa-envelope text-lg"></i>
                      </div>
                      <div>
                        <span className="block font-medium mb-1 dark:text-gray-300 text-gray-700">E-Mail</span>
                        <a href="mailto:kevintriebe2025@gmail.com" className="text-primary hover:underline">kevintriebe2025@gmail.com</a>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg mr-4 text-indigo-500">
                        <i className="fab fa-discord text-lg"></i>
                      </div>
                      <div>
                        <span className="block font-medium mb-1 dark:text-gray-300 text-gray-700">Discord</span>
                        <a href="https://discord.gg/qEy8xf6CyV" target="_blank" rel="noreferrer" className="text-indigo-500 hover:underline">FD Developments and Design's Server</a>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg mr-4 text-green-600">
                        <i className="fas fa-globe text-lg"></i>
                      </div>
                      <div>
                        <span className="block font-medium mb-1 dark:text-gray-300 text-gray-700">Webseite</span>
                        <a href="https://ktriebe.xyz" target="_blank" rel="noreferrer" className="text-green-600 hover:underline">ktriebe.xyz</a>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Social Links */}
                <div className="bg-white dark:bg-dark-card rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-6">Folgen Sie uns</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a href="https://discord.gg/qEy8xf6CyV" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 rounded-lg transition group">
                      <i className="fab fa-discord text-[#5865F2] text-2xl mr-4 group-hover:scale-110 transition"></i>
                      <span className="font-medium dark:text-gray-300 text-gray-700">Discord</span>
                    </a>
                    <a href="https://ktriebe.xyz" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition group">
                      <i className="fas fa-globe text-gray-700 dark:text-gray-300 text-2xl mr-4 group-hover:scale-110 transition"></i>
                      <span className="font-medium dark:text-gray-300 text-gray-700">Website</span>
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
