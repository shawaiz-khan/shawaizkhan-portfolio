'use client';

import React, { FC } from 'react';
import animationData from '../assets/animations/quiz-mode-teal-dark.json';
import Lottie from 'lottie-react';
import { useTheme } from '../components/ThemeContext';

const About: FC = () => {
    const { theme } = useTheme();

    const headings = [
        "Name:",
        "Location:",
        "Specialization:",
        "Branding:",
        "Passions:",
        "Mentorship:",
        "Email:",
        "Phone:"
    ];

    const descriptions = [
        "Shawaiz Khan",
        "Pakistan",
        "HTML, CSS, JavaScript, Typescript, React",
        "Skilled in logo design and branding.",
        "Interested in new technologies and UX.",
        "Available for collab. and mentoring.",
        "shawaizkhan.biz@gmail.com",
        "+92 328 852 8854"
    ];

    return (
        <main
            className={`flex flex-col md:flex-row p-4 sm:p-6 lg:p-10 justify-between items-center w-full gap-4 sm:gap-8 lg:gap-12 ${theme === 'light' ? 'bg-lightGray' : 'bg-darkBackground'}`}
            id='about'
        >
            <div className="flex justify-center items-center w-full md:w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                <Lottie animationData={animationData} loop={true} className="w-full h-full max-w-[400px] sm:max-w-sm md:max-w-md lg:max-w-lg" />
            </div>
            <article className={`flex flex-col gap-3 sm:gap-5 w-full md:w-1/2 ${theme === 'light' ? 'text-secondary' : 'text-darkText'}`}>
                <div className='w-full'>
                    <h1 className='font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl'>ABOUT ME</h1>
                    <p className='font-inter font-normal text-sm sm:text-base lg:text-lg mt-1'>
                        Building easy-to-use websites and apps from your ideas. I focus on making everything clear and simple for users.
                    </p>
                </div>
                <div className='flex gap-3 text-xs sm:text-sm lg:text-base'>
                    <div className='font-inter font-bold flex flex-col gap-1'>
                        {headings.map((heading, index) => (
                            <div key={index}>
                                {heading}
                            </div>
                        ))}
                    </div>
                    <div className='font-inter font-normal flex flex-col gap-1'>
                        {descriptions.map((description, index) => (
                            <div key={index}>
                                {description}
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </main>
    );
};

export default About;