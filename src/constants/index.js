import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  diplom,
  epitech,
  rm,
  ites,
  stef,
  reactapp,
  goldenrules,
  newsite,
  threejs,
  php,
  flutter,
  mysql,
  python,
  tictac,
  picque,
  cu,
  leon,
  loya,
  prototype,
  rr,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Rendus",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Challenger Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
 
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Collège / Lycée",
    company_name: "Lycée Français Léon l'Africain",
    icon: leon,
    iconBg: "#383E56",
    date: "2014 - 2020",
    points: [
      "Titulaire d’un baccalauréat français STMG en spécialité Gestion Finance.",
    ],
  },
  {
    title: "Bachelor",
    company_name: "Epitech Digital School",
    icon: epitech,
    iconBg: "#383E56",
    date: "2021",
    points: [
      "Cette année, j'ai intégré Epitech Digital afin d'obtenir mon diplôme et de perfectionner mes compétences.",
      "Cette première année a été très enrichissante, car l'apprentissage s'est fait à travers des travaux pratiques en collaboration avec des designers et des marketeurs.",
      "Les livrables étaient principalement des projets présentés devant des jurys.",
    ],
  },
  {
    title: "Premier stage d'études",
    company_name: "Red Med Capital",
    icon: rm,
    iconBg: "#E6DEDD",
    date: "05/2022 - 08/2022",
    points: [
      "Pendant une durée de 4 mois, j'ai intégré Red Med Capital, une banque d'investissement, pour effectuer mon stage.",
      "Ma mission était de développer un intranet collaboratif destiné aux membres internes de l'entreprise.",
      "L'intranet a été développé en utilisant Laravel et un template Metronic 7.",
    ],
  },
  {
    title: "Deuxième stage d'études",
    company_name: "ITES COM GROUP",
    icon: ites,
    iconBg: "#383E56",
    date: "05/2023 - 09/2023",
    points: [
      "Pour ce stage, j'ai rejoint ITES COM GROUP, un leader dans l'achat et la vente de produits technologiques et informatiques.",
      "Ma mission consistait également à créer un intranet pour suivre les commandes, les tâches effectuées et les revenus.",
      "J'avais le choix des langages de programmation, et j'ai donc opté pour HTML/CSS pour le front-end, PHP pour le back-end et les interactions avec la base de données, ainsi que JavaScript pour rendre l'expérience utilisateur plus attrayante. J'ai préféré utiliser des langages simples que je maîtrise parfaitement afin de créer un écosystème véritablement interactif.",
      "J'ai également réalisé une refonte complète du site web de l'entreprise, incluant un formulaire de contact.",
    ],
  },
  {
    title: "Stage de fin d'études",
    company_name: "STEF",
    icon: stef,
    iconBg: "#E6DEDD",
    date: "01/2024-06/2024",
    points: [
      "J'ai effectué un stage  de fin d'études depuis janvier 2024 , pour une durée de 6 mois.",
      "J'ai eu l'honneur de rejoindre une grande entreprise européenne spécialisée dans la logistique de produits frais et surgelés pour ce stage. Cette entreprise collabore avec de grandes sociétés à travers l'Europe.",
      "Ma mission durant ce stage a été de prendre en charge un outil de gestion des livraisons ainsi que d'autres systèmes associés, afin d'y ajouter de nouvelles fonctionnalités, d'améliorer celles existantes et d'optimiser le code. Cet outil est développé en PHP, un langage simple, mais le défi consistait à s'adapter au code existant et à gérer des données volumineuses et confidentielles.",
    ],
  },
  {
    title: "Diplomé",
    company_name: "Epitech Digital School",
    icon: diplom,
    iconBg: "#E6DEDD",
    date: "08/2024",
    points: [
      "Je suis en dernière année de mon programme de Bachelor, visant à obtenir mon diplôme en Gestion de Projet avec une spécialisation en Développement Web.",
      "Pour valider ma dernière année , j'ai effectué un stage de 6 mois dans une entreprise européenne nommée STEF.",
     "Un projet de fin d'études a également été présenté à l'issue de ma période de stage."






    ],
  },
  
  {
    title: "AEC MARKETING DIGITAL",
    company_name: "Collège universel Campus Montréal",
    icon: cu,
    iconBg: "#E6DEDD",
    date: "01/2024",
    points: [
      "Formation actuelle, pour une durée de 2 ans. ",
      "Diplome AEC.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Vélo'v",
    description:
      " Une sorte de Twitter développé en ReactJS où les utilisateurs peuvent interagir avec les publications (aimer, ne pas aimer, créer de nouvelles publications, supprimer des publications, etc.).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "leaflet",
        color: "green-text-gradient",
      },
      {
        name: "live",
        color: "pink-text-gradient",
      },
    ],
    image: reactapp,
    source_code_link: "https://github.com/aymen04/Consultation-de-bornes-velo-v-en-temps-reel---React",
  },
  {
    name: "Golden Rules",
    description:
      "Une sorte de Twitter développé en ReactJS où les utilisateurs peuvent interagir avec les publications (aimer, ne pas aimer, créer de nouvelles publications, supprimer des publications, etc.).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "twitter",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: goldenrules,
    source_code_link: "https://github.com/aymen04/GoldenRules",
  },
  {
    name: "ITES COM Website",
    description:
      "Le site web d'ITES COM GROUP, que j'ai redessiné lors de mon stage de deuxième année, en parallèle de ma mission principale.",
    tags: [
      {
        name: "HTML/CSS",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Mailstrap",
        color: "pink-text-gradient",
      },
    ],
    image: newsite,
    source_code_link: "",
  },
  {
    name: "Koch Curve",
    description:
    "Un petit script Python qui dessine un flocon de neige de Koch parfait.",
    tags: [
      {
        name: "pyhton",
        color: "blue-text-gradient",
      },
      {
        name: "kochCurve",
        color: "green-text-gradient",
      },
      {
        name: "perfect",
        color: "pink-text-gradient",
      },
    ],
    image: tictac,
    source_code_link: "https://github.com/aymen04/Koch-Curve",
  },
  {
    name: "Picque couvreur",
    description:
    "Site web d'un artisan couvreur avec un formulaire de contact",
    tags: [
      {
        name: "ads",
        color: "blue-text-gradient",
      },
      {
        name: "Formulaire",
        color: "green-text-gradient",
      },
      {
        name: "Full-Stack",
        color: "pink-text-gradient",
      },
    ],
    image: picque,
    source_code_link: "",
  },
  {
    name: "Projet de fin d'études",
    description:
    "Application mobile web qui accompagne les utilisateurs dans une démarche écologique.",
    tags: [
      {
        name: "Écologie",
        color: "blue-text-gradient",
      },
      {
        name: "PFE",
        color: "green-text-gradient",
      },
      {
        name: "Mobile",
        color: "pink-text-gradient",
      },
    ],
    image: loya,
    source_code_link: "https://github.com/aymen04/Loya-projet",
  },
  {
    name: "Site vitrine de base",
    description:
    "Site vitrine basique développé pour m'entrainer",
    tags: [
      {
        name: "Rush",
        color: "blue-text-gradient",
      },
      {
        name: "Entrainement",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: prototype,
    source_code_link: "https://github.com/aymen04/xata-search/",
  },
  {
    name: "Rush React",
    description:
    "Site web rush pour un projet d'école , fait en 2h",
    tags: [
      {
        name: "Rush",
        color: "blue-text-gradient",
      },
      {
        name: "2H",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: rr,
    source_code_link: "https://github.com/aymen04/Koch-Curve",
  }
  
];

export { services, technologies, experiences, testimonials, projects };
