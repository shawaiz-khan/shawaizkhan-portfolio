import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from './ThemeContext';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`h-9 w-9 rounded-full transition-colors duration-200 ease-in ${theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'} flex items-center justify-center`}
        >
            {theme === 'light' ? <HiMoon size={24} /> : <HiSun size={24} />}
        </button>
    );
};

export default ThemeToggle;