'use client'

import React, { FC, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const NavBar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuToggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <nav className='bg-secondary h-20 flex justify-between items-center px-6'>
                {/* Logo */}
                <div className="cursor-pointer flex items-center gap-1 font-semibold text-3xl text-primary">
                    <span className='text-highlight font-fira'>&lt;</span>
                    <h1 className="font-fira">SK</h1>
                    <span className='text-highlight font-fira'>/&gt;</span>
                </div>

                {/* Desktop Menu */}
                <ul className='font-poppins hidden text-xl gap-7 text-primary md:flex'>
                    <li className='font-semibold cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>
                        HOME
                    </li>
                    <li className='relative group'>
                        <button className='font-semibold relative z-10 text-primary hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>
                            ABOUT
                        </button>
                        <ul className='absolute top-full left-0 mt-2 bg-secondary text-primary w-48 border border-highlight rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in'>
                            <li className='font-semibold p-2 hover:bg-highlight hover:text-secondary cursor-pointer transition-all duration-200 ease-in'>Experience</li>
                            <li className='font-semibold p-2 hover:bg-highlight hover:text-secondary cursor-pointer transition-all duration-200 ease-in'>Education</li>
                        </ul>
                    </li>
                    <li className='font-semibold cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>
                        SKILLS
                    </li>
                    <li className='font-semibold cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>
                        PROJECTS
                    </li>
                    <li className='font-semibold cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>
                        TESTIMONIALS
                    </li>
                    <li className='font-semibold cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>
                        CONTACT
                    </li>
                </ul>

                {/* Book a Meeting Button */}
                <button className='bg-highlight w-48 h-9 rounded-md text-secondary font-poppins font-semibold hover:bg-primary transition-colors duration-200 ease-in text-lg hidden md:flex md:justify-center md:items-center'>
                    BOOK A MEETING
                </button>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={menuToggle}>
                    {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>

                {/* Mobile Menu */}
                <div className={`fixed bottom-0 top-0 right-0 bg-secondary p-6 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} duration-300 ease-in-out`} style={{ width: '55%' }}>
                    <ul className='flex flex-col font-poppins font-semibold text-xl gap-7 text-primary'>
                        <li className='py-2 cursor-pointer hover:text-highlight transition-all duration-200 ease-in' onClick={menuToggle}>{isOpen ? <HiX size={24} /> : <HiMenu size={24} />}</li>
                        <li className='font-semibold w-fit cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>
                            HOME
                        </li>
                        <li className='font-semibold w-fit cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>
                            ABOUT
                        </li>
                        <li className='font-semibold w-fit cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>
                            EXPERIENCE
                        </li>
                        <li className='font-semibold w-fit cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>
                            EDUCATION
                        </li>
                        <li className='font-semibold w-fit cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>
                            SKILLS
                        </li>
                        <li className='font-semibold w-fit cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>
                            PROJECTS
                        </li>
                        <li className='font-semibold w-fit cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>
                            TESTIMONIALS
                        </li>
                        <li className='font-semibold w-fit cursor-pointer relative hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>
                            CONTACT
                        </li>
                        {/* Book a Meeting Button */}
                        <button className='bg-highlight w-48 h-9 rounded-md text-secondary font-poppins font-semibold hover:bg-primary transition-colors duration-200 ease-in text-lg'>
                            BOOK A MEETING
                        </button>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;