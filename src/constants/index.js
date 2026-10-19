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
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  crantya,
  hcl,
  siemap,
  bbq,
  homemade,
  arena,
  hotel,
  drawing3d,
  analytics,
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
    id: "projects",
    title: "Projects",
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
    title: "Spring Boot / REST APIs",
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
    title: "Junior Software Engineer (Full Stack)",
    company_name: "SIEMAP LLC",
    icon: siemap,
    iconBg: "#0b0b0e",
    date: "Jun 2026 - Present",
    points: [
      "Develop enterprise React and Spring Boot applications for inventory, purchasing, and business management, translating real-world client workflows into production software.",
      "Build reusable React components and reporting dashboards with clean, production-ready UI, integrating Spring Boot REST APIs for purchase requests, orders, vendors, receiving, and invoicing.",
      "Collaborate directly with clients to gather requirements, implement business workflows, and iterate quickly on feedback.",
      "Optimize application performance across frontend rendering and API response handling to keep data-heavy management views fast and reliable.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "CRANTYA, Little Elm, TX",
    icon: crantya,
    iconBg: "#FFFFFF",
    date: "Jan 2025 - Jun 2026",
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
    company_name: "HCL Technologies, Chennai, India",
    icon: hcl,
    iconBg: "#FFFFFF",
    date: "Jul 2023 - Jun 2024",
    points: [
      "Built a web application that automates the language translation workflow, significantly reducing manual effort and improving translation accuracy.",
      "Designed a responsive user interface and integrated NLP-based translation APIs, making the tool practical for real operational use.",
      "Collaborated with cross-functional teams to gather requirements and deliver a production-ready solution within the internship timeline.",
    ],
  },
];

const projects = [
  {
    name: "ListTrac — Real Estate Listing Analytics",
    description:
      "Production real estate analytics platform used daily by MLS brokers and agents for unbiased online traffic reporting. I built interactive React dashboards surfacing listing performance, search behavior, and consumer engagement, integrated third-party real estate data APIs with reliable error and loading states, and optimized rendering on views displaying thousands of records.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "data-viz",
        color: "green-text-gradient",
      },
      {
        name: "rest-apis",
        color: "pink-text-gradient",
      },
    ],
    image: analytics,
    source_code_link: "https://www.listtrac.com/MS/index.html",
  },
  {
    name: "Arena Entertainment Booking",
    description:
      "High-performance entertainment booking platform written in Rust, covering booking, reservations, scheduling, and event management. Secure backend logic for both customer and administrator workflows, leaning on Rust's memory safety and concurrency.",
    tags: [
      {
        name: "rust",
        color: "blue-text-gradient",
      },
      {
        name: "backend",
        color: "green-text-gradient",
      },
      {
        name: "concurrency",
        color: "pink-text-gradient",
      },
    ],
    image: arena,
    source_code_link: "https://arena-entertainment.siemap.com/login",
  },
  {
    name: "BBQ Inventory Management System",
    description:
      "Enterprise inventory platform covering the full procurement lifecycle — purchase requests, purchase orders, vendor management, receiving, and invoicing. Type-safe React components in TypeScript wired to Spring Boot REST APIs for real-time stock tracking and reporting.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "spring-boot",
        color: "pink-text-gradient",
      },
    ],
    image: bbq,
    source_code_link: "https://github.com/padal1325454",
  },
  {
    name: "Home Made Marketplace",
    description:
      "Full-stack marketplace connecting home chefs with customers — authentication, product listings, ordering, and an admin dashboard. Spring Boot backend with secure REST APIs for user management, order processing, and catalog operations over MySQL.",
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
    image: homemade,
    source_code_link: "https://github.com/padal1325454",
  },
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
];

export { services, technologies, experiences, projects };
