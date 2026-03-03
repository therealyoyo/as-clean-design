/**
 * Services hub page — displays all 5 categories with links to sub-services.
 */
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Home, Building2, Briefcase, Sparkles, Layers, ArrowRight } from "lucide-react";
import { serviceCategories } from "@/data/services";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";

const iconMap: Record<string, React.ElementType> = {
  Home, Building2, Briefcase, Sparkles, Layers,
};

export default function Services() {
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      const el = document.getElementById(category);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [category]);
  return (
    <>
      <HeroSection
        title="Nos services de nettoyage"
        subtitle="Découvrez l'ensemble de nos prestations adaptées à vos besoins."
        image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&fm=webp&q=75"
      />

      <section className="section-padding">
        <div className="container mx-auto px-4 space-y-16">
          {serviceCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Layers;
            return (
              <div key={cat.slug} id={cat.slug}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-primary">{cat.title}</h2>
                    <p className="text-sm text-muted-foreground">{cat.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.services.map((svc) => (
                    <Link
                      key={svc.slug}
                      to={`/services/${cat.slug}/${svc.slug}`}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-accent hover:shadow-sm transition-all group"
                    >
                      <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                        {svc.title}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
