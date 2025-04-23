import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/constants";

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="font-sans antialiased transition-colors duration-300">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-24 relative overflow-hidden">
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
                <Link href="/services" className="bg-primary hover:bg-blue-600 text-white font-medium py-2.5 md:py-3 px-5 md:px-6 rounded-lg transition text-sm md:text-base">
                  Unsere Leistungen
                </Link>
                <Link href="/contact" className="bg-white dark:bg-dark-card hover:bg-gray-100 dark:hover:bg-gray-800 text-primary border border-primary py-2.5 md:py-3 px-5 md:px-6 rounded-lg transition text-sm md:text-base">
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Unsere Leistungen</h2>
              <p className="text-lg max-w-2xl mx-auto dark:text-gray-300 text-gray-600 mb-6">
                Wir bieten eine breite Palette an Entwicklungs- und Design-Dienstleistungen an
              </p>
              <Link 
                href="/services" 
                className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
              >
                Alle Leistungen ansehen
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 3).map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 md:py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 md:mb-4 dark:text-white">
                Warum FD Developments wählen?
              </h2>
              <p className="text-base md:text-lg max-w-2xl mx-auto dark:text-gray-300 text-gray-600">
                Ein Team mit Leidenschaft für Technologie und modernes Design
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-code text-blue-600 dark:text-blue-400 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-2 dark:text-white">Moderne Technologien</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Wir arbeiten mit den neuesten Frameworks und Tools, um zeitgemäße und zukunftssichere Lösungen zu schaffen.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-user-friends text-green-600 dark:text-green-400 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-2 dark:text-white">Persönliche Betreuung</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Direkter Kontakt zum Entwickler- und Design-Team, keine Umwege durch mehrere Abteilungen.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-rocket text-purple-600 dark:text-purple-400 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-2 dark:text-white">Schnelle Umsetzung</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Effiziente Arbeitsabläufe und moderne Entwicklungsmethoden ermöglichen schnelle Projektrealisierung.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-lightbulb text-yellow-600 dark:text-yellow-400 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-2 dark:text-white">Kreative Lösungen</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Wir denken außerhalb üblicher Muster und finden innovative Ansätze für Ihre Anforderungen.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-robot text-red-600 dark:text-red-400 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-2 dark:text-white">KI-Integration</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Nutzen Sie die Vorteile moderner KI-Technologien in Ihren Projekten für mehr Effizienz und Innovation.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-mobile-alt text-indigo-600 dark:text-indigo-400 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-2 dark:text-white">Responsives Design</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Alle unsere Lösungen sind für alle Geräte optimiert - vom Desktop bis zum Smartphone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-600/5 dark:from-blue-900/10 dark:to-indigo-900/10 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 md:mb-6 dark:text-white">
                Bereit für Ihr nächstes Projekt?
              </h2>
              <p className="text-base md:text-lg mb-6 md:mb-8 dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
                Kontaktieren Sie uns noch heute, um zu besprechen, wie wir Ihre Ideen zum Leben erwecken können. Wir freuen uns darauf, mit Ihnen zusammenzuarbeiten!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition"
                >
                  Kontakt aufnehmen
                </Link>
                <Link 
                  href="/portfolio" 
                  className="bg-white dark:bg-dark-card hover:bg-gray-100 dark:hover:bg-gray-800 text-primary border border-primary py-3 px-6 rounded-lg transition"
                >
                  Portfolio ansehen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Communication Channels */}
        <section className="py-12 md:py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 md:mb-4 dark:text-white">
                Bleiben Sie in Verbindung
              </h2>
              <p className="text-base md:text-lg max-w-2xl mx-auto dark:text-gray-300 text-gray-600">
                Verschiedene Wege, um mit uns in Kontakt zu treten
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-[#5865F2]/20 rounded-full flex items-center justify-center mb-4">
                  <i className="fab fa-discord text-[#5865F2] text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-2 dark:text-white">Discord</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Treten Sie unserem Discord-Server bei für schnellen Support und Community-Austausch.
                </p>
                <Link 
                  href="/discord" 
                  className="mt-auto bg-[#5865F2] hover:bg-[#4752c4] text-white font-medium py-2 px-4 rounded-lg transition text-sm"
                >
                  Zum Discord-Server
                </Link>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-headset text-blue-600 dark:text-blue-400 text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-2 dark:text-white">TeamSpeak</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Direktes Gespräch über unseren TeamSpeak-Server für persönliche Beratung.
                </p>
                <Link 
                  href="/teamspeak" 
                  className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition text-sm"
                >
                  TeamSpeak-Daten
                </Link>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-envelope text-green-600 dark:text-green-400 text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-2 dark:text-white">E-Mail</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Senden Sie uns eine detaillierte Anfrage für Ihr Projekt per E-Mail.
                </p>
                <Link 
                  href="/contact" 
                  className="mt-auto bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition text-sm"
                >
                  Kontaktformular
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer year={currentYear} />
    </div>
  );
}