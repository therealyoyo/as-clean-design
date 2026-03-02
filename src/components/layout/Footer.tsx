/**
 * Footer component with company info, quick links, service links, trust badges, and copyright.
 */
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Shield, FileText, Clock, ThumbsUp } from "lucide-react";
import { serviceCategories } from "@/data/services";

const quickLinks = [
  { label: "Accueil", path: "/" },
  { label: "Services", path: "/services" },
  
  { label: "À propos", path: "/a-propos" },
  { label: "FAQ", path: "/faq" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
  { label: "Zones desservies", path: "/zones" },
];

const trustBadges = [
  { icon: Shield, label: "Équipes assurées" },
  { icon: FileText, label: "Devis gratuit" },
  { icon: Clock, label: "7j/7" },
  { icon: ThumbsUp, label: "Satisfaction garantie" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Trust badges bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 justify-center text-sm">
                <badge.icon className="h-5 w-5 text-accent" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="font-bold text-lg mb-4">A.S. Cleaning Services</h3>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                {/* Placeholder address */}
                Avenue Besme 89, 1190 Forest
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+32460976545" className="hover:text-accent transition-colors">
                  +32 460 97 65 45
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@ascleaning.be" className="hover:text-accent transition-colors">
                  info@ascleaning.be
                </a>
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service categories */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nos services</h3>
            <ul className="space-y-2 text-sm">
              {serviceCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/services`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="font-bold text-lg mb-4">Besoin d'un devis ?</h3>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Contactez-nous pour un devis gratuit et sans engagement.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-accent text-accent-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              Demande de devis
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} A.S. Cleaning Services. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
