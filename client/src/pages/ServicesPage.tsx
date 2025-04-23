import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/constants";

export default function ServicesPage() {
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
                Unsere Leistungen
              </h1>
              <p className="text-base md:text-lg dark:text-gray-300 text-gray-600 mb-8">
                Entdecken Sie unsere Dienstleistungen in den Bereichen Webentwicklung, 
                Scripting, Design und KI-Entwicklung. Wir bieten maßgeschneiderte Lösungen 
                für Ihre digitalen Projekte.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer year={currentYear} />
    </div>
  );
}