export type Lang = 'fr' | 'en';
export type Text = Record<Lang, string>;

export const EMAIL = 'salahzirari1@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/salaheddine-zirari';

export const nav = [
  { id: 'work', label: { fr: 'Projets', en: 'Work' } },
  { id: 'path', label: { fr: 'Parcours', en: 'Experience' } },
  { id: 'skills', label: { fr: 'Compétences', en: 'Skills' } },
  { id: 'contact', label: { fr: 'Contact', en: 'Contact' } },
] satisfies { id: string; label: Text }[];

export const hero = {
  status: {
    fr: "Lyon, France · Recherche un stage d'un an · 1 semaine école / 2 semaines entreprise",
    en: 'Lyon, France · Looking for a one-year internship · 1 week at school / 2 weeks at work',
  },
  role: { fr: 'Tech lead full stack · .NET & Azure', en: 'Full-stack tech lead · .NET & Azure' },
  pitch: {
    fr: "4 ans à construire des systèmes distribués sur .NET, du code à l'infrastructure Azure. Mon dernier projet : une plateforme qui ingère chaque jour plusieurs millions de points de données du marché européen de l'énergie.",
    en: '4 years building distributed systems on .NET, from the code to the Azure infrastructure. My latest project is a platform that ingests several million European energy-market data points every day.',
  },
  contactCta: { fr: 'Me contacter', en: 'Get in touch' },
  wave: { fr: '50 Hz · fréquence du réseau électrique européen', en: '50 Hz · European power grid frequency' },
} satisfies Record<string, Text>;

export const figures: { value: string; label: Text }[] = [
  { value: '4', label: { fr: "ans d'expérience", en: 'years of experience' } },
  { value: '20+', label: { fr: 'sources de marché intégrées', en: 'market data sources integrated' } },
  { value: 'Millions', label: { fr: 'de points de données par jour', en: 'of data points per day' } },
  { value: '4', label: { fr: 'développeurs encadrés', en: 'developers led' } },
];

export const featured = {
  meta: 'NOPO · Technical Lead · 2023 – 2026',
  title: { fr: "Plateforme de données du marché européen de l'énergie", en: 'European energy-market data platform' },
  lede: {
    fr: "Référent technique d'une startup de 10 personnes. J'ai porté le projet de bout en bout : code, bases de données, infrastructure et DevOps, avec une équipe de 4 développeurs.",
    en: 'Technical lead at a 10-person startup. I owned the project end to end: code, databases, infrastructure and DevOps, with a team of 4 developers.',
  },
  sources: ['RTE', 'ENTSO-E', 'OTE', 'CEPS', 'JAO', 'EPEX'],
  moreSources: { fr: 'et plus de 14 autres', en: 'and 14+ more' },
  points: [
    {
      title: { fr: 'Ingestion microservices', en: 'Microservice ingestion' },
      body: {
        fr: 'Collecte REST et AMQP, normalisation, puis persistance dans Azure SQL via EF Core.',
        en: 'REST and AMQP collection, normalisation, then persistence to Azure SQL through EF Core.',
      },
    },
    {
      title: { fr: 'Formats et sécurité propres à chaque opérateur', en: 'Per-operator formats and security' },
      body: {
        fr: 'Authentification double certificat (TLS et signature XML), parsing des formats propriétaires de chaque opérateur.',
        en: "Dual-certificate authentication (TLS and XML signature), parsers for each operator's proprietary format.",
      },
    },
    {
      title: { fr: 'Jours de 23 h et de 25 h', en: '23-hour and 25-hour days' },
      body: {
        fr: "Gestion du changement d'heure sur chaque série temporelle, pour que les données de marché restent alignées.",
        en: 'Daylight-saving transitions handled on every time series, so market data stays aligned.',
      },
    },
    {
      title: { fr: 'Performance et sécurité SQL', en: 'SQL performance and security' },
      body: {
        fr: 'Optimisation des requêtes, gestion de la concurrence EF, audit de sécurité SQL Server (permissions, Resource Locks).',
        en: 'Query tuning, EF concurrency handling, SQL Server security audit (permissions, Resource Locks).',
      },
    },
    {
      title: { fr: 'Déploiement', en: 'Deployment' },
      body: {
        fr: 'Azure App Services et VMs Linux (systemd), pipelines CI/CD sur Azure DevOps.',
        en: 'Azure App Services and Linux VMs (systemd), CI/CD pipelines on Azure DevOps.',
      },
    },
    {
      title: { fr: 'Monitoring de production', en: 'Production monitoring' },
      body: {
        fr: 'Surveillance des endpoints avec alertes desktop et mobile, supervision via ELK et Kibana.',
        en: 'Endpoint monitoring with desktop and mobile alerts, observability through ELK and Kibana.',
      },
    },
  ],
  tags: ['C#', '.NET', 'EF Core', 'Azure SQL', 'RabbitMQ', 'Hangfire', 'Azure DevOps', 'ELK'],
};

export const otherWork: { meta: string; title: Text; body: Text; tags: string[] }[] = [
  {
    meta: 'Reecho · Fullstack Developer · 2022 – 2023',
    title: { fr: 'Plateforme de gestion pour le portage salarial', en: 'Management platform for an umbrella company' },
    body: {
      fr: 'Profils consultants, missions, référencement et finances. APIs ASP.NET Core, interface React, modélisation SQL Server et mise en production.',
      en: 'Consultant profiles, assignments, client listings and finances. ASP.NET Core APIs, React front end, SQL Server data model and production rollout.',
    },
    tags: ['ASP.NET Core', 'React', 'SQL Server'],
  },
  {
    meta: 'Freelance · 2023 – 2025',
    title: { fr: 'Développement backend sur mesure', en: 'Custom backend development' },
    body: {
      fr: "Services backend, conception d'APIs et solutions sur mesure pour des clients externes, en parallèle de mon poste chez NOPO.",
      en: 'Backend services, API design and custom solutions for external clients, alongside my role at NOPO.',
    },
    tags: ['.NET', 'REST APIs'],
  },
];

const education: Text = { fr: 'Formation', en: 'Education' };
const work: Text = { fr: 'Expérience', en: 'Work' };

export const timeline: { years: string; kind: Text; title: Text; detail: Text }[] = [
  {
    years: '2026 – 2028',
    kind: education,
    title: {
      fr: "Mastère Expert en Informatique et Système d'Information",
      en: "Master's, IT and Information Systems Expert",
    },
    detail: { fr: 'EPSI Lyon · RNCP 7', en: 'EPSI Lyon · RNCP 7' },
  },
  {
    years: '2023 – 2026',
    kind: work,
    title: { fr: 'Technical Lead · NOPO', en: 'Technical Lead · NOPO' },
    detail: {
      fr: 'Stack backend, équipe de 4 développeurs, code reviews et onboarding.',
      en: 'Backend stack, team of 4 developers, code reviews and onboarding.',
    },
  },
  {
    years: '2023 – 2025',
    kind: work,
    title: { fr: 'Freelance Software Developer', en: 'Freelance Software Developer' },
    detail: { fr: 'Services backend et APIs pour des clients externes.', en: 'Backend services and APIs for external clients.' },
  },
  {
    years: '2022 – 2023',
    kind: work,
    title: { fr: 'Fullstack Developer · Reecho', en: 'Fullstack Developer · Reecho' },
    detail: { fr: 'Conseil technologique et livraison de logiciels.', en: 'Technology consulting and software delivery.' },
  },
  {
    years: '2022 – 2023',
    kind: education,
    title: { fr: 'Bachelor Génie Logiciel', en: "Bachelor's in Software Engineering" },
    detail: { fr: 'ESRMI · Rabat', en: 'ESRMI · Rabat' },
  },
];

const same = (s: string): Text => ({ fr: s, en: s });

export const skills: { title: Text; items: Text[] }[] = [
  {
    title: { fr: 'Langages et frameworks', en: 'Languages and frameworks' },
    items: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'TypeScript', 'JavaScript', 'React', 'SQL'].map(same),
  },
  {
    title: { fr: 'Infrastructure et DevOps', en: 'Infrastructure and DevOps' },
    items: ['Azure App Services', 'Azure SQL', 'Azure VMs', 'Azure DevOps', 'CI/CD', 'Linux', 'systemd', 'RabbitMQ', 'AMQP', 'Hangfire'].map(same),
  },
  {
    title: same('Architecture'),
    items: [
      same('Microservices'),
      { fr: 'Systèmes distribués', en: 'Distributed systems' },
      ...['REST APIs', 'SOLID', 'Design patterns', 'Agile', 'Scrum'].map(same),
    ],
  },
  {
    title: { fr: 'Encadrement', en: 'Leadership' },
    items: [
      { fr: 'Responsabilité technique', en: 'Technical ownership' },
      { fr: "Organisation d'équipe", en: 'Team organisation' },
      same('Code review'),
      { fr: 'Intégration de développeurs', en: 'Onboarding developers' },
    ],
  },
];

export const languages: { name: Text; level: Text }[] = [
  { name: { fr: 'Arabe', en: 'Arabic' }, level: { fr: 'langue maternelle', en: 'native' } },
  { name: { fr: 'Français', en: 'French' }, level: { fr: 'courant', en: 'fluent' } },
  { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'courant', en: 'fluent' } },
];

export const contact = {
  title: {
    fr: 'Vous cherchez un stagiaire qui a déjà mené des projets en production ?',
    en: 'Looking for an intern who has already shipped to production?',
  },
  body: {
    fr: "Disponible pour un stage conventionné d'un an à Lyon, en rythme 1 semaine école / 2 semaines entreprise.",
    en: 'Available for a one-year internship in Lyon, alternating 1 week at school and 2 weeks at the company.',
  },
  copy: { fr: 'Copier', en: 'Copy' },
  copied: { fr: 'Copié', en: 'Copied' },
} satisfies Record<string, Text>;
