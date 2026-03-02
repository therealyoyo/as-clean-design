/**
 * Reusable CTA banner section.
 */
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaLink?: string;
}

export default function CTABanner({
  title = "Obtenez votre devis gratuit",
  subtitle = "Contactez-nous dès aujourd'hui pour un devis personnalisé, gratuit et sans engagement.",
  ctaLabel = "Demande de devis",
  ctaLink = "/contact",
}: CTABannerProps) {
  return (
    <section className="bg-primary section-padding">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">{title}</h2>
        <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">{subtitle}</p>
        <Link to={ctaLink}>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8">
            {ctaLabel}
          </Button>
        </Link>
      </div>
    </section>
  );
}
