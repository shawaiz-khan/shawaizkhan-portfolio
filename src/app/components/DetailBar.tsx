'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

const DetailBar: React.FC = () => {
    const [isPaused, setIsPaused] = useState(false);
    const { theme } = useTheme();

    const details = [
        { number: '15+', label: 'CUSTOMERS' },
        { number: '20+', label: 'PROJECTS' },
        { number: '90%', label: 'SATISFACTION' },
        { number: '10+', label: 'FRAMEWORKS' },
        { number: '20+', label: 'MODULES' },
        { number: '15+', label: 'DEPLOYMENTS' },
    ];

    return (
        <article className={`h-24 ${theme === 'light' ? 'bg-primary' : 'bg-secondary'} flex items-center overflow-hidden shadow-md`}>
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: isPaused ? '100%' : '-100%' }}
                transition={{
                    duration: isPaused ? 90 : 20,
                    ease: 'linear',
                    repeat: Infinity,
                }}
                className='flex items-end mx-6 font-fira'
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {details.map((detail, index) => (
                    <div key={index} className='flex items-end mx-6'>
                        <span className='text-3xl md:text-4xl font-semibold text-highlight'>{detail.number}</span>
                        <span className={`ml-2 text-xl md:text-2xl font-normal ${theme === 'light' ? 'text-secondary' : 'text-darkText'}`}>{detail.label}</span>
                    </div>
                ))}
            </motion.div>
        </article>
    );
}

export default DetailBar;