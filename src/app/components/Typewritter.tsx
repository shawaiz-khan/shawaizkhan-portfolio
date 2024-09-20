'use client'

import React from 'react';
import Typewriter from 'typewriter-effect';

interface TypewriterProps {
    titles: string[];
}

const TypewriterComponent: React.FC<TypewriterProps> = ({ titles }) => {
    return (
        <Typewriter
            options={{
                strings: titles,
                autoStart: true,
                loop: true,
                deleteSpeed: 20,
                wrapperClassName: 'text-highlight'
            }}
        />
    );
}

export default TypewriterComponent;
