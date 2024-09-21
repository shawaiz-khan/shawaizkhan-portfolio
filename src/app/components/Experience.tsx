import React from 'react';
import { EXPERIENCE, IExperience } from '../assets/data/Experience';

const RenderExperienceData = ({ data }: { data: IExperience[] }) => {
    return data.map((item, index) => (
        <div key={index} className="flex flex-col sm:flex-row w-full mb-10">
            {index % 2 === 0 ? (
                <>
                    <div className="sm:hidden">
                        <div className={`h-[18px] w-[18px] rounded-full bg-secondary mx-auto ${index !== 0 && 'hidden'}`}></div>
                        <div className={`w-[6px] h-10 bg-secondary mx-auto ${index === 0 && '-mt-1'}`}></div>
                        <div className="w-20 h-20 rounded-full flex flex-col items-center justify-center mx-auto bg-primary z-20">
                            <div className="font-semibold text-[12px] sm:text-sm text-secondary opacity-80">{item.startDate}</div>
                            <div className="font-medium my-1 text-[12px] sm:text-sm text-secondary opacity-80">|</div>
                            <div className="font-semibold text-[12px] sm:text-sm text-secondary opacity-80">{item.endDate}</div>
                        </div>
                        <div className="w-[6px] h-10 bg-secondary mx-auto relative"></div>
                    </div>

                    <div className="w-full sm:w-2/5 md:px-2 sm:py-10">
                        <div className="flex flex-col w-full rounded-lg shadow border-[3px] border-secondary px-2 sm:px-4 py-5">
                            <div className="text-secondary mb-2">
                                <div className="font-bold text-md">{item.role}</div>
                                <div className="font-medium text-secondary text-sm tracking-wider">{item.company}</div>
                            </div>
                            <ul className="text-secondary text-sm leading-6 sm:text-base list-disc ml-4">
                                {item.responsibilities.map((resp, i) => (
                                    <li key={i}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="w-[10%] mx-2 sm:w-1/5 sm:flex justify-center hidden">
                        <div className="relative flex h-full w-1 bg-secondary items-center justify-center">
                            <div className="absolute -left-12 transform translate-x-0 flex flex-col items-center justify-center sm:h-24 sm:w-24 rounded-full leading-none text-center z-10 bg-primary">
                                <div className="font-semibold text-[12px] sm:text-sm text-secondary opacity-80">{item.startDate}</div>
                                <div className="font-medium my-1 text-[12px] sm:text-sm text-secondary opacity-80">|</div>
                                <div className="font-semibold text-[12px] sm:text-sm text-secondary opacity-80">{item.endDate}</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-2/5 md:px-2 py-10 hidden sm:block"></div>
                </>
            ) : (
                <>
                    <div className="sm:hidden">
                        <div className={`w-[6px] h-10 bg-secondary mx-auto ${index === 0 && '-mt-1'}`}></div>
                        <div className="w-20 h-20 rounded-full flex flex-col items-center justify-center mx-auto">
                            <div className="font-semibold text-[12px] sm:text-sm text-secondary opacity-80">{item.startDate}</div>
                            <div className="font-medium my-1 text-[12px] sm:text-sm text-secondary opacity-80">|</div>
                            <div className="font-semibold text-[12px] sm:text-sm text-secondary opacity-80">{item.endDate}</div>
                        </div>
                        <div className="w-[6px] h-10 bg-secondary mx-auto relative"></div>
                    </div>

                    <div className="w-full sm:w-2/5 md:px-2 sm:py-10 hidden sm:block"></div>

                    <div className="w-[10%] mx-2 sm:w-1/5 sm:flex justify-center hidden">
                        <div className="relative flex h-full w-1 bg-secondary items-center justify-center">
                            <div className="absolute -right-12 transform translate-x-0 flex flex-col items-center justify-center sm:h-24 sm:w-24 rounded-full leading-none text-center z-10 bg-primary">
                                <div className="font-semibold text-[12px] sm:text-sm text-secondary opacity-80">{item.startDate}</div>
                                <div className="font-medium my-1 text-[12px] sm:text-sm text-secondary opacity-80">|</div>
                                <div className="font-semibold text-[12px] sm:text-sm text-secondary opacity-80">{item.endDate}</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-2/5 md:px-2 sm:py-10">
                        <div className="flex flex-col w-full rounded-lg shadow border-[3px] border-secondary px-2 sm:px-4 py-5">
                            <div className="text-secondary mb-2">
                                <div className="font-bold text-md">{item.role}</div>
                                <div className="font-medium text-secondary text-sm tracking-wider">{item.company}</div>
                            </div>
                            <ul className="text-secondary text-sm leading-6 sm:text-base list-disc ml-4">
                                {item.responsibilities.map((resp, i) => (
                                    <li key={i}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </div>
    ));
};

const Experience = () => {
    return (
        <section id="experience-timeline" className="p-5 py-10">
            <div className="min-h-screen flex justify-center">
                <div className="lg:w-2/3 w-full mx-auto">
                    <RenderExperienceData data={EXPERIENCE} />
                </div>
            </div>
        </section>
    );
};

export default Experience;
