/* eslint-disable react/no-unescaped-entities */
'use client';

import * as React from 'react';
import Button from '../components/Buttons';
import Lottie from 'lottie-react';
import animationData from '../assets/animations/person-coding.json';
import Typewriter from '../components/Typewritter';
import { useTheme } from '../components/ThemeContext';

const Hero: React.FC = () => {
    const { theme } = useTheme();
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div
            className={`p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col-reverse md:flex-row h-auto md:h-[600px] justify-between items-center gap-4 lg:gap-6 ${theme === 'light' ? 'bg-lightGray' : 'bg-darkBackground'}`}
            id='home'
        >
            {/* Left Section - Text */}
            <article className={`gap-2 flex flex-col justify-center w-full md:w-1/2 ${theme === 'light' ? 'text-secondary' : 'text-darkText'}`}>
                <span className='text-sm sm:text-base font-poppins font-light'>WELCOME TO MY WORLD!</span>
                <h1 className='text-3xl sm:text-2xl md:text-5xl lg:text-6xl font-poppins font-bold'>I'M SHAWAIZ KHAN</h1>
                <h3 className="font-inter text-xl sm:text-2xl md:text-3xl font-semibold flex gap-2">
                    a
                    <Typewriter titles={['Frontend Developer', 'Graphic Designer', 'UI/UX Designer']} />
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-inter font-light">
                    I design and build websites that look great and work smoothly. I focus on making things simple and easy
                    to use, ensuring every detail serves a purpose and enhances the user experience.
                </p>
                {/* Buttons */}
                <div className="btn-container flex flex-row gap-3 sm:gap-4 mb-4 mt-4">
                    <a
                        href="https://drive.google.com/file/d/1Tm5nKiTZHDNMyekB6yb62erlRd6w0dg6/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View and download my resume"
                    >
                        <Button
                            text='RESUME'
                            color={`bg-primary shadow-md ${theme === 'dark' ? 'hover:bg-highlight hover:text-darkBackground border-secondary bg-secondary text-lightGray' : 'border-primary text-secondary'}`}
                            hover='hover:bg-highlight hover:text-primary hover:border-highlight'
                        />
                    </a>
                    <Button
                        text='CONTACT'
                        color={`bg-primary shadow-md ${theme === 'dark' ? 'hover:bg-highlight hover:text-darkBackground border-secondary bg-secondary text-lightGray' : 'border-primary text-secondary'}`}
                        hover='hover:bg-highlight hover:text-primary hover:border-highlight'
                        onClick={() => scrollToSection('contact')}
                    />
                </div>
            </article>

            {/* Right Section - Animation */}
            <div className="flex justify-center items-center md:justify-center md:items-center h-full w-full md:w-1/2">
                <Lottie animationData={animationData} loop={true} className="w-full h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
            </div>
        </div>
    );
};

export default Hero;