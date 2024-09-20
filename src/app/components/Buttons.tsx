import * as React from 'react';

interface ButtonProps {
    text: string;
    color: string;
    hover: string;
    isActive?: boolean;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, color, hover, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`w-48 h-14 border-2 font-poppins font-semibold rounded-lg transition-all duration-200 ease-in 
                ${isActive ? 'bg-secondary text-primary border-secondary' : color} 
                ${!isActive && hover}`}
        >
            {text}
        </button>
    );
}

export default Button;