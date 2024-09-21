import React, { FC } from 'react';
import { skillsData } from '../assets/data/Skills';

const Skills: React.FC = () => {
    return (
        <div className='bg-secondary h-auto p-10 flex flex-col justify-center items-center gap-20'>
            <h1 className='text-3xl font-bold text-white mb-4'>MY SKILLS</h1>
            <article className='flex flex-col gap-10'>
                {Object.entries(skillsData).map(([category, items]) => (
                    <div key={category} className='text-white grid grid-cols-[150px_1fr] gap-4 items-start'>
                        <h2 className='font-semibold text-xl text-left'>
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
        <button className='bg-transparent text-white border-2 border-highlight text-md font-fira font-medium hover:bg-highlight transition-all duration-150 ease-in rounded-full py-2 px-4 shadow-lg hover:shadow-xl'>
            {text}
        </button>
    );
}

interface SkillBtnProps {
    text: string;
}