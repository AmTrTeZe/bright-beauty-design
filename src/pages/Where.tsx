import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InteriorHeader from "@/components/InteriorHeader";
import InteriorFooter from "@/components/InteriorFooter";
import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Download } from "lucide-react";

const contactSchema = z.object({
  nom: z.string().trim().min(1, "Le nom est requis").max(100),
  prenom: z.string().trim().min(1, "Le prénom est requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  message: z.string().trim().min(1, "Le message est requis").max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Where = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Replace with your PHP script URL
      const response = await fetch("https://votre-serveur.com/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          nom: data.nom,
          prenom: data.prenom,
          email: data.email,
          message: data.message,
        }).toString(),
      });

      if (response.ok) {
        toast({
          title: "Message envoyé",
          description: "Nous vous répondrons dans les plus brefs délais.",
        });
        form.reset();
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "TRADEMARK",
      "address": [
        {
          "@type": "PostalAddress",
          "name": "Trademark Maroc",
          "streetAddress": "Villa 25, rue 39, Lot. Laymoune 2",
          "addressLocality": "Casablanca",
          "postalCode": "20190",
          "addressCountry": "MA"
        },
        {
          "@type": "PostalAddress",
          "name": "Trademark Côte d'Ivoire",
          "streetAddress": "Lot 533, parcelle 222, II Plateaux Vallon",
          "addressLocality": "Cocody Abidjan",
          "addressCountry": "CI"
        }
      ]
    }
  };

  return (
    <>
      <SEO 
        title="Where - Information & Contact"
        description="Contactez TRADEMARK™ - Cabinet conseil en brand engineering. Bureaux à Casablanca (Maroc) et Abidjan (Côte d'Ivoire). Demandez un rendez-vous."
        keywords="contact, Casablanca, Abidjan, Maroc, Côte d'Ivoire, adresse, formulaire contact, TRADEMARK"
        canonicalUrl="https://trademark.ma/where"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen flex flex-col bg-white">
        <InteriorHeader title="WHERE" subtitle="INFORMATION" />

        {/* Main Content */}
        <main className="flex-1 pt-20">
          {/* Contact Form Section */}
          <section aria-label="Formulaire de contact" className="bg-white px-8 md:px-16 lg:px-24 py-12">
            <div className="max-w-2xl mx-auto">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nom"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="NOM"
                              aria-label="Nom"
                              className="border-0 border-b border-[hsl(200_15%_75%)] rounded-none bg-transparent px-0 py-3 text-sm tracking-wider uppercase placeholder:text-[hsl(200_15%_65%)] placeholder:font-light focus-visible:ring-0 focus-visible:border-[hsl(200_20%_59%)] focus:placeholder:opacity-0"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="prenom"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="PRÉNOM"
                              aria-label="Prénom"
                              className="border-0 border-b border-[hsl(200_15%_75%)] rounded-none bg-transparent px-0 py-3 text-sm tracking-wider uppercase placeholder:text-[hsl(200_15%_65%)] placeholder:font-light focus-visible:ring-0 focus-visible:border-[hsl(200_20%_59%)] focus:placeholder:opacity-0"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="EMAIL"
                            aria-label="Email"
                            className="border-0 border-b border-[hsl(200_15%_75%)] rounded-none bg-transparent px-0 py-3 text-sm tracking-wider uppercase placeholder:text-[hsl(200_15%_65%)] placeholder:font-light focus-visible:ring-0 focus-visible:border-[hsl(200_20%_59%)] focus:placeholder:opacity-0"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="MESSAGE"
                            aria-label="Message"
                            rows={5}
                            className="border-0 border-b border-[hsl(200_15%_75%)] rounded-none bg-transparent px-0 py-3 text-sm tracking-wider uppercase placeholder:text-[hsl(200_15%_65%)] placeholder:font-light focus-visible:ring-0 focus-visible:border-[hsl(200_20%_59%)] resize-none min-h-[120px] focus:placeholder:opacity-0"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[hsl(200_20%_59%)] hover:bg-[hsl(200_20%_50%)] text-white px-8 py-2 text-sm tracking-widest uppercase font-light rounded-none"
                    >
                      {isSubmitting ? "ENVOI..." : "ENVOYER"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </section>

          {/* Addresses & PDF Section */}
          <section aria-label="Nos adresses" className="gradient-trademark px-8 md:px-16 lg:px-24 py-12">
            <div className="max-w-4xl mx-auto">
              {/* Addresses */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <address className="text-center not-italic">
                  <h2 className="text-foreground text-sm tracking-widest uppercase font-normal mb-4">
                    TRADEMARK™ Maroc
                  </h2>
                  <p className="text-foreground/80 text-sm leading-relaxed font-light tracking-wide">
                    Villa 25, rue 39, Lot. Laymoune 2<br />
                    20190 Casablanca
                  </p>
                </address>
                <address className="text-center not-italic">
                  <h2 className="text-foreground text-sm tracking-widest uppercase font-normal mb-4">
                    TRADEMARK™ Côte d'Ivoire
                  </h2>
                  <p className="text-foreground/80 text-sm leading-relaxed font-light tracking-wide">
                    Lot 533, parcelle 222, II Plateaux Vallon<br />
                    Cocody Abidjan
                  </p>
                </address>
              </div>

              {/* PDF Download Link */}
              <div className="border-t border-foreground/20 pt-8 text-center">
                <a
                  href="/Trademark_En_Bref.pdf"
                  download
                  className="group inline-flex items-center gap-3 text-foreground/80 hover:text-foreground text-base tracking-widest uppercase font-light transition-colors"
                  aria-label="Télécharger le document TRADEMARK En Bref en PDF"
                >
                  <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1 group-hover:animate-bounce" aria-hidden="true" />
                  TRADEMARK™ EN BREF
                </a>
              </div>
            </div>
          </section>
        </main>

        <InteriorFooter />
      </div>
    </>
  );
};

export default Where;
