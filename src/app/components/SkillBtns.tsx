import React, { FC } from 'react';

const SkillBtn: FC<SkillBtnProps> = ({ text, theme }) => {
    return (
        <button className={`border-2 border-highlight text-md font-inter font-light rounded-full py-2 px-4 transition-all duration-150 ease-in shadow-lg hover:shadow-xl 
            ${theme === 'light' ? 'bg-transparent text-black hover:bg-highlight' : 'bg-transparent text-white hover:bg-highlight'}`}>
            {text}
        </button>
    );
}

interface SkillBtnProps {
    text: string;
    theme: string;
}

export default SkillBtn;