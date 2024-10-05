/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../components/ThemeContext';
import { div, button, ul, li } from 'framer-motion/client';

const NavBar: FC = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuToggle = () => setIsOpen(!isOpen);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsSticky(scrollTop > 50);
    };

    const handleMouseEnter = () => {
        setIsMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setIsMenuOpen(false);
        }, 1000);
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`sticky ${isSticky ? 'top-4' : ''} z-20`}>
            <nav className={`bg-lightGray text-secondary dark:bg-darkBackground h-20 flex justify-between items-center px-6 ${isSticky ? 'rounded-full mx-4' : ''} transition-all duration-300 shadow-lg`}>
                {/* Logo */}
                <div className="cursor-pointer flex items-center gap-1 font-semibold text-2xl sm:text-3xl text-secondary dark:text-darkText">
                    <span className='text-highlight font-fira'>&lt;</span>
                    <h1 className="font-fira">SK</h1>
                    <span className='text-highlight font-fira'>/&gt;</span>
                </div>

                {/* Desktop Menu */}
                <ul className='hidden md:flex font-poppins text-lg sm:text-xl gap-4 lg:gap-7 text-secondary dark:text-darkText'>
                    <li className='font-semibold cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in group' onClick={() => scrollToSection('home')}>
                        HOME
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-highlight transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                    </li>
                    <li className="relative group">
                        <button
                            className='font-semibold relative group z-10 text-secondary dark:text-darkText hover:text-highlight transition-all duration-200 ease-in'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => scrollToSection('about')}
                        >
                            ABOUT
                            <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-highlight transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                        </button>
                        {/* Submenu for About */}
                        <ul className={`absolute top-full left-0 transform -translate-x-1/2 mt-2 bg-lightGray dark:bg-darkBackground text-secondary dark:text-darkText w-48 ${isMenuOpen ? 'opacity-100' : 'hidden'} border border-highlight rounded-md shadow-md transition-opacity duration-200 ease-in`}>
                            <li className='font-semibold p-2 hover:bg-highlight hover:text-secondary cursor-pointer transition-all duration-200 ease-in' onClick={() => scrollToSection('expEdu')}>
                                Experience
                            </li>
                            <li className='font-semibold p-2 hover:bg-highlight hover:text-secondary cursor-pointer transition-all duration-200 ease-in' onClick={() => scrollToSection('edu')}>
                                Education
                            </li>
                        </ul>
                    </li>
                    {/* Other menu items */}
                    <li className='font-semibold cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in group' onClick={() => scrollToSection('skills')}>
                        SKILLS
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-highlight transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                    </li>
                    <li className='font-semibold cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in group' onClick={() => scrollToSection('portfolio')}>
                        PROJECTS
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-highlight transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                    </li>
                    <li className='font-semibold cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in group' onClick={() => scrollToSection('testimonials')}>
                        TESTIMONIALS
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-highlight transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                    </li>
                    <li className='font-semibold cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in group' onClick={() => scrollToSection('contact')}>
                        CONTACT
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-highlight transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                    </li>
                </ul>

                {/* Call to Action Button */}
                <div className='hidden md:flex gap-3'>
                    <ThemeToggle />
                    <button className={`flex w-40 lg:w-48 h-9 rounded-md text-lightGray font-poppins font-semibold shadow-md transition-colors duration-200 ease-in text-lg justify-center items-center ${theme === 'dark' ? 'bg-highlight hover:bg-secondary hover:text-lightGray' : 'bg-highlight hover:bg-primary hover:text-highlight'}`}>
                        BOOK A MEETING
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex justify-center items-center gap-1">
                    <ThemeToggle />
                    {!isOpen && <HiMenu size={24} onClick={menuToggle} className='text-secondary dark:text-lightGray' />}
                </div>

                {/* Mobile Menu */}
                <div className={`fixed z-50 flex flex-col justify-start items-start bottom-0 top-0 w-3/4 right-0 bg-lightGray dark:bg-darkBackground p-6 shadow-[0px_4px_15px_rgba(0,0,0,0.50)] transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} duration-300 ease-in-out`}>
                    <button className="md:hidden top-8 left-5" onClick={menuToggle}>
                        {isOpen && <HiX size={24} className='text-secondary dark:text-lightGray' />}
                    </button>
                    <ul className='flex flex-col font-poppins font-semibold text-xl gap-7 mt-10 text-secondary dark:text-darkText'>
                        <li className='cursor-pointer hover:text-highlight transition-all duration-200 ease-in' onClick={() => scrollToSection('home')}>HOME</li>
                        <li className='cursor-pointer hover:text-highlight transition-all duration-200 ease-in' onClick={() => scrollToSection('about')}>ABOUT</li>
                        <li className='cursor-pointer hover:text-highlight transition-all duration-200 ease-in' onClick={() => scrollToSection('expEdu')}>EXPERIENCE</li>
                        <li className='cursor-pointer hover:text-highlight transition-all duration-200 ease-in' onClick={() => scrollToSection('edu')}>EDUCATION</li>
                        <li className='cursor-pointer hover:text-highlight transition-all duration-200 ease-in' onClick={() => scrollToSection('skills')}>SKILLS</li>
                        <li className='cursor-pointer hover:text-highlight transition-all duration-200 ease-in' onClick={() => scrollToSection('portfolio')}>PROJECTS</li>
                        <li className='cursor-pointer hover:text-highlight transition-all duration-200 ease-in' onClick={() => scrollToSection('testimonials')}>TESTIMONIALS</li>
                        <li className='cursor-pointer hover:text-highlight transition-all duration-200 ease-in' onClick={() => scrollToSection('contact')}>CONTACT</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;