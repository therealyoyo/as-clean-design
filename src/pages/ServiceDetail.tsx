/**
 * Service detail page — reusable template for all 25 sub-service pages.
 * Uses URL params to resolve the correct service from data.
 */
import { useParams, Link, Navigate } from "react-router-dom";
import { CheckCircle, Shield, Clock, ThumbsUp, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { findService, getRelatedServices } from "@/data/services";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";

const whyChooseUs = [
  { icon: Shield, title: "Équipes assurées", description: "Tous nos intervenants sont couverts par une assurance professionnelle." },
  { icon: Clock, title: "Flexibilité 7j/7", description: "Nous nous adaptons à vos horaires, y compris le week-end." },
  { icon: ThumbsUp, title: "Satisfaction garantie", description: "Si vous n'êtes pas satisfait, nous revenons gratuitement." },
];

export default function ServiceDetail() {
  const { category, service } = useParams<{ category: string; service: string }>();
  const result = findService(category || "", service || "");

  if (!result) return <Navigate to="/services" replace />;

  const { category: cat, service: svc } = result;
  const related = getRelatedServices(cat.slug, svc.slug);

  return (
    <>
      {/* Hero */}
      <HeroSection
        title={svc.title}
        subtitle={`${cat.title} — A.S. Cleaning Services, Bruxelles`}
        image={svc.image}
      />

      {/* Ce que comprend ce service */}
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-primary mb-6">Ce que comprend ce service</h2>
          {/* Placeholder bullet list — replace with real content */}
          <ul className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">
                  {/* Placeholder */}
                  Description du point {i} à compléter.
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary text-center mb-10">Pourquoi nous choisir</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <Card key={item.title}>
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto mb-4 bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center">
                    <item.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Tarifs</h2>
          <p className="text-muted-foreground mb-6">
            Chaque projet est unique. Demandez un devis gratuit et personnalisé.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8">
              Devis gratuit
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-primary mb-6">Questions fréquentes</h2>
          <Accordion type="single" collapsible>
            {[1, 2, 3, 4, 5].map((i) => (
              <AccordionItem key={i} value={`q${i}`}>
                <AccordionTrigger>
                  {/* Placeholder question */}
                  Question {i} à compléter ?
                </AccordionTrigger>
                <AccordionContent>
                  {/* Placeholder answer */}
                  Réponse à compléter.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related services */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6">Services associés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={`${r.category.slug}-${r.service.slug}`}
                to={`/services/${r.category.slug}/${r.service.slug}`}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-accent hover:shadow-sm transition-all group"
              >
                <div>
                  <span className="text-xs text-muted-foreground">{r.category.title}</span>
                  <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    {r.service.title}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTABanner />
    </>
  );
}
