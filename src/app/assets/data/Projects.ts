import { StaticImageData } from 'next/image';
import InfinityShadow from '../images/1.jpg';
import JapanSurgicals from '../images/3.jpg';
import QuranTune from '../images/5.jpg';
import HomeInternetPlains from '../images/6.jpg';
import HighAccessRentals from '../images/7.jpg';
import SultanOfMartialArt from '../images/8.jpg';
import DigitalWatch from '../images/9.jpg';
import ReactCalculator from '../images/10.jpg';
import PharmacyManagementSystem from '../images/11.jpg';
import WeatherApp from '../images/12.jpg';
import TicTacToe from '../images/13.jpg';
import CounterApp from '../images/14.jpg';
import ZenithIDE from '../images/15.jpg';
import LearnXperience from '../images/16.jpg'

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
        title: "Infinity Shadow",
        description: "A website created using WordPress to offer graphic and web design services. It showcases various design projects and packages, making it easy for clients to see the available options and request custom design services tailored to their needs.",
        category: "Web Development & Graphic Design",
        image: {
            src: InfinityShadow,
        },
        github: "https://infinityshadow.com/",
        demo: "https://infinityshadow.com/",
    },
    {
        title: "LearnXperience",
        description: "An e-learning platform offering interactive online courses across multiple subjects. It features video lessons, quizzes, and downloadable resources, allowing learners to progress at their own pace. Users can track their achievements and earn certificates, with personalized course recommendations based on their interests.",
        category: "Web Development & Graphic Design",
        image: {
            src: LearnXperience,
        },
        github: "https://github.com/shawaiz-khan/LearnXperience",
        demo: "https://learnxperience.vercel.app/",
    },
    {
        title: "Japan Surgicals",
        description: "A website dedicated to the import and export of surgical instruments. It provides a detailed product catalog for users to browse and includes order inquiry forms, making it easy to request information and international shipping details for purchases.",
        category: "E-commerce & Healthcare",
        image: {
            src: JapanSurgicals,
        },
        github: "https://github.com/shawaiz-khan/japan-surgicals",
        demo: "https://japan-surgicals.vercel.app/",
    },
    {
        title: "Quran Tune",
        description: "A web application for Quran recitation that allows users to listen to and read Quranic verses. It includes features for selecting different reciters and provides translations in various languages to help users understand the text better.",
        category: "Web App & Education",
        image: {
            src: QuranTune,
        },
        github: "https://github.com/shawaiz-khan/quran-tune",
        demo: "https://quran-tune.vercel.app/",
    },
    {
        title: "Home Internet Plans",
        description: "A website that helps users browse and purchase internet plans from various providers. It includes tools for comparing different plans, a plan selector based on user needs, and customer reviews to assist in making informed decisions.",
        category: "Web Development & Telecommunications",
        image: {
            src: HomeInternetPlains,
        },
        github: "https://homeinternetplains.com/",
        demo: "https://homeinternetplains.com/",
    },
    {
        title: "High Access Rentals",
        description: "A platform for renting construction vehicles and machinery. It features listings for available equipment, pricing information, and options for making reservations, simplifying the process for businesses that need heavy-duty tools.",
        category: "Web Development & Business",
        image: {
            src: HighAccessRentals,
        },
        github: "https://highaccessrental.com/",
        demo: "https://highaccessrental.com/",
    },
    {
        title: "Sultan of Martial Art",
        description: "A website for a business that imports and exports martial arts gear and sportswear. It features a product catalog with an online store, allowing users to view products and learn about international shipping options for orders.",
        category: "E-commerce & Sports",
        image: {
            src: SultanOfMartialArt,
        },
        github: "https://sultanofmartialart.com/",
        demo: "https://sultanofmartialart.com/",
    },
    {
        title: "Digital Watch",
        description: "A straightforward web application that displays the current time and date in a digital format. It supports multiple time zones and offers customizable themes, making it visually appealing and easy to use for everyone.",
        category: "Web App & Utilities",
        image: {
            src: DigitalWatch,
        },
        github: "https://github.com/shawaiz-khan/digital-clock",
        demo: "https://clock-pink-eta.vercel.app/",
    },
    {
        title: "React Calculator",
        description: "A web application that acts as a simple calculator. Built with React, it offers standard arithmetic operations in a user-friendly design that adjusts to different screen sizes, ensuring usability across devices.",
        category: "Web App & Utilities",
        image: {
            src: ReactCalculator,
        },
        github: "https://github.com/shawaiz-khan/react-calculator",
        demo: "https://react-calculator-cyan-five.vercel.app/",
    },
    {
        title: "Pharmacy Management System",
        description: "A system designed to help pharmacies manage their inventory, sales, and orders. It enables pharmacists to track stock levels, handle prescriptions efficiently, and generate sales reports, streamlining their operations.",
        category: "Web Development & Healthcare",
        image: {
            src: PharmacyManagementSystem,
        },
        github: "https://github.com/shawaiz-khan/pharmacy-management-system",
        demo: "https://pharmacy-management-system-blush.vercel.app/",
    },
    {
        title: "Weather App",
        description: "An application that provides current weather updates based on user location. It includes detailed forecasts and weather maps, with options for customizing locations, making it easy for users to stay informed about local weather conditions.",
        category: "Web App & Utilities",
        image: {
            src: WeatherApp,
        },
        github: "https://github.com/shawaiz-khan/weather-app",
        demo: "https://weather-app-theta-six-22.vercel.app/",
    },
    {
        title: "Tic Tac Toe",
        description: "A basic version of the classic Tic Tac Toe game. Players can compete against each other in a two-player mode, enjoying a clean and responsive interface that makes gameplay straightforward and fun.",
        category: "Web App & Games",
        image: {
            src: TicTacToe,
        },
        github: "https://github.com/shawaiz-khan/tic-tac-toe-game",
        demo: "https://tic-tac-toe-game-indol-delta.vercel.app/",
    },
    {
        title: "Counter App",
        description: "An easy-to-use app designed for counting events or occurrences. It features simple buttons for incrementing and resetting counts, making it useful for tracking various simple metrics quickly and efficiently.",
        category: "Web App & Utilities",
        image: {
            src: CounterApp,
        },
        github: "https://github.com/shawaiz-khan/counter-app",
        demo: "https://counter-app-steel-sigma.vercel.app/",
    },
    {
        title: "Zenith IDE",
        description: "An open-source Integrated Development Environment (IDE) that supports multiple programming languages. It offers features like syntax highlighting and project management tools, making coding easier and more organized for developers.",
        category: "Software Development",
        image: {
            src: ZenithIDE,
        },
        github: "https://github.com/shawaiz-khan/zenith-ide",
        demo: "https://zenith-ide.vercel.app/",
    },
];

export default projects;