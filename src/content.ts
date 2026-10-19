export type Lang = 'fr' | 'en';
export type Text = Record<Lang, string>;

export const EMAIL = 'salahzirari1@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/salaheddine-zirari';
export const SOURCE = 'https://github.com/SalahZirari1/salahzirari1.github.io';

const same = (s: string): Text => ({ fr: s, en: s });

export const nav = {
  expertise: { fr: 'Expertise', en: 'Expertise' },
  work: { fr: 'Projets', en: 'Work' },
  approach: { fr: 'Méthode', en: 'Approach' },
  path: { fr: 'Parcours', en: 'Experience' },
  skills: { fr: 'Compétences', en: 'Skills' },
  contact: { fr: 'Contact', en: 'Contact' },
} satisfies Record<string, Text>;

export const hero = {
  status: { fr: 'Basé à Lyon · Ouvert aux opportunités', en: 'Based in Lyon · Open to opportunities' },
  role: { fr: 'Ingénieur Full Stack & DevOps', en: 'Full-Stack & DevOps Engineer' },
  pitch: {
    fr: "Je conçois, livre et fais tourner des applications de bout en bout : interfaces, APIs, bases de données, pipelines et infrastructure cloud. 4 ans d'expérience, dont 2 à la tête technique d'une plateforme de données en production.",
    en: 'I design, ship and run applications end to end: interfaces, APIs, databases, pipelines and cloud infrastructure. 4 years of experience, including 2 as technical lead of a data platform in production.',
  },
  contactCta: { fr: 'Me contacter', en: 'Get in touch' },
  workCta: { fr: 'Voir les projets', en: 'See my work' },
} satisfies Record<string, Text>;

export const figures: { value: string; label: Text }[] = [
  { value: '4+', label: { fr: "ans d'expérience", en: 'years of experience' } },
  { value: '2', label: { fr: 'ans comme tech lead', en: 'years as tech lead' } },
  { value: '18', label: { fr: 'pipelines CI/CD en production', en: 'CI/CD pipelines in production' } },
  { value: '1200+', label: { fr: 'commits sur le projet principal', en: 'commits on my main project' } },
];

export const expertise: { title: Text; body: Text; items: string[] }[] = [
  {
    title: { fr: 'Développement full stack', en: 'Full-stack development' },
    body: {
      fr: "Des APIs robustes et des interfaces claires, avec un modèle de données pensé pour durer.",
      en: 'Solid APIs and clear interfaces, on top of a data model built to last.',
    },
    items: ['APIs REST', 'React', 'TypeScript', '.NET', 'SQL'],
  },
  {
    title: { fr: 'DevOps et cloud', en: 'DevOps and cloud' },
    body: {
      fr: 'Du commit à la production sans étape manuelle, puis une supervision qui prévient avant les utilisateurs.',
      en: 'From commit to production with no manual steps, then monitoring that warns you before users do.',
    },
    items: ['CI/CD', 'Azure', 'Linux', 'Monitoring', 'Infrastructure'],
  },
  {
    title: { fr: 'Lead technique', en: 'Technical leadership' },
    body: {
      fr: "Choix d'architecture, revues de code et documentation, pour qu'une équipe avance vite sans casser l'existant.",
      en: 'Architecture decisions, code reviews and documentation, so a team moves fast without breaking what works.',
    },
    items: ['Architecture', 'Code review', 'Onboarding', 'Documentation'],
  },
];

export const featured = {
  eyebrow: { fr: 'Projet phare', en: 'Featured project' },
  meta: 'XPower · NOPO · 2023 – 2026',
  title: {
    fr: "Plateforme de données temps réel pour le marché européen de l'énergie",
    en: 'Real-time data platform for the European energy market',
  },
  lede: {
    fr: "XPower collecte, normalise et sert en continu les données de 20 opérateurs et bourses de l'énergie en Europe. J'en ai été le référent technique : architecture, code, bases de données, infrastructure et équipe.",
    en: 'XPower continuously collects, normalises and serves data from 20 European energy operators and exchanges. I was its technical lead: architecture, code, databases, infrastructure and team.',
  },
  stats: [
    { value: '20', label: { fr: 'sources intégrées', en: 'sources integrated' } },
    { value: '190', label: { fr: 'projets .NET', en: '.NET projects' } },
    { value: '~200', label: { fr: 'tests automatisés', en: 'automated tests' } },
    { value: 'Millions', label: { fr: 'de points de données par jour', en: 'of data points a day' } },
  ],
  points: [
    {
      title: { fr: 'Architecture modulaire', en: 'Modular architecture' },
      body: {
        fr: 'Une solution en couches où chaque source est un service indépendant, testé et déployé séparément. Ajouter une source ne touche pas aux autres.',
        en: 'A layered solution where each source is an independent service, tested and deployed on its own. Adding a source never touches the others.',
      },
    },
    {
      title: { fr: 'Déploiement automatisé', en: 'Automated delivery' },
      body: {
        fr: '18 pipelines Azure DevOps : chaque pull request est compilée et testée, les migrations de base sont appliquées automatiquement, chaque service se déploie seul.',
        en: '18 Azure DevOps pipelines: every pull request is built and tested, database migrations run automatically, each service deploys on its own.',
      },
    },
    {
      title: { fr: 'Fiabilité en production', en: 'Production reliability' },
      body: {
        fr: 'Contrôles de santé qui détectent les données manquantes et relancent la collecte seuls, alertes desktop et mobile, logs centralisés dans ELK et Kibana.',
        en: 'Health checks that detect missing data and re-run collection on their own, desktop and mobile alerts, centralised logs in ELK and Kibana.',
      },
    },
    {
      title: { fr: 'Performance des données', en: 'Data performance' },
      body: {
        fr: 'Plusieurs millions de lignes par jour dans Azure SQL, avec optimisation des requêtes, des index et de la concurrence EF Core.',
        en: 'Millions of rows a day in Azure SQL, with tuned queries, indexes and EF Core concurrency handling.',
      },
    },
    {
      title: { fr: 'Sécurité', en: 'Security' },
      body: {
        fr: 'Authentification par certificats (TLS et signature XML) auprès des opérateurs, audit des permissions SQL Server et protection des ressources Azure.',
        en: 'Certificate-based authentication (TLS and XML signatures) with operators, SQL Server permission audit and Azure resource protection.',
      },
    },
    {
      title: { fr: 'Équipe et transmission', en: 'Team and knowledge sharing' },
      body: {
        fr: "Encadrement de 4 développeurs, revues de code systématiques et guides d'intégration qui permettent à un nouveau développeur d'ajouter une source en autonomie.",
        en: 'Led 4 developers, reviewed every change and wrote integration guides so a new developer can add a source on their own.',
      },
    },
  ],
  tags: ['.NET 8', 'ASP.NET Core', 'EF Core', 'Azure SQL', 'RabbitMQ', 'Hangfire', 'Azure DevOps', 'Linux', 'ELK'],
};

export const otherWork: { meta: string; title: Text; body: Text; tags: string[]; link?: { href: string; label: Text } }[] = [
  {
    meta: 'Reecho · 2022 – 2023',
    title: { fr: 'Plateforme de gestion pour le portage salarial', en: 'Management platform for an umbrella company' },
    body: {
      fr: "Application web complète pour gérer consultants, missions, clients et facturation. J'ai livré les APIs, l'interface React et le modèle de données jusqu'à la mise en production.",
      en: 'A complete web application to manage consultants, assignments, clients and billing. I delivered the APIs, the React interface and the data model through to production.',
    },
    tags: ['ASP.NET Core', 'React', 'SQL Server'],
  },
  {
    meta: 'Freelance · 2023 – 2025',
    title: { fr: 'Services backend sur mesure', en: 'Custom backend services' },
    body: {
      fr: "Conception d'APIs et de services backend pour des clients externes, du cadrage du besoin à la livraison.",
      en: 'API and backend service design for external clients, from scoping the need to delivery.',
    },
    tags: ['.NET', 'APIs REST', 'SQL'],
  },
  {
    meta: 'Portfolio · 2026',
    title: { fr: 'Ce site', en: 'This website' },
    body: {
      fr: 'Application React et TypeScript, bilingue, construite avec Vite et déployée automatiquement sur GitHub Pages à chaque push.',
      en: 'A bilingual React and TypeScript app, built with Vite and deployed to GitHub Pages automatically on every push.',
    },
    tags: ['React', 'TypeScript', 'Vite', 'GitHub Actions'],
    link: { href: SOURCE, label: { fr: 'Voir le code', en: 'View the code' } },
  },
];

export const approach: { title: Text; body: Text }[] = [
  {
    title: { fr: 'Livrer petit et souvent', en: 'Ship small, ship often' },
    body: {
      fr: 'Des pull requests courtes, relues et déployées automatiquement. Les problèmes se voient tôt et coûtent peu.',
      en: 'Short pull requests, reviewed and deployed automatically. Problems surface early and cost little.',
    },
  },
  {
    title: { fr: 'Automatiser ce qui se répète', en: 'Automate the repetitive' },
    body: {
      fr: 'Builds, tests, migrations, déploiements et contrôles de santé tournent seuls, pour que l’équipe se concentre sur le produit.',
      en: 'Builds, tests, migrations, deployments and health checks run on their own, so the team can focus on the product.',
    },
  },
  {
    title: { fr: 'Observer avant de deviner', en: 'Observe before guessing' },
    body: {
      fr: 'Logs, métriques et alertes dès le premier jour. On corrige ce qu’on voit, pas ce qu’on suppose.',
      en: 'Logs, metrics and alerts from day one. You fix what you can see, not what you assume.',
    },
  },
  {
    title: { fr: 'Écrire pour l’équipe', en: 'Write for the team' },
    body: {
      fr: 'Code lisible, revues bienveillantes et guides à jour : un nouveau développeur doit être autonome vite.',
      en: 'Readable code, constructive reviews and up-to-date guides: a new developer should be productive quickly.',
    },
  },
  {
    title: { fr: 'Utiliser l’IA avec méthode', en: 'Use AI with intent' },
    body: {
      fr: 'Claude Code pour explorer un code existant, refactorer et écrire des tests plus vite, toujours avec une relecture humaine.',
      en: 'Claude Code to explore existing code, refactor and write tests faster, always with human review.',
    },
  },
];

const education: Text = { fr: 'Formation', en: 'Education' };
const job: Text = { fr: 'Expérience', en: 'Work' };

export const timeline: { years: string; kind: Text; title: Text; detail: Text }[] = [
  {
    years: '2026 – 2028',
    kind: education,
    title: {
      fr: "Mastère Expert en Informatique et Système d'Information",
      en: "Master's, IT and Information Systems Expert",
    },
    detail: same('EPSI Lyon · RNCP 7'),
  },
  {
    years: '2023 – 2026',
    kind: job,
    title: same('Technical Lead · NOPO'),
    detail: {
      fr: 'Référent technique d’une startup de 10 personnes : plateforme XPower, équipe de 4 développeurs, infrastructure Azure.',
      en: 'Technical lead at a 10-person startup: XPower platform, team of 4 developers, Azure infrastructure.',
    },
  },
  {
    years: '2023 – 2025',
    kind: job,
    title: same('Freelance Software Developer'),
    detail: { fr: 'Services backend et APIs pour des clients externes.', en: 'Backend services and APIs for external clients.' },
  },
  {
    years: '2022 – 2023',
    kind: job,
    title: same('Fullstack Developer · Reecho'),
    detail: { fr: 'Conseil technologique et livraison de logiciels.', en: 'Technology consulting and software delivery.' },
  },
  {
    years: '2022 – 2023',
    kind: education,
    title: { fr: 'Bachelor Génie Logiciel', en: "Bachelor's in Software Engineering" },
    detail: same('ESRMI · Rabat'),
  },
];

export const skills: { title: Text; items: Text[] }[] = [
  {
    title: same('Backend'),
    items: ['C#', '.NET 8', 'ASP.NET Core', 'Entity Framework Core', 'REST APIs', 'RabbitMQ', 'AMQP', 'Hangfire'].map(same),
  },
  {
    title: same('Frontend'),
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite'].map(same),
  },
  {
    title: { fr: 'Données', en: 'Data' },
    items: [
      ...['SQL Server', 'Azure SQL', 'SQL'].map(same),
      { fr: 'Modélisation de données', en: 'Data modelling' },
      { fr: 'Optimisation de requêtes', en: 'Query tuning' },
    ],
  },
  {
    title: { fr: 'DevOps et cloud', en: 'DevOps and cloud' },
    items: ['Azure App Services', 'Azure VMs', 'Azure DevOps', 'GitHub Actions', 'CI/CD', 'Linux', 'systemd', 'ELK', 'Kibana'].map(same),
  },
  {
    title: { fr: 'Pratiques', en: 'Practices' },
    items: [
      same('Microservices'),
      { fr: 'Architecture en couches', en: 'Layered architecture' },
      same('SOLID'),
      same('Design patterns'),
      { fr: 'Tests unitaires et d’intégration', en: 'Unit and integration testing' },
      same('Code review'),
      same('Agile / Scrum'),
    ],
  },
  {
    title: { fr: 'Outils', en: 'Tools' },
    items: ['Claude Code', 'Git', 'Rider', 'VS Code'].map(same),
  },
];

export const languages: { name: Text; level: Text }[] = [
  { name: { fr: 'Arabe', en: 'Arabic' }, level: { fr: 'langue maternelle', en: 'native' } },
  { name: { fr: 'Français', en: 'French' }, level: { fr: 'courant', en: 'fluent' } },
  { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'courant', en: 'fluent' } },
];

export const contact = {
  title: {
    fr: 'Un poste, un projet ou une question ? Parlons-en.',
    en: "A role, a project or a question? Let's talk.",
  },
  body: {
    fr: 'Écrivez-moi par email ou sur LinkedIn, en français ou en anglais.',
    en: 'Reach me by email or on LinkedIn, in French or English.',
  },
  copy: { fr: 'Copier', en: 'Copy' },
  copied: { fr: 'Copié', en: 'Copied' },
} satisfies Record<string, Text>;

export const footer = {
  source: { fr: 'Code source', en: 'Source code' },
} satisfies Record<string, Text>;
