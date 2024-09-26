'use client';

import React from 'react';
import Button from '../components/Buttons';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';

const Contact: React.FC = () => {
    return (
        <main className='h-screen p-10 bg-primary'>
            <section className='flex justify-center items-center h-full'>
                <article className='bg-secondary h-3/4 w-1/4 rounded-lg flex flex-col justify-between items-start p-6 shadow-lg z-10'>
                    <h2 className='text-2xl font-bold font-poppins mb-4'>Contact Us</h2>
                    <div className="contact-options flex flex-col gap-4 w-full">
                        <div className='flex gap-3 items-center'>
                            <MdOutlineLocationOn 
                                size={35}
                                className='bg-gray-800 rounded-full p-2 text-highlight shadow-md'
                            />
                            <p className='text-primary text-sm font-medium'>Sialkot, Pakistan</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <AiOutlineMail
                                size={35}
                                className='bg-gray-800 rounded-full p-2 text-highlight shadow-md'
                            />
                            <p className='text-primary text-sm font-medium'>shawaizkhan.biz@gmail.com</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <AiOutlinePhone
                                size={35}
                                className='bg-gray-800 rounded-full p-2 text-highlight shadow-md'
                            />
                            <p className='text-primary text-sm font-medium'>+92 328 852 8854</p>
                        </div>
                    </div>
                </article>
                <article className='bg-lightGray h-fit w-2/5 rounded-r-lg p-5 flex flex-col justify-center -ml-5 shadow-lg'>
                    <div className='ml-5'>
                        <h1 className='text-2xl mb-2 text-secondary font-poppins font-bold'>Get in Touch</h1>
                        <form className='flex flex-col gap-4'>
                            <div className='flex gap-3'>
                                <input
                                    type="text"
                                    placeholder='Name'
                                    className='flex-grow w-full p-2 rounded border border-gray-300 text-secondary focus:outline-highlight'
                                />
                                <input
                                    type="email"
                                    placeholder='Email'
                                    className='flex-grow p-2 w-full rounded border border-gray-300 text-secondary focus:outline-highlight'
                                />
                            </div>
                            <input
                                type="text"
                                placeholder='Subject'
                                className='p-2 rounded border border-gray-300 text-secondary focus:outline-highlight'
                            />
                            <textarea
                                placeholder='Message'
                                className='p-2 rounded border border-gray-300 h-32 text-secondary resize-none overflow-hidden focus:outline-highlight'
                            />

                            <div className="flex gap-2">
                                <Button
                                    text='SUBMIT'
                                    color='bg-secondary border-transparent w-full max-h-12'
                                    hover='hover:bg-highlight'
                                />
                                <Button
                                    text='BOOK A MEETING'
                                    color='bg-secondary border-transparent w-full max-h-12'
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