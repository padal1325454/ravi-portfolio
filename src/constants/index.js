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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  crantya,
  hcl,
  hotel,
  drawing3d,
  mentalhealth,
  threejs,
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
    title: "React Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "3D Web Developer",
    icon: backend,
  },
  {
    title: "ML Enthusiast",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "CRANTYA",
    icon: crantya,
    iconBg: "#FFFFFF",
    date: "Sep 2025 - Present",
    points: [
      "Developed ListTrac, a real estate listing analytics platform providing MLS brokers and agents with unbiased online traffic reporting and actionable marketing intelligence.",
      "Built React UI features and interactive dashboards surfacing listing performance, real estate search behavior, and consumer engagement data in a clean, usable interface.",
      "Integrated third-party real estate data APIs into the frontend, surfacing real-time listing activity and consumer engagement metrics.",
      "Drove performance improvements across high-data analytics views by optimizing component rendering and load times for a smoother user experience.",
      "Collaborated in an Agile workflow including sprint planning, code reviews, and iterative feature delivery alongside backend and product teams.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "HCL Technologies",
    icon: hcl,
    iconBg: "#FFFFFF",
    date: "Jan 2024 - Jun 2024",
    points: [
      "Built a web application that automates the language translation workflow, significantly reducing manual effort and improving translation accuracy.",
      "Designed a responsive user interface and integrated NLP-based translation APIs, making the tool practical for real operational use.",
      "Collaborated with cross-functional teams to gather requirements and deliver a production-ready solution within the internship timeline.",
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
    name: "Hotel Management System",
    description:
      "Full-stack hotel management platform with a React frontend and Java Spring Boot backend. Handles room booking, guest records, check-ins/check-outs, and invoice generation — all connected through a normalized MySQL database and RESTful APIs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: hotel,
    source_code_link: "https://github.com/padal1325454/HotelManagementSystem",
  },
  {
    name: "3D Drawing Application",
    description:
      "Browser-based 3D drawing tool built with Three.js and WebGL. Users can create and manipulate 3D shapes in real time — geometry, rotation, and scene management run entirely on the client side with no heavy dependencies.",
    tags: [
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
      {
        name: "webgl",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: drawing3d,
    source_code_link: "https://github.com/padal1325454/3D-Drawing",
  },
  {
    name: "Student Mental Health Analysis",
    description:
      "Data analysis project uncovering correlations between academic pressure, stress, substance use, and mental health across student demographics. Built interactive Tableau dashboards to turn raw data into actionable insights for institutional support.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "tableau",
        color: "pink-text-gradient",
      },
    ],
    image: mentalhealth,
    source_code_link: "https://github.com/padal1325454/mentalhealth",
  },
];

export { services, technologies, experiences, testimonials, projects };
