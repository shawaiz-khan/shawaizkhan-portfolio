import * as React from 'react';

interface ButtonProps {
    text: string;
    hoverText: string;
    bgColor: string;
    hoverColor: string;
}

const Button: React.FC<ButtonProps> = ({ text, bgColor, hoverColor, hoverText }) => {
    return (
        <button
            className={`w-48 h-14 text-primary ${bgColor} hover:${hoverColor} hover:${hoverText} rounded-lg`}
        >
            {text}
        </button>
    );
}

export default Button;