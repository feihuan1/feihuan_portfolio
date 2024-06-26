import { realtyone, toyota, youtube, freelancer, cueHealth } from "../assets/images";
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
        title: "Frontend Developer",
        company_name: "Cue Health",
        icon: cueHealth,
        link: 'https://cuehealth.com/all-categories',
        iconBg: "#e1e1e1",
        date: "Feb 2021 - May 2024", 
        points: [
            "Collaborated within a team to develop user-friendly React applications, incorporating TypeScript for enhanced code quality and maintainability.",
            "Utilized Framer Motion for advanced animations and transitions, enhancing the visual appeal and interactivity of the application.",
            "Participated in Agile ceremonies such as sprint planning, daily stand-ups, and retrospectives, using Jira and following Scrum practices.",
            "Implemented comprehensive unit and integration tests using Jest and React Testing Library.",
        ],
      },
      {
        title: "YouTuber",
        company_name: "Self-employed",
        icon: youtube, 
        iconBg: "#a1abff",
        date: "Feb 2019 - Jan 2022",
        points: [
            "Uploaded videos daily, covering a range of topics to maintain audience interest and engagement.",
            "Designed custom thumbnails for each video, enhancing visual appeal and increasing click-through rates.",
            "Implemented SEO strategies to optimize video titles, descriptions, and tags, resulting in higher search rankings and increased visibility.",
            "Collaborated with other YouTubers and influencers to expand reach and attract new subscribers.",
            "Analyzed viewer metrics and feedback to continually improve content quality and relevance.",
        ],
    },
      {
        title: "Sales Associate",
        company_name: "Autonation Toyota",
        icon: toyota,
        iconBg: "#f8c2fe",
        date: "Apr 2018 - Feb 2020",
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
      date: "Mar 2014 - Apr 2018",
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