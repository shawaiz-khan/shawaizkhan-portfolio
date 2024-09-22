'use client';

import React from 'react';
import Button from '../components/Buttons';

const Contact: React.FC = () => {
    return (
        <main className='h-screen p-10 bg-primary'>
            <section className='flex justify-center items-center h-full'>
                <article className='bg-secondary h-3/4 w-1/4 rounded-lg flex flex-col justify-center items-center p-4 z-10'>
                    <h2 className='text-lg font-bold'>Contact Us</h2>
                </article>

                <article className='bg-lightGray h-fit w-2/5 rounded-r-lg p-5 flex flex-col justify-center -ml-5'>
                    <div className='ml-5'>
                        <h1 className='text-xl mb-2 text-secondary font-poppins font-bold'>Get in Touch</h1>
                        <form className='flex flex-col gap-4'>
                            <div className='flex gap-3'>
                                <input
                                    type="text"
                                    placeholder='Name'
                                    className='flex-grow w-full p-2 rounded border border-gray-300 text-secondary focus:outline-none'
                                />
                                <input
                                    type="email"
                                    placeholder='Email'
                                    className='flex-grow p-2 w-full rounded border border-gray-300 text-secondary focus:outline-none'
                                />
                            </div>
                            <input
                                type="text"
                                placeholder='Subject'
                                className='p-2 rounded border border-gray-300 text-secondary focus:outline-none'
                            />
                            <textarea
                                placeholder='Message'
                                className='p-2 rounded border border-gray-300 h-32 text-secondary resize-none overflow-hidden focus:outline-none'
                            />

                            <div className="flex gap-2">
                                <Button
                                    text='SUBMIT'
                                    color='bg-secondary border-transparent w-full'
                                    hover='hover:bg-highlight'
                                />
                                <Button
                                    text='BOOK A MEETING'
                                    color='bg-secondary border-transparent w-full'
                                    hover='hover:bg-highlight'
                                />
                            </div>
                        </form>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default Contact;