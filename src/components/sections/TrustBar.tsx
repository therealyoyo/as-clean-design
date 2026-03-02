/**
 * Trust bar component — 4 badges displayed inline.
 */
import { Shield, FileText, Clock, ThumbsUp } from "lucide-react";

const badges = [
  { icon: Shield, label: "Équipes assurées" },
  { icon: FileText, label: "Devis gratuit" },
  { icon: Clock, label: "7j/7" },
  { icon: ThumbsUp, label: "Satisfaction garantie" },
];

export default function TrustBar() {
  return (
    <section className="bg-secondary py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-3 justify-center">
              <div className="bg-accent/10 p-2 rounded-full">
                <badge.icon className="h-5 w-5 text-accent" />
              </div>
              <span className="text-sm font-medium text-primary">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
