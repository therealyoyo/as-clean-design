/**
 * Contact page — Quote form with Zod validation, WhatsApp button, phone, map placeholder.
 */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageCircle, Phone, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { getAllServices } from "@/data/services";
import HeroSection from "@/components/sections/HeroSection";

const allServices = getAllServices();

const formSchema = z.object({
  nom: z.string().min(2, "Ce champ est requis (min. 2 caractères)"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(9, "Numéro invalide (min. 9 chiffres)"),
  service: z.string().min(1, "Ce champ est requis"),
  adresse: z.string().min(1, "Ce champ est requis"),
  date: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      nom: "",
      email: "",
      telephone: "",
      service: "",
      adresse: "",
      date: "",
      message: "",
    },
  });

  const onSubmit = (_data: FormValues) => {
    // No real email sent — just show success
    setSubmitted(true);
  };

  return (
    <>
      <HeroSection
        title="Contactez-nous"
        subtitle="Demandez un devis gratuit ou posez-nous vos questions."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600"
      />

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Demande de devis</h2>

              {submitted ? (
                <Alert className="border-accent bg-secondary">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <AlertDescription className="text-foreground ml-2">
                    Votre demande a bien été envoyée ! Nous vous recontactons très prochainement.
                  </AlertDescription>
                </Alert>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="nom"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom complet *</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre nom complet" {...field} />
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
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="votre@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="telephone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Téléphone *</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+32 000 000 000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service souhaité *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionnez un service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {allServices.map((s) => (
                                <SelectItem
                                  key={`${s.category.slug}-${s.service.slug}`}
                                  value={`${s.category.title} — ${s.service.title}`}
                                >
                                  {s.category.title} — {s.service.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="adresse"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Adresse *</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre adresse à Bruxelles" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date souhaitée</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Décrivez vos besoins..." rows={4} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
                      disabled={!form.formState.isValid}
                    >
                      Envoyer la demande
                    </Button>
                  </form>
                </Form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* WhatsApp */}
              <div>
                <a
                  href="https://wa.me/32000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-border rounded-lg hover:border-accent transition-colors"
                >
                  <MessageCircle className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-medium text-primary">Nous contacter sur WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Réponse rapide garantie</p>
                  </div>
                </a>
              </div>

              {/* Phone */}
              <div>
                <a
                  href="tel:+32000000000"
                  className="flex items-center gap-3 p-4 border border-border rounded-lg hover:border-accent transition-colors"
                >
                  <Phone className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-medium text-primary">Appelez-nous</p>
                    <p className="text-sm text-muted-foreground">+32 (0)00 000 000</p>
                  </div>
                </a>
              </div>

              {/* Map placeholder */}
              <div className="bg-secondary border border-border rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-10 w-10 mx-auto mb-2" />
                  <p className="text-sm">Carte de Bruxelles</p>
                  <p className="text-xs">(Placeholder pour Google Maps)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
