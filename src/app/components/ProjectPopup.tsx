import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { ImCross } from 'react-icons/im';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
    title: string;
    description: string;
    category: string;
    image: { src: StaticImageData };
    github: string;
    demo: string;
}

interface ProjectPopupProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ project, onClose }) => {
    if (!project) return null;

    const { title, description, category, image, github, demo } = project;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 w-full h-full z-40 px-5">
            <div className="bg-lightGray dark:bg-darkBackground rounded-lg p-6 md:p-10 relative flex max-w-6xl w-full gap-5 shadow-lg flex-col md:flex-row">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 z-20" aria-label="Close">
                    <ImCross className='text-secondary hover:text-highlight dark:text-lightGray dark:hover:text-highlight transition-all duration-150 ease-in' />
                </button>

                <div className="flex-shrink-0">
                    <div className="relative w-full max-w-[600px] h-auto">
                        <Image
                            src={image.src}
                            alt={title}
                            layout="responsive"
                            width={600}
                            height={400}
                            className='rounded-md'
                            priority
                        />
                    </div>
                </div>

                <div className="flex flex-col w-full md:w-1/2 p-4 justify-between">
                    <ul className="text-secondary">
                        <li className='font-medium font-inter border border-highlight dark:text-lightGray w-fit px-2 py-1 rounded-full text-xs mb-2 cursor-pointer'>{category}</li>
                        <li className="font-bold text-lg text-secondary dark:text-darkText">{title}</li>
                        <li className="mt-2 text-secondary dark:text-darkText">{description}</li>
                    </ul>
                    <div className='flex justify-start z-10 w-full gap-5 mt-5'>
                        <button
                            className='flex items-center bg-transparent shadow-lg text-highlight text-sm font-inter font-bold px-4 py-2 rounded hover:bg-highlight hover:text-primary transition duration-150 ease-in hover:-translate-y-2'
                            onClick={() => window.open(github, '_blank', 'noopener,noreferrer')}
                        >
                            GitHub
                            <FaGithub className='ml-2' />
                        </button>
                        <button
                            className='flex items-center bg-transparent shadow-lg text-highlight text-sm font-inter font-bold px-4 py-2 rounded hover:bg-highlight hover:text-primary transition duration-150 ease-in hover:-translate-y-2'
                            onClick={() => window.open(demo, '_blank', 'noopener,noreferrer')}
                        >
                            See Demo
                            <FaExternalLinkAlt className='ml-2' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPopup;