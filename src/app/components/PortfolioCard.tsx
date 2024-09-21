import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface PortfolioCardProps {
    title: string;
    description: string;
    category: string;
    image: StaticImageData;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, category, image }) => {
    return (
        <article className='min-w-[330px] max-w-[330px] bg-lightGray shadow-md text-secondary border-secondary border-2 p-4 flex flex-col rounded-xl'>
            <div className='flex justify-center mb-4' style={{ height: '216px', position: 'relative' }}>
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    className='object-cover rounded-md'
                    priority
                />
            </div>
            <div className='flex flex-col flex-grow text-left'>
                <div className='font-medium font-inter border border-highlight w-fit px-2 py-1 rounded-full text-xs mb-2 cursor-pointer'>{category}</div>
                <h2 className='text-lg font-bold font-fira mb-1'>{title}</h2>
                <p className='text-sm'>{description}</p>
            </div>
            <div className='flex justify-between mt-4'>
                <button className='bg-secondary text-primary text-sm font-fira px-4 py-3 rounded hover:bg-highlight transition duration-150 ease-in'>
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