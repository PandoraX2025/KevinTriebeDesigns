import { useState } from 'react';

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  content: string;
  image?: string; // Optional Kundenbild
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Max Mustermann",
    role: "GTA RP Server-Besitzer",
    content: "Die Zusammenarbeit mit FD Developments war ausgezeichnet. Das Team hat für unseren Rollenspiel-Server ein maßgeschneidertes HUD-System entwickelt, das alle unsere Anforderungen erfüllt und bei unseren Spielern sehr gut ankommt. Besonders beeindruckend war die schnelle Reaktionszeit und die Bereitschaft, auf alle unsere Wünsche einzugehen."
  },
  {
    id: 2,
    name: "Laura Schmidt",
    role: "Startup-Gründerin",
    content: "Kevin hat für mein Startup eine beeindruckende Webseite entwickelt. Das moderne Design und die Benutzerfreundlichkeit haben unsere Erwartungen übertroffen. Was mich besonders beeindruckt hat, war die Liebe zum Detail und die Fähigkeit, unsere Markenidentität perfekt auf die digitale Plattform zu übertragen."
  },
  {
    id: 3,
    name: "Thomas Weber",
    role: "Community Manager",
    content: "Der Discord-Bot, den FD Developments für unsere Gaming-Community programmiert hat, ist ein echter Game-Changer. Die Integration aller gewünschten Funktionen sowie die zuverlässige Performance haben uns überzeugt. Die technische Unterstützung und Wartung sind ebenfalls erstklassig."
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Navigiere zum nächsten Testimonial
  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  // Navigiere zum vorherigen Testimonial
  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Was unsere Kunden sagen</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            {/* Navigations-Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/10 hover:bg-primary/20 rounded-full p-2 text-primary transition-colors"
              aria-label="Vorheriges Testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/10 hover:bg-primary/20 rounded-full p-2 text-primary transition-colors"
              aria-label="Nächstes Testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Anführungszeichen-Symbol */}
            <div className="text-primary opacity-20 text-6xl font-serif absolute top-4 left-6">"</div>

            {/* Testimonial-Inhalt */}
            <div className="pt-6 px-8">
              <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-6">
                {testimonials[activeIndex].content}
              </blockquote>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 text-xl font-bold">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonials[activeIndex].name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonials[activeIndex].role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Indikator für aktives Testimonial */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Gehe zu Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}