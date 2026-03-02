/**
 * Tarifs page — pricing table placeholder + CTA.
 */
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";

const pricingRows = [
  { service: "Entretien régulier", unit: "par heure", price: "À partir de XX €" },
  { service: "Grand ménage", unit: "par m²", price: "À partir de XX €" },
  { service: "Fin de bail", unit: "forfait", price: "Sur devis" },
  { service: "Nettoyage de bureaux", unit: "par mois", price: "Sur devis" },
  { service: "Après chantier", unit: "forfait", price: "Sur devis" },
  { service: "Nettoyage de vitres", unit: "par m²", price: "À partir de XX €" },
  { service: "Désinfection", unit: "forfait", price: "Sur devis" },
  { service: "Traitement de sols", unit: "par m²", price: "Sur devis" },
];

export default function Tarifs() {
  return (
    <>
      <HeroSection
        title="Nos tarifs"
        subtitle="Des prix transparents et compétitifs pour tous vos besoins de nettoyage."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600"
      />

      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="border border-border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary">
                  <TableHead className="text-primary-foreground font-semibold">Service</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Unité</TableHead>
                  <TableHead className="text-primary-foreground font-semibold text-right">Tarif</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingRows.map((row, i) => (
                  <TableRow key={i} className={i % 2 === 0 ? "bg-secondary" : ""}>
                    <TableCell className="font-medium">{row.service}</TableCell>
                    <TableCell className="text-muted-foreground">{row.unit}</TableCell>
                    <TableCell className="text-right font-semibold text-primary">{row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-6">
              Chaque projet est unique. Contactez-nous pour un devis personnalisé.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8">
                Devis personnalisé
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
