/**
 * Politique des cookies
 */
import HeroSection from "@/components/sections/HeroSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function PolitiqueCookies() {
  usePageMeta({
    title: "Politique des cookies | A.S. Cleaning Services",
    description: "Informations sur les cookies du site cleaning-as.be : cookies fonctionnels (Cloudflare, hCaptcha) et comment les gérer depuis votre navigateur.",
  });
  return (
    <>
      <HeroSection
        title="Politique des cookies"
        subtitle="Quels cookies utilisons-nous et pourquoi."
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&fm=webp&q=75"
      />

      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl prose prose-slate">

          <p className="text-sm text-muted-foreground">Dernière mise à jour : mars 2026</p>

          <h2>Qu'est-ce qu'un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre appareil lorsque vous visitez un site web.
            Il permet au site de mémoriser certaines informations lors de votre navigation.
          </p>

          <h2>Cookies utilisés sur ce site</h2>
          <p>Ce site utilise uniquement des cookies strictement nécessaires à son fonctionnement. Nous n'utilisons pas de cookies publicitaires ni de cookies analytiques.</p>

          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Émetteur</th>
                <th>Finalité</th>
                <th>Durée</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>__cf_bm</code></td>
                <td>Cloudflare</td>
                <td>Protection contre les bots et la fraude. Strictement nécessaire.</td>
                <td>30 minutes</td>
              </tr>
              <tr>
                <td>Cookies hCaptcha</td>
                <td>Intuition Machines</td>
                <td>Protection anti-spam du formulaire de contact. Strictement nécessaire.</td>
                <td>Session</td>
              </tr>
            </tbody>
          </table>

          <h2>Cookies analytiques et publicitaires</h2>
          <p>
            Ce site <strong>n'utilise pas</strong> Google Analytics, Google Ads, Facebook Pixel
            ni aucun autre outil de tracking publicitaire ou statistique.
            Aucune donnée de navigation n'est transmise à des tiers à des fins marketing.
          </p>

          <h2>Comment gérer les cookies</h2>
          <p>
            Les cookies présents sur ce site étant strictement nécessaires à son fonctionnement,
            il n'est pas possible de les désactiver sans altérer l'utilisation du site.
            Vous pouvez toutefois configurer votre navigateur pour bloquer ou supprimer les cookies :
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
          </ul>

          <h2>Contact</h2>
          <p>
            Pour toute question relative aux cookies, contactez-nous à{" "}
            <a href="mailto:info@cleaning-as.be">info@cleaning-as.be</a>.
          </p>

        </div>
      </section>
    </>
  );
}
