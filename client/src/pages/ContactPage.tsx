import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
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
                Kontakt
              </h1>
              <p className="text-base md:text-lg dark:text-gray-300 text-gray-600 mb-8">
                Haben Sie Fragen oder möchten Sie mit uns zusammenarbeiten? Kontaktieren Sie uns über einen der folgenden Wege.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
              {/* Contact Form */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md p-4 md:p-6">
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
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md p-4 md:p-6">
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
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-4 dark:text-white">Unterstützung und Support</h3>
                  <p className="text-sm md:text-base mb-4 dark:text-gray-300 text-gray-600">
                    Für schnelle Unterstützung können Sie auch unsere Support-Kanäle besuchen:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <a 
                      href="/discord" 
                      className="flex flex-col items-center p-3 rounded-lg bg-[#5865F2]/10 hover:bg-[#5865F2]/20 transition text-[#5865F2] border border-[#5865F2]/20"
                    >
                      <i className="fab fa-discord text-xl md:text-2xl mb-2"></i>
                      <span className="text-sm font-medium">Discord Server</span>
                      <span className="text-xs">Live Support</span>
                    </a>
                    <a 
                      href="/teamspeak" 
                      className="flex flex-col items-center p-3 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 transition text-blue-600 border border-blue-600/20"
                    >
                      <i className="fas fa-headset text-xl md:text-2xl mb-2"></i>
                      <span className="text-sm font-medium">TeamSpeak</span>
                      <span className="text-xs">Sprach-Support</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6 text-center dark:text-white">
                Häufig gestellte Fragen
              </h2>
              
              <div className="space-y-4 mt-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                  <h3 className="font-bold text-lg mb-2 dark:text-white">Wie lange dauert die Entwicklung einer Website?</h3>
                  <p className="dark:text-gray-300 text-gray-600 text-sm md:text-base">
                    Die Entwicklungszeit variiert je nach Komplexität und Umfang des Projekts. Einfache Webseiten können innerhalb einer Woche fertiggestellt werden, während komplexere Projekte mehrere Wochen in Anspruch nehmen können.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                  <h3 className="font-bold text-lg mb-2 dark:text-white">Welche Zahlungsmethoden akzeptieren Sie?</h3>
                  <p className="dark:text-gray-300 text-gray-600 text-sm md:text-base">
                    Wir akzeptieren Überweisungen, PayPal und Kreditkartenzahlungen. Bei größeren Projekten arbeiten wir in der Regel mit Anzahlungen und weiteren Zahlungen nach Meilensteinen.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                  <h3 className="font-bold text-lg mb-2 dark:text-white">Bieten Sie Wartung und Support nach Projektabschluss an?</h3>
                  <p className="dark:text-gray-300 text-gray-600 text-sm md:text-base">
                    Ja, wir bieten Wartungspakete und fortlaufenden Support für alle unsere Projekte an. Details dazu besprechen wir gerne individuell entsprechend Ihren Anforderungen.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                  <h3 className="font-bold text-lg mb-2 dark:text-white">Wie läuft der Projektablauf typischerweise ab?</h3>
                  <p className="dark:text-gray-300 text-gray-600 text-sm md:text-base">
                    Unser typischer Projektablauf umfasst: Anforderungsanalyse, Konzeptentwicklung, Design, Entwicklung, Testen und Überprüfen, Bereitstellung und schließlich Support und Wartung. Wir halten Sie während des gesamten Prozesses auf dem Laufenden.
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