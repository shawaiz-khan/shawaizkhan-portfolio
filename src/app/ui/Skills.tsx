"use client"

import React from 'react';
import { skillsData } from '../assets/data/Skills';
import SkillBtn from '../components/SkillBtns';
import { useTheme } from '../components/ThemeContext';

const Skills: React.FC = () => {
    const { theme } = useTheme();

    return (
        <div className={`h-auto px-10 py-20 flex flex-col justify-center items-center gap-20 ${theme === 'light' ? 'bg-lightGray' : 'bg-darkBackground'}`}>
            <h1 className={`font-poppins font-bold text-5xl ${theme === "dark" ? 'text-lightGray' : 'text-secondary'} text-center mb-8`}>MY SKILLS</h1>
            <article className="flex flex-col gap-10">
                {Object.entries(skillsData).map(([category, items]) => (
                    <div key={category} className={`grid grid-cols-[150px_1fr] gap-4 items-center ${theme === 'light' ? 'text-black' : 'text-darkText'}`}>
                        <h2 className="font-semibold text-2xl text-left">
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </h2>
                        <ul className="flex flex-wrap gap-3 pl-5">
                            {items.map((item, index) => (
                                <SkillBtn key={index} text={item} theme={theme} />
                            ))}
                        </ul>
                    </div>
                ))}
            </article>
        </div>
    );
}

export default Skills;