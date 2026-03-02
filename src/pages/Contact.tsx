/**
 * Contact page — Quote form with Zod validation, WhatsApp button, phone, map placeholder.
 */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageCircle, Phone, MapPin, CheckCircle, ShieldCheck, Star, CalendarCheck } from "lucide-react";
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
  prenom: z.string().min(2, "Ce champ est requis (min. 2 caractères)"),
  nom: z.string().min(2, "Ce champ est requis (min. 2 caractères)"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(9, "Numéro invalide (min. 9 chiffres)"),
  service: z.string().min(1, "Ce champ est requis"),
  rue: z.string().min(1, "Ce champ est requis"),
  ville: z.string().min(1, "Ce champ est requis"),
  codePostal: z.string().min(4, "Code postal invalide"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
      service: "",
      rue: "",
      ville: "",
      codePostal: "",
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
                    {/* Prénom + Nom side by side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="prenom"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Prénom *</FormLabel>
                            <FormControl>
                              <Input placeholder="Votre prénom" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="nom"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nom *</FormLabel>
                            <FormControl>
                              <Input placeholder="Votre nom" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

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
                                  value={`${s.category.title} – ${s.service.title}`}
                                >
                                  {s.category.title} – {s.service.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Adresse de prestation */}
                    <div className="space-y-4">
                      <p className="text-sm font-medium text-foreground mb-2">Adresse de prestation</p>

                      <FormField
                        control={form.control}
                        name="rue"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Rue et numéro *</FormLabel>
                            <FormControl>
                              <Input placeholder="Ex: Rue de la Loi 42" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="ville"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ville *</FormLabel>
                              <FormControl>
                                <Input placeholder="Bruxelles" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="codePostal"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Code postal *</FormLabel>
                              <FormControl>
                                <Input placeholder="1000" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Décrivez vos besoins ou questions..." rows={4} {...field} />
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
                  href="https://wa.me/32460976545"
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
                  href="tel:+32460976545"
                  className="flex items-center gap-3 p-4 border border-border rounded-lg hover:border-accent transition-colors"
                >
                  <Phone className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-medium text-primary">Appelez-nous</p>
                    <p className="text-sm text-muted-foreground">+32 460 97 65 45</p>
                  </div>
                </a>
              </div>

              {/* Zones desservies */}
              <div>
                <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Zones desservies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Anderlecht", "Auderghem", "Beersel", "Berchem-Sainte-Agathe",
                    "Bruxelles-Ville", "Drogenbos", "Etterbeek", "Evere", "Forest",
                    "Ganshoren", "Grimbergen", "Hoeilaart", "Ixelles", "Jette",
                    "Koekelberg", "Kraainem", "Laeken", "Linkebeek", "Machelen",
                    "Molenbeek", "Overijse", "Rhode-Saint-Genèse", "Saint-Gilles",
                    "Saint-Josse-ten-Noode", "Schaerbeek", "Tervuren", "Uccle",
                    "Vilvoorde", "Watermael-Boitsfort", "Wezembeek-Oppem",
                    "Woluwe-Saint-Lambert", "Woluwe-Saint-Pierre", "Zaventem"
                  ].map((commune) => (
                    <span
                      key={commune}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-primary border border-border font-medium"
                    >
                      {commune}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pourquoi nous choisir */}
              <div>
                <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  Pourquoi nous choisir ?
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      icon: ShieldCheck,
                      title: "Équipes assurées & vérifiées",
                      desc: "Nos professionnels sont sélectionnés, vérifiés et couverts par une assurance RC professionnelle."
                    },
                    {
                      icon: Star,
                      title: "Satisfaction garantie",
                      desc: "Résultat non satisfaisant ? Nous revenons sans frais supplémentaires jusqu'à votre entière satisfaction."
                    },
                    {
                      icon: CalendarCheck,
                      title: "Flexible & disponible 7j/7",
                      desc: "Intervention ponctuelle ou contrat récurrent, nous nous adaptons à votre planning et vos besoins."
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-3 p-3 rounded-lg bg-secondary border border-border">
                        <Icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-primary">{item.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
