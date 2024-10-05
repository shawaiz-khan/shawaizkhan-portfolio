'use client';

import React, { FC, useEffect, useState } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';

const GoToTop: FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleBtn = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsVisible(scrollY > 250);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        isVisible && (
            <div
                onClick={toggleBtn}
                className='text-primary bg-highlight hover:bg-[#7A3DFF] bottom-4 fixed right-4 p-3 rounded-md transition-all duration-200 ease-in cursor-pointer z-50'
            >
                <BsArrowUpCircleFill size={25} />
            </div>
        )
    );
};

export default GoToTop;