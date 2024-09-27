'use client';

import React, { FC } from 'react';
import animationData from '../assets/animations/quiz-mode-teal-dark.json';
import Lottie from 'lottie-react';

const About: FC = () => {
    const headings = [
        "Name:",
        "Location:",
        "Specialization:",
        "Branding:",
        "Passions:",
        "Mentorship:",
        "Email:",
        "Phone:"
    ];

    const descriptions = [
        "Shawaiz Khan",
        "Pakistan",
        "HTML, CSS, JavaScript, Typescript, and React",
        "Expert in logo design and visual identities",
        "Exploring new technologies and improving UX",
        "Open to collaborations and tech mentoring",
        "shawaizkhan.biz@gmail.com",
        "+92 328 852 8854"
    ];

    return (
        <main className='bg-lightGray h-[600px] flex p-6 justify-between items-center gap-5'>
            <div className='flex justify-center items-center h-full w-1/2'>
                <Lottie animationData={animationData} loop={true} style={{ width: '100%', height: '100%' }} />
            </div>
            <article className='text-secondary flex flex-col gap-6 w-1/2'>
                <article className='w-full'>
                    <h1 className='font-poppins font-bold text-5xl'>ABOUT ME</h1>
                    <p className='font-inter font-normal text-lg'>
                        Building easy-to-use websites and apps from your ideas. I focus on making everything clear and simple for users.
                    </p>
                </article>
                <div className='flex gap-4 text-base'>
                    <div className='font-inter font-bold flex flex-col gap-2'>
                        {headings.map((heading, index) => (
                            <div key={index}>
                                {heading}
                            </div>
                        ))}
                    </div>
                    <div className='font-inter font-normal flex flex-col gap-2'>
                        {descriptions.map((description, index) => (
                            <div key={index}>
                                {description}
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </main>
    );
}

export default About;