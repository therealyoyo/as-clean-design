/**
 * Zones page - simplified
 */
import { MapPin } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";

export default function Zones() {
  return (
    <>
      <HeroSection
        title="Zones desservies"
        subtitle="Nous intervenons dans toute la Région de Bruxelles-Capitale et en périphérie."
        image="https://images.unsplash.com/photo-1559060092-17782223e1d0?w=1600"
      />

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Basés à Saint-Gilles, nous couvrons l'ensemble de la Région bruxelloise
            ainsi que le Brabant Wallon.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
            <div className="flex items-center gap-4 bg-secondary rounded-xl p-6">
              <MapPin className="h-6 w-6 text-accent shrink-0" />
              <div>
                <p className="font-semibold text-primary">Bruxelles</p>
                <p className="text-sm text-muted-foreground">
                  Les 19 communes de la Région bruxelloise
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-secondary rounded-xl p-6">
              <MapPin className="h-6 w-6 text-accent shrink-0" />
              <div>
                <p className="font-semibold text-primary">Brabant Wallon</p>
                <p className="text-sm text-muted-foreground">
                  Wavre, Ottignies, Waterloo et environs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
