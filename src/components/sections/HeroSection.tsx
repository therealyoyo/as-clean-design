/**
 * Reusable hero section with background image, navy overlay, title, subtitle, and CTA buttons.
 */
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  image: string;
  ctaLabel?: string;
  ctaLink?: string;
  secondaryCta?: { label: string; link: string };
}

export default function HeroSection({
  title,
  subtitle,
  image,
  ctaLabel = "Demande de devis",
  ctaLink = "/contact",
  secondaryCta,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Navy overlay */}
      <div className="absolute inset-0 bg-primary/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground py-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={ctaLink}>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8">
              {ctaLabel}
            </Button>
          </Link>
          {secondaryCta && (
            <Link to={secondaryCta.link}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8"
              >
                {secondaryCta.label}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
