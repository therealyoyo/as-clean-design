/**
 * À propos page — company story, values, how it works, zones, CTA.
 */
import {
  Target, Users, ShieldCheck, CalendarCheck,
  ClipboardList, CheckCircle } from
"lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import { usePageMeta } from "@/hooks/usePageMeta";

const values = [
{
  icon: Users,
  title: "Un interlocuteur unique",
  description: "Un seul contact de A à Z. Il connaît vos locaux, vos exigences et votre historique. Toujours le même, toujours disponible."
},
{
  icon: Target,
  title: "Transparence totale",
  description: "Devis détaillé après visite, tarifs clairs, prestations listées. Aucun frais caché, aucun forfait vague."
},
{
  icon: ShieldCheck,
  title: "Assurés en RC Pro",
  description: "A.S. Cleaning Services est couverte par une assurance responsabilité civile professionnelle complète."
},
{
  icon: CalendarCheck,
  title: "Flexibilité totale",
  description: "Avant ouverture, après fermeture, le week-end si besoin. Ponctuel ou récurrent, on s'adapte à votre agenda."
}];


const steps = [
{
  icon: ClipboardList,
  number: "01",
  title: "Vous nous contactez",
  description: "Devis gratuit en ligne ou par téléphone. Nous venons visiter vos locaux et évaluer vos besoins."
},
{
  icon: CalendarCheck,
  number: "02",
  title: "On planifie ensemble",
  description: "Nous proposons une fréquence, des horaires et un tarif clair. Vous validez, on démarre."
},
{
  icon: CheckCircle,
  number: "03",
  title: "Résultat garanti",
  description: "Nos équipes interviennent. Nous supervisons la qualité et assurons votre satisfaction dans la durée."
}];


const communes = [
"Anderlecht", "Auderghem", "Berchem-Sainte-Agathe", "Bruxelles-Ville",
"Etterbeek", "Evere", "Forest", "Ganshoren", "Ixelles", "Jette",
"Koekelberg", "Molenbeek-Saint-Jean", "Saint-Gilles", "Saint-Josse-ten-Noode", "Schaerbeek",
"Uccle", "Watermael-Boitsfort", "Woluwe-Saint-Lambert", "Woluwe-Saint-Pierre"];


export default function About() {
  usePageMeta({
    title: "À propos | A.S. Cleaning Services - Nettoyage Bruxelles",
    description: "Découvrez A.S. Cleaning Services, société de nettoyage basée à Saint-Gilles, Bruxelles. Équipe sélectionnée, formée et assurée pour tous vos besoins de nettoyage.",
  });
  return (
    <>
      <HeroSection
        title="À propos de A.S. Cleaning Services"
        subtitle="Entreprise bruxelloise de nettoyage professionnel. Un seul interlocuteur, une qualité constante."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&fm=webp&q=75" />
      

      {/* Company story */}
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Notre engagement</h2>
          <p className="text-muted-foreground mb-4">
            A.S. Cleaning Services est née d'une conviction simple : nos clients méritent un service de nettoyage qui honore pleinement ses promesses. Nous avons bâti notre identité sur la fiabilité et la stabilité, afin de vous offrir une sérénité totale au quotidien.
          </p>
          <p className="text-muted-foreground mb-4">
            Pour nous, chaque client représente un engagement durable. Nous prenons le temps de connaître vos locaux, de comprendre vos contraintes en détaillant un cahier des charges précis et de respecter scrupuleusement vos horaires. Cette attention aux détails est le cœur de notre métier.
          </p>
          <p className="text-muted-foreground">
            Nous intervenons avec la même rigueur pour les entreprises, les syndics, les institutions publiques et les particuliers exigeants. Pour garantir une qualité constante, un interlocuteur unique assure le suivi de vos prestations. Vous bénéficiez ainsi d'un contact direct, humain et efficace : vous savez toujours à qui vous vous adressez.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4">Nos valeurs</h2>
          <p className="text-lg text-muted-foreground text-center mb-10">
            Ce que vous pouvez exiger de nous.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => <Card key={i}>
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto mb-4 bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center">
                    <v.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">Comment ça marche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) =>
            <div key={i} className="text-center">
                <div className="mx-auto mb-4 bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-sm font-bold text-accent mb-2">{step.number}</div>
                <h3 className="font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Zones d'intervention</h2>
          <p className="text-lg font-semibold text-primary mb-4">Bruxelles et sa périphérie</p>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Basés à Saint-Gilles, nous intervenons dans l'ensemble des 19 communes
            bruxelloises ainsi que dans le Brabant Wallon.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {communes.map((commune) =>
            <Badge key={commune} variant="secondary" className="text-sm px-3 py-1">
                {commune}
              </Badge>
            )}
            <Badge className="bg-accent text-accent-foreground text-sm px-3 py-1">
              Brabant Wallon
            </Badge>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Prêt à travailler avec nous ?"
        subtitle="Demandez votre devis gratuit. Réponse sous 24 h, sans engagement."
        ctaLabel="Demander un devis" />
      
    </>);

}