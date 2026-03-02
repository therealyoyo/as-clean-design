/**
 * Services data structure for A.S. Cleaning Services.
 * All 5 categories and 25 sub-services are defined here.
 * Used by navigation, service pages, and forms.
 */

export interface SubService {
  title: string;
  slug: string;
  /** Unsplash image URL for hero section */
  image: string;
}

export interface ServiceCategory {
  title: string;
  slug: string;
  icon: string; // Lucide icon name
  description: string;
  services: SubService[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Particuliers",
    slug: "particuliers",
    icon: "Home",
    description: "Services de nettoyage pour les particuliers à Bruxelles.",
    services: [
      { title: "Grand ménage", slug: "grand-menage", image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1600" },
      { title: "Fin de bail / état des lieux", slug: "fin-de-bail", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600" },
      { title: "Avant / après déménagement", slug: "avant-apres-demenagement", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600" },
      { title: "Airbnb & locations courte durée", slug: "airbnb", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600" },
      { title: "Après travaux", slug: "apres-travaux", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600" },
      { title: "Lavage de vitres", slug: "lavage-vitres", image: "https://images.unsplash.com/photo-1596263373796-a9e1a44960bf?w=1600" },
    ],
  },
  {
    title: "Bureaux & Entreprises",
    slug: "bureaux-entreprises",
    icon: "Building2",
    description: "Nettoyage professionnel pour bureaux et entreprises.",
    services: [
      { title: "Entretien régulier de bureaux", slug: "entretien-bureaux", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600" },
      { title: "Locaux commerciaux", slug: "locaux-commerciaux", image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1600" },
    ],
  },
  {
    title: "Secteurs Spécialisés",
    slug: "secteurs-specialises",
    icon: "Briefcase",
    description: "Nettoyage adapté aux secteurs spécialisés.",
    services: [
      { title: "Écoles & établissements scolaires", slug: "ecoles", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600" },
      { title: "Secteur médical & cabinets", slug: "medical", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600" },
      { title: "Hôtels & hospitality", slug: "hotels", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600" },
      { title: "Restaurants & horeca", slug: "restaurants", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600" },
      { title: "Parkings & garages", slug: "parkings", image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1600" },
    ],
  },
  {
    title: "Nettoyages Spéciaux",
    slug: "nettoyages-speciaux",
    icon: "Sparkles",
    description: "Interventions spéciales et nettoyages ponctuels.",
    services: [
      { title: "Après chantier / fin de travaux", slug: "apres-chantier", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600" },
      { title: "Vitres & façades commerciales", slug: "vitres-facades", image: "https://images.unsplash.com/photo-1596263373796-a9e1a44960bf?w=1600" },
      { title: "Désinfection & nébulisation", slug: "desinfection", image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=1600" },
      { title: "Enlèvement de graffitis", slug: "graffitis", image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5b2b?w=1600" },
      { title: "Après sinistre", slug: "apres-sinistre", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600" },
      { title: "Avant / après événement", slug: "evenementiel", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600" },
    ],
  },
  {
    title: "Sols",
    slug: "sols",
    icon: "Layers",
    description: "Nettoyage et traitement de tous types de sols.",
    services: [
      { title: "Moquettes & tapis", slug: "moquettes-tapis", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600" },
      { title: "Parquets", slug: "parquets", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600" },
      { title: "Marbres & pierres naturelles", slug: "marbres", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600" },
      { title: "Sols béton & industriels", slug: "beton-industriel", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600" },
    ],
  },
];

/** Helper to find a service by category slug and service slug */
export function findService(categorySlug: string, serviceSlug: string) {
  const category = serviceCategories.find((c) => c.slug === categorySlug);
  if (!category) return null;
  const service = category.services.find((s) => s.slug === serviceSlug);
  if (!service) return null;
  return { category, service };
}

/** Get all services as a flat list (for forms, sitemaps, etc.) */
export function getAllServices(): { category: ServiceCategory; service: SubService }[] {
  return serviceCategories.flatMap((cat) =>
    cat.services.map((svc) => ({ category: cat, service: svc }))
  );
}

/** Get related services (3 random from other categories or same category) */
export function getRelatedServices(categorySlug: string, serviceSlug: string, count = 3) {
  const all = getAllServices().filter(
    (s) => !(s.category.slug === categorySlug && s.service.slug === serviceSlug)
  );
  // Shuffle and pick
  const shuffled = all.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
