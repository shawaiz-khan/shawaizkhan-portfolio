import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface Project {
    title: string;
    description: string;
    category: string;
    image: { src: StaticImageData };
    github: string;
    demo: string;
}

interface PortfolioCardProps {
    title: string;
    description: string;
    category: string;
    image: { src: StaticImageData };
    github: string;
    demo: string;
    onReadMore: (project: Project) => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, category, image, onReadMore, github, demo }) => {
    const handleReadMore = () => {
        onReadMore({ title, description, category, image, github, demo });
    };

    const shortDescription = description.length > 100 ? description.substring(0, 100) + '...' : description;

    return (
        <article className='min-w-[330px] max-w-[330px] bg-lightGray shadow-lg text-secondary p-4 flex flex-col rounded-xl relative'>
            <div className='absolute inset-0 rounded-xl shadow-inner bg-gradient-to-b from-transparent to-lightGray' />
            <div className='flex justify-center mb-4' style={{ height: '216px', position: 'relative' }}>
                <Image
                    src={image.src}
                    alt={title}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    className='object-cover rounded-md'
                    priority
                />
            </div>
            <div className='flex flex-col flex-grow text-left z-10'>
                <div className='font-medium font-inter border border-highlight w-fit px-2 py-1 rounded-full text-xs mb-2 cursor-pointer'>{category}</div>
                <h2 className='text-lg font-bold font-poppins mb-1'>{title}</h2>
                <p className='text-sm'>{shortDescription}</p>
            </div>
            <div className='flex justify-between mt-4 z-10'>
                <button
                    className='bg-secondary text-primary text-sm font-inter px-4 py-3 rounded hover:bg-highlight transition duration-150 ease-in hover:-translate-y-2'
                    onClick={handleReadMore}
                >
                    Read More
                </button>
                <button
                    className='bg-secondary text-primary text-sm font-inter px-4 py-3 rounded hover:bg-highlight transition duration-150 ease-in hover:-translate-y-2'
                    onClick={() => window.open(github, '_blank', 'noopener,noreferrer')}
                >
                    GitHub
                </button>
                <button
                    className='bg-secondary text-primary text-sm font-inter px-4 py-3 rounded hover:bg-highlight transition duration-150 ease-in hover:-translate-y-2'
                    onClick={() => window.open(demo, '_blank', 'noopener,noreferrer')}
                >
                    See Demo
                </button>
            </div>
        </article>
    );
}

export default PortfolioCard;