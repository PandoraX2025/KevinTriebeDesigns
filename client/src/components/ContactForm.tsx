import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name muss mindestens 2 Zeichen lang sein" }),
  email: z.string().email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein" }),
  subject: z.string().min(3, { message: "Betreff muss mindestens 3 Zeichen lang sein" }),
  message: z.string().min(10, { message: "Nachricht muss mindestens 10 Zeichen lang sein" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    
    try {
      // Direkt zum E-Mail-Client weiterleiten
      const subject = encodeURIComponent(values.subject);
      const body = encodeURIComponent(`Name: ${values.name}\nE-Mail: ${values.email}\n\nNachricht:\n${values.message}`);
      const mailtoLink = `mailto:kevintriebe2025@gmail.com?subject=${subject}&body=${body}`;
      
      window.open(mailtoLink, '_blank');
      
      toast({
        title: "Fertig!",
        description: "Das E-Mail-Programm sollte sich öffnen. Bitte senden Sie Ihre Nachricht von dort aus.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Es gab ein Problem. Bitte senden Sie eine E-Mail an kevintriebe2025@gmail.com.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium dark:text-gray-300 text-gray-700">Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Ihr Name" 
                  {...field}
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium dark:text-gray-300 text-gray-700">E-Mail</FormLabel>
              <FormControl>
                <Input 
                  placeholder="ihre-email@beispiel.de" 
                  {...field}
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium dark:text-gray-300 text-gray-700">Betreff</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Betreff Ihrer Nachricht" 
                  {...field}
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium dark:text-gray-300 text-gray-700">Nachricht</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Ihre Nachricht..." 
                  {...field}
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition"
        >
          {isSubmitting ? "E-Mail wird vorbereitet..." : "E-Mail öffnen"}
        </Button>
      </form>
    </Form>
  );
}
