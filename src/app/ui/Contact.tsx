/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useRef, useState } from 'react';
import Button from '../components/Buttons';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';
import Image from 'next/image';
import formLottie from '../assets/animations/formAnim.gif';
import { useTheme } from '../components/ThemeContext';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
    const { theme } = useTheme();
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm(
            'service_f45gqry',
            'template_t2xjlnj',
            formRef.current as HTMLFormElement,
            'IOmcwSsFE3mJ4gTsb' // Public API Key
        )
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');

                if (formRef.current) {
                    formRef.current.reset();
                }
            })
            .catch((error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again later.');
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <main
            className={`min-h-screen w-full flex justify-center items-center p-6 md:p-10 ${theme === 'dark' ? 'bg-darkBackground' : 'bg-primary'}`}
            id='contact'
        >
            <section className='flex flex-col md:flex-row justify-center items-start w-full max-w-6xl'>
                <article className={`hidden h-auto w-full md:w-1/3 lg:w-1/4 rounded-lg md:flex flex-col justify-between items-start p-6 shadow-lg z-10 ${theme === 'light' ? 'bg-secondary' : 'bg-lightGray'}`}>
                    <h2 className={`text-lg md:text-xl font-bold font-poppins mb-4 ${theme === 'light' ? 'text-lightGray' : 'text-secondary'}`}>Contact</h2>
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
                            className="mt-4"
                        />
                    </div>
                </article>
                <article className={`h-auto w-full md:w-2/3 lg:w-3/5 max-w-lg rounded-lg p-5 flex flex-col justify-center shadow-lg ${theme === 'dark' ? 'bg-secondary' : 'bg-lightGray'}`}>
                    <div className='ml-0 md:ml-5'>
                        <h1 className={`text-lg md:text-xl mb-2 font-poppins font-bold ${theme === 'dark' ? 'text-lightGray' : 'text-secondary'}`}>Get in Touch</h1>

                        <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-4'>
                            <div className='flex flex-col md:flex-row gap-3'>
                                <input
                                    type="text"
                                    placeholder='Name'
                                    name='user_name'
                                    className={`flex-grow w-full p-2 rounded border ${theme === 'dark' ? 'border-gray-600 text-secondary' : 'border-gray-300 text-secondary'} focus:outline-highlight`}
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder='Email'
                                    name='user_email'
                                    className={`flex-grow p-2 w-full rounded border ${theme === 'dark' ? 'border-gray-600 text-secondary' : 'border-gray-300 text-secondary'} focus:outline-highlight`}
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                placeholder='Subject'
                                name='subject'
                                className={`p-2 rounded border ${theme === 'dark' ? 'border-gray-600 text-secondary' : 'border-gray-300 text-secondary'} focus:outline-highlight`}
                                required
                            />
                            <textarea
                                placeholder='Message'
                                name='message'
                                className={`p-2 rounded border h-32 resize-none overflow-hidden ${theme === 'dark' ? 'border-gray-600 text-secondary' : 'border-gray-300 text-secondary'} focus:outline-highlight`}
                                required
                            />

                            <div className="flex w-full">
                                <Button
                                    text={isLoading ? 'Sending...' : 'SUBMIT'}
                                    color={`text-primary ${theme === 'dark' ? 'bg-gray-700' : 'bg-secondary hover:text-primary'} max-h-12 border-transparent shadow-md`}
                                    hover='hover:bg-highlight'
                                    isDisabled={isLoading}
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