import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";

export default function PortfolioPage() {
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
                Unser Portfolio
              </h1>
              <p className="text-base md:text-lg dark:text-gray-300 text-gray-600 mb-8">
                Entdecken Sie eine Auswahl unserer Projekte aus den Bereichen Webentwicklung, 
                Scripting, 3D-Design und Grafikdesign. Sehen Sie sich unsere bisherigen 
                Arbeiten an und lassen Sie sich inspirieren.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-12 md:py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Portfolio />
            </div>
          </div>
        </section>
      </main>

      <Footer year={currentYear} />
    </div>
  );
}