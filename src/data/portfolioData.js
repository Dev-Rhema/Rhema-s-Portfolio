import exoShop from "../assets/exoshop.png";
import anka from "../assets/amka.png";
import drbills from "../assets/drbills.png";
import rebels from "../assets/rebels.png";
import folitracks from "../assets/folitracks.png";
import ebuka from "../assets/ebuka-portfolio.png";

export const SKILLS = [
  { name: "React.js", value: 92, note: "the daily driver" },
  { name: "JavaScript (ES6+)", value: 90, note: "underneath everything" },
  { name: "Tailwind CSS", value: 88, note: "fast, occasionally fights back" },
  { name: "Framer Motion", value: 80, note: "for the parts that should move" },
  { name: "CSS3 / HTML5", value: 90, note: "still the foundation" },
  {
    name: "Responsive Design",
    value: 86,
    note: "tested on a cracked phone screen",
  },
  { name: "Redux", value: 70, note: "when state gets unruly" },
  { name: "GSAP", value: 68, note: "for the trickier timing" },
  {
    name: "Git & Version Control",
    value: 82,
    note: "commit early, commit often",
  },
  { name: "Performance Tuning", value: 76, note: "shaving milliseconds" },
];

export const EXPERIENCE = [
  {
    role: "Frontend Developer",
    org: "LightupLink",
    period: "Oct 2022 — Present",
    points: [
      "Built interactive features for production using React, turning design files into interfaces that matched them closely, down to spacing and small details.",
      "Added animations and transitions with Framer Motion to make the product feel more polished to use.",
      "Improved site performance through code splitting, lazy loading, and image compression.",
    ],
  },
  {
    role: "Frontend Developer",
    org: "ExoDigital",
    period: "Oct 2023 — Present",
    points: [
      "Built landing pages and client demos for a fast-paced digital marketing agency, turning campaign and brand goals into fast, good-looking pages.",
      "Integrated Meta Pixel so the frontend could feed live marketing data back to the team and fixed issues when events fired incorrectly.",
      "Built responsive layouts with React, Framer Motion, and Tailwind CSS that worked well across devices.",
    ],
  },
  {
    role: "Junior Frontend Developer",
    org: "COSUB",
    period: "Oct 2024 — Dec 2024",
    points: [
      "Built CoSub's marketing landing page and a dashboard for managing shared subscription plans using Next.js and React.",
      "Built usage and cost breakdown charts with Recharts so users could see their subscription data at a glance.",
      "Worked closely with product and design to keep the subscription sharing and cost tracking experience simple to use.",
    ],
  },
  {
    role: "Frontend Developer",
    org: "Folitracks",
    period: "Dec 2024 — Jan 2025",
    points: [
      "Built the marketing landing page and both the admin and customer-facing dashboards for a vehicle service platform that used QR codes.",
      "Built interfaces for managing vehicle service records, repair tracking, and QR-linked service history.",
      "Built the interactive UI with React and Tailwind CSS, keeping navigation simple across both dashboards.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "EXODIGITAL SHOP",
    description:
      "Built a full e-commerce storefront with React, Vite, and Tailwind CSS. Integrated Paystack for live payments and Meta Pixel for conversion tracking while keeping a dark, editorial brand identity.",
    tags: ["React", "Vite", "Tailwind", "Paystack", "Meta Pixel"],
    image: exoShop,
    link: "https://shop.exodigital.org/",
    size: "wide",
  },
  {
    title: "Folitracks",
    description:
      "Built the marketing landing page and both the admin and customer-facing dashboards for a QR-based vehicle service platform.",
    tags: ["React", "Tailwind", "Framer Motion", "QR", "Dashboard"],
    image: folitracks,
    link: "https://folitracks-2tgi.vercel.app/",
    size: "wide",
  },
  {
    title: "Portfolio Website",
    description:
      "Designed and built a custom portfolio site in React and Tailwind CSS, with custom animated skill components and a distinct visual identity.",
    tags: ["React", "Tailwind", "Animation", "Portfolio"],
    image: ebuka,
    link: "https://ebuka-chidube-portfolio.netlify.app/",
    size: "wide",
  },
  {
    title: "Dr Bills Exchange",
    description: "A landing page for an utility bill payment app",
    tags: ["React", "Javascript", "Tailwind", "Shadcn"],
    image: drbills,
    link: "https://dr-bills-exchange.vercel.app/",
    size: "wide",
  },
  {
    title: "Rebels NFT",
    description: "A landing page for a crypto NFT project",
    tags: ["React", "Javascript", "Tailwind", "Shadcn", "Framer Motion"],
    image: rebels,
    link: "https://rebels-nft-rr1z.vercel.app/",
    size: "wide",
  },
  {
    title: "Anka Space",
    description: "A landing page for a rocket prototype production company",
    tags: ["React", "Javascript", "Tailwind", "Framer Motion"],
    image: anka,
    link: "https://anka.vercel.app/",
    size: "wide",
  },
];
