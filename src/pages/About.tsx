/**
 * À propos page — company story, values, how it works, certifications.
 */
import { Heart, Target, Users, Leaf, ClipboardList, CalendarCheck, CheckCircle, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";

const values = [
  { icon: Heart, title: " ", description: " " },
  { icon: Target, title: " ", description: " " },
  { icon: Users, title: " ", description: " " },
  { icon: Leaf, title: " ", description: " " },
];

const steps = [
  { icon: ClipboardList, title: " ", description: " " },
  { icon: CalendarCheck, title: " ", description: " " },
  { icon: CheckCircle, title: " ", description: " " },
];

export default function About() {
  return (
    <>
      <HeroSection
        title=" "
        subtitle=" "
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600"
      />

      {/* Company story */}
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6"> </h2>
          <p className="text-muted-foreground mb-4"> </p>
          <p className="text-muted-foreground"> </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10"> </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Card key={i}>
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto mb-4 bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center">
                    <v.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10"> </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-sm font-bold text-accent mb-2"> </div>
                <h3 className="font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6"> </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[" ", " ", " ", " "].map((cert, i) => (
              <div key={i} className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border border-border">
                <Award className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-primary">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
