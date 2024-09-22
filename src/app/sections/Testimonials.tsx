/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import testimonials from '../assets/data/Testimonials'; // Ensure this path is correct

export default function FancyTestimonialsSlider(): JSX.Element {
    const [active, setActive] = useState<number>(0);
    const [autorotate, setAutorotate] = useState<boolean>(true);
    const autorotateTiming: number = 7000;

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (autorotate) {
            timer = setInterval(() => {
                setActive((prev) => (prev + 1) % testimonials.length);
            }, autorotateTiming);
        }

        return () => clearInterval(timer);
    }, [autorotate, autorotateTiming, testimonials.length]);

    return (
        <main className="container w-full h-[600px] bg-secondary flex flex-col justify-center items-center">
            <h1 className='font-poppins font-bold text-5xl text-primary text-center mb-10'>TESTIMONIALS</h1>
            <div className="w-full max-w-3xl mx-auto text-center flex flex-col justify-center items-center">
                <div className="relative h-32">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-highlight/25 before:via-highlight/5 before:via-25% before:to-highlight/0 before:to-75% before:rounded-full before:-z-10">
                        <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
                            {testimonials.map((testimonial, index) => (
                                <Transition
                                    as="div"
                                    key={index}
                                    show={active === index}
                                    className="absolute inset-0 h-full -z-10"
                                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                                    enterFrom="opacity-0 -rotate-[60deg]"
                                    enterTo="opacity-100 rotate-0"
                                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                                    leaveFrom="opacity-100 rotate-0"
                                    leaveTo="opacity-0 rotate-[60deg]"
                                >
                                    <Image className="relative top-11 left-1/2 -translate-x-1/2 rounded-full" src={testimonial.img} width={56} height={56} alt={testimonial.name} />
                                </Transition>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mb-9 transition-all duration-150 delay-300 ease-in-out">
                    <div className="relative flex flex-col">
                        {testimonials.map((testimonial, index) => (
                            <Transition
                                as="div"
                                key={index}
                                show={active === index}
                                enter="transition ease-in-out duration-500 delay-200 order-first"
                                enterFrom="opacity-0 -translate-x-4"
                                enterTo="opacity-100 translate-x-0"
                                leave="transition ease-out duration-300 delay-300 absolute"
                                leaveFrom="opacity-100 translate-x-0"
                                leaveTo="opacity-0 translate-x-4"
                            >
                                <div className="text-2xl font-bold text-primary before:content-['\201C'] after:content-['\201D']">
                                    {testimonial.quote}
                                </div>
                            </Transition>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap justify-center -m-1.5 w-4/5 items-center">
                    {testimonials.map((testimonial, index) => (
                        <button
                            key={index}
                            className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-highlight/50 dark:focus-visible:ring-secondary transition-colors duration-150 ${active === index ? 'bg-highlight text-primary shadow-highlight/10' : 'bg-white hover:bg-primary text-secondary'}`}
                            onClick={() => setActive(index)}
                            aria-pressed={active === index}
                        >
                            <span>{testimonial.name}</span>
                            <span className={`${active === index ? 'text-primary' : 'text-secondary'}`}></span>
                            {/* <span>- {testimonial.role}</span> */}
                        </button>
                    ))}
                </div>
            </div>
        </main>
    );
}