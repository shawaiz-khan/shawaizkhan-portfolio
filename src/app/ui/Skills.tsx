import React, { FC } from 'react';
import { skillsData } from '../assets/data/Skills';
import { useTheme } from '../components/ThemeContext';

const Skills: React.FC = () => {
    const { theme } = useTheme();

    return (
        <div className={`h-auto px-10 py-20 flex flex-col justify-center items-center gap-20 ${theme === 'light' ? 'bg-lightGray' : 'bg-secondary'}`}>
            <h1 className={`text-3xl font-bold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>MY SKILLS</h1>
            <article className='flex flex-col gap-10'>
                {Object.entries(skillsData).map(([category, items]) => (
                    <div key={category} className='text-white grid grid-cols-[150px_1fr] gap-4 items-center'>
                        <h2 className='font-semibold text-2xl text-left'>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </h2>
                        <ul className='flex flex-wrap gap-3 pl-5'>
                            {items.map((item, index) => (
                                <SkillBtn key={index} text={item} />
                            ))}
                        </ul>
                    </div>
                ))}
            </article>
        </div>
    );
}

export default Skills;

const SkillBtn: FC<SkillBtnProps> = ({ text }) => {
    return (
        <button className='bg-transparent border-2 border-highlight text-md font-inter font-extralight text-white hover:bg-highlight transition-all duration-150 ease-in rounded-full py-2 px-4 shadow-lg hover:shadow-xl'>
            {text}
        </button>
    );
}

interface SkillBtnProps {
    text: string;
}