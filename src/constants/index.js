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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "First Step",
    company_name: "Epitech Digital School",
    icon: epitech,
    iconBg: "#383E56",
    date: "2019 - 2020",
    points: [
      "During this year, I joined Epitech Digital to earn my degree and enhance my skills.",
      "This first year was very instructive, as learning was achieved through practical work in collaboration with designers and marketers. ",
      "The deliverables were mainly projects presented in front of juries.",
    ],
  },
  {
    title: "First Internship Experience",
    company_name: "Red Med Capital",
    icon: rm,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Aug 2022",
    points: [
      "For a duration of 4 months, I joined Red Med Capital , an investment bank to complete my internship.",
      "My task was to develop a collaborative intranet for the internal members of the company.",
      "The intranet was developed using Laravel and a Metronic 7 template.",
    ],
  },
  {
    title: "Second Internship Experience",
    company_name: "ITES COM GROUP",
    icon: ites,
    iconBg: "#383E56",
    date: "Jun 2023 - Aug 2023",
    points: [
      "For this internship, I joined ITES COM GROUP, a leader in the buying and selling of technological and computer products.",
      "My mission was also to create an intranet to monitor orders, tasks completed, and income.",
      "I had the choice regarding the programming languages, so I opted for HTML/CSS for the front end, PHP for the back end and database interactions, and JavaScript to make the user journey more engaging. I preferred to use simple languages that I have mastered perfectly in order to create a truly interactive ecosystem.",
      "I also completed a full redesign of the company's website, including a contact form.",
    ],
  },
  {
    title: "Final Year of Bachelor's Degree",
    company_name: "Epitech Digital School",
    icon: diplom,
    iconBg: "#E6DEDD",
    date: "Sept 2023 - 2024",
    points: [
      "I am in my final year of the Bachelor's program, aiming to obtain my degree in Project Management with a specialization in Web Development.",
      "I also have a 6-month internship to complete starting from January.",
      "A final year project will also need to be presented after my internship period.",
    ],
  },
  {
    title: "Last Internship Experience",
    company_name: "STEF",
    icon: stef,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "I am currently in the final internship of my studies since January for a period of 6 months. ",
      "I had the honor of joining a major European company specialized in fresh and frozen logistics for this internship. They operate with large companies across Europe.",
      "My mission during the internship was to take over a delivery management tool and other related systems to add new features, improve existing ones, and optimize the code. The tool is managed in PHP, a simple language, but the challenge was adapting to the existing code and handling large and confidential data.",
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
      "This project is a React web application that allows users to find real-time bike-sharing stations in Lyon. It utilizes Leaflet for mapping and displaying the stations.",
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
      "A kind of Twitter developed in ReactJS where users can interact with posts (like, dislike, create new posts, delete posts, etc.)",
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
      "The ITES COM GROUP website, which I redesigned during my second-year internship, in parallel with my main mission.",
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
    source_code_link: "https://github.com/aymen04/Koch-Curve",
  },
  {
    name: "Koch Curve",
    description:
    "A small Python script that draws a perfect Koch snowflake.",
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
    "Website of a roofing craftsman with a contact form",
    tags: [
      {
        name: "ads",
        color: "blue-text-gradient",
      },
      {
        name: "ContactForm",
        color: "green-text-gradient",
      },
      {
        name: "FullStack",
        color: "pink-text-gradient",
      },
    ],
    image: picque,
    source_code_link: "https://github.com/aymen04/Koch-Curve",
  }
  
];

export { services, technologies, experiences, testimonials, projects };
