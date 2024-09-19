/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import Button from './Buttons';
// import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <div className='p-6 grid grid-cols-2'>
            <article className='text-secondary gap-2 flex flex-col justify-center'>
                <span className='text-base font-poppins font-light'>WELCOME TO MY WORLD!</span>
                <h1 className='text-6xl font-poppins font-bold'>I'M SHAWAIZ KHAN</h1>
                <h3 className="font-inter text-3xl font-semibold">a FRONT-END DEVELOPER</h3>
                <p className="text-base font-inter font-light">
                    I design and build websites that look great and work smoothly. I focus on making things simple and easy
                    to use, ensuring every detail serves a purpose and enhances the user experience.
                </p>
                <div className="btn-container flex gap-5 mt-2">
                    <Button
                        text='RESUME'
                        color='bg-secondary text-primary border-secondary'
                        hover='hover:bg-highlight hover:text-primary hover:border-highlight'
                    />
                    <Button
                        text='CONTACT'
                        color='bg-secondary text-primary border-secondary'
                        hover='hover:bg-highlight hover:text-primary hover:border-highlight'
                    />
                </div>
            </article>
            {/* <Image 
                src={ }
            /> */}
        </div>
    );
}

export default Hero;