'use client';

import React from 'react';
import Button from '../components/Buttons';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';
import Image from 'next/image';
import formLottie from '../assets/animations/formAnim.gif';
import { useTheme } from '../components/ThemeContext';

const Contact: React.FC = () => {
    const { theme } = useTheme();

    return (
        <main className={`h-screen p-10 ${theme === 'dark' ? 'bg-darkBackground' : 'bg-primary'}`}>
            <section className='flex justify-center items-center h-full'>
                <article className={`h-3/4 w-1/4 rounded-lg flex flex-col justify-between items-start p-6 shadow-lg z-10 ${theme === 'light' ? 'bg-secondary' : 'bg-lightGray'}`}>
                    <h2 className={`text-2xl font-bold font-poppins mb-4 ${theme === 'light' ? 'text-lightGray' : 'text-secondary'}`}>Contact</h2>
                    <div className="contact-options flex flex-col gap-4 w-full">
                        <div className='flex gap-3 items-center'>
                            <MdOutlineLocationOn
                                size={35}
                                className={`rounded-full p-2 shadow-md ${theme === 'dark' ? 'bg-primary text-highlight' : 'bg-secondary text-highlight'}`}
                            />
                            <p className={`text-sm font-medium ${theme === 'light' ? 'text-lightGray' : 'text-secondary'}`}>Sialkot, Pakistan</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <AiOutlineMail
                                size={35}
                                className={`rounded-full p-2 shadow-md ${theme === 'dark' ? 'bg-primary text-highlight' : 'bg-secondary text-highlight'}`}
                            />
                            <p className={`text-sm font-medium ${theme === 'light' ? 'text-lightGray' : 'text-secondary'}`}>shawaizkhan.biz@gmail.com</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <AiOutlinePhone
                                size={35}
                                className={`rounded-full p-2 shadow-md ${theme === 'dark' ? 'bg-primary text-highlight' : 'bg-secondary text-highlight'}`}
                            />
                            <p className={`text-sm font-medium ${theme === 'light' ? 'text-lightGray' : 'text-secondary'}`}>+92 328 852 8854</p>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <Image
                            src={formLottie}
                            alt='Contact us'
                            width={150}
                        />
                    </div>
                </article>
                <article className={`h-fit w-2/5 rounded-r-lg p-5 flex flex-col justify-center -ml-5 shadow-lg ${theme === 'dark' ? 'bg-secondary' : 'bg-lightGray'}`}>
                    <div className='ml-5'>
                        <h1 className={`text-2xl mb-2 font-poppins font-bold ${theme === 'dark' ? 'text-lightGray' : 'text-secondary'}`}>Get in Touch</h1>
                        <form className='flex flex-col gap-4'>
                            <div className='flex gap-3'>
                                <input
                                    type="text"
                                    placeholder='Name'
                                    className={`flex-grow w-full p-2 rounded border ${theme === 'dark' ? 'border-gray-600 text-lightGray' : 'border-gray-300 text-secondary'} focus:outline-highlight`}
                                />
                                <input
                                    type="email"
                                    placeholder='Email'
                                    className={`flex-grow p-2 w-full rounded border ${theme === 'dark' ? 'border-gray-600 text-lightGray' : 'border-gray-300 text-secondary'} focus:outline-highlight`}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder='Subject'
                                className={`p-2 rounded border ${theme === 'dark' ? 'border-gray-600 text-lightGray' : 'border-gray-300 text-secondary'} focus:outline-highlight`}
                            />
                            <textarea
                                placeholder='Message'
                                className={`p-2 rounded border h-32 resize-none overflow-hidden ${theme === 'dark' ? 'border-gray-600 text-lightGray' : 'border-gray-300 text-secondary'} focus:outline-highlight`}
                            />

                            <div className="flex gap-2">
                                <Button
                                    text='SUBMIT'
                                    color={`${theme === 'dark' ? 'bg-gray-700' : 'bg-secondary'} w-full max-h-12 border-transparent`}
                                    hover='hover:bg-highlight'
                                />
                                <Button
                                    text='BOOK A MEETING'
                                    color={`${theme === 'dark' ? 'bg-gray-700' : 'bg-secondary'} w-full max-h-12 border-transparent`}
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