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

export interface ServiceContent {
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  inclusions: string[];
  avantages: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  ctaText: string;
}

export const serviceContents: ServiceContent[] = [
  {
    slug: "grand-menage",
    heroTitle: "Grand ménage à domicile",
    heroSubtitle: "Un nettoyage complet de A à Z,  pour retrouver un logement impeccable sans lever le petit doigt.",
    intro: "Le grand ménage, c'est une remise à zéro complète de votre intérieur. Cuisine, salle de bain, sols, vitres intérieures, plinthes, placards — nos équipes interviennent en profondeur là où le nettoyage quotidien ne suffit plus. Idéal avant une occasion spéciale, après une période chargée, ou simplement quand vous avez besoin d'un vrai coup de frais.",
    inclusions: [
      "Dépoussiérage complet des surfaces, plinthes et mobilier",
      "Nettoyage en profondeur de la cuisine (plans de travail, électroménager, hottes, carrelages)",
      "Désinfection et brillance des sanitaires (WC, douche, baignoire, lavabo)",
      "Lavage des sols (carrelage, parquet, vinyle) et aspiration des moquettes",
      "Nettoyage des vitres intérieures et encadrements",
      "Vidange et nettoyage des poubelles",
      "Aération et désodorisation de l'espace",
    ],
    avantages: [
      { title: "Intervention sur mesure", description: "Vous définissez les pièces prioritaires et le niveau de détail souhaité. On s'adapte à votre logement, pas l'inverse." },
      { title: "Équipes formées et assurées", description: "Nos professionnels sont sélectionnés, formés aux protocoles de nettoyage et couverts par une assurance RC Pro." },
      { title: "Résultat garanti", description: "Si une zone ne correspond pas à vos attentes, nous revenons pour corriger. Votre satisfaction est notre priorité." },
    ],
    faq: [
      { question: "Combien de temps dure un grand ménage ?", answer: "En fonction de la surface et de l'état du logement, un grand ménage prend généralement entre 3h et 8h. Nous estimons la durée lors du devis, après échange sur vos besoins." },
      { question: "Faut-il être présent pendant l'intervention ?", answer: "Non, ce n'est pas obligatoire. Beaucoup de clients nous confient un accès et récupèrent un logement impeccable à leur retour." },
      { question: "Le grand ménage inclut-il les vitres extérieures ?", answer: "Le grand ménage standard couvre les vitres intérieures. Le lavage des vitres extérieures est un service distinct que vous pouvez ajouter au même devis." },
      { question: "Quels produits utilisez-vous ?", answer: "Nos équipes utilisent des produits professionnels adaptés à chaque surface,  efficaces sans abîmer vos matériaux. Si vous avez des contraintes spécifiques (allergies, matériaux délicats), signalez-le lors de votre demande de devis." },
    ],
    ctaText: "Demandez un devis pour votre grand ménage - réponse sous 24h, sans engagement.",
  },
  {
    slug: "fin-de-bail",
    heroTitle: "Nettoyage fin de bail & état des lieux",
    heroSubtitle: "Partez l'esprit tranquille  et maximisez vos chances de récupérer votre caution.",
    intro: "L'état des lieux de sortie est le moment de vérité entre locataire et propriétaire. Un logement mal nettoyé peut vous coûter plusieurs centaines d'euros via votre caution. Nos équipes réalisent un nettoyage de fin de bail complet et conforme aux standards attendus lors d'un état des lieux de sortie",
    inclusions: [
      "Nettoyage complet de toutes les pièces, sol au plafond",
      "Dégraissage approfondi de la cuisine (four, hotte, plaques, réfrigérateur intérieur/extérieur)",
      "Détartrage et désinfection des sanitaires (joints, robinetterie, céramique)",
      "Nettoyage des vitres intérieures et fenêtres",
      "Nettoyage des placards intérieurs et tiroirs",
      "Élimination des traces sur murs, interrupteurs et poignées",
      "Aspiration et lavage des sols, y compris bords et coins",
      "Nettoyage des radiateurs, plinthes et appuis de fenêtres",
    ],
    avantages: [
      { title: "Conforme aux exigences d'état des lieux", description: "Nous connaissons les points de contrôle des états des lieux. Notre nettoyage cible précisément les zones qui font l'objet d'un examen attentif." },
      { title: "Attestation disponible sur demande", description: "Vous pouvez demander une attestation de passage à remettre à votre propriétaire ou à l'agence immobilière." },
      { title: "Disponibilité express", description: "Vous avez un délai court avant de remettre les clés ? Nous nous adaptons à vos impératifs, y compris en fin de semaine." },
    ],
    faq: [
      { question: "Le nettoyage fin de bail garantit-il la récupération de ma caution ?", answer: "Un nettoyage professionnel conforme aux standards attendus maximise significativement vos chances. Cependant, la caution peut aussi couvrir des dommages autres que la propreté et bien que nous pouvons garantir une qualité de nettoyage fidèle à nos standard, nous n'avons aucune influence les décisions du propriétaire." },
      { question: "Quand dois-je réserver l'intervention ?", answer: "Idéalement 3 à 5 jours avant la remise des clés. En cas d'urgence, nous acceptons des délais plus courts selon nos disponibilités, contactez-nous directement." },
      { question: "Intervenez-vous aussi pour les propriétaires avant une remise en location ?", answer: "Absolument. Nous proposons le même service pour les propriétaires souhaitant remettre un bien en parfait état entre deux locataires." },
    ],
    ctaText: "Votre état des lieux approche ? Demandez votre devis dès maintenant, réponse sous 24h.",
  },
  {
    slug: "avant-apres-demenagement",
    heroTitle: "Nettoyage avant & après déménagement",
    heroSubtitle: "Quittez un logement propre. Entrez dans un espace sain. On s'occupe du reste.",
    intro: "Un déménagement, c'est déjà assez stressant sans ajouter le nettoyage en profondeur par-dessus. Que vous quittiez un logement ou que vous arriviez dans un nouveau, nos équipes interviennent avant ou après le déménagement pour vous garantir un espace parfaitement propre sans que vous ayez à y penser.",
    inclusions: [
      "Nettoyage complet de l'ancien logement après sortie des meubles",
      "Nettoyage du nouveau logement avant installation (poussières, résidus, traces)",
      "Désinfection des surfaces de contact (poignées, interrupteurs, sanitaires)",
      "Lavage des vitres intérieures et des châssis",
      "Nettoyage des placards, tiroirs et rangements intégrés",
      "Aspiration et lavage de tous les types de sols",
      "Élimination des odeurs résiduelles",
    ],
    avantages: [
      { title: "Coordination flexible", description: "Nous intervenons avant l'arrivée du camion, après son départ, ou les deux selon votre planning de déménagement." },
      { title: "Combinable avec le nettoyage fin de bail", description: "Vous pouvez regrouper le nettoyage fin de bail et le nettoyage du nouveau logement en une seule commande." },
      { title: "Zéro stress supplémentaire", description: "Le déménagement est déjà une étape chargée. Confiez-nous le nettoyage et concentrez-vous sur l'essentiel." },
    ],
    faq: [
      { question: "Pouvez-vous intervenir le jour même du déménagement ?", answer: "Selon nos disponibilités, oui. Nous recommandons de réserver au moins 15 jours à l'avance pour garantir un créneau, mais n'hésitez pas à nous appeler directement pour les urgences." },
      { question: "Le logement doit-il être totalement vidé pour que vous interveniez ?", answer: "Pour un nettoyage complet, oui, il est préférable que les meubles soient sortis. Pour un nettoyage partiel ou un passage entre deux locataires, nous pouvons adapter notre intervention." },
    ],
    ctaText: "Déménagement en vue ? Bloquez votre créneau, devis gratuit sous 24h.",
  },
  {
    slug: "airbnb",
    heroTitle: "Nettoyage Airbnb & locations courte durée",
    heroSubtitle: "5 étoiles à chaque départ, un nettoyage fiable qui protège votre note et votre réputation.",
    intro: "Votre note Airbnb dépend en grande partie de la propreté perçue par vos voyageurs. Un entre-deux négligé suffit à faire plonger votre score. A.S. Cleaning Services propose un service dédié aux hôtes bruxellois : rapide, fiable, calé sur vos arrivées et départs — même en dernière minute.",
    inclusions: [
      "Nettoyage complet du logement entre chaque voyageur",
      "Changement et mise en place du linge de lit (si fourni par l'hôte)",
      "Réapprovisionnement des consommables (savon, papier toilette, selon stock fourni)",
      "Désinfection des surfaces de contact à haute fréquence",
      "Vérification et signalement des dommages ou manquants",
      "Rangement du logement selon la configuration définie par l'hôte",
      "Rapport de passage transmissible si souhaité",
    ],
    avantages: [
      { title: "Cadencé sur vos check-in / check-out", description: "On s'intègre à votre calendrier de réservations. Vous nous communiquez vos créneaux, on assure le passage — sans que vous ayez à gérer chaque fois." },
      { title: "Réactivité express", description: "Départ imprévu, check-in avancé ? Nous faisons notre possible pour nous adapter aux aléas de la location courte durée." },
      { title: "Protégez votre investissement", description: "Un logement systématiquement propre préserve vos équipements, votre note et la confiance de la plateforme." },
    ],
    faq: [
      { question: "Pouvez-vous gérer plusieurs logements Airbnb en même temps ?", answer: "Oui. Nous travaillons avec des hôtes multi-propriétés à Bruxelles. Un interlocuteur unique gère l'ensemble de vos biens." },
      { question: "Que se passe-t-il si un voyageur laisse le logement en très mauvais état ?", answer: "Dans ce cas, nous vous contactons pour évaluer le temps supplémentaire nécessaire et ajuster la facturation en transparence. Pas de surprises." },
      { question: "Faites-vous du linge de lit et serviettes ?", answer: "Nous pouvons nous charger du changement et de la mise en place si vous fournissez le linge propre sur place. La prestation de blanchisserie externalisée est disponible sur demande." },
    ],
    ctaText: "Gérez vos locations sans stress. Demandez un devis adapté à votre rythme — réponse sous 24h.",
  },
  {
    slug: "apres-travaux",
    heroTitle: "Nettoyage après travaux",
    heroSubtitle: "Vos travaux sont terminés. Notre travail commence — et vous pouvez enfin profiter de votre intérieur.",
    intro: "Rénovation, peinture, carrelage, pose de parquet — chaque chantier laisse derrière lui une couche de poussière, de résidus et de salissures tenaces qui demandent bien plus qu'un simple coup de balai. Nos équipes sont équipées pour gérer le nettoyage post-travaux dans les logements bruxellois, quelle que soit l'ampleur du chantier.",
    inclusions: [
      "Élimination des poussières de plâtre, sciure et résidus de matériaux",
      "Nettoyage des sols neufs (carrelage, parquet, béton ciré) sans risque de rayure",
      "Décroutage des vitres (projections de peinture, colle, plâtre)",
      "Dépoussiérage en hauteur (plafonds, moulures, faux-plafonds)",
      "Nettoyage des équipements sanitaires et de cuisine nouvellement posés",
      "Élimination des résidus de colle, joints et silicone",
      "Évacuation des petits déchets de chantier résiduels",
    ],
    avantages: [
      { title: "Matériel adapté aux surfaces neuves", description: "Parquet fraîchement posé, carrelage neuf, peinture récente — nous utilisons des produits et techniques qui nettoient sans endommager." },
      { title: "Coordination avec vos artisans", description: "Nous pouvons intervenir dès la fin d'un corps de métier ou à la toute fin du chantier — selon votre planning." },
      { title: "Un logement prêt à habiter", description: "À notre départ, votre logement est propre, sain et prêt à être investi ou remis en location." },
    ],
    faq: [
      { question: "À quel moment de la rénovation faut-il prévoir le nettoyage ?", answer: "Idéalement après le dernier corps de métier et avant votre emménagement ou l'état des lieux. Pour les grands chantiers, un nettoyage intermédiaire peut être prévu." },
      { question: "Pouvez-vous évacuer les déchets de chantier ?", answer: "Nous gérons les petits déchets résiduels (sacs, cartons, emballages). Pour des volumes importants (gravats, plaques), nous recommandons de prévoir une benne avec votre entrepreneur." },
    ],
    ctaText: "Chantier terminé ? Demandez votre devis — réponse sous 24h, intervention possible dès cette semaine.",
  },
  {
    slug: "lavage-vitres",
    heroTitle: "Lavage de vitres à domicile",
    heroSubtitle: "Des vitres impeccables, sans traces, intérieur comme extérieur — par des professionnels.",
    intro: "Des vitres propres changent tout à la luminosité d'un intérieur. Mais le lavage de vitres prend du temps, demande du matériel adapté et peut être risqué en hauteur. Nos équipes interviennent chez vous à Bruxelles pour un résultat sans traces, sur tous types de vitrages — fenêtres classiques, baies vitrées, velux, véranda ou double vitrage.",
    inclusions: [
      "Lavage intérieur et extérieur de toutes les fenêtres",
      "Nettoyage des châssis, encadrements et appuis de fenêtres",
      "Traitement des velux et fenêtres de toit",
      "Nettoyage des portes vitrées et baies coulissantes",
      "Lavage des parois de douche et miroirs sur demande",
      "Nettoyage des vérandas vitrées (structure et vitrages)",
      "Séchage sans traces avec raclette professionnelle",
    ],
    avantages: [
      { title: "Résultat sans traces garanti", description: "Nos techniciens utilisent des outils professionnels (raclettes, perche télescopique, eau déminéralisée) pour un séchage parfait, même sur les grandes surfaces." },
      { title: "Intervention en sécurité", description: "Pour les vitres en hauteur ou difficiles d'accès, nous disposons du matériel adapté pour intervenir sans risque." },
      { title: "Programmable à votre rythme", description: "Ponctuel (printemps, automne) ou régulier (mensuel, bimestriel) — nous nous adaptons à votre fréquence idéale." },
    ],
    faq: [
      { question: "Lavez-vous aussi les vitres des étages supérieurs ?", answer: "Oui. Selon la hauteur et l'accessibilité, nous utilisons des perches télescopiques ou des équipements adaptés. Pour les grandes hauteurs, un devis spécifique est établi." },
      { question: "Quelle est la fréquence recommandée ?", answer: "Pour un logement standard, un lavage tous les 3 à 4 mois est idéal. En zone urbaine bruxelloise (pollution, chantiers proches), un passage tous les 2 mois peut être préférable." },
      { question: "Travaillez-vous par mauvais temps ?", answer: "La pluie fine ou le ciel couvert n'empêche pas le travail. En cas de forte pluie ou de vent important, nous reportons pour garantir la qualité du résultat." },
    ],
    ctaText: "Vitres ternes ? Demandez votre devis — on intervient dans toute la région bruxelloise.",
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
