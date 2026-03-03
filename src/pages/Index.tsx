/**
 * Home page — A.S. Cleaning Services
 * Sections: Hero, Trust bar, Services grid, How it works, Testimonials, Coverage, CTA banner
 */
import { Link } from "react-router-dom";
import { Home, Building2, Briefcase, Sparkles, Layers, ClipboardList, CalendarCheck, CheckCircle, Star, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/data/services";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import CTABanner from "@/components/sections/CTABanner";
import { usePageMeta } from "@/hooks/usePageMeta";

// Map category icon names to components
const iconMap: Record<string, React.ElementType> = {
  Home, Building2, Briefcase, Sparkles, Layers
};

const steps = [
{ icon: ClipboardList, title: "Demandez un devis", description: "Remplissez notre formulaire en ligne ou appelez-nous." },
{ icon: CalendarCheck, title: "On planifie", description: "Nous organisons l'intervention selon vos disponibilités." },
{ icon: CheckCircle, title: "Résultat impeccable", description: "Profitez d'un espace propre et sain." }];



export default function Index() {
  usePageMeta({
    title: "Société de nettoyage professionnelle à Bruxelles | A.S. Cleaning Services",
    description: "A.S. Cleaning Services : nettoyage de bureaux, logements et locaux commerciaux à Bruxelles. Devis gratuit sous 24h. Équipes assurées, disponibles 7j/7.",
  });
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Votre partenaire propreté à Bruxelles"
        subtitle="Services de nettoyage professionnels pour particuliers, bureaux et secteurs spécialisés."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&fm=webp&q=75"
        secondaryCta={{ label: "Nos services", link: "/services" }} />
      

      {/* Trust bar */}
      <TrustBar />

      {/* Services grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">Nos services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {serviceCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Layers;
              return (
              <Card key={cat.slug} className="text-center hover:shadow-md transition-shadow flex flex-col">
                  <CardContent className="pt-6 flex flex-col items-center flex-1">
                    <div className="mx-auto mb-4 bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-semibold text-primary mb-4 flex-1 flex items-start justify-center">
                      {cat.title}
                    </h3>
                    <Link
                      to={`/services/${cat.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                    >
                      Voir les services
                      <ArrowRight className="h-3 w-3" />
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
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&fm=webp&q=75"
                alt="Équipe A.S. Cleaning Services"
                className="w-full h-64 md:h-72 object-cover"
                width="800"
                height="288"
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
                basée à Saint-Gilles, au service des particuliers et des professionnels.
                Nous intervenons dans les 19 communes bruxelloises et dans le Brabant Wallon.
              </p>
              <p className="text-muted-foreground mb-6">Notre priorité : vous offrir un résultat impeccable, une communication claire et une flexibilité totale, que vous ayez besoin d'une intervention ponctuelle ou d'un entretien régulier.



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

      {/* Coverage section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Zones desservies</h2>
          <p className="text-muted-foreground mb-8">
            Nous intervenons à Bruxelles et dans le Brabant Wallon.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
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

      {/* Reviews */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6">Ce que disent nos clients</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="font-bold text-primary text-lg">Google Reviews</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 font-semibold text-primary">5.0</span>
              <span className="text-muted-foreground text-sm ml-1">(3 avis)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <a
              href="https://share.google/I9AZYoF28UYXU36wF"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm shrink-0">G</div>
                <div>
                  <p className="font-semibold text-primary text-sm">Gatien Bienfait</p>
                  <p className="text-xs text-muted-foreground">Local Guide</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">Nickel, Satisfait des services !</p>
              <div className="flex items-center gap-1 mt-4">
                <svg className="h-3 w-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-xs text-muted-foreground">Voir sur Google</span>
              </div>
            </a>

            {/* Review 2 */}
            <a
              href="https://share.google/I9AZYoF28UYXU36wF"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold text-sm shrink-0">C</div>
                <div>
                  <p className="font-semibold text-primary text-sm">Clement Chevalier</p>
                  <p className="text-xs text-muted-foreground">6 avis</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Excellente société de nettoyage ! Service sérieux, efficace et très professionnel. La communication est claire, les délais sont respectés et le travail est réalisé avec beaucoup de soin. Entreprise fiable et réactive, je recommande sans hésiter.
              </p>
              <div className="flex items-center gap-1 mt-4">
                <svg className="h-3 w-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-xs text-muted-foreground">Voir sur Google</span>
              </div>
            </a>

            {/* Review 3 */}
            <a
              href="https://share.google/I9AZYoF28UYXU36wF"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-sm shrink-0">C</div>
                <div>
                  <p className="font-semibold text-primary text-sm">Camylle Simon</p>
                  <p className="text-xs text-muted-foreground">10 avis</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nous faisons appel à ce service de nettoyage pour l'entretien régulier de nos bureaux à Forest et nous en sommes très satisfaits. L'équipe est ponctuelle, professionnelle et travaille avec soin. Les locaux sont toujours impeccables après chaque passage, et la communication est simple et efficace. Un service fiable que nous recommandons sans hésitation.
              </p>
              <div className="flex items-center gap-1 mt-4">
                <svg className="h-3 w-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-xs text-muted-foreground">Voir sur Google</span>
              </div>
            </a>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://share.google/I9AZYoF28UYXU36wF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              Voir tous nos avis sur Google
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner />
    </>);

}