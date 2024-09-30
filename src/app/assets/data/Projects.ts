import { StaticImageData } from 'next/image';
import Image from '../images/placeholder.jpg';
import InfinityShadow from '../images/1.jpg'

export interface IProjects {
    title: string;
    description: string;
    category: string;
    image: { src: StaticImageData };
    github: string;
    demo: string;
}

const projects: IProjects[] = [
    {
        title: "Personal Portfolio",
        description: "A responsive portfolio website showcasing my projects and skills. This site is designed to provide visitors with a comprehensive view of my work, including detailed case studies, technology stacks used, and the design process behind each project. It features smooth navigation, an engaging layout, and a clean aesthetic to highlight my creativity and attention to detail.",
        category: "Web Development",
        image: {
            src: InfinityShadow,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
    {
        title: "E-commerce Store",
        description: "An online store built with React and Node.js, featuring a robust shopping cart and payment integration. Users can browse products, add them to their cart, and complete their purchases with ease. The store is optimized for mobile devices and includes user authentication, allowing customers to create accounts, track orders, and manage their profiles seamlessly.",
        category: "Web Development",
        image: {
            src: Image,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
    {
        title: "Blog Platform",
        description: "A blogging platform developed using Next.js that allows users to create, edit, and manage their posts. The platform features a rich text editor, user authentication, and a comment section for reader engagement. Users can categorize their blogs, add tags, and enhance their content with images and videos, providing a user-friendly interface for both writers and readers.",
        category: "Web Development",
        image: {
            src: Image,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
    {
        title: "Task Management App",
        description: "A task management application built with React and Tailwind CSS to help users organize tasks efficiently. Users can create, edit, and delete tasks, set deadlines, and prioritize their workload. The app features a clean and intuitive UI that allows for easy drag-and-drop functionality, providing a seamless experience for managing daily activities.",
        category: "Web Development",
        image: {
            src: Image,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
    {
        title: "Social Media Dashboard",
        description: "A dashboard for tracking social media analytics, developed with React and Chart.js. This dashboard provides a comprehensive view of user engagement across multiple platforms, including follower growth, post performance, and audience demographics. It is designed to help businesses and individuals analyze their social media strategies effectively.",
        category: "Web Development",
        image: {
            src: Image,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
    {
        title: "Graphic Design Portfolio",
        description: "A showcase of graphic design work, including logos, branding projects, and marketing materials. This portfolio highlights my skills in Adobe Creative Suite and demonstrates my ability to create visually appealing designs that effectively communicate brand messages. It includes case studies that outline the design process and the impact of each project.",
        category: "Graphic Design",
        image: {
            src: Image,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
    {
        title: "UI/UX Design Project",
        description: "A case study of a UI/UX design project, showcasing wireframes, user flows, and prototypes. This project illustrates my design thinking process, from initial research and user interviews to final design and usability testing. It emphasizes the importance of user-centered design and how I implemented feedback to create a polished product.",
        category: "Graphic Design",
        image: {
            src: Image,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
    {
        title: "Restaurant Website",
        description: "A fully responsive website for a restaurant, featuring a menu, reservation system, and contact information. The site is designed to attract customers with mouth-watering visuals and an easy-to-navigate layout. It includes a blog section for sharing recipes and news, enhancing customer engagement and online presence.",
        category: "Web Development",
        image: {
            src: Image,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
    {
        title: "Photography Website",
        description: "A portfolio website for a photographer, showcasing galleries, contact forms, and booking options. The design focuses on high-quality images and an intuitive layout, allowing potential clients to view the photographer's work easily. It includes sections for testimonials and services offered, promoting user interaction and inquiries.",
        category: "Web Development",
        image: {
            src: Image,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
    {
        title: "Chat Application",
        description: "A real-time chat application built with Node.js and Socket.io. This application allows users to communicate instantly through text messages, share images, and create chat rooms. It features user authentication and the ability to create private chats, making it a versatile tool for personal or professional use.",
        category: "Web Development",
        image: {
            src: Image,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
    {
        title: "Personal Portfolio",
        description: "A responsive portfolio website showcasing my projects and skills. This site is designed to provide visitors with a comprehensive view of my work, including detailed case studies, technology stacks used, and the design process behind each project. It features smooth navigation, an engaging layout, and a clean aesthetic to highlight my creativity and attention to detail.",
        category: "Web Development",
        image: {
            src: Image,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
    {
        title: "E-commerce Store",
        description: "An online store built with React and Node.js, featuring a robust shopping cart and payment integration. Users can browse products, add them to their cart, and complete their purchases with ease. The store is optimized for mobile devices and includes user authentication, allowing customers to create accounts, track orders, and manage their profiles seamlessly.",
        category: "Web Development",
        image: {
            src: Image,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
    {
        title: "Blog Platform",
        description: "A blogging platform developed using Next.js that allows users to create, edit, and manage their posts. The platform features a rich text editor, user authentication, and a comment section for reader engagement. Users can categorize their blogs, add tags, and enhance their content with images and videos, providing a user-friendly interface for both writers and readers.",
        category: "Web Development",
        image: {
            src: Image,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
    {
        title: "Task Management App",
        description: "A task management application built with React and Tailwind CSS to help users organize tasks efficiently. Users can create, edit, and delete tasks, set deadlines, and prioritize their workload. The app features a clean and intuitive UI that allows for easy drag-and-drop functionality, providing a seamless experience for managing daily activities.",
        category: "Web Development",
        image: {
            src: Image,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
    {
        title: "Social Media Dashboard",
        description: "A dashboard for tracking social media analytics, developed with React and Chart.js. This dashboard provides a comprehensive view of user engagement across multiple platforms, including follower growth, post performance, and audience demographics. It is designed to help businesses and individuals analyze their social media strategies effectively.",
        category: "Web Development",
        image: {
            src: Image,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
    {
        title: "Graphic Design Portfolio",
        description: "A showcase of graphic design work, including logos, branding projects, and marketing materials. This portfolio highlights my skills in Adobe Creative Suite and demonstrates my ability to create visually appealing designs that effectively communicate brand messages. It includes case studies that outline the design process and the impact of each project.",
        category: "Graphic Design",
        image: {
            src: Image,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
    {
        title: "UI/UX Design Project",
        description: "A case study of a UI/UX design project, showcasing wireframes, user flows, and prototypes. This project illustrates my design thinking process, from initial research and user interviews to final design and usability testing. It emphasizes the importance of user-centered design and how I implemented feedback to create a polished product.",
        category: "Graphic Design",
        image: {
            src: Image,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
    {
        title: "Restaurant Website",
        description: "A fully responsive website for a restaurant, featuring a menu, reservation system, and contact information. The site is designed to attract customers with mouth-watering visuals and an easy-to-navigate layout. It includes a blog section for sharing recipes and news, enhancing customer engagement and online presence.",
        category: "Web Development",
        image: {
            src: Image,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
    {
        title: "Photography Website",
        description: "A portfolio website for a photographer, showcasing galleries, contact forms, and booking options. The design focuses on high-quality images and an intuitive layout, allowing potential clients to view the photographer's work easily. It includes sections for testimonials and services offered, promoting user interaction and inquiries.",
        category: "Web Development",
        image: {
            src: Image,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
    {
        title: "Chat Application",
        description: "A real-time chat application built with Node.js and Socket.io. This application allows users to communicate instantly through text messages, share images, and create chat rooms. It features user authentication and the ability to create private chats, making it a versatile tool for personal or professional use.",
        category: "Web Development",
        image: {
            src: Image,
        },
        github: "https://github.com/shawaiz-khan",
        demo: "https://devdigitals.org/",
    },
];

export default projects;