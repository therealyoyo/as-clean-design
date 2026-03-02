/**
 * FAQ page — 5 sections matching service categories, 4 questions each.
 * Includes FAQPage JSON-LD schema.
 */
import { useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { serviceCategories } from "@/data/services";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";

// Generate placeholder FAQ data
const faqSections = serviceCategories.map((cat) => ({
  title: cat.title,
  questions: [1, 2, 3, 4].map((i) => ({
    q: `Question ${i} sur ${cat.title.toLowerCase()} à compléter ?`,
    a: `Réponse à compléter pour la question ${i} sur ${cat.title.toLowerCase()}.`,
  })),
}));

export default function FAQ() {
  // Inject FAQPage JSON-LD schema
  useEffect(() => {
    const allQuestions = faqSections.flatMap((s) =>
      s.questions.map((q) => ({
        "@type": "Question",
        name: q.q,
        acceptedAnswer: { "@type": "Answer", text: q.a },
      }))
    );
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allQuestions,
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
        <div className="container mx-auto px-4 max-w-3xl space-y-12">
          {faqSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-primary mb-4">{section.title}</h2>
              <Accordion type="single" collapsible>
                {section.questions.map((q, i) => (
                  <AccordionItem key={i} value={`${section.title}-${i}`}>
                    <AccordionTrigger>{q.q}</AccordionTrigger>
                    <AccordionContent>{q.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
