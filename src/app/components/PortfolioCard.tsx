import image from 'next/image';
import Image, { StaticImageData } from 'next/image';
import { title } from 'process';
import React from 'react';

interface PortfolioCardProps {
    title: string;
    description: string;
    category: string;
    image: { src: StaticImageData; };
    onReadMore: (project: { title: string; description: string; category: string; image: { src: StaticImageData; } }) => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, category, image, onReadMore }) => {
    const handleReadMore = () => {
        onReadMore({ title, description, category, image })
    }

    return (
        <article className='min-w-[330px] max-w-[330px] bg-lightGray shadow-md text-secondary p-4 flex flex-col rounded-xl relative'>
            <div className='absolute inset-0 rounded-xl shadow-inner bg-gradient-to-b from-transparent to-lightGray' />
            <div className='flex justify-center mb-4' style={{ height: '216px', position: 'relative' }}>
                <Image
                    src={image.src}
                    alt={title}
                    layout="fill"
                    className='object-cover rounded-md'
                    priority
                />
            </div>
            <div className='flex flex-col flex-grow text-left z-10'>
                <div className='font-medium font-inter border border-highlight w-fit px-2 py-1 rounded-full text-xs mb-2 cursor-pointer'>{category}</div>
                <h2 className='text-lg font-bold font-fira mb-1'>{title}</h2>
                <p className='text-sm'>{description}</p>
            </div>
            <div className='flex justify-between mt-4 z-10'>
                <button
                    className='bg-secondary text-primary text-sm font-fira px-4 py-3 rounded hover:bg-highlight transition duration-150 ease-in'
                    onClick={handleReadMore}
                >
                    Read More
                </button>
                <button className='bg-secondary text-primary text-sm font-fira px-4 py-3 rounded hover:bg-highlight transition duration-150 ease-in'>
                    GitHub
                </button>
                <button className='bg-secondary text-primary text-sm font-fira px-4 py-3 rounded hover:bg-highlight transition duration-150 ease-in'>
                    See Demo
                </button>
            </div>
        </article>
    );
}

export default PortfolioCard;