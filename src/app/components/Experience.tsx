'use client';

import React from 'react';
import { EXPERIENCE, IExperience } from '../assets/data/Experience';

const Experience: React.FC = () => {
    return (
        <section id="experience-timeline" className="p-5 py-10">
            <div className="min-h-screen flex justify-center">
                <div className="lg:w-2/3 w-full mx-auto">
                    {EXPERIENCE.map((item: IExperience, index: number) => (
                        <div key={index} className="relative flex flex-col sm:flex-row w-full mb-12">
                            {index % 2 === 0 ? (
                                <>
                                    {/* Left side experience card */}
                                    <div className="w-full sm:w-2/5 md:px-2 sm:py-10">
                                        <div className="flex flex-col w-full rounded-lg shadow border-[3px] border-secondary px-4 py-5">
                                            <div className="text-secondary mb-2">
                                                <div className="font-bold text-md">{item.company}</div>
                                                <div className="font-medium text-secondary text-sm tracking-wider">{item.role}</div>
                                            </div>
                                            <div className="text-secondary text-sm leading-6 sm:text-base">
                                                <ul className="list-disc list-inside">
                                                    {item.responsibilities.map((task, idx) => (
                                                        <li key={idx}>{task}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="text-secondary text-sm mt-4">{item.duration}</div>
                                        </div>
                                    </div>

                                    {/* Timeline marker */}
                                    <div className="w-[10%] mx-2 sm:w-1/5 sm:flex justify-center">
                                        <div className="relative flex h-full items-center justify-center">
                                            <div className="absolute h-full w-1 bg-secondary"></div> {/* Vertical line */}
                                            <div className="absolute flex flex-col justify-center sm:h-24 sm:w-24 rounded-full leading-none text-center z-10 bg-rich-black font-thin">
                                                <div className="font-semibold text-[12px] sm:text-sm text-secondary opacity-80">{item.duration.split(' - ')[0]}</div>
                                                <div className="font-medium my-1 text-[12px] sm:text-sm text-secondary opacity-80">|</div>
                                                <div className="font-semibold text-[12px] sm:text-sm text-secondary opacity-80">{item.duration.split(' - ')[1]}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Empty space on the right */}
                                    <div className="w-full sm:w-2/5 md:px-2 sm:py-10 hidden sm:block"></div>
                                </>
                            ) : (
                                <>
                                    {/* Empty space on the left */}
                                    <div className="w-full sm:w-2/5 md:px-2 sm:py-10 hidden sm:block"></div>

                                    {/* Timeline marker */}
                                    <div className="w-[10%] mx-2 sm:w-1/5 sm:flex justify-center">
                                        <div className="relative flex h-full items-center justify-center">
                                            <div className="absolute h-full w-1 bg-secondary"></div> {/* Vertical line */}
                                            <div className="absolute flex flex-col justify-center sm:h-24 sm:w-24 rounded-full leading-none text-center z-10 bg-rich-black font-thin">
                                                <div className="font-semibold text-[12px] sm:text-sm text-secondary opacity-80">{item.duration.split(' - ')[0]}</div>
                                                <div className="font-medium my-1 text-[12px] sm:text-sm text-secondary opacity-80">|</div>
                                                <div className="font-semibold text-[12px] sm:text-sm text-secondary opacity-80">{item.duration.split(' - ')[1]}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right side experience card */}
                                    <div className="w-full sm:w-2/5 md:px-2 py-10">
                                        <div className="flex flex-col w-full rounded-lg shadow border-[3px] border-secondary px-4 py-5">
                                            <div className="text-secondary mb-2">
                                                <div className="font-bold text-md">{item.company}</div>
                                                <div className="font-medium text-secondary text-sm tracking-wider">{item.role}</div>
                                            </div>
                                            <div className="text-secondary text-sm leading-6 sm:text-base">
                                                <ul className="list-disc list-inside">
                                                    {item.responsibilities.map((task, idx) => (
                                                        <li key={idx}>{task}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="text-secondary text-sm mt-4">{item.duration}</div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Connecting line for both sections */}
                            <div className="absolute top-0 left-[50%] w-[1px] h-full bg-secondary sm:block hidden"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
