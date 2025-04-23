import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAdminStatus } from '@/components/Footer';
import { useLocation } from 'wouter';

interface Testimonial {
  id: number;
  name: string;
  email?: string;
  serviceType: string;
  content: string;
  approved: boolean;
  createdAt: string;
}

export default function AdminPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { toast } = useToast();
  const [location, navigate] = useLocation();
  const currentYear = new Date().getFullYear();
  const adminStatus = getAdminStatus();

  useEffect(() => {
    if (!adminStatus.isLoggedIn) {
      toast({
        title: "Zugriff verweigert",
        description: "Sie müssen sich als Administrator anmelden, um diese Seite zu sehen.",
        variant: "destructive"
      });
      navigate("/");
      return;
    }

    fetchTestimonials();
  }, [adminStatus.isLoggedIn, navigate, toast]);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/testimonials');
      if (!response.ok) {
        throw new Error('Fehler beim Laden der Testimonials');
      }
      const data = await response.json();
      setTestimonials(data);
      setError('');
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      setError('Testimonials konnten nicht geladen werden.');
      toast({
        title: "Fehler",
        description: "Testimonials konnten nicht geladen werden.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: number) => {
    try {
      const response = await fetch(`/api/admin/testimonials/${id}/approve`, {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Fehler beim Genehmigen des Testimonials');
      }
      
      toast({
        title: "Erfolg",
        description: "Testimonial wurde genehmigt",
      });
      
      // Testimonials neu laden
      fetchTestimonials();
    } catch (error) {
      console.error('Error approving testimonial:', error);
      toast({
        title: "Fehler",
        description: "Testimonial konnte nicht genehmigt werden.",
        variant: "destructive"
      });
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Möchten Sie dieses Testimonial wirklich löschen?')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/admin/testimonials/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Fehler beim Löschen des Testimonials');
      }
      
      toast({
        title: "Erfolg",
        description: "Testimonial wurde gelöscht",
      });
      
      // Testimonials neu laden
      fetchTestimonials();
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      toast({
        title: "Fehler",
        description: "Testimonial konnte nicht gelöscht werden.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="font-sans antialiased transition-colors duration-300">
      <Navbar />

      <main className="min-h-screen py-10 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold dark:text-white">
                Admin-Bereich
              </h1>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                Eingeloggt als {adminStatus.username}
              </span>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4 dark:text-white">Testimonials verwalten</h2>
              
              {loading ? (
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
                </div>
              ) : error ? (
                <div className="text-center text-red-500 dark:text-red-400 my-6">{error}</div>
              ) : testimonials.length === 0 ? (
                <div className="text-center text-gray-500 dark:text-gray-400 my-6">
                  Keine Testimonials gefunden.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Leistung
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Bewertung
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Datum
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Aktionen
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      {testimonials.map((testimonial) => (
                        <tr key={testimonial.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {testimonial.approved ? (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                Genehmigt
                              </span>
                            ) : (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                                Ausstehend
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                            {testimonial.name}
                            {testimonial.email && (
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {testimonial.email}
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.serviceType}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="max-w-xs truncate">
                              {testimonial.content}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {new Date(testimonial.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex space-x-2 justify-end">
                              {!testimonial.approved && (
                                <button
                                  onClick={() => handleApprove(testimonial.id)}
                                  className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
                                >
                                  <i className="fas fa-check"></i>
                                </button>
                              )}
                              <button
                                onClick={() => handleDelete(testimonial.id)}
                                className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer year={currentYear} />
    </div>
  );
}