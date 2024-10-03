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

    return (
        <div
            className={`p-4 md:p-6 flex flex-col-reverse md:flex-row h-auto md:h-[600px] justify-between items-center gap-3 ${theme === 'light' ? 'bg-lightGray' : 'bg-darkBackground'}`}
            id='home'
        >
            <article className={`gap-2 flex flex-col justify-center w-full md:w-1/2 ${theme === 'light' ? 'text-secondary' : 'text-darkText'}`}>
                <span className='text-base font-poppins font-light'>WELCOME TO MY WORLD!</span>
                <h1 className='text-4xl md:text-6xl font-poppins font-bold'>I'M SHAWAIZ KHAN</h1>
                <h3 className="font-inter text-2xl md:text-3xl font-semibold flex gap-2">
                    a
                    <Typewriter titles={['Frontend Web Developer', 'Graphic Designer', 'UI/UX Designer']} />
                </h3>
                <p className="text-base md:text-lg font-inter font-light">
                    I design and build websites that look great and work smoothly. I focus on making things simple and easy
                    to use, ensuring every detail serves a purpose and enhances the user experience.
                </p>
                <div className="btn-container flex flex-row gap-4 mb-4 mt-4">
                    <Button
                        text='RESUME'
                        color={`bg-primary shadow-md ${theme === 'dark' ? 'hover:bg-highlight hover:text-darkBackground border-secondary bg-secondary text-lightGray' : 'border-primary text-secondary'}`}
                        hover='hover:bg-highlight hover:text-primary hover:border-highlight'
                    />
                    <Button
                        text='CONTACT'
                        color={`bg-primary shadow-md ${theme === 'dark' ? 'hover:bg-highlight hover:text-darkBackground border-secondary bg-secondary text-lightGray' : 'border-primary text-secondary'}`}
                        hover='hover:bg-highlight hover:text-primary hover:border-highlight'
                    />
                </div>
            </article>
            <div className="flex justify-start items-start md:justify-center md:items-center h-full w-3/4 md:w-1/2">
                <Lottie animationData={animationData} loop={true} className="w-full h-full max-w-sm md:max-w-lg" />
            </div>
        </div>
    );
}

export default Hero;