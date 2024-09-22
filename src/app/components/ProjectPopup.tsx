import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { ImCross } from 'react-icons/im';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectPopupProps {
    project: {
        title: string;
        description: string;
        category: string;
        image: { src: StaticImageData };
    } | null;
    onClose: () => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ project, onClose }) => {
    if (!project) return null;

    const { title, description, category, image } = project;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 w-full h-full z-10">
            <div className="bg-white rounded-lg p-10 relative flex max-w-6xl w-full gap-5">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500" aria-label="Close">
                    <ImCross className='text-secondary hover:text-highlight transition-all duration-150 ease-in' />
                </button>

                {/* Image Section */}
                <div className="flex-shrink-0">
                    <div className="relative" style={{ width: '600px', height: 'auto' }}>
                        <Image
                            src={image.src}
                            alt={title}
                            layout="intrinsic"
                            className='rounded-md'
                            priority
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col w-1/2 p-4 justify-between">
                    <ul className="text-secondary">
                        <li className="className='font-medium font-inter border border-highlight w-fit px-2 py-1 rounded-full text-xs mb-2 cursor-pointer'">{category}</li>
                        <li className="font-bold text-lg">{title}</li>
                        <li className="mt-2">{description}</li>
                    </ul>
                    <div className='flex justify-start z-10 w-full gap-5'>
                        <button className='flex items-center bg-transparent shadow-lg text-highlight text-sm font-inter font-bold px-4 py-3 rounded hover:bg-highlight hover:text-primary transition duration-150 ease-in'>
                            GitHub
                            <FaGithub className='ml-2' />
                        </button>
                        <button className='flex items-center bg-transparent shadow-lg text-highlight text-sm font-inter font-bold px-4 py-3 rounded hover:bg-highlight hover:text-primary transition duration-150 ease-in'>
                            See Demo
                            <FaExternalLinkAlt className='ml-2' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPopup;