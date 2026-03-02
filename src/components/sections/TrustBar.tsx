/**
 * Trust bar component — 4 badges displayed inline.
 */
import { CalendarCheck, ShieldCheck, Sparkles, BadgeCheck } from "lucide-react";

const badges = [
  {
    icon: <CalendarCheck className="h-5 w-5 text-accent" />,
    label: "On s'adapte à vous",
    sub: "Toujours disponible, 7j/7",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-accent" />,
    label: "Sélectionnée, formée, contrôlée",
    sub: "Des professionnels de confiance",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-accent" />,
    label: "Votre satisfaction, assurée",
    sub: "Notre priorité à chaque intervention",
  },
  {
    icon: <BadgeCheck className="h-5 w-5 text-accent" />,
    label: "Devis gratuit",
    sub: "Réponse sous 24h, sans engagement",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-secondary py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-3 px-6 py-3 border-r border-border last:border-0">
              {badge.icon}
              <div>
                <p className="text-sm font-semibold text-primary">{badge.label}</p>
                <p className="text-xs text-muted-foreground">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
