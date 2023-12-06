import { realtyone, toyota, freelance, youtube } from "../assets/images";
import {
    car,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    nextjs,
    nodejs,
    react,
    redux,
    moments,
    tailwindcss,
    typescript,
    anime
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },

    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
      title: "Web Developer",
      company_name: "Freelancer",
      icon: freelance,
      iconBg: "#a799ff",
      date: "Mar 2022 - Present",
      points: [
        "Committed to continuous learning and creative problem-solving in web development.",
        "Actively involved in open source projects, sharing knowledge and enhancing skills.",
        "Crafted custom games and websites as gifts, showcasing a personal touch in my work.",
        "Proficient in creative problem-solving to deliver efficient web solutions for clients.",
      ],
    },
    {
        title: "Content Creator",
        company_name: "Youtube",
        icon: youtube,
        iconBg: "#ff9797",
        date: "Sep 2021 - Feb 2023",
        points: [
          "Engaged 50k+ subscribers, creating content based on their feedback and building a strong online community.",
          "Produced captivating videos, fostering a loyal viewership through imaginative content.",
          "Committed to ongoing learning in content creation to stay current with trends and tools.",
          "Overcame production challenges through creative solutions, ensuring top-notch content quality.",
        ],
      },
      {
        title: "Sales Associate",
        company_name: "Autonation Toyota",
        icon: toyota,
        iconBg: "#e898fe",
        date: "Apr 2019 - Feb 2022",
        points: [
          "Provided exceptional service by listening to customer needs and offering tailored solutions.",
          "Demonstrated patience in addressing inquiries and concerns, ensuring customer satisfaction.",
          "Resolved issues creatively, ensuring a smooth and satisfactory buying experience.",
          "Maintained up-to-date knowledge of Toyota products for informed customer guidance. "
         ],
      },
    {
      title: "Real Estate Agent",
      company_name: "Realty One Group",
      icon: realtyone,
      iconBg: "#f6ee88",
      date: "Mar 2014 - Apr 2019",
      points: [
        "Provided unwavering support and patience to meet client needs.",
        "Actively collaborated with professionals for successful transactions.",
        "Maintained timely and reliable client communication.",
        "Skillfully resolved negotiations for positive outcomes.",
      ],
    },

  ];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/feihuan1',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/feihuan-peng-03711927a',
    }
];

export const projects = [
    {
        iconUrl: moments,
        theme: 'btn-back-pink',
        name: 'Moments',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://react-social-media-pink.vercel.app/',
        code:'https://github.com/feihuan1/react-social-media/tree/main'
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://nextjs-car-rental-eight.vercel.app',
        code:'https://github.com/feihuan1/nextjs-car-rental'
    },
    {
        iconUrl: anime,
        theme: 'btn-back-red',
        name: 'Anime Vault',
        description: 'Developed a web application that display popular animes with infinite scroll, each anime has own detail page.',
        link: 'https://anime-vault-theta.vercel.app',
        code:'https://github.com/feihuan1/Anime_Vault'
    },

];