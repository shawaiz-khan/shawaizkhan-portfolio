import * as React from 'react';
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer: React.FC = () => {
    const year = new Date().getFullYear().toString();

    return (
        <footer className="bg-secondary text-primary">
            <div className="max-w-7xl mx-auto py-8 px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-1 font-semibold text-3xl">
                        <span className="text-highlight font-fira">&lt;</span>
                        <h1 className="font-fira">SK</h1>
                        <span className="text-highlight font-fira">/&gt;</span>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://instagram.com/shawaiz-khan" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <BsInstagram className="hover:text-highlight text-white transition duration-300 transform hover:scale-110" size={30} />
                        </a>
                        <a href="https://twitter.com/shawaiz-khan" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <BsTwitter className="hover:text-highlight text-white transition duration-300 transform hover:scale-110" size={30} />
                        </a>
                        <a href="https://linkedin.com/in/shawaiz-khan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <BsLinkedin className="hover:text-highlight text-white transition duration-300 transform hover:scale-110" size={30} />
                        </a>
                        <a href="https://github.com/shawaiz-khan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <BsGithub className="hover:text-highlight text-white transition duration-300 transform hover:scale-110" size={30} />
                        </a>
                    </div>
                </div>

                <div className="my-4 border-t border-highlight opacity-30"></div>

                <div className="text-primary">
                    <div className="text-center text-xl font-poppins">
                        &copy; {year}{' '}
                        <span className="text-highlight hover:text-primary font-medium cursor-pointer transition-all duration-300 ease-in">
                            Shawaiz Khan
                        </span>
                        . All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;