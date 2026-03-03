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
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-2">
      <span className="font-medium text-foreground shrink-0">{label} :</span>
      <span>{value}</span>
    </div>
  );
}

export default function PolitiqueConfidentialite() {
  usePageMeta({
    title: "Politique de confidentialité RGPD | A.S. Cleaning Services",
    description: "Comment A.S. Cleaning Services traite vos données personnelles : données collectées, finalités, bases légales RGPD et droits des personnes concernées.",
  });
  return (
    <>
      <HeroSection
        title="Politique de confidentialité"
        subtitle="Comment nous traitons vos données personnelles."
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&fm=webp&q=75"
      />

      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl">

          <p className="text-sm text-muted-foreground mb-8">Dernière mise à jour : mars 2026</p>

          <div className="space-y-4">

            <SectionCard number="1" title="Responsable du traitement">
              <InfoRow label="Entité" value={<strong className="text-foreground">A.S. Cleaning Services</strong>} />
              <InfoRow label="Forme juridique" value="Indépendant en personne physique" />
              <InfoRow label="Adresse" value="Parvis de Saint-Gilles 35, 1060 Saint-Gilles, Belgique" />
              <InfoRow
                label="Téléphone"
                value={<a href="tel:+32460976545" className="text-primary hover:underline">+32 460 97 65 45</a>}
              />
              <InfoRow
                label="Email"
                value={<a href="mailto:info@cleaning-as.be" className="text-primary hover:underline">info@cleaning-as.be</a>}
              />
            </SectionCard>

            <SectionCard number="2" title="Données collectées">
              <p>Nous collectons uniquement les données strictement nécessaires à la gestion de votre demande :</p>
              <ul className="space-y-1 pl-4 list-disc list-outside">
                <li>Prénom et nom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone (facultatif)</li>
                <li>Adresse du lieu d'intervention</li>
                <li>Description de votre besoin</li>
              </ul>
              <p className="text-sm italic">
                Nous ne collectons aucune donnée sensible (santé, origines, opinions politiques, etc.).
              </p>
            </SectionCard>

            <SectionCard number="3" title="Finalités et bases légales">
              <div className="space-y-3">
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="font-medium text-foreground">Répondre à votre demande de devis</p>
                  <p className="text-sm mt-1">Base légale : consentement (article 6.1.a du RGPD)</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="font-medium text-foreground">Exécution d'un contrat de nettoyage</p>
                  <p className="text-sm mt-1">Base légale : exécution contractuelle (article 6.1.b du RGPD)</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="font-medium text-foreground">Respect des obligations légales</p>
                  <p className="text-sm mt-1">Base légale : obligation légale (article 6.1.c du RGPD)</p>
                </div>
              </div>
            </SectionCard>

            <SectionCard number="4" title="Destinataires des données">
              <p>Vos données sont accessibles uniquement aux parties suivantes :</p>
              <div className="space-y-2">
                {[
                  { name: "A.S. Cleaning Services", role: "Responsable du traitement" },
                  { name: "Make.com", role: "Outil d'automatisation pour la réception des formulaires (sous-traitant)" },
                  { name: "hCaptcha (Intuition Machines, Inc.)", role: "Protection anti-spam du formulaire" },
                  { name: "Cloudflare, Inc.", role: "Hébergement du site web" },
                ].map((item) => (
                  <div key={item.name} className="flex flex-col sm:flex-row sm:items-center gap-1 rounded-lg border border-border px-4 py-3">
                    <span className="font-medium text-foreground min-w-[200px]">{item.name}</span>
                    <span className="text-sm text-muted-foreground">{item.role}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm italic">
                Aucune donnée n'est vendue, louée ou partagée à des fins commerciales.
              </p>
            </SectionCard>

            <SectionCard number="5" title="Durée de conservation">
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-lg border border-border px-4 py-3">
                  <p className="font-medium text-foreground">Prospects (demandes sans suite)</p>
                  <p className="text-sm mt-1">2 ans maximum</p>
                </div>
                <div className="rounded-lg border border-border px-4 py-3">
                  <p className="font-medium text-foreground">Clients (contrats)</p>
                  <p className="text-sm mt-1">Durée légale de conservation comptable (10 ans)</p>
                </div>
              </div>
            </SectionCard>

            <SectionCard number="6" title="Vos droits">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  { right: "Droit d'accès", desc: "Obtenir une copie de vos données" },
                  { right: "Droit de rectification", desc: "Corriger des données inexactes" },
                  { right: "Droit à l'effacement", desc: "Demander la suppression de vos données" },
                  { right: "Droit d'opposition", desc: "Vous opposer à un traitement" },
                  { right: "Droit à la portabilité", desc: "Recevoir vos données dans un format structuré" },
                ].map((item) => (
                  <div key={item.right} className="rounded-lg bg-muted/50 px-4 py-3">
                    <p className="font-medium text-foreground text-sm">{item.right}</p>
                    <p className="text-sm mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p>
                Pour exercer ces droits, contactez-nous à{" "}
                <a href="mailto:info@cleaning-as.be" className="text-primary hover:underline">info@cleaning-as.be</a>.
                Nous répondrons dans un délai maximum de 30 jours.
              </p>
            </SectionCard>

            <SectionCard number="7" title="Droit de plainte">
              <p>
                Vous avez le droit d'introduire une plainte auprès de l'Autorité de Protection des Données (APD) belge :
              </p>
              <a
                href="https://www.autoriteprotectiondonnees.be"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
              >
                www.autoriteprotectiondonnees.be
              </a>
            </SectionCard>

            <SectionCard number="8" title="Sécurité">
              <p>
                Le site est protégé par un certificat SSL (HTTPS) via Cloudflare. Les transmissions de données sont chiffrées.
                L'accès aux données est limité aux personnes strictement concernées.
              </p>
            </SectionCard>

          </div>
        </div>
      </section>
    </>
  );
}
