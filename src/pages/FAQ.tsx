/**
 * FAQ page — real content, no placeholders
 */
import { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    q: "Dans quelles zones intervenez-vous ?",
    a: "Nous intervenons dans les 19 communes de la Région bruxelloise ainsi que dans le Brabant Wallon. Pour toute demande en dehors de ces zones, contactez-nous directement et nous étudierons votre demande.",
  },
  {
    q: "Comment obtenir un devis ?",
    a: "Remplissez notre formulaire de contact en ligne ou appelez-nous au +32 460 97 65 45. Nous vous répondons sous 24h avec un devis personnalisé, gratuit et sans engagement.",
  },
  {
    q: "Faut-il être présent lors de l'intervention ?",
    a: "Non, votre présence n'est pas obligatoire. Nous gérons l'accès avec vous en amont et nos équipes travaillent en autonomie complète. Beaucoup de clients nous confient un accès et récupèrent un espace impeccable à leur retour.",
  },
  {
    q: "Travaillez-vous le week-end ?",
    a: "Oui, nous intervenons 7 jours sur 7 selon vos disponibilités. Les interventions le week-end sont planifiées lors de l'établissement du devis.",
  },
  {
    q: "Proposez-vous des contrats d'entretien régulier ?",
    a: "Oui. Nous proposons des prestations ponctuelles comme des contrats d'entretien régulier (quotidien, hebdomadaire, mensuel). La fréquence est définie ensemble selon vos besoins et votre budget.",
  },
  {
    q: "Que se passe-t-il si je ne suis pas satisfait du résultat ?",
    a: "Votre satisfaction est notre priorité. Si une intervention ne correspond pas à vos attentes, signalez-le nous et nous revenons pour corriger.",
  },
  {
    q: "Vos équipes sont-elles assurées ?",
    a: "Oui. A.S. Cleaning Services est couverte par une assurance en responsabilité civile professionnelle. Vous travaillez avec nous en toute sérénité.",
  },
  {
    q: "Comment se passe la première intervention ?",
    a: "Avant la première prestation, nous effectuons une visite ou un échange détaillé pour comprendre vos besoins, évaluer vos locaux et établir un devis précis. Rien n'est laissé au hasard.",
  },
];

export default function FAQ() {
  // Inject FAQPage JSON-LD schema
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    script.id = "faq-schema";
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("faq-schema");
      if (el) el.remove();
    };
  }, []);

  return (
    <>
      <HeroSection
        title="Foire aux questions"
        subtitle="Trouvez les réponses à vos questions les plus fréquentes."
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600"
      />

      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible>
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
