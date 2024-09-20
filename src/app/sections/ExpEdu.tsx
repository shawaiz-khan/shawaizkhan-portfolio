'use client'

import React, { FC, useState } from 'react';
import Button from '../components/Buttons';

const ExpEdu: FC = () => {
    const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

    return (
        <main className='h-[1120px] bg-primary flex flex-col justify-start items-center p-6'>
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

            <div className='mt-5'>
                {activeTab === 'experience' && (
                    <div>
                        <p className='text-secondary'>Experience content goes here...</p>
                    </div>
                )}
                {activeTab === 'education' && (
                    <div>
                        <p className='text-secondary'>Education content goes here...</p>
                    </div>
                )}
            </div>
        </main>
    );
}

export default ExpEdu;