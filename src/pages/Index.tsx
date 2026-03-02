/**
 * Home page — A.S. Cleaning Services
 * Sections: Hero, Trust bar, Services grid, How it works, Testimonials, Coverage, CTA banner
 */
import { Link } from "react-router-dom";
import { Home, Building2, Briefcase, Sparkles, Layers, ClipboardList, CalendarCheck, CheckCircle, Star, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/data/services";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import CTABanner from "@/components/sections/CTABanner";

// Map category icon names to components
const iconMap: Record<string, React.ElementType> = {
  Home, Building2, Briefcase, Sparkles, Layers
};

const steps = [
{ icon: ClipboardList, title: "Demandez un devis", description: "Remplissez notre formulaire en ligne ou appelez-nous." },
{ icon: CalendarCheck, title: "On planifie", description: "Nous organisons l'intervention selon vos disponibilités." },
{ icon: CheckCircle, title: "Résultat impeccable", description: "Profitez d'un espace propre et sain." }];


const testimonials = [
{ name: "Marie D.", commune: "Ixelles", text: "Service impeccable, je recommande vivement !" },
{ name: "Pierre L.", commune: "Uccle", text: "Équipe très professionnelle et ponctuelle." },
{ name: "Sophie M.", commune: "Etterbeek", text: "Excellent rapport qualité-prix." }];


export default function Index() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Votre partenaire propreté à Bruxelles"
        subtitle="Services de nettoyage professionnels pour particuliers, bureaux et secteurs spécialisés."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600"
        secondaryCta={{ label: "Nos services", link: "/services" }} />
      

      {/* Trust bar */}
      <TrustBar />

      {/* Services grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">Nos services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {serviceCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Layers;
              return (
                <Card key={cat.slug} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">{cat.title}</h3>
                    <Link
                      to={`/services/${cat.slug}`}
                      className="text-sm text-accent hover:underline">
                      
                      Voir les services →
                    </Link>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">Comment ça marche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) =>
            <div key={i} className="text-center">
                <div className="mx-auto mb-4 bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800"
                alt="Équipe A.S. Cleaning Services"
                className="w-full h-72 object-cover"
                loading="lazy" />
              
            </div>
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">
                Qui sommes-nous
              </span>
              <h2 className="text-3xl font-bold text-primary mt-2 mb-4">
                Une entreprise bruxelloise à votre service
              </h2>
              <p className="text-muted-foreground mb-4">
                A.S. Cleaning Services est une entreprise de nettoyage professionnel
                basée à Bruxelles, au service des particuliers et des professionnels
                depuis notre création. Nous intervenons dans toutes les communes
                bruxelloises et en périphérie.
              </p>
              <p className="text-muted-foreground mb-6">Notre priorité : vous offrir un résultat impeccable, une communication claire et une flexibilité totale et ce que vous ayez besoin d'une intervention ponctuelle ou d'un entretien régulier.



              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/a-propos">
                  <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    En savoir plus
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="rounded-full bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground">
                    Demande de devis
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) =>
            <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) =>
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">"{t.text}"</p>
                  <p className="font-semibold text-primary text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.commune}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Coverage section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Zones desservies</h2>
          <p className="text-muted-foreground mb-8">
            Nous intervenons à Bruxelles et dans le Brabant Wallon.
          </p>
          <div className="flex justify-center gap-8">
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-accent shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-primary">Bruxelles</p>
                <p className="text-sm text-muted-foreground">19 communes</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-accent shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-primary">Brabant Wallon</p>
                <p className="text-sm text-muted-foreground">et périphérie</p>
              </div>
            </div>
          </div>
          <Link to="/zones">
            <Button variant="outline" className="mt-6 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              En savoir plus sur nos zones
            </Button>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner />
    </>);

}