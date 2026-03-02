/**
 * Contact page avec webhook Make, hCaptcha et email de confirmation client
 */
import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Phone, MessageCircle, MapPin } from "lucide-react";
import { getAllServices } from "@/data/services";
import HeroSection from "@/components/sections/HeroSection";

// Remplace ces deux valeurs après configuration
const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/gda5gpwbw55oil4mmktjaxfgq9tgu2b8";
const HCAPTCHA_SITE_KEY = "4dbafb40-cf86-4edc-bc8e-509eb564f330";

const brusselsCommunes = [
  "Anderlecht", "Auderghem", "Berchem-Sainte-Agathe", "Bruxelles-Ville",
  "Etterbeek", "Evere", "Forest", "Ganshoren", "Ixelles", "Jette",
  "Koekelberg", "Molenbeek-Saint-Jean", "Saint-Gilles", "Saint-Josse-ten-Noode",
  "Schaerbeek", "Uccle", "Watermael-Boitsfort", "Woluwe-Saint-Lambert", "Woluwe-Saint-Pierre",
  "Autre / Périphérie",
];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const allServices = getAllServices();
  const captchaRef = useRef<HCaptcha | null>(null);

  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    service: "",
    rue: "",
    ville: "",
    codePostal: "",
    commune: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function onCaptchaVerify(token: string) {
    setCaptchaToken(token);
  }

  function onCaptchaExpire() {
    setCaptchaToken(null);
  }

  const isFormValid =
    form.prenom.trim() !== "" &&
    form.nom.trim() !== "" &&
    form.email.trim() !== "" &&
    form.service.trim() !== "" &&
    captchaToken !== null;

  async function handleSubmit() {
    if (!isFormValid) return;

    setStatus("sending");

    try {
      const payload = {
        prenom: form.prenom,
        nom: form.nom,
        email: form.email,
        telephone: form.telephone,
        service: form.service,
        adresse: `${form.rue}, ${form.codePostal} ${form.commune}`,
        message: form.message,
        soumis_le: new Date().toLocaleString("fr-BE", { timeZone: "Europe/Brussels" }),
        statut_pipeline: "Nouveau lead",
        captcha_token: captchaToken,
      };

      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Webhook error");

      setStatus("success");
      captchaRef.current?.resetCaptcha();
    } catch {
      setStatus("error");
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    }
  }

  if (status === "success") {
    return (
      <>
        <HeroSection
          title="Contactez-nous"
          subtitle="Demandez un devis gratuit ou posez-nous vos questions."
          image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600"
        />

        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center space-y-6">
              <div className="flex justify-center">
                <CheckCircle className="h-16 w-16 text-accent" />
              </div>

              <h2 className="text-2xl font-bold text-primary">Merci pour votre demande</h2>

              <p className="text-muted-foreground">
                Votre demande de devis a bien été reçue. Vous allez recevoir un email de confirmation dans quelques minutes.
              </p>

              <p className="text-sm text-muted-foreground">
                En cas d'urgence, contactez-nous directement au{" "}
                <a href="tel:+32460976545" className="text-accent font-medium hover:underline">
                  +32 460 97 65 45
                </a>
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <HeroSection
        title="Contactez-nous"
        subtitle="Demandez un devis gratuit ou posez-nous vos questions."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600"
      />

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Formulaire */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-2xl font-bold text-primary mb-2">Demande de devis gratuit</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Prénom *</label>
                  <Input
                    placeholder="Votre prénom"
                    value={form.prenom}
                    onChange={(e) => handleChange("prenom", e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Nom *</label>
                  <Input
                    placeholder="Votre nom"
                    value={form.nom}
                    onChange={(e) => handleChange("nom", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Téléphone</label>
                  <Input
                    type="tel"
                    placeholder="+32 000 000 000"
                    value={form.telephone}
                    onChange={(e) => handleChange("telephone", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Service souhaité *</label>
                <Select onValueChange={(val) => handleChange("service", val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    {allServices.map((s) => (
                      <SelectItem
                        key={`${s.category.slug}-${s.service.slug}`}
                        value={`${s.category.title} - ${s.service.title}`}
                      >
                        {s.service.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Rue et numéro</label>
                <Input
                  placeholder="Ex: Rue de la Loi 42"
                  value={form.rue}
                  onChange={(e) => handleChange("rue", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Code postal</label>
                  <Input
                    placeholder="1000"
                    value={form.codePostal}
                    onChange={(e) => handleChange("codePostal", e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Commune</label>
                  <Select onValueChange={(val) => handleChange("commune", val)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une commune" />
                    </SelectTrigger>
                    <SelectContent>
                      {brusselsCommunes.map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Décrivez votre besoin</label>
                <Textarea
                  placeholder="Précisez vos besoins, la superficie, la fréquence souhaitée..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                />
              </div>

              <div>
                <HCaptcha
                  sitekey={HCAPTCHA_SITE_KEY}
                  onVerify={onCaptchaVerify}
                  onExpire={onCaptchaExpire}
                  ref={captchaRef}
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-destructive">
                  Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.
                </p>
              )}

              <Button
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
                onClick={handleSubmit}
                disabled={status === "sending" || !isFormValid}
              >
                {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande de devis"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Champs marqués * obligatoires. Réponse sous 24h, sans engagement.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-secondary rounded-xl p-6 space-y-4">
                <h3 className="font-semibold text-primary">Nous contacter directement</h3>
                <a
                  href="https://wa.me/32460976545"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-accent shrink-0" />
                  WhatsApp : +32 460 97 65 45
                </a>
                <a
                  href="tel:+32460976545"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 text-accent shrink-0" />
                  +32 460 97 65 45
                </a>
                <a
                  href="mailto:info@cleaning-as.be"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <MapPin className="h-5 w-5 text-accent shrink-0" />
                  info@cleaning-as.be
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-5 w-5 text-accent shrink-0" />
                  Avenue Besme 89, 1190 Forest
                </div>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-3">Zones desservies</h3>
                <div className="flex flex-wrap gap-2">
                  {brusselsCommunes.filter((c) => c !== "Autre / Périphérie").map((c) => (
                    <span
                      key={c}
                      className="text-xs px-2 py-1 rounded-full bg-background text-primary border border-border font-medium"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
