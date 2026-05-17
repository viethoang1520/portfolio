import artchainImage from '@/assets/images/artchain.jpg'
import portfolioImage from '@/assets/images/portfolio.jpg'
import wineImage from '@/assets/images/wine.jpg'
import metroImage from '@/assets/images/metro.jpg'

const projects = [
  {
    name: "ArtChain",
    tagline: "A digital art competition platform built for large-scale contest management workflows.",
    problem: "Art competitions often lack centralized management systems.",
    solution: "Built a fullstack platform for submissions, judging, and contest management.",
    techs: ["React", "Node.js", "NestJS", "PostgreSQL", "Docker"],
    architecture: [
      "Role-based backend architecture",
      "RESTful APIs for contest management workflows",
      "Modular fullstack system with scalable structure"
    ],
    outcome: "Successfully delivered as a software engineering capstone project with production-oriented architecture and team collaboration.",
    badges: ["Capstone Project", "Fullstack System", "Backend Architecture", "NFT"],
    status: "Completed",
    stats: { stars: "Academic", forks: "Team Project" },
    github: "https://github.com/",
    link: "https://artchain.io.vn/",
    image: artchainImage,
    imageAlt: "ArtChain platform preview"
  },
  {
    name: "Portfolio",
    tagline: "A modern developer portfolio focused on backend engineering and product presentation.",
    problem: "Many portfolios lack technical identity.",
    solution: "Built a modern portfolio with clean UI and scalable structure.",
    techs: ["React", "Vite", "Framer Motion", "SCSS"],
    architecture: [
      "Reusable component-based architecture",
      "Responsive layouts with smooth motion design",
      "Optimized frontend structure and asset management"
    ],
    outcome: "Improved recruiter engagement and clarity of technical positioning.",
    badges: ["Design System", "Brand Story", "Frontend Focus"],
    status: "Live",
    stats: { stars: "0", forks: "0" },
    github: "https://github.com/viethoang1520/portfolio",
    link: "https://viethoang.vercel.app/",
    image: portfolioImage,
    imageAlt: "Portfolio hero preview"
  },
  {
    name: "Winestore",
    tagline: "An e-commerce web application for browsing and exploring wine products.",
    problem: "Many shopping UIs lack modern browsing experiences.",
    solution: "Built a responsive product browsing platform with API-driven rendering.",
    techs: ["React", "SCSS", "Zustand", "REST API"],
    architecture: [
      "Centralized client-side state management",
      "Component-based product browsing system",
      "API-driven product fetching architecture"
    ],
    outcome: "Delivered a scalable frontend foundation for product listing and shopping experiences.",
    badges: ["Frontend Project", "E-commerce UI", "Responsive Design"],
    status: "Completed",
    stats: { stars: "Personal", forks: "Frontend" },
    github: "https://github.com/",
    link: "https://hoangduong.vercel.app/",
    image: wineImage,
    imageAlt: "WineStore e-commerce preview"
  },
  {
    name: "Metro Ticketing System",
    tagline: "A digital ticket booking platform for the Ben Thanh - Suoi Tien metro line.",
    problem: "Traditional ticket booking systems often lack digital convenience.",
    solution: "Built a responsive platform for online metro ticket booking.",
    techs: ["React", "TypeScript", "TailwindCSS", "React Router", "Shadcn UI"],
    architecture: [
      "Component-based frontend architecture",
      "Responsive ticket purchasing workflows",
      "Reusable UI system with modern design patterns"
    ],
    outcome: "Delivered a modern metro ticket booking experience with scalable frontend structure and clean user flows.",
    badges: ["Frontend Project", "Ticketing System", "Responsive UI"],
    status: "Completed",
    stats: { stars: "Personal", forks: "Frontend" },
    github: "https://github.com/viethoang1520/sdn-ui",
    link: "https://sdn-ui-five.vercel.app/",
    image: metroImage,
    imageAlt: "Metro ticketing platform preview"
  },
]

export default projects