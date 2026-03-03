import HeroSection from "@/components/sections/HeroSection";
import { usePageMeta } from "@/hooks/usePageMeta";

function SectionCard({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
          {number}
        </span>
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      </div>
      <div className="text-muted-foreground leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

export default function MentionsLegales() {
  usePageMeta({
    title: "Mentions légales | A.S. Cleaning Services",
    description: "Informations légales du site cleaning-as.be : éditeur, hébergeur, propriété intellectuelle et droit applicable (droit belge).",
  });
  return (
    <>
      <HeroSection
        title="Mentions légales"
        subtitle="Informations légales relatives au site cleaning-as.be"
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&fm=webp&q=75"
      />

      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl">

          <p className="text-sm text-muted-foreground mb-8">Dernière mise à jour : mars 2026</p>

          <div className="space-y-4">

            <SectionCard number="1" title="Éditeur du site">
              <p><strong className="text-foreground">A.S. Cleaning Services</strong></p>
              <p>Forme juridique : Indépendant en personne physique</p>
              <p>Siège social : Parvis de Saint-Gilles 35, 1060 Saint-Gilles, Belgique</p>
              <p>
                Téléphone :{" "}
                <a href="tel:+32460976545" className="text-primary hover:underline">+32 460 97 65 45</a>
              </p>
              <p>
                Email :{" "}
                <a href="mailto:info@cleaning-as.be" className="text-primary hover:underline">info@cleaning-as.be</a>
              </p>
            </SectionCard>

            <SectionCard number="2" title="Hébergeur">
              <p><strong className="text-foreground">Cloudflare, Inc.</strong></p>
              <p>101 Townsend St, San Francisco, CA 94107, États-Unis</p>
              <p>
                <a
                  href="https://www.cloudflare.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.cloudflare.com
                </a>
              </p>
            </SectionCard>

            <SectionCard number="3" title="Propriété intellectuelle">
              <p>
                L'ensemble du contenu de ce site (textes, images, structure) est la propriété exclusive d'A.S. Cleaning Services,
                sauf mentions contraires. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
              </p>
            </SectionCard>

            <SectionCard number="4" title="Responsabilité">
              <p>
                A.S. Cleaning Services s'efforce de maintenir les informations de ce site à jour et exactes.
                Nous ne pouvons être tenus responsables des erreurs ou omissions, ni des dommages résultant
                de l'utilisation des informations publiées.
              </p>
            </SectionCard>

            <SectionCard number="5" title="Droit applicable">
              <p>
                Le présent site est soumis au droit belge. Tout litige relatif à son utilisation sera soumis
                à la compétence exclusive des tribunaux de l'arrondissement judiciaire de Bruxelles.
              </p>
            </SectionCard>

          </div>
        </div>
      </section>
    </>
  );
}
