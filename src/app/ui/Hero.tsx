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
        <div className={`p-6 flex flex-col md:flex-row h-[600px] justify-between items-center ${theme === 'light' ? 'bg-lightGray' : 'bg-darkBackground'}`}>
            <article className={`gap-2 flex flex-col justify-center w-full md:w-1/2 ${theme === 'light' ? 'text-secondary' : 'text-darkText'}`}>
                <span className='text-base font-poppins font-light'>WELCOME TO MY WORLD!</span>
                <h1 className='text-6xl font-poppins font-bold'>I'M SHAWAIZ KHAN</h1>
                <h3 className="font-inter text-3xl font-semibold flex gap-2">
                    a
                    <Typewriter titles={['Frontend Web Developer', 'Graphic Designer', 'UI/UX Designer']} />
                </h3>
                <p className="text-base font-inter font-light">
                    I design and build websites that look great and work smoothly. I focus on making things simple and easy
                    to use, ensuring every detail serves a purpose and enhances the user experience.
                </p>
                <div className="btn-container flex gap-5 mt-2">
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
            <div className="flex justify-center items-center h-3/4 w-fit md:w-1/2">
                <Lottie animationData={animationData} loop={true} style={{ width: '100%', height: '100%' }} />
            </div>
        </div>
    );
}

export default Hero;