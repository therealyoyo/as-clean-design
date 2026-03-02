/**
 * Service detail page — reads dynamic content from serviceContents[]
 * Falls back to generic placeholders if no content entry found yet.
 */
import { useParams, Link, Navigate } from "react-router-dom";
import { CheckCircle, Shield, Clock, ThumbsUp, Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { findService, getRelatedServices, serviceContents } from "@/data/services";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";

const engagements = [
  {
    icon: Shield,
    title: "Équipes assurées",
    description: "Tous nos intervenants sont couverts par une assurance RC professionnelle.",
  },
  {
    icon: Clock,
    title: "Flexibilité 7j/7",
    description: "Nous nous adaptons à vos horaires, y compris le week-end et jours fériés.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction garantie",
    description: "Si vous n'êtes pas satisfait, nous revenons pour corriger.",
  },
];

const avantageIcons = [Shield, Star, Clock];

export default function ServiceDetail() {
  const { category, service } = useParams<{ category: string; service: string }>();
  const result = findService(category || "", service || "");

  if (!result) return <Navigate to="/services" replace />;

  const { category: cat, service: svc } = result;
  const related = getRelatedServices(cat.slug, svc.slug);
  const content = serviceContents.find((c) => c.slug === svc.slug) ?? null;

  return (
    <>
      {/* Hero */}
      <HeroSection
        title={content?.heroTitle ?? svc.title}
        subtitle={content?.heroSubtitle ?? `${cat.title} — A.S. Cleaning Services, Bruxelles`}
        image={svc.image}
      />

      {/* Intro */}
      {content?.intro && (
        <section className="section-padding">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-muted-foreground leading-relaxed text-base">
              {content.intro}
            </p>
          </div>
        </section>
      )}

      {/* Inclusions */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-primary mb-6">Ce que comprend ce service</h2>
          <ul className="space-y-3">
            {(content?.inclusions ?? ["Prestation à compléter.", "Prestation à compléter.", "Prestation à compléter."]).map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Avantages spécifiques au service */}
      {content?.avantages && (
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-primary text-center mb-10">
              Pourquoi nous choisir pour ce service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.avantages.map((item, i) => {
                const Icon = avantageIcons[i % avantageIcons.length];
                return (
                  <Card key={item.title}>
                    <CardContent className="pt-6 text-center">
                      <div className="mx-auto mb-4 bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Engagements généraux */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary text-center mb-10">Nos engagements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagements.map((item) => (
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

      {/* CTA devis */}
      <section className="section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Tarif sur mesure</h2>
          <p className="text-muted-foreground mb-6">
            {content?.ctaText ?? "Chaque projet est unique. Demandez un devis personnalisé — réponse sous 24h, sans engagement."}
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8">
              Demande de devis gratuit
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      {content?.faq && content.faq.length > 0 && (
        <section className="section-padding bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-primary mb-6">Questions fréquentes</h2>
            <Accordion type="single" collapsible>
              {content.faq.map((item, i) => (
                <AccordionItem key={i} value={`q${i}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Services associés */}
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
