'use client';

import React, { FC, useState } from 'react';
import Button from '../components/Buttons';
import Education from '../components/Education';
import Experience from '../components/Experience';

const ExpEdu: FC = () => {
    const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

    return (
        <main className='h-full bg-primary flex flex-col justify-start items-center p-6'>
            {/* Tab Buttons */}
            <div className='flex gap-5'>
                <Button
                    text='EXPERIENCE'
                    color='bg-transparent text-secondary border-secondary'
                    hover='hover:bg-secondary hover:text-primary'
                    isActive={activeTab === 'experience'}
                    onClick={() => setActiveTab('experience')}
                />
                <Button
                    text='EDUCATION'
                    color='bg-transparent text-secondary border-secondary'
                    hover='hover:bg-secondary hover:text-primary'
                    isActive={activeTab === 'education'}
                    onClick={() => setActiveTab('education')}
                />
            </div>

            {/* Tab Content */}
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