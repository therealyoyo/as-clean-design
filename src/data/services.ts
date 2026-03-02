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
    heroSubtitle: "Partez l'esprit tranquille et maximisez vos chances de récupérer votre caution.",
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
    intro: "Votre note Airbnb ou Booking dépend en grande partie de la propreté perçue par vos voyageurs. Un entre-deux négligé suffit à faire plonger votre score. A.S. Cleaning Services propose un service dédié aux hôtes : rapide, fiable, calé sur vos arrivées et départs et ce même en dernière minute.",
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
      { title: "Cadencé sur vos check-in / check-out", description: "On s'intègre à votre calendrier de réservations. Vous nous communiquez vos créneaux, on assure le passage, sans que vous ayez à gérer chaque fois." },
      { title: "Réactivité express", description: "Départ imprévu, check-in avancé ? Nous faisons notre possible pour nous adapter aux aléas de la location courte durée." },
      { title: "Protégez votre investissement", description: "Un logement systématiquement propre préserve vos équipements, votre note et la confiance de la plateforme." },
    ],
    faq: [
      { question: "Pouvez-vous gérer plusieurs logements Airbnb en même temps ?", answer: "Oui. Nous pouvons travaillez avec des hôtes multi-propriétés à Bruxelles et environs. Un interlocuteur unique gère l'ensemble de vos biens ce qui facilite la gestion" },
      { question: "Que se passe-t-il si un voyageur laisse le logement en très mauvais état ?", answer: "Dans ce cas, nous vous contactons pour évaluer le temps supplémentaire nécessaire et ajuster la facturation en transparence. Pas de surprises." },
      { question: "Faites-vous du linge de lit et serviettes ?", answer: "Nous pouvons nous charger du changement et de la mise en place si vous fournissez le linge propre sur place. La prestation de blanchisserie externalisée est disponible sur demande." },
    ],
    ctaText: "Gérez vos locations sans stress. Demandez un devis adapté à votre rythme, réponse sous 24h.",
  },
  {
    slug: "apres-travaux",
    heroTitle: "Nettoyage après travaux",
    heroSubtitle: "Vos travaux sont terminés. Notre travail commence et vous pouvez enfin profiter de votre intérieur.",
    intro: "Rénovation, peinture, carrelage, pose de parquet, ... chaque chantier laisse derrière lui une couche de poussière, de résidus et de salissures tenaces qui demandent bien plus qu'un simple coup de balai. Nos équipes sont équipées pour gérer le nettoyage post-travaux dans les logements, quelle que soit l'ampleur du chantier.",
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
      { title: "Matériel adapté aux surfaces neuves", description: "Parquet fraîchement posé, carrelage neuf, peinture récente, ...  nous utilisons des produits et techniques qui nettoient sans endommager." },
      { title: "Coordination avec vos artisans", description: "Nous pouvons intervenir dès la fin d'un corps de métier ou à la toute fin du chantier selon votre planning." },
      { title: "Un logement prêt à habiter", description: "À notre départ, votre logement est propre, sain et prêt à être investi ou remis en location." },
    ],
    faq: [
      { question: "À quel moment de la rénovation faut-il prévoir le nettoyage ?", answer: "Idéalement après le dernier corps de métier et avant votre emménagement ou l'état des lieux. Pour les grands chantiers, un nettoyage intermédiaire peut être prévu." },
      { question: "Pouvez-vous évacuer les déchets de chantier ?", answer: "Nous gérons les petits déchets résiduels (sacs, cartons, emballages). Pour des volumes importants (gravats, plaques), nous recommandons de prévoir une benne avec votre entrepreneur." },
    ],
    ctaText: "Chantier terminé ? Demandez votre devis, réponse sous 24h",
  },
  {
    slug: "lavage-vitres",
    heroTitle: "Lavage de vitres à domicile",
    heroSubtitle: "Des vitres impeccables, sans traces, intérieur comme extérieur par des professionnels.",
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
      { title: "Programmable à votre rythme", description: "Ponctuel (printemps, automne) ou régulier (mensuel, bimestriel),  nous nous adaptons à votre fréquence idéale." },
    ],
    faq: [
      { question: "Lavez-vous aussi les vitres des étages supérieurs ?", answer: "Oui. Selon la hauteur et l'accessibilité, nous utilisons des perches télescopiques ou des équipements adaptés. Pour les grandes hauteurs, un devis spécifique est établi." },
      { question: "Quelle est la fréquence recommandée ?", answer: "Pour un logement standard, un lavage tous les 3 à 4 mois est idéal. En zone urbaine bruxelloise (pollution, chantiers proches), un passage tous les 2 mois peut être préférable." },
      { question: "Travaillez-vous par mauvais temps ?", answer: "La pluie fine ou le ciel couvert n'empêche pas le travail. En cas de forte pluie ou de vent important, nous reportons pour garantir la qualité du résultat." },
    ],
    ctaText: "Vitres ternes ? Demandez votre devis, on intervient dans toute la région bruxelloise et environs",
  },

  {
    slug: "entretien-bureaux",
    heroTitle: "Entretien régulier de bureaux à Bruxelles",
    heroSubtitle: "Un espace de travail propre chaque matin, sans que vous ayez à y penser.",
    intro: "Un bureau propre inspire confiance à vos collaborateurs comme à vos clients. A.S. Cleaning Services prend en charge l'entretien régulier de vos locaux professionnels : quotidien, hebdomadaire ou sur mesure. Vous définissez la fréquence, on assure le résultat.",
    inclusions: [
      "Aspiration et lavage de tous les types de sols (moquette, carrelage, parquet)",
      "Dépoussiérage des bureaux, postes de travail et mobilier",
      "Nettoyage et désinfection des sanitaires",
      "Vidage des corbeilles et remplacement des sacs",
      "Nettoyage des espaces communs (couloirs, salles de réunion, kitchenette)",
      "Désinfection des surfaces à contact fréquent (poignées, interrupteurs, claviers sur demande)",
      "Nettoyage des vitres intérieures et cloisons vitrées",
    ],
    avantages: [
      {
        title: "Un interlocuteur unique",
        description: "Un seul contact suit votre dossier de bout en bout. Il connaît vos locaux, vos horaires et vos exigences. Vous n'expliquez jamais deux fois.",
      },
      {
        title: "Intervention hors heures de bureau",
        description: "Nos équipes interviennent avant votre ouverture, après votre fermeture ou le week-end selon ce qui perturbe le moins votre activité.",
      },
      {
        title: "Fréquence ajustable",
        description: "Vos besoins évoluent ? La fréquence et le périmètre de l'entretien s'ajustent sans renégocier un contrat entier.",
      },
    ],
    faq: [
      {
        question: "Quelle est la fréquence minimale recommandée pour un bureau ?",
        answer: "Pour un bureau occupé quotidiennement, nous recommandons un passage minimum 2 à 3 fois par semaine. Pour les espaces très fréquentés ou les open spaces, un passage quotidien est idéal. Nous adaptons la fréquence à votre budget et à votre usage réel.",
      },
      {
        question: "Nos employés doivent-ils être présents lors du nettoyage ?",
        answer: "Non. La grande majorité de nos interventions se font en dehors des heures de travail. Nous gérons l'accès avec vous en amont et nos équipes travaillent en autonomie complète.",
      },
      {
        question: "Que se passe-t-il si nous ne sommes pas satisfaits d'un passage ?",
        answer: "Vous nous le signalez et nous revenons pour corriger. Votre satisfaction à chaque intervention est notre engagement.",
      },
      {
        question: "Travaillez-vous avec des petites structures ou uniquement des grandes entreprises ?",
        answer: "Nous travaillons avec toutes les tailles de structures, d'un cabinet de 2 personnes à un open space de plusieurs centaines de m². Le devis est toujours adapté à votre réalité.",
      },
    ],
    ctaText: "Demandez un devis pour l'entretien de vos bureaux. Un interlocuteur vous répond sous 24h.",
  },

  {
    slug: "locaux-commerciaux",
    heroTitle: "Nettoyage de locaux commerciaux à Bruxelles",
    heroSubtitle: "L'image de votre commerce commence par la propreté de votre espace.",
    intro: "Boutique, showroom, agence, espace d'accueil : vos locaux commerciaux sont le premier contact visuel avec vos clients. Un espace impeccable renforce la confiance et valorise votre offre. A.S. Cleaning Services intervient dans vos locaux bruxellois avec un service adapté à votre secteur, votre fréquentation et vos horaires.",
    inclusions: [
      "Nettoyage quotidien ou régulier des surfaces de vente et d'accueil",
      "Lavage des vitrines et parois vitrées intérieures",
      "Entretien des sols (carrelage, béton ciré, vinyle, moquette)",
      "Désinfection des zones de caisse et surfaces à contact fréquent",
      "Nettoyage des cabines d'essayage, vestiaires et sanitaires clients",
      "Entretien des espaces de stockage et zones back-office",
      "Gestion des déchets et remplacement des consommables",
    ],
    avantages: [
      {
        title: "Adapté à vos horaires d'ouverture",
        description: "Nous intervenons avant l'ouverture ou après la fermeture pour que votre commerce soit impeccable à chaque début de journée sans perturber votre activité.",
      },
      {
        title: "Une image soignée en permanence",
        description: "Dans un espace commercial, la propreté est perçue instantanément par le client. Nos équipes maintiennent un niveau de présentation constant qui valorise votre enseigne.",
      },
      {
        title: "Réactivité en cas d'imprévu",
        description: "Événement de dernière minute, forte affluence, incident ? Contactez votre interlocuteur directement et nous organisons un passage supplémentaire dans les meilleurs délais.",
      },
    ],
    faq: [
      {
        question: "Intervenez-vous aussi le dimanche pour les commerces ouverts 7j/7 ?",
        answer: "Oui. Nous planifions les interventions en fonction de vos jours et horaires d'ouverture, y compris le dimanche et les jours fériés.",
      },
      {
        question: "Pouvez-vous nettoyer les vitrines extérieures ?",
        answer: "Le nettoyage des vitrines extérieures est inclus sur demande. Vous pouvez l'ajouter à votre contrat d'entretien régulier ou le commander en prestation ponctuelle.",
      },
      {
        question: "Nous avons un sol spécifique (béton ciré, marbre, vinyle). Êtes-vous équipés ?",
        answer: "Oui. Nos équipes sont formées au traitement des différents types de sols commerciaux. Nous précisons le type de revêtement lors de la visite initiale pour adapter les produits et techniques utilisés.",
      },
      {
        question: "Que se passe-t-il si nous ne sommes pas satisfaits ?",
        answer: "Vous nous le signalez et nous revenons pour corriger. Votre satisfaction est notre priorité à chaque passage.",
      },
    ],
    ctaText: "Votre commerce mérite un entretien à la hauteur de votre image. Demandez un devis sous 24h.",
  },

  {
    slug: "ecoles",
    heroTitle: "Nettoyage d'écoles et établissements scolaires à Bruxelles",
    heroSubtitle: "Un environnement propre et sain pour que les élèves et le personnel travaillent dans les meilleures conditions.",
    intro: "Les établissements scolaires accueillent chaque jour des dizaines à des centaines de personnes dans des espaces partagés. Classes, couloirs, sanitaires, réfectoires : chaque zone exige un niveau d'hygiène rigoureux. A.S. Cleaning Services intervient dans les écoles bruxelloises avec des protocoles adaptés aux contraintes du secteur éducatif.",
    inclusions: [
      "Nettoyage et désinfection des salles de classe (sols, bureaux, tableaux, poignées)",
      "Entretien des couloirs, halls d'entrée et escaliers",
      "Désinfection approfondie des sanitaires et vestiaires",
      "Nettoyage du réfectoire et des espaces de restauration",
      "Entretien des salles informatiques et de sport",
      "Vidage des corbeilles et gestion des déchets",
      "Nettoyage des surfaces vitrées et des portes d'entrée",
    ],
    avantages: [
      {
        title: "Protocoles adaptés au milieu scolaire",
        description: "Nos équipes connaissent les exigences sanitaires spécifiques aux environnements accueillant des enfants. Produits adaptés, zones prioritaires identifiées, protocoles constants.",
      },
      {
        title: "Intervention en dehors des heures de cours",
        description: "Nous intervenons le matin avant l'arrivée des élèves, en fin d'après-midi ou le week-end pour ne jamais perturber le fonctionnement de l'établissement.",
      },
      {
        title: "Suivi régulier et communication directe",
        description: "Un interlocuteur dédié assure le suivi de votre établissement. Toute remarque du personnel ou de la direction est traitée directement et rapidement.",
      },
    ],
    faq: [
      {
        question: "Intervenez-vous pendant les vacances scolaires ?",
        answer: "Oui, les vacances sont souvent le meilleur moment pour effectuer un nettoyage en profondeur des locaux. Nous proposons des prestations de grand nettoyage spécifiques aux périodes de fermeture.",
      },
      {
        question: "Les produits utilisés sont-ils sans danger pour les enfants ?",
        answer: "Nous utilisons des produits professionnels dont nous précisons la composition sur demande. Les interventions sont planifiées hors présence des élèves pour garantir leur sécurité.",
      },
      {
        question: "Pouvez-vous gérer plusieurs bâtiments sur un même site scolaire ?",
        answer: "Oui. Nous établissons un plan d'intervention global pour les sites multi-bâtiments, avec une coordination centralisée et un seul interlocuteur pour l'ensemble.",
      },
    ],
    ctaText: "Votre établissement mérite un partenaire fiable. Contactez-nous pour un devis adapté à votre école.",
  },

  {
    slug: "medical",
    heroTitle: "Nettoyage du secteur médical et des cabinets à Bruxelles",
    heroSubtitle: "Hygiène irréprochable et protocoles stricts pour les environnements de soins.",
    intro: "Dans un cabinet médical, une clinique ou un espace paramédical, la propreté n'est pas une option : c'est une exigence fondamentale pour la sécurité des patients et du personnel. A.S. Cleaning Services applique des protocoles de nettoyage et de désinfection rigoureux, adaptés aux normes du secteur de la santé.",
    inclusions: [
      "Désinfection des salles de consultation et surfaces de soins",
      "Nettoyage et désinfection des sanitaires patients et personnel",
      "Entretien des salles d'attente et espaces d'accueil",
      "Désinfection des poignées, interrupteurs et surfaces à contact fréquent",
      "Nettoyage des sols avec produits désinfectants homologués",
      "Gestion hygiénique des déchets (hors déchets médicaux réglementés)",
      "Nettoyage des vitrages et cloisons de séparation",
    ],
    avantages: [
      {
        title: "Rigueur et méthode à chaque intervention",
        description: "Nous sélectionnons des professionnels habitués aux environnements exigeants. Chaque passage suit un protocole structuré couvrant les zones prioritaires d'un espace médical.",
      },
      {
        title: "Discrétion et professionnalisme",
        description: "Nous intervenons avec le respect du contexte médical : discrétion absolue, comportement professionnel, respect de la confidentialité des espaces.",
      },
      {
        title: "Disponibilité adaptée aux horaires de consultation",
        description: "Interventions tôt le matin, en soirée ou entre deux plages de consultation pour ne jamais gêner l'accueil des patients.",
      },
    ],
    faq: [
      {
        question: "Gérez-vous l'élimination des déchets médicaux ?",
        answer: "Non. L'élimination des déchets médicaux réglementés relève d'opérateurs agréés spécialisés. Nous prenons en charge les déchets ménagers et assimilés générés par l'activité courante du cabinet.",
      },
      {
        question: "Quels types de cabinets servez-vous ?",
        answer: "Nous intervenons pour les médecins généralistes, spécialistes, dentistes, kinésithérapeutes, ostéopathes, psychologues et tout professionnel de santé disposant de locaux à entretenir à Bruxelles.",
      },
      {
        question: "Utilisez-vous des produits désinfectants spécifiques ?",
        answer: "Oui. Nous utilisons des produits désinfectants adaptés aux surfaces médicales. La liste des produits utilisés est communiquée sur demande pour validation par votre équipe.",
      },
    ],
    ctaText: "La sécurité de vos patients commence par des locaux irréprochables. Demandez un devis sous 24h.",
  },

  {
    slug: "restaurants",
    heroTitle: "Nettoyage de restaurants et secteur horeca à Bruxelles",
    heroSubtitle: "Des normes d'hygiène irréprochables pour protéger vos clients et votre réputation.",
    intro: "Dans la restauration, l'hygiène est une obligation légale autant qu'un argument commercial. Une cuisine mal entretenue expose vos clients à des risques et votre établissement à des sanctions. A.S. Cleaning Services propose un service de nettoyage horeca rigoureux, adapté aux contraintes des établissements.",
    inclusions: [
      "Nettoyage en profondeur de la cuisine professionnelle (plans de travail, équipements, sols)",
      "Dégraissage des hottes, filtres et zones de cuisson",
      "Désinfection des surfaces alimentaires et zones de préparation",
      "Nettoyage de la salle, mobilier et équipements clients",
      "Entretien des sanitaires clients et du personnel",
      "Nettoyage des vitrages, façades et espaces d'entrée",
      "Gestion des déchets et entretien des zones de stockage",
    ],
    avantages: [
      {
        title: "Conforme aux normes HACCP",
        description: "Nos protocoles de nettoyage en cuisine sont alignés sur les exigences HACCP. Vous disposez d'un espace de préparation alimentaire propre et conforme à chaque ouverture.",
      },
      {
        title: "Intervention après le service",
        description: "Nous intervenons après votre fermeture pour que cuisine et salle soient prêtes dès l'ouverture du lendemain, sans aucune contrainte pour votre équipe.",
      },
      {
        title: "Protection de votre réputation",
        description: "Un établissement propre se voit, se sent et s'entend. Les avis clients mentionnent systématiquement l'hygiène. Protégez votre note en confiant l'entretien à des professionnels.",
      },
    ],
    faq: [
      {
        question: "Intervenez-vous aussi pour les food trucks et dark kitchens ?",
        answer: "Oui. Nous adaptons notre service à tous les formats de restauration : restaurant traditionnel, brasserie, fast food, dark kitchen, food truck disposant d'un espace fixe.",
      },
      {
        question: "À quelle fréquence faut-il nettoyer une cuisine professionnelle ?",
        answer: "Un nettoyage quotidien de la cuisine est indispensable. Un nettoyage en profondeur hebdomadaire ou mensuel (dégraissage des hottes, nettoyage des fours, traitement des sols) complète l'entretien courant.",
      },
      {
        question: "Pouvez-vous intervenir en urgence avant une inspection sanitaire ?",
        answer: "Nous faisons notre possible pour répondre aux demandes urgentes. Contactez-nous directement par téléphone pour les situations urgentes.",
      },
    ],
    ctaText: "Votre cuisine doit être irréprochable à chaque service. Demandez un devis adapté à votre établissement.",
  },

  {
    slug: "parkings",
    heroTitle: "Nettoyage de parkings et garages à Bruxelles",
    heroSubtitle: "Un parking propre valorise votre immeuble et améliore la sécurité de ses utilisateurs.",
    intro: "Les parkings et garages accumulent huile, poussières, résidus de pneus et déchets qui dégradent l'image de votre bâtiment et peuvent représenter des risques pour les usagers. A.S. Cleaning Services assure l'entretien régulier et le nettoyage en profondeur des parkings bruxellois, souterrains comme en surface.",
    inclusions: [
      "Balayage mécanique ou manuel des allées et places de stationnement",
      "Lavage haute pression des sols béton et asphalte",
      "Traitement des taches d'huile et de carburant",
      "Nettoyage des colonnes, murs et signalétique",
      "Entretien des cages d'escalier et ascenseurs du parking",
      "Nettoyage des postes de contrôle et cabines de péage",
      "Ramassage des déchets et gestion des corbeilles",
    ],
    avantages: [
      {
        title: "Matériel adapté aux grandes surfaces",
        description: "Nos équipes utilisent des autolaveuses et du matériel de nettoyage adapté aux volumes importants pour un résultat efficace et homogène sur toute la surface.",
      },
      {
        title: "Intervention sans perturber les usagers",
        description: "Nous planifions les interventions aux heures creuses ou de nuit pour que le parking reste accessible pendant l'essentiel du nettoyage.",
      },
      {
        title: "Valorisation de votre patrimoine",
        description: "Un parking propre améliore l'image générale de votre immeuble ou centre commercial et contribue au confort et à la sécurité de ses utilisateurs.",
      },
    ],
    faq: [
      {
        question: "Intervenez-vous pour les parkings privés en copropriété ?",
        answer: "Oui. Nous travaillons régulièrement avec des syndics pour l'entretien des parkings de copropriétés bruxelloises. Un devis global peut inclure à la fois les parties communes de l'immeuble et le parking.",
      },
      {
        question: "Pouvez-vous traiter les taches d'huile anciennes et incrustées ?",
        answer: "Oui, avec des produits dégraissants professionnels et un nettoyage haute pression. Les taches très anciennes peuvent nécessiter un traitement spécifique que nous évaluons lors de la visite.",
      },
      {
        question: "Quelle est la fréquence recommandée pour un parking ?",
        answer: "Pour un parking résidentiel, un passage hebdomadaire ou bimensuel est généralement suffisant. Pour un parking commercial à forte fréquentation, un passage quotidien peut être nécessaire. Nous dimensionnons le service selon votre trafic.",
      },
    ],
    ctaText: "Votre parking mérite le même soin que le reste de votre immeuble. Demandez un devis sous 24h.",
  },

  {
    slug: "apres-chantier",
    heroTitle: "Nettoyage après chantier et fin de travaux à Bruxelles",
    heroSubtitle: "Votre chantier est livré. On prend le relais pour que vos locaux soient prêts à être utilisés.",
    intro: "Un chantier terminé laisse toujours derrière lui une quantité importante de poussières, résidus et salissures qui demandent une intervention spécialisée. Que ce soit pour une rénovation de bureaux, un aménagement commercial ou une construction neuve, A.S. Cleaning Services assure le nettoyage de fin de chantier pour les professionnels bruxellois.",
    inclusions: [
      "Élimination complète des poussières de plâtre, sciure et résidus de matériaux",
      "Nettoyage des sols neufs sans risque d'endommagement (carrelage, parquet, béton)",
      "Décroutage des vitrages (projections de peinture, colle, plâtre)",
      "Dépoussiérage en hauteur (plafonds, faux-plafonds, gaines apparentes)",
      "Nettoyage des équipements sanitaires et de cuisine nouvellement installés",
      "Élimination des résidus de colle, joints, silicone et adhésifs",
      "Évacuation des petits déchets de chantier résiduels",
    ],
    avantages: [
      {
        title: "Intervention coordonnée avec vos corps de métier",
        description: "Nous nous positionnons en fin de chantier ou entre deux phases de travaux selon votre planning. Une coordination simple pour que le nettoyage ne bloque jamais la livraison.",
      },
      {
        title: "Matériel adapté aux surfaces neuves",
        description: "Parquet fraîchement posé, carrelage neuf, peinture récente : nous utilisons des produits et techniques qui nettoient sans endommager les finitions.",
      },
      {
        title: "Locaux prêts à être livrés ou occupés",
        description: "À notre départ, vos locaux sont propres, sains et prêts à accueillir vos équipes ou à être remis à votre client. Aucun délai supplémentaire.",
      },
    ],
    faq: [
      {
        question: "Quelle est la différence entre le nettoyage après chantier et le grand ménage classique ?",
        answer: "Le nettoyage après chantier est plus technique et exige du matériel spécifique pour traiter les poussières fines, les résidus de colle et les projections sur surfaces neuves. Un grand ménage classique ne suffit pas pour ces situations.",
      },
      {
        question: "Pouvez-vous intervenir sur des chantiers en cours ou uniquement à la fin ?",
        answer: "Les deux sont possibles. Pour les grands chantiers, un nettoyage intermédiaire après le gros oeuvre facilite le travail des corps de métier suivants. Nous adaptons l'intervention à votre phasage.",
      },
      {
        question: "Intervenez-vous aussi pour les particuliers après des travaux de rénovation ?",
        answer: "Oui. Ce service est disponible pour les particuliers comme pour les professionnels. Le devis est établi après une visite ou un échange détaillé sur l'étendue des travaux réalisés.",
      },
    ],
    ctaText: "Chantier terminé ? Contactez-nous pour un devis rapide. Intervention possible dès cette semaine.",
  },

  {
    slug: "vitres-facades",
    heroTitle: "Nettoyage de vitres et façades commerciales à Bruxelles",
    heroSubtitle: "Des vitrages impeccables qui valorisent votre enseigne et l'image de votre bâtiment.",
    intro: "Les vitrages et façades d'un bâtiment commercial sont sa carte de visite. Encrassés ou tachés, ils dégradent immédiatement la perception de votre entreprise. A.S. Cleaning Services assure le lavage de vitres et le nettoyage de façades pour les commerces, immeubles de bureaux et bâtiments professionnels bruxellois.",
    inclusions: [
      "Lavage intérieur et extérieur de tous les vitrages en façade",
      "Nettoyage des châssis, cadres et joints de fenêtres",
      "Traitement des baies vitrées, cloisons et verrières",
      "Nettoyage des enseignes et caissons lumineux sur demande",
      "Nettoyage des façades (pierre, béton, bardage) sur devis spécifique",
      "Intervention en hauteur avec matériel adapté",
      "Séchage sans traces avec outils professionnels",
    ],
    avantages: [
      {
        title: "Résultat visible et durable",
        description: "Nos techniciens utilisent des outils professionnels et de l'eau traitée pour un résultat sans traces visible immédiatement, même sur les grandes surfaces vitrées.",
      },
      {
        title: "Intervention en hauteur sécurisée",
        description: "Nous disposons du matériel nécessaire pour intervenir sur les façades et vitrages en hauteur dans le respect des règles de sécurité.",
      },
      {
        title: "Planifiable à votre fréquence",
        description: "Mensuel, trimestriel ou ponctuel : nous nous adaptons à votre budget et à l'exposition de votre façade pour maintenir une image irréprochable toute l'année.",
      },
    ],
    faq: [
      {
        question: "Jusqu'à quelle hauteur pouvez-vous intervenir ?",
        answer: "Nous intervenons jusqu'à plusieurs étages avec nos équipements standards (perches télescopiques, nacelle sur devis). Pour les très grandes hauteurs, nous établissons un devis spécifique après évaluation sur site.",
      },
      {
        question: "Nettoyez-vous aussi les façades en pierre ou en béton ?",
        answer: "Oui, sur devis spécifique. Le nettoyage de façades en matériaux solides (pierre naturelle, béton, bardage) demande une évaluation préalable pour choisir les techniques et produits adaptés sans endommager le revêtement.",
      },
      {
        question: "Quelle fréquence conseillez-vous pour une vitrine commerciale en centre-ville ?",
        answer: "En zone urbaine bruxelloise, une vitrine commerciale bénéficie idéalement d'un lavage toutes les 2 à 4 semaines selon son exposition et la pollution environnante. Nous pouvons inclure ce service dans un contrat d'entretien global.",
      },
    ],
    ctaText: "Vos façades et vitrages méritent une attention régulière. Demandez un devis sous 24h.",
  },

  {
    slug: "desinfection",
    heroTitle: "Désinfection et nébulisation à Bruxelles",
    heroSubtitle: "Une désinfection en profondeur pour des locaux sains et sécurisés.",
    intro: "Certaines situations exigent bien plus qu'un nettoyage classique : reprise après une épidémie, prévention dans un environnement à risque, assainissement après un incident sanitaire. A.S. Cleaning Services propose des interventions de désinfection et de nébulisation pour les professionnels et institutions bruxelloises.",
    inclusions: [
      "Désinfection complète des surfaces par application manuelle de produits biocides",
      "Nébulisation de l'espace avec produits désinfectants à diffusion aérienne",
      "Traitement prioritaire des zones à contact fréquent (poignées, claviers, rampes)",
      "Désinfection des sanitaires, vestiaires et espaces communs",
      "Traitement des systèmes de ventilation accessibles",
      "Attestation d'intervention disponible sur demande",
    ],
    avantages: [
      {
        title: "Intervention rapide sur demande",
        description: "Nous organisons les interventions de désinfection dans les meilleurs délais, notamment pour les situations urgentes nécessitant une remise en service rapide des locaux.",
      },
      {
        title: "Produits professionnels adaptés",
        description: "Nous utilisons des produits biocides professionnels sélectionnés pour leur efficacité sur les surfaces traitées. La liste des produits est communiquée sur demande.",
      },
      {
        title: "Locaux sécurisés pour vos équipes",
        description: "Après intervention, vos locaux sont aérés et prêts à être réoccupés selon les délais indiqués. Vos collaborateurs reprennent leur activité dans un environnement assaini.",
      },
    ],
    faq: [
      {
        question: "Dans quelles situations recommandez-vous une désinfection par nébulisation ?",
        answer: "La nébulisation est particulièrement adaptée après un cas de maladie contagieuse dans les locaux, avant la réouverture après une longue fermeture, ou comme mesure préventive dans les environnements très fréquentés.",
      },
      {
        question: "Faut-il évacuer les locaux pendant l'intervention ?",
        answer: "Oui. Les locaux doivent être évacués pendant la nébulisation et pendant un délai de ventilation après l'intervention. Nous vous communiquons les délais précis avant chaque mission.",
      },
      {
        question: "Délivrez-vous une attestation après la désinfection ?",
        answer: "Oui, une attestation d'intervention est disponible sur demande. Elle précise la date, les zones traitées et les produits utilisés.",
      },
    ],
    ctaText: "Besoin d'une désinfection de vos locaux ? Contactez-nous pour une intervention rapide.",
  },

  {
    slug: "graffitis",
    heroTitle: "Enlèvement de graffitis à Bruxelles",
    heroSubtitle: "Votre façade retrouve son aspect d'origine, rapidement et sans traces.",
    intro: "Un graffiti sur votre façade, vitrine ou portail dégrade immédiatement l'image de votre bâtiment et peut encourager de nouvelles dégradations si la réaction tarde. A.S. Cleaning Services intervient pour l'enlèvement de graffitis sur tous types de surfaces à Bruxelles, avec les techniques et produits adaptés à chaque matériau.",
    inclusions: [
      "Diagnostic du type de surface et de la peinture pour choisir la technique adaptée",
      "Traitement chimique avec produits anti-graffiti professionnels",
      "Nettoyage haute pression si la surface le permet",
      "Traitement des surfaces poreuses (brique, pierre, béton) sans endommagement",
      "Nettoyage des résidus de traitement et rinçage",
      "Application d'un traitement anti-graffiti préventif sur demande",
    ],
    avantages: [
      {
        title: "Intervention rapide pour limiter les dégâts",
        description: "Plus un graffiti est traité tôt, plus il est facile à enlever. Nous organisons les interventions rapidement pour limiter l'incrustation de la peinture dans le matériau.",
      },
      {
        title: "Techniques adaptées à chaque surface",
        description: "Brique, béton, pierre, métal, verre : chaque matériau requiert une approche différente. Nous évaluons la surface avant toute intervention pour garantir un résultat sans dommage.",
      },
      {
        title: "Protection préventive disponible",
        description: "Après l'enlèvement, nous pouvons appliquer un traitement anti-graffiti qui facilite le nettoyage lors d'éventuelles prochaines dégradations.",
      },
    ],
    faq: [
      {
        question: "Pouvez-vous enlever des graffitis anciens ou très incrustés ?",
        answer: "Nous traitons les graffitis récents comme anciens. Les graffitis anciens peuvent nécessiter plusieurs passages ou des techniques plus intensives. Nous l'évaluons lors de la visite et vous informons avant l'intervention.",
      },
      {
        question: "Le traitement risque-t-il d'abîmer ma façade ?",
        answer: "Non si l'intervention est correctement réalisée. C'est pourquoi nous effectuons toujours un diagnostic préalable et testons les produits sur une zone discrète avant de traiter l'ensemble de la surface.",
      },
      {
        question: "Intervenez-vous aussi sur les véhicules ou le mobilier urbain privé ?",
        answer: "Nous intervenons principalement sur les façades, murs, portails et surfaces fixes des bâtiments. Pour d'autres types de supports, contactez-nous pour évaluer la faisabilité.",
      },
    ],
    ctaText: "Un graffiti sur votre bâtiment ? Contactez-nous rapidement pour une intervention ciblée.",
  },

  {
    slug: "apres-sinistre",
    heroTitle: "Nettoyage après sinistre à Bruxelles",
    heroSubtitle: "Un soutien concret et rapide pour remettre vos locaux en état après un incident.",
    intro: "Dégât des eaux, incendie, inondation ou vandalisme : un sinistre laisse des traces qui dépassent largement ce qu'un nettoyage ordinaire peut traiter. A.S. Cleaning Services intervient après sinistre pour les professionnels et particuliers bruxellois avec les équipements et l'expertise nécessaires pour remettre vos locaux en état dans les meilleurs délais.",
    inclusions: [
      "Pompage et extraction des eaux stagnantes",
      "Nettoyage et assainissement des surfaces touchées (sols, murs, plafonds)",
      "Élimination des résidus de suie, fumée et odeurs après incendie",
      "Traitement anti-moisissures sur les zones humidifiées",
      "Évacuation des matériaux et objets endommagés irrécupérables",
      "Séchage et ventilation accélérée des espaces sinistrés",
      "Rapport d'intervention détaillé pour votre assurance sur demande",
    ],
    avantages: [
      {
        title: "Réactivité en situation d'urgence",
        description: "Nous organisons les interventions après sinistre en priorité. Plus vite les locaux sont traités, plus les dégâts secondaires (moisissures, odeurs, détérioration des matériaux) sont limités.",
      },
      {
        title: "Équipements spécialisés",
        description: "Extraction d'eau, déshumidification, traitement des odeurs : nous disposons du matériel adapté aux situations post-sinistre que l'entretien courant ne permet pas de gérer.",
      },
      {
        title: "Documentation pour votre assurance",
        description: "Nous pouvons établir un rapport d'intervention détaillé utile dans le cadre de votre dossier de sinistre auprès de votre compagnie d'assurance.",
      },
    ],
    faq: [
      {
        question: "Dans quel délai pouvez-vous intervenir après un sinistre ?",
        answer: "Nous traitons les demandes après sinistre en priorité. Contactez-nous directement par téléphone pour les urgences et nous évaluons ensemble les délais d'intervention possibles.",
      },
      {
        question: "Travaillez-vous en coordination avec les assurances ?",
        answer: "Nous pouvons établir les documents nécessaires à votre dossier d'assurance. La coordination avec votre expert en sinistres se fait à votre initiative et nous fournissons les informations nécessaires.",
      },
      {
        question: "Intervenez-vous aussi pour les particuliers après un dégât des eaux ?",
        answer: "Oui. Ce service est disponible pour les particuliers comme pour les professionnels, que ce soit pour un appartement, une maison ou des locaux commerciaux.",
      },
    ],
    ctaText: "Vous venez de subir un sinistre ? Contactez-nous directement par téléphone pour une intervention rapide.",
  },

  {
    slug: "evenementiel",
    heroTitle: "Nettoyage avant et après événement à Bruxelles",
    heroSubtitle: "Votre événement se passe dans un espace impeccable. Après, on s'occupe de tout.",
    intro: "Séminaire, conférence, soirée privée, salon professionnel : chaque événement génère des besoins de nettoyage spécifiques avant et après. A.S. Cleaning Services propose un service de nettoyage événementiel pour les organisateurs et gestionnaires de salles bruxelloises qui veulent s'assurer que l'espace est prêt avant les invités et remis en état après leur départ.",
    inclusions: [
      "Nettoyage complet de la salle avant l'événement (sols, surfaces, sanitaires)",
      "Mise en place et vérification de la propreté générale avant l'arrivée des invités",
      "Passage de nettoyage pendant l'événement sur demande (pour les longues durées)",
      "Nettoyage complet après l'événement (déchets, verres, mobilier, sols)",
      "Remise en état de la salle selon l'état initial ou les exigences du gestionnaire",
      "Nettoyage des sanitaires et espaces communs mobilisés",
      "Évacuation des déchets et tri si requis",
    ],
    avantages: [
      {
        title: "Coordination avec votre planning événementiel",
        description: "Nous calons notre intervention sur votre timing : préparation la veille ou le matin, remise en état dans la nuit ou le lendemain. La flexibilité horaire est au coeur de ce service.",
      },
      {
        title: "Un espace prêt à être restitué",
        description: "Après notre passage, la salle est rendue dans l'état attendu par le propriétaire ou le gestionnaire. Vous évitez les frais de remise en état facturés par le lieu.",
      },
      {
        title: "Service disponible le week-end et les jours fériés",
        description: "La majorité des événements ont lieu en fin de semaine. Nos équipes sont disponibles le samedi et le dimanche pour assurer le nettoyage aux moments où vous en avez besoin.",
      },
    ],
    faq: [
      {
        question: "Pouvez-vous intervenir la nuit après un événement en soirée ?",
        answer: "Oui. Nous planifions des interventions nocturnes pour les événements se terminant tard, afin que la salle soit rendue propre dès le lendemain matin.",
      },
      {
        question: "Intervenez-vous pour des événements de toute taille ?",
        answer: "Oui, du petit séminaire de 20 personnes au salon professionnel de plusieurs centaines de visiteurs. Nous dimensionnons l'équipe en fonction de la taille de l'espace et du volume attendu.",
      },
      {
        question: "Peut-on réserver une intervention récurrente pour une salle qui accueille des événements régulièrement ?",
        answer: "Absolument. Nous proposons des contrats événementiels récurrents pour les gestionnaires de salles avec un tarif adapté à la fréquence des interventions.",
      },
    ],
    ctaText: "Organisez votre événement sans vous soucier du nettoyage. Demandez un devis adapté à votre date.",
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
