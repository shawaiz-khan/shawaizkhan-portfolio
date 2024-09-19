import * as React from 'react';

interface ButtonProps {
    text: string;
    color: string;
    hover: string;
}

const Button: React.FC<ButtonProps> = ({ text, color, hover }) => {
    return (
        <button
            className={`w-48 h-14 border-2 ${color} rounded-lg ${hover} transition-all duration-200 ease-in`}
        >
            {text}
        </button>
    );
}

export default Button;