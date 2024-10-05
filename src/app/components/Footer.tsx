import * as React from 'react';
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { useTheme } from '../components/ThemeContext';

const Footer: React.FC = () => {
    const { theme } = useTheme();
    const year = new Date().getFullYear().toString();

    return (
        <footer className={`py-6 md:py-8 px-4 md:px-6 border-t ${theme === 'dark' ? 'bg-darkBackground text-darkText border-darkText' : 'bg-lightGray text-secondary border-secondary'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                    {/* Logo Section */}
                    <div className="flex items-center gap-1 font-semibold text-2xl md:text-3xl">
                        <span className="text-highlight font-fira">&lt;</span>
                        <h1 className="font-fira">SK</h1>
                        <span className="text-highlight font-fira">/&gt;</span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 md:gap-6">
                        <a href="https://instagram.com/shawaiz-khan" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <BsInstagram
                                className={`transition duration-300 transform hover:scale-110 ${theme === 'dark' ? 'text-darkText hover:text-highlight' : 'text-secondary hover:text-highlight'}`}
                                size={25} // Adjusted size for better responsiveness
                            />
                        </a>
                        <a href="https://twitter.com/shawaiz-khan" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <BsTwitter
                                className={`transition duration-300 transform hover:scale-110 ${theme === 'dark' ? 'text-darkText hover:text-highlight' : 'text-secondary hover:text-highlight'}`}
                                size={25} // Adjusted size for better responsiveness
                            />
                        </a>
                        <a href="https://linkedin.com/in/shawaiz-khan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <BsLinkedin
                                className={`transition duration-300 transform hover:scale-110 ${theme === 'dark' ? 'text-darkText hover:text-highlight' : 'text-secondary hover:text-highlight'}`}
                                size={25} // Adjusted size for better responsiveness
                            />
                        </a>
                        <a href="https://github.com/shawaiz-khan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <BsGithub
                                className={`transition duration-300 transform hover:scale-110 ${theme === 'dark' ? 'text-darkText hover:text-highlight' : 'text-secondary hover:text-highlight'}`}
                                size={25} // Adjusted size for better responsiveness
                            />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className={`my-4 border-t ${theme === 'dark' ? 'border-lightGray' : 'border-highlight'} opacity-30`}></div>

                {/* Footer Text */}
                <div className="text-center text-md md:text-xl font-poppins">
                    &copy; {year}{' '}
                    <span className={`font-medium cursor-pointer transition-all duration-300 ease-in ${theme === 'dark' ? 'text-highlight hover:text-darkText' : 'text-highlight hover:text-primary'}`}>
                        Shawaiz Khan
                    </span>
                    . All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;