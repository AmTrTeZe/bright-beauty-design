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
import { useLanguage } from "@/contexts/LanguageContext";

const Where = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { language, t } = useLanguage();
  const prefix = language === "en" ? "/en" : "";

  const contactSchema = z.object({
    nom: z.string().trim().min(1, t("where.form.nomRequired")).max(100),
    prenom: z.string().trim().min(1, t("where.form.prenomRequired")).max(100),
    email: z.string().trim().email(t("where.form.emailInvalid")).max(255),
    message: z.string().trim().min(1, t("where.form.messageRequired")).max(2000),
  });

  type ContactFormData = z.infer<typeof contactSchema>;
  
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
          title: t("where.form.successTitle"),
          description: t("where.form.successDesc"),
        });
        form.reset();
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      toast({
        title: t("where.form.errorTitle"),
        description: t("where.form.errorDesc"),
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
          "streetAddress": "Villa 25, rue 39, Lotissement Laymoune 2",
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

  const pdfFile = language === "en" ? "/Trademark_At_A_Glance.pdf" : "/Trademark_En_Bref.pdf";

  return (
    <>
      <SEO 
        title={t("seo.where.title")}
        description={t("seo.where.description")}
        keywords="contact, Casablanca, Abidjan, Maroc, Côte d'Ivoire, adresse, formulaire contact, TRADEMARK"
        canonicalUrl={`https://trademark.ma${prefix}/where`}
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
                              placeholder={t("where.form.nom")}
                              aria-label={t("where.form.nom")}
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
                              placeholder={t("where.form.prenom")}
                              aria-label={t("where.form.prenom")}
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
                            placeholder={t("where.form.email")}
                            aria-label={t("where.form.email")}
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
                            placeholder={t("where.form.message")}
                            aria-label={t("where.form.message")}
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
                      {isSubmitting ? t("where.form.submitting") : t("where.form.submit")}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </section>

          {/* Addresses & PDF Section */}
          <section aria-label="Nos adresses" className="gradient-trademark px-8 md:px-16 lg:px-24 py-12">
            <div className="max-w-4xl mx-auto">
              {/* TRADEMARK Title */}
              <div className="text-center mb-8">
                <h2 className="text-foreground text-xl md:text-2xl tracking-widest uppercase font-light mb-2">
                  TRADEMARK™
                </h2>
                <p className="text-foreground text-sm tracking-wider font-light">
                  Nawfel Bensari | n.bensari@tmconseil.com | +212 (0)674010101
                </p>
              </div>
              
              {/* Addresses */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <address className="text-center not-italic">
                  <h3 className="text-foreground text-sm tracking-widest uppercase font-normal mb-4">
                    {t("where.maroc")}
                  </h3>
                  <p className="text-foreground/80 text-sm leading-relaxed font-light tracking-wide">
                    Villa 25, rue 39, Lotissement Laymoune 2<br />
                    20190 Casablanca
                  </p>
                </address>
                <address className="text-center not-italic">
                  <h3 className="text-foreground text-sm tracking-widest uppercase font-normal mb-4">
                    {t("where.coteDivoire")}
                  </h3>
                  <p className="text-foreground/80 text-sm leading-relaxed font-light tracking-wide">
                    Lot 533, parcelle 222, II Plateaux Vallon<br />
                    Cocody Abidjan
                  </p>
                </address>
              </div>

              {/* PDF Download Link */}
              <div className="border-t border-foreground/20 pt-8 text-center">
                <a
                  href={pdfFile}
                  download
                  className="group inline-flex items-center gap-3 text-foreground/80 hover:text-foreground text-base tracking-widest uppercase font-light transition-colors"
                  aria-label={language === "en" ? "Download TRADEMARK Overview PDF" : "Télécharger le document TRADEMARK En Bref en PDF"}
                >
                  <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1 group-hover:animate-bounce" aria-hidden="true" />
                  {t("where.download")}
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
