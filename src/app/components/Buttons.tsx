import * as React from 'react';

interface ButtonProps {
    text: string;
    color: string;
    hover: string;
    isActive?: boolean;
    onClick?: () => void;
    isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, color, hover, isActive, onClick, isDisabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            className={`w-full sm:w-40 md:w-48 lg:w-56 h-10 sm:h-12 md:h-14 lg:h-16 px-3 sm:px-4 md:px-6 lg:px-8 border-2 font-poppins font-semibold rounded-lg transition-all duration-200 ease-in ${isActive ? 'bg-transparent text-highlight border-highlight' : color} ${!isActive && hover} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} // Add styles for disabled state
        >
            {text}
        </button>
    );
}

export default Button;