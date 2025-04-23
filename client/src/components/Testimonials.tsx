import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

// Definiere die Struktur eines Testimonials
interface TestimonialItem {
  id: number;
  name: string;
  email?: string;
  serviceType: string;
  content: string;
  createdAt?: string;
}

// Leeres Array für Testimonials, wenn keine von der API geladen werden können
const fallbackTestimonials: TestimonialItem[] = [];

// Schema für das Testimonial-Formular
const testimonialFormSchema = z.object({
  name: z.string().min(2, { message: "Name muss mindestens 2 Zeichen lang sein" }),
  email: z.string().email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein" }),
  serviceType: z.string().min(3, { message: "Bitte wählen Sie einen Service-Typ" }),
  content: z.string().min(10, { message: "Bewertung muss mindestens 10 Zeichen lang sein" }),
  privacyAccepted: z.boolean().refine(val => val === true, {
    message: "Sie müssen der Datenschutzerklärung zustimmen"
  })
});

type TestimonialFormValues = z.infer<typeof testimonialFormSchema>;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Hole Testimonials von der API
  const { data: testimonials = [], isLoading, isError } = useQuery({
    queryKey: ['/api/testimonials'],
    queryFn: () => fetch('/api/testimonials').then(res => res.json())
  });

  // Verwende Fallback, wenn keine Daten vorhanden sind
  const displayTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials;

  // Aktualisiere activeIndex, wenn sich die Anzahl der Testimonials ändert
  useEffect(() => {
    if (activeIndex >= displayTestimonials.length) {
      setActiveIndex(0);
    }
  }, [displayTestimonials, activeIndex]);

  // Testimonial-Form mit Validierung
  const form = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialFormSchema),
    defaultValues: {
      name: '',
      email: '',
      serviceType: '',
      content: '',
      privacyAccepted: false
    }
  });

  // Mutation für das Absenden eines neuen Testimonials
  const submitMutation = useMutation({
    mutationFn: (values: Omit<TestimonialFormValues, 'privacyAccepted'>) => {
      return apiRequest('POST', '/api/testimonials', values);
    },
    onSuccess: () => {
      toast({
        title: "Erfolgreich eingereicht",
        description: "Vielen Dank für Ihre Bewertung! Sie wird nach Überprüfung veröffentlicht.",
      });
      form.reset();
      setShowForm(false);
      // Kein Invalidieren des Caches notwendig, da neue Testimonials erst nach Genehmigung angezeigt werden
    },
    onError: (error) => {
      toast({
        title: "Fehler beim Absenden",
        description: "Es gab ein Problem beim Absenden Ihrer Bewertung. Bitte versuchen Sie es später erneut.",
        variant: "destructive"
      });
      console.error("Testimonial submission error:", error);
    }
  });

  // Handler für das Formular
  const onSubmit = (values: TestimonialFormValues) => {
    const { privacyAccepted, ...testimonialData } = values;
    submitMutation.mutate(testimonialData);
  };

  // Navigiere zum nächsten Testimonial
  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % displayTestimonials.length);
  };

  // Navigiere zum vorherigen Testimonial
  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + displayTestimonials.length) % displayTestimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Was unsere Kunden sagen</h2>
        
        {isLoading ? (
          <div className="flex justify-center">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {displayTestimonials.length > 0 ? (
              <div className="max-w-4xl mx-auto">
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                  {/* Navigations-Buttons */}
                  {displayTestimonials.length > 1 && (
                    <>
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
                    </>
                  )}

                  {/* Anführungszeichen-Symbol */}
                  <div className="text-primary opacity-20 text-6xl font-serif absolute top-4 left-6">"</div>

                  {/* Testimonial-Inhalt */}
                  <div className="pt-6 px-8">
                    <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-6">
                      {displayTestimonials[activeIndex].content}
                    </blockquote>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 text-xl font-bold">
                        {displayTestimonials[activeIndex].name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold text-gray-900 dark:text-white">{displayTestimonials[activeIndex].name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{displayTestimonials[activeIndex].serviceType}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Indikator für aktives Testimonial */}
                {displayTestimonials.length > 1 && (
                  <div className="flex justify-center mt-6 space-x-2">
                    {displayTestimonials.map((_, index) => (
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
                )}
              </div>
            ) : (
              <div className="text-center text-gray-600 dark:text-gray-400">
                Noch keine Bewertungen vorhanden. Seien Sie der Erste, der eine Bewertung abgibt!
              </div>
            )}
          </>
        )}

        {/* Button zum Einreichen einer Bewertung */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            {showForm ? 'Formular schließen' : 'Bewertung abgeben'}
          </button>
        </div>

        {/* Testimonial-Formular */}
        {showForm && (
          <div className="max-w-2xl mx-auto mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Ihre Bewertung</h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name*
                </label>
                <input
                  id="name"
                  type="text"
                  {...form.register('name')}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  E-Mail* (wird nicht veröffentlicht)
                </label>
                <input
                  id="email"
                  type="email"
                  {...form.register('email')}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Service-Typ*
                </label>
                <select
                  id="serviceType"
                  {...form.register('serviceType')}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Bitte wählen</option>
                  <option value="Webentwicklung">Webentwicklung</option>
                  <option value="Scripting">Scripting</option>
                  <option value="3D Design">3D Design</option>
                  <option value="Grafikdesign">Grafikdesign</option>
                  <option value="KI-Implementierung">KI-Implementierung</option>
                  <option value="Andere">Andere</option>
                </select>
                {form.formState.errors.serviceType && (
                  <p className="text-red-500 text-xs mt-1">{form.formState.errors.serviceType.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Ihre Bewertung*
                </label>
                <textarea
                  id="content"
                  {...form.register('content')}
                  rows={4}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                {form.formState.errors.content && (
                  <p className="text-red-500 text-xs mt-1">{form.formState.errors.content.message}</p>
                )}
              </div>

              <div className="flex items-start">
                <input
                  id="privacyAccepted"
                  type="checkbox"
                  {...form.register('privacyAccepted')}
                  className="h-4 w-4 mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="privacyAccepted" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Ich stimme zu, dass meine Daten zur Überprüfung der Bewertung gespeichert werden. Meine E-Mail-Adresse wird nicht veröffentlicht und nach drei Monaten gelöscht.*
                </label>
              </div>
              {form.formState.errors.privacyAccepted && (
                <p className="text-red-500 text-xs">{form.formState.errors.privacyAccepted.message}</p>
              )}

              <div>
                <button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitMutation.isPending ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Wird gesendet...
                    </span>
                  ) : (
                    'Bewertung abschicken'
                  )}
                </button>
              </div>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                * Pflichtfelder. Alle Bewertungen werden vor der Veröffentlichung überprüft.
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}