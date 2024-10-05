'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

const DetailBar: React.FC = () => {
    const { theme } = useTheme();

    const details = [
        { number: '15+', label: 'CUSTOMERS' },
        { number: '20+', label: 'PROJECTS' },
        { number: '90%', label: 'SATISFACTION' },
        { number: '10+', label: 'FRAMEWORKS' },
        { number: '20+', label: 'MODULES' },
        { number: '15+', label: 'DEPLOYMENTS' },
    ];

    const itemWidth = 200;
    const totalWidth = details.length * itemWidth;

    return (
        <article className={`cursor-pointer h-24 sm:h-20 md:h-24 lg:h-28 ${theme === 'light' ? 'bg-primary' : 'bg-secondary'} flex items-center overflow-hidden shadow-md`}>
            <motion.div
                initial={{ x: '0%' }}
                animate={{ x: `-${totalWidth}px` }}
                transition={{
                    duration: 20,
                    ease: 'linear',
                    repeat: Infinity,
                }}
                style={{ width: `${totalWidth}px` }}
                className='flex items-end font-fira'
            >
                <div className='flex'>
                    {details.map((detail, index) => (
                        <div key={index} className='flex items-end mx-4 sm:mx-6 lg:mx-10'>
                            <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-highlight'>{detail.number}</span>
                            <span className={`ml-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal ${theme === 'light' ? 'text-secondary' : 'text-darkText'}`}>{detail.label}</span>
                        </div>
                    ))}
                </div>
                <div className='flex'>
                    {details.map((detail, index) => (
                        <div key={index} className='flex items-end mx-4 sm:mx-6 lg:mx-10'>
                            <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-highlight'>{detail.number}</span>
                            <span className={`ml-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal ${theme === 'light' ? 'text-secondary' : 'text-darkText'}`}>{detail.label}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </article>
    );
}

export default DetailBar;