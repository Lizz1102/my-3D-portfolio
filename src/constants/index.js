import { raven, geotab, iqvia } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    aspnet,
    csharp,
    sql,
    postgres,
    aws,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: aspnet,
        name: "ASP.NET",
        type: "Backend",
    },
    {
        imageUrl: csharp,
        name: "Csharp",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
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
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: sql,
        name: "sql",
        type: "Database",
    },
    {
        imageUrl: postgres,
        name: "postgres",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: aws,
        name: "aws",
        type: "Cloud",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "Software Developer",
        company_name: "Geotab",
        icon: geotab,
        iconBg: "#accbe1",
        date: "October 2021 - December 2022",
        points: [
            "Designing and developing features, backend services, SDKs, and API endpoints for fleet management products used by over 4 millions subscribers.",
            "Developing new features in Maintenance, Notifications, and Safety area of MyGeotab web app.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "ASP.NET Core, C#, Web API, PostgreSQL, JavaScript, React, TypeScript, HTML5/CSS3, Git/GitLab, CI/CD, Unit Testing, SOLID, Design Patterns.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "IQVIA",
        icon: iqvia,
        iconBg: "#fbc3bc",
        date: "September 2015 - March 2018",
        points: [
            "Developing RESTful APIs, databases for the web version of the pharmaceutical big data analytics desktop application, which is supporting clinical research and heathcare in over 100 countries worldwide.",
            "Maintaining and developing PowerBuilder apps in collaboration with German team as backend developer.",
            "Training developers of a new PowerBuilder team, consulting for the migration of a legacy PB tool to .NET C#, which secured a 40M project for that team.",
            "Independently building an iOS app version of a widely used data analytics desktop tool.",
            "ASP.NET C#, MVC, RESTful Web API, OAuth, RDBMS(MS SQL Server), JavaScript, OOP, TDD, xUnit, Sybase PowerBuilder.",
            "Professional recognition: Star Contributor, Global Delivery Center for Innovation in Reporting Tools, September 2017.",
        ],
    },
    {
        title: "Android Application Developer",
        company_name: "Raven",
        icon: raven,
        iconBg: "#b7e4c7",
        date: "Jan 2014 - September 2015",
        points: [
            "Developing e-Book reading application for huge library of Bengali books.",
            "Designing customizable reading experience, syncing account and storage throughout devices and supporting all popular ebook formats.",
            "Implementing offline reading and web syncing.",
            "Collaborating with consultant, web developers in the designing process.",
        ],
    },
];

export const socialLinks = [
    {
        name: "Contact",
        iconUrl: contact,
        link: "/contact",
    },
    {
        name: "GitHub",
        iconUrl: github,
        link: "https://github.com/YourGitHubUsername",
    },
    {
        name: "LinkedIn",
        iconUrl: linkedin,
        link: "https://www.linkedin.com/in/YourLinkedInUsername",
    },
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: "btn-back-red",
        name: "Amazon Price Tracker",
        description:
            "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
        link: "https://github.com/adrianhajdin/pricewise",
    },
    {
        iconUrl: threads,
        theme: "btn-back-green",
        name: "Full Stack Threads Clone",
        description:
            'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: "https://github.com/adrianhajdin/threads",
    },
    {
        iconUrl: car,
        theme: "btn-back-blue",
        name: "Car Finding App",
        description:
            "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
        link: "https://github.com/adrianhajdin/project_next13_car_showcase",
    },
    {
        iconUrl: snapgram,
        theme: "btn-back-pink",
        name: "Full Stack Instagram Clone",
        description:
            "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
        link: "https://github.com/adrianhajdin/social_media_app",
    },
    {
        iconUrl: estate,
        theme: "btn-back-black",
        name: "Real-Estate Application",
        description:
            "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
        link: "https://github.com/adrianhajdin/projects_realestate",
    },
    {
        iconUrl: summiz,
        theme: "btn-back-yellow",
        name: "AI Summarizer Application",
        description:
            "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
        link: "https://github.com/adrianhajdin/project_ai_summarizer",
    },
];

export const testimonials = [
    {
        testimonial: "This is a great product. I've had an amazing experience.",
        name: "John Doe",
        designation: "CEO",
        company: "Tech Corp",
        image: raven,
    },
    {
        testimonial: "I love this service. It has made my work so much easier.",
        name: "Jane Smith",
        designation: "Product Manager",
        company: "Innovative Solutions",
        image: raven,
    },
    {
        testimonial:
            "I love this serv22ice. It has made my work so much easier.",
        name: "Jane Smith3",
        designation: "Product Manag22er",
        company: "Innovative 22Solutions",
        image: raven,
    },
];
