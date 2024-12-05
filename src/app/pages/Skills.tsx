"use client";

import React from 'react';
import { skillsData } from '../assets/data/Skills';
import SkillBtn from '../components/SkillBtns';
import { useTheme } from '../components/ThemeContext';

const Skills: React.FC = () => {
    const { theme } = useTheme();

    return (
        <div
            className={`h-auto px-4 sm:px-6 md:px-10 py-20 flex flex-col justify-center items-center gap-16 ${theme === 'light' ? 'bg-lightGray' : 'bg-darkBackground'}`}
            id='skills'
        >
            <h1 className={`font-poppins font-bold text-3xl sm:text-4xl md:text-5xl ${theme === "dark" ? 'text-lightGray' : 'text-secondary'} text-center mb-8`}>
                MY SKILLS
            </h1>
            <article className="flex flex-col gap-10 w-full max-w-5xl">
                {Object.entries(skillsData).map(([category, items]) => (
                    <div key={category} className={`flex flex-col sm:flex-row items-start gap-4 ${theme === 'light' ? 'text-black' : 'text-darkText'}`}>
                        <h2 className="font-semibold text-lg sm:text-xl md:text-2xl text-left w-full sm:w-1/4">
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </h2>
                        <ul className="flex flex-wrap gap-3 w-full md:w-3/4">
                            {items.map((item, index) => (
                                <SkillBtn key={index} text={item} theme={theme} />
                            ))}
                        </ul>
                    </div>
                ))}
            </article>
        </div>
    );
};

export default Skills;