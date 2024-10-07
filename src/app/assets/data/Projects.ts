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
        description: "A WordPress-based website providing graphic and web design services. This platform showcases portfolio pieces, design packages, and allows clients to request custom services.",
        category: "Web Development & Graphic Design",
        image: {
            src: InfinityShadow,
        },
        github: "https://infinityshadow.com/",
        demo: "https://infinityshadow.com/",
    },
    {
        title: "LearnXperience",
        description: "An e-learning platform offering interactive online courses across multiple subjects. It features video lessons, quizzes, and downloadable resources, allowing learners to progress at their own pace. Users can track their achievements and earn certificates, with personalized course recommendations based on their interests",
        category: "Web Development & Graphic Design",
        image: {
            src: LearnXperience,
        },
        github: "https://github.com/shawaiz-khan/LearnXperience",
        demo: "https://learnxperience.vercel.app/",
    },
    {
        title: "Japan Surgicals",
        description: "A website dedicated to the import and export of surgical instruments. It provides a product catalog, order inquiry forms, and international shipping details.",
        category: "E-commerce & Healthcare",
        image: {
            src: JapanSurgicals,
        },
        github: "https://github.com/shawaiz-khan/japan-surgicals",
        demo: "https://japan-surgicals.vercel.app/",
    },
    {
        title: "Quran Tune",
        description: "A web app for Quran recitation, allowing users to listen to and read Quranic verses. It includes options for choosing reciters and translation in various languages.",
        category: "Web App & Education",
        image: {
            src: QuranTune,
        },
        github: "https://github.com/shawaiz-khan/quran-tune",
        demo: "https://quran-tune.vercel.app/",
    },
    {
        title: "Home Internet Plans",
        description: "A website for browsing and purchasing internet plans. It includes comparison tools, a plan selector, and customer reviews to help users choose the best service.",
        category: "Web Development & Telecommunications",
        image: {
            src: HomeInternetPlains,
        },
        github: "https://homeinternetplains.com/",
        demo: "https://homeinternetplains.com/",
    },
    {
        title: "High Access Rentals",
        description: "A site for renting construction cars and machinery. It features rental listings, pricing, and reservation options for heavy-duty equipment.",
        category: "Web Development & Business",
        image: {
            src: HighAccessRentals,
        },
        github: "https://highaccessrental.com/",
        demo: "https://highaccessrental.com/",
    },
    {
        title: "Sultan of Martial Art",
        description: "A website for a martial arts and sportswear import-export business. It features a product catalog, online store, and information about international shipping.",
        category: "E-commerce & Sports",
        image: {
            src: SultanOfMartialArt,
        },
        github: "https://sultanofmartialart.com/",
        demo: "https://sultanofmartialart.com/",
    },
    {
        title: "Digital Watch",
        description: "A simple web app displaying the current time and date with a sleek, digital-style interface. It includes time zone support and customizable themes.",
        category: "Web App & Utilities",
        image: {
            src: DigitalWatch,
        },
        github: "https://github.com/shawaiz-khan/digital-clock",
        demo: "https://clock-pink-eta.vercel.app/",
    },
    {
        title: "React Calculator",
        description: "A web app functioning as a calculator, built with React. It features standard arithmetic operations and a clean, responsive user interface.",
        category: "Web App & Utilities",
        image: {
            src: ReactCalculator,
        },
        github: "https://github.com/shawaiz-khan/react-calculator",
        demo: "https://react-calculator-cyan-five.vercel.app/",
    },
    {
        title: "Pharmacy Management System",
        description: "A system to manage pharmaceutical inventory, sales, and orders. It allows pharmacists to track stock, manage prescriptions, and generate sales reports.",
        category: "Web Development & Healthcare",
        image: {
            src: PharmacyManagementSystem,
        },
        github: "https://github.com/shawaiz-khan/pharmacy-management-system",
        demo: "https://pharmacy-management-system-blush.vercel.app/",
    },
    {
        title: "Weather App",
        description: "An app providing current weather updates based on location. It includes detailed forecasts, weather maps, and customizable location settings.",
        category: "Web App & Utilities",
        image: {
            src: WeatherApp,
        },
        github: "https://github.com/shawaiz-khan/weather-app",
        demo: "https://weather-app-theta-six-22.vercel.app/",
    },
    {
        title: "Tic Tac Toe",
        description: "A simple implementation of the Tic Tac Toe game. Players can challenge each other in a two-player mode with a responsive and clean interface.",
        category: "Web App & Games",
        image: {
            src: TicTacToe,
        },
        github: "https://github.com/shawaiz-khan/tic-tac-toe-game",
        demo: "https://tic-tac-toe-game-indol-delta.vercel.app/",
    },
    {
        title: "Counter App",
        description: "An app for counting events or occurrences. It features a simple increment and reset button, making it perfect for quick counts or tracking simple metrics.",
        category: "Web App & Utilities",
        image: {
            src: CounterApp,
        },
        github: "https://github.com/shawaiz-khan/counter-app",
        demo: "https://counter-app-steel-sigma.vercel.app/",
    },
    {
        title: "Zenith IDE",
        description: "An open-source Integrated Development Environment (IDE) for developers. It supports multiple programming languages, syntax highlighting, and project management tools.",
        category: "Software Development",
        image: {
            src: ZenithIDE,
        },
        github: "https://github.com/shawaiz-khan/zenith-ide",
        demo: "https://zenith-ide.vercel.app/",
    },
];

export default projects;