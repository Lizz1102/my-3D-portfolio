import { raven, geotab, iqvia, seoul, hira, oni } from "../assets/images";
import {
    car,
    contact,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    insta,
    mongodb,
    nodejs,
    box,
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
            "Developing e-book reading application for huge library of Bengali books.",
            "Designing customizable reading experience, syncing account and storage throughout devices and supporting all popular ebook formats.",
            "Implementing offline reading and web syncing.",
            "Collaborating with consultant, web developers in the designing process.",
        ],
    },
];

export const socialLinks = [
    {
        name: "LinkedIn",
        iconImage: linkedin,
        link: "https://www.linkedin.com/in/kamrunnaharliza/",
    },
    {
        name: "Instagram",
        iconImage: insta,
        link: "https://www.instagram.com/lizzie.llv/",
    },
];

export const projects = [
    {
        iconUrl: threads,
        theme: "btn-back-red",
        name: "Imperfectionist Ink - Personal Blog Site",
        description:
            "Interactive blogsite where I explore my creative side, and my journey to overcome the perfectionist in me. Developed the backend and APIs, updating the frontend to bring a personal touch and a minimalist UI.",
        link: "https://imperfectionist.ink/",
    },
    {
        iconUrl: summiz,
        theme: "btn-back-green",
        name: "ASP.NET WebAPIs",
        description:
            "Building Restful Web API projects with C# and exploring new features and incoming changes of .NET 6, .NET 7, and .NET 8. How to migrate .NET 5 APIs to later versions. Revisiting some advanced and fundamental concepts of .NET Core Web APIs.",
        link: "https://github.com/Lizz1102/web-apis-.net-core",
    },
    {
        iconUrl: box,
        theme: "btn-back-pink",
        name: "3D Portfolio",
        description:
            "Designed my portfolio using 3D models while learning immersive and personalized website design. Checkout the code of this website in the link below!",
        link: "https://github.com/Lizz1102/my-3D-portfolio",
    },
    {
        iconUrl: snapgram,
        theme: "btn-back-pink",
        name: "Retail Management System",
        description:
            "Building this makeover studio management system where the client can utilize the system for managing the inventory, and the users of the system can buy services and process payment securely.",
        link: "https://github.com/Lizz1102/lizas-retail-manager",
    },
    {
        iconUrl: estate,
        theme: "btn-back-green",
        name: "AWS SAM Projects",
        description:
            "Some mini projects like Scheduled News Generator, Face Rekognition etc using AWS Serverless Application Model - SAM.",
        link: "https://github.com/Lizz1102/AWS-SAM-Projects",
    },
    {
        iconUrl: summiz,
        theme: "btn-back-yellow",
        name: "Terraform AWS Development Environment",
        description:
            "This project allows us to create a fully customizable development environment on AWS using Terraform.",
        link: "https://github.com/Lizz1102/terraform-aws-dev-environment",
    },
];

export const testimonials = [
    {
        testimonial:
            'If I am asked to give my recommendation in 1 word, then I will choose the word: "Dependable". This dependency helped us to take bigger calculated risk and achieve more as a team.',
        name: "Ahmed Mashfique Raihan",
        designation: "Data Engineer",
        company: "Klarna",
        image: seoul,
    },
    {
        testimonial:
            "Liza joined our team when our senior application specialist left for higher education. She took over all of his responsibilities and handled his void place very quickly and confidently. I was very impressed at how she approached the role.",
        name: "Md Asif Ahmed Oni",
        designation: "Senior React Developer",
        company: "Canadian Tire",
        image: oni,
    },
    {
        testimonial:
            "She is very proactive member of our team. I found her encouraging to take new challenges and learn new things and implement. As a team member she is inspiring and fun loving, never thought twice to work with her in a new project.",
        name: "Habibul Hasan Hira",
        designation: "Full-Stack Software Developer",
        company: "RAENA",
        image: hira,
    },
];
