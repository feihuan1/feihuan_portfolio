import { realtyone, toyota, freelancer, usArmy, beaconFire } from "../assets/images";
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
    nextjs,
    nodejs,
    react,
    moments,
    tailwindcss,
    typescript,
    anime, 
    fashionwise,
    python,
    godot
} from "../assets/icons";

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },    
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "python",
        type: "Backend",
    },    
    {
        imageUrl: godot,
        name: "Godot",
        type: "GameDev",
    },
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
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
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
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Geospatial Engineer(12Y)",
        company_name: "United State Army",
        icon: usArmy,
        iconBg: "#000000",
        date: "Sep 2024 - Dec 2024", 
        points: [
            "Develop leadership, teamwork, and discipline through training and collaboration with fellow trainees.",
            "Strengthen problem-solving abilities and resilience in a high-pressure, structured environment.",
            "Complete physical and tactical training phases, demonstrating commitment and perseverance.",
        ],
      },
    {
        title: "Frontend Developer",
        company_name: "BeaconFIre Inc.",
        icon: beaconFire,
        iconBg: "#0eb3f1",
        date: "Feb 2021 - May 2024", 
        points: [
            "Design and implement the category page for company client(Cue Health) using React and TypeScript.",
            "Utilize testing tools to write unit and integration tests, ensuring code stability and reducing bugs by 30%.",
            "Collaborate with a cross-functional team in an agile environment, adhering to version control.",
        ],
      },
      {
        title: "Web Developer",
        company_name: "Freelancer",
        icon: freelancer, 
        iconBg: "#a1abff",
        date: "Jan 2020 - Feb 2023",
        points: [
            "Build custom websites for small businesses, improving their online presence and accessibility.",
            "Develop over 100 coding projects on GitHub, showcasing a strong commitment to learning.",
            "Deliver high-quality results while balancing freelance work and other responsibilities.",
        ],
    },
      {
        title: "Sales Associate",
        company_name: "Autonation Toyota",
        icon: toyota,
        iconBg: "#f8c2fe",
        date: "Apr 2015 - Dec 2019",
        points: [
          "Create professional email templates using HTML and CSS to improve communication and marketing.",
          "Collaborate with cross-functional teams to streamline operations and improve customer satisfaction.",
          "Deliver exceptional customer service ensuring a personalized and seamless car-buying experience."
         ],
      },
    {
      title: "Real Estate Agent",
      company_name: "Realty One Group",
      icon: realtyone,
      iconBg: "#e9ec13",
      date: "Jan 2013 - Apr 2015",
      points: [
        "Build a personal website to promote services, generate leads, and manage client inquiries efficiently",
        "Guide clients through every step of the real estate transaction process, ensuring a seamless experience.",
        "Build and maintain strong client relationships through exceptional communication and personalized support.",
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
        description: 'A React full stack modern social media app with stunning UI and a responsive native mobile feel, Allow users create, edit, like and save posts.',
        link: 'https://react-social-media-pink.vercel.app/',
        code:'https://github.com/feihuan1/react-social-media/tree/main'
    },
    {
        iconUrl: fashionwise,
        theme: 'btn-back-green',
        name: 'FashionWise',
        description: 'Implemented a full-stack Nextjs e-commerce site with Sanity for backend and integrated a seamless Stripe payment system for efficient transactions.',
        link: 'https://ecomsite-fkdhsuti2-pengfeihuans-projects.vercel.app/',
        code:'https://github.com/feihuan1/ecomsite'
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