'use client';

import React, { FC, useState } from 'react';
import Button from '../components/Buttons';
import Education from '../components/Education';
import Experience from '../components/Experience';
import { useTheme } from '../components/ThemeContext';

const ExpEdu: FC = () => {
    const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
    const { theme } = useTheme();

    return (
        <main
            className={`h-full p-10 flex flex-col justify-center items-center transition-colors duration-300 ${theme === 'light' ? 'bg-lightGray' : 'bg-darkBackground'}`}
            id='expEdu'
        >
            <div className='flex gap-5'>
                <Button
                    text='EXPERIENCE'
                    color={`bg-transparent ${theme === 'light' ? 'text-secondary border-highlight' : 'text-darkText border-highlight'}`}
                    hover={`hover:bg-secondary hover:text-primary ${theme === 'light' ? '' : 'hover:text-darkText'}`}
                    isActive={activeTab === 'experience'}
                    onClick={() => setActiveTab('experience')}
                />
                <Button
                    text='EDUCATION'
                    color={`bg-transparent ${theme === 'light' ? 'text-secondary border-highlight' : 'text-darkText border-highlight'}`}
                    hover={`hover:bg-secondary hover:text-primary ${theme === 'light' ? '' : 'hover:text-darkText'}`}
                    isActive={activeTab === 'education'}
                    onClick={() => setActiveTab('education')}
                />
            </div>

            <div className='mt-5 w-full'>
                {activeTab === 'experience' && (
                    <Experience />
                )}
                {activeTab === 'education' && (
                    <Education />
                )}
            </div>
        </main>
    );
};

export default ExpEdu;