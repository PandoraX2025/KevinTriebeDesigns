import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

export default function TestimonialsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="font-sans antialiased transition-colors duration-300">
      <Navbar />
      
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-center mb-8 dark:text-white">
              Kundenbewertungen
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Erfahren Sie, was unsere Kunden über unsere Dienstleistungen sagen. Wir sind stolz auf unsere Arbeit und freuen uns über jedes Feedback.
            </p>
            
            {/* Testimonials Komponente hier einfügen */}
            <Testimonials />
          </div>
        </div>
      </main>
      
      <Footer year={currentYear} />
    </div>
  );
}