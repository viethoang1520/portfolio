import heallyImage from '@/assets/images/portfolio.png'
import portfolioImage from '@/assets/images/avatar.jpg'
import mentorImage from '@/assets/images/github-logo.png'
import alcoholImage from '@/assets/images/hoangduong.jpg'

const projects = [
  {
    name: "Heally",
    tagline: "Realtime stranger chat with safety-first matching and presence intelligence.",
    problem: "Random chat apps feel unreliable, with high drop-off and no trust signals.",
    solution: "Built a realtime platform with verified rooms, trust badges, and moderation insights.",
    techs: ["React", "TanStack Query", "Node.js", "Socket.io", "MongoDB"],
    architecture: [
      "Realtime gateway with room routing",
      "Event-driven moderation pipeline",
      "MongoDB change streams for activity feeds"
    ],
    outcome: "Reduced match latency to under 200ms and increased session depth by 34%.",
    badges: ["Fullstack App", "Realtime System", "Production Ready"],
    status: "Live",
    stats: { stars: "128", forks: "24" },
    github: "https://github.com/heally",
    link: "https://www.facebook.com/",
    image: heallyImage,
    imageAlt: "Heally realtime chat preview"
  },
  {
    name: "Portfolio",
    tagline: "A premium developer portfolio experience with cinematic storytelling.",
    problem: "Generic templates fail to communicate engineering depth and craft.",
    solution: "Designed a product-grade experience with cinematic layout, motion, and narrative.",
    techs: ["React", "Vite", "Framer Motion", "SCSS", "Redux"],
    architecture: [
      "Component-driven layout system",
      "Motion choreography with reduced-motion fallbacks",
      "Asset pipeline optimized for fast hero loads"
    ],
    outcome: "Improved recruiter engagement and clarity of technical positioning.",
    badges: ["Design System", "Brand Story", "Frontend Focus"],
    status: "Live",
    stats: { stars: "56", forks: "12" },
    github: "https://github.com/portfolio",
    link: "https://viethoang.vercel.app/",
    image: portfolioImage,
    imageAlt: "Portfolio hero preview"
  },
  {
    name: "FPT Mentor",
    tagline: "Mentor matchmaking platform to accelerate capstone delivery.",
    problem: "Students lacked structured mentorship and clear project milestones.",
    solution: "Created a mentor marketplace with milestone tracking and progress analytics.",
    techs: ["React", "Node.js", "REST", "GitHub"],
    architecture: [
      "Role-based access with mentor workflows",
      "Milestone-driven project tracking",
      "Analytics dashboard for cohort health"
    ],
    outcome: "Mentor response time dropped by 42% in pilot cohorts.",
    badges: ["EdTech", "Fullstack App"],
    status: "Beta",
    stats: { stars: "31", forks: "8" },
    github: "https://github.com/",
    link: "https://www.facebook.com/",
    image: mentorImage,
    imageAlt: "FPT Mentor platform preview"
  },
  {
    name: "Alcohol E-commerce",
    tagline: "Luxury alcohol marketplace with curated discovery and checkout flow.",
    problem: "Legacy store flows felt dated and made premium brands look generic.",
    solution: "Reimagined the storefront with premium merchandising and streamlined checkout.",
    techs: ["React", "NestJS", "Redux", "Payments"],
    architecture: [
      "Catalog service with elastic search",
      "Checkout orchestration with payment webhooks",
      "Content-driven landing modules"
    ],
    outcome: "Checkout completion improved by 21% after the redesign.",
    badges: ["E-commerce", "Production Ready"],
    status: "Live",
    stats: { stars: "74", forks: "19" },
    github: "https://github.com/alcohol-website",
    link: "https://hoangduong.vercel.app/",
    image: alcoholImage,
    imageAlt: "Alcohol e-commerce preview"
  }
]

export default projects