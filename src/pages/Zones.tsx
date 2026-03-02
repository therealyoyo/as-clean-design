/**
 * Zones desservies page — all 19 Brussels communes + periphery.
 */
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { brusselsCommunes, peripheryAreas } from "@/data/communes";
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

      {/* 19 communes */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
            Les 19 communes de Bruxelles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {brusselsCommunes.map((commune) => (
              <Card key={commune} className="hover:shadow-sm transition-shadow">
                <CardContent className="flex items-center gap-3 py-4">
                  <MapPin className="h-5 w-5 text-accent shrink-0" />
                  <div>
                    <h3 className="font-medium text-primary text-sm">{commune}</h3>
                    <p className="text-xs text-muted-foreground">
                      {/* Placeholder */}
                      Service de nettoyage à {commune}.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Periphery */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
            Périphérie bruxelloise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {peripheryAreas.map((area) => (
              <Card key={area} className="hover:shadow-sm transition-shadow">
                <CardContent className="flex items-center gap-3 py-4">
                  <MapPin className="h-5 w-5 text-accent shrink-0" />
                  <div>
                    <h3 className="font-medium text-primary text-sm">{area}</h3>
                    <p className="text-xs text-muted-foreground">
                      Service de nettoyage à {area}.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
