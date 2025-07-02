/**
 * @typedef {object} ServiceStructure
 * @property {string} id - Unique identifier for the service.
 * @property {string} title - The title of the service.
 * @property {string} summary - A brief summary of the service.
 * @property {string} description - Full description of the service.
 * @property {string[]} benefits - Key benefits of the service.
 * @property {string[]} targetAudience - The intended audience for the service (e.g., Communes, EPCI).
 * @property {string} pricingModel - The model used for pricing (e.g., Par habitant, Forfait).
 * @property {number|string} price - The price or cost structure.
 * @property {string} prerequisites - Requirements to benefit from the service.
 * @property {string} contactPerson - Name or role of the contact person.
 * @property {string} adhesionLink - Link to the adhesion process page.
 */

/**
 * @typedef {object} ProductStructure
 * @property {string} id - Unique identifier for the product/prestation.
 * @property {string} title - The title of the product or prestation.
 * @property {string} description - Description of the product or prestation.
 * @property {string} specifications - Technical specifications (for products).
 * @property {string} supplier - The supplier or market holder.
 * @property {string} marketDuration - The duration of the public market.
 * @property {string} marketNumber - The reference number of the public market.
 * @property {string} orderConditions - Conditions for placing an order.
 * @property {string[]} benefits - Advantages of purchasing through the central (e.g., Prix négociés).
 * @property {string} bpuLink - Link to download the Bordereau de Prix Unitaires (BPU).
 * @property {string} orderProcedureLink - Link explaining the order procedure.
 */

/**
 * Basic structure definition for a Service Numérique Mutualisé.
 * @type {ServiceStructure}
 */
const serviceStructure = {
  id: '',
  title: '',
  summary: '',
  description: '',
  benefits: [],
  targetAudience: [],
  pricingModel: '',
  price: '',
  prerequisites: '',
  contactPerson: '',
  adhesionLink: '',
};

/**
 * Basic structure definition for a Product or Prestation from the Centrale d'Achats.
 * @type {ProductStructure}
 */
const productStructure = {
  id: '',
  title: '',
  description: '',
  specifications: '',
  supplier: '',
  marketDuration: '',
  marketNumber: '',
  orderConditions: '',
  benefits: [],
  bpuLink: '',
  orderProcedureLink: '',
};

export { serviceStructure, productStructure };

// Dummy Data

const dummyServices = [
  {
    id: 'srv-001',
    title: 'Hébergement de Sites Web Collectivités',
    summary: 'Service d\'hébergement sécurisé et performant pour les sites web des collectivités locales.',
    description: 'Ce service propose un hébergement mutualisé adapté aux besoins des communes et EPCI, garantissant une haute disponibilité et une sécurité renforcée. Inclus la gestion des certificats SSL et des sauvegardes régulières.',
    benefits: ['Sécurité', 'Performance', 'Souveraineté', 'Support Local'],
    targetAudience: ['Communes', 'EPCI'],
    pricingModel: 'Forfait',
    price: 200, // Example price in Euros/year
    prerequisites: 'Être adhérent au Syndicat Mixte Manche Numérique.',
    contactPerson: 'Sophie Dubois',
    adhesionLink: '/modalites-adhesion',
  },
  {
    id: 'srv-002',
    title: 'Protection Antivirus Mutualisée',
    summary: 'Solution antivirus centralisée et gérée pour les postes de travail et serveurs des collectivités.',
    description: 'Déploiement et gestion d\'une solution antivirus professionnelle sur l\'ensemble du parc informatique de la collectivité. Mises à jour automatiques, surveillance centralisée et alertes en cas de menace.',
    benefits: ['Cybersécurité', 'Simplicité de Gestion', 'Coût Maîtrisé'],
    targetAudience: ['Communes', 'EPCI', 'Agents'],
    pricingModel: 'Par poste / an',
    price: 15, // Example price in Euros/poste/year
    prerequisites: 'Connexion au réseau départemental ou VPN Manche Numérique.',
    contactPerson: 'Marc Lefevre',
    adhesionLink: '/modalites-adhesion',
  },
];

const dummyProducts = [
  {
    id: 'prod-001',
    title: 'Ordinateur Portable Standard',
    description: 'Poste de travail mobile performant pour les agents.',
    specifications: 'Processeur Intel Core i5, 8Go RAM, 256Go SSD, Écran 14 pouces.',
    supplier: 'Tech Solutions',
    marketDuration: '4 ans',
    marketNumber: 'MN-ACHAT-2023-001',
    orderConditions: 'Commande via bon de commande spécifique à envoyer au fournisseur. Minimum 5 unités.',
    benefits: ['Prix négociés', 'Conformité juridique', 'Gain de temps'],
    bpuLink: '/docs/BPU_MN-ACHAT-2023-001.pdf',
    orderProcedureLink: '/achats/commander#prod-001',
  },
  {
    id: 'prod-002',
    title: 'Suite Logicielle Bureautique',
    description: 'Licences pour suite bureautique complète.',
    specifications: 'Inclut traitement de texte, tableur, présentation, gestion d\'emails.',
    supplier: 'Software fournisse',
    marketDuration: '3 ans',
    marketNumber: 'MN-ACHAT-2022-005',
    orderConditions: 'Commande par lot de 10 licences minimum. Contrat de maintenance inclus.',
    benefits: ['Tarifs préférentiels', 'Licences mutualisées', 'Support fournisseur'],
    bpuLink: '/docs/BPU_MN-ACHAT-2022-005.pdf',
    orderProcedureLink: '/achats/commander#prod-002',
  },
];

export { serviceStructure, productStructure, dummyServices, dummyProducts };