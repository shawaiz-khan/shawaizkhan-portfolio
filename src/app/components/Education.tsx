import React from 'react';
import { EDUCATION, IEducation } from '../assets/data/Education';
import { useTheme } from '../components/ThemeContext';

const TimelineDot: React.FC<{ isFirst: boolean; theme: string }> = ({ isFirst, theme }) => (
    <>
        <div className={`h-[18px] w-[18px] rounded-full ${theme === 'dark' ? 'bg-darkBackground' : 'bg-lightGray'} mx-auto ${!isFirst && 'hidden'} transition-all duration-300 ease-in-out`}></div>
        <div className={`w-[6px] h-10 ${theme === 'dark' ? 'bg-gray-600' : 'bg-highlight'} mx-auto ${isFirst && '-mt-1'} transition-all duration-300 ease-in-out`}></div>
    </>
);

const EducationItem: React.FC<{ item: IEducation; index: number }> = ({ item, index }) => {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col sm:flex-row w-full mb-12 relative">
            {index % 2 === 0 ? (
                <>
                    <div className="sm:hidden">
                        <TimelineDot isFirst={index === 0} theme={theme} />
                        <div className={`w-20 h-20 rounded-full flex flex-col items-center justify-center mx-auto ${theme === 'dark' ? 'bg-darkBackground' : 'bg-transparent'} z-20`}>
                            <div className={`font-semibold text-[12px] sm:text-sm ${theme === 'dark' ? 'text-white' : 'text-secondary'} opacity-100`}>{item.startDate}</div>
                            <div className={`font-medium my-1 text-[12px] sm:text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-secondary'} opacity-100`}>|</div>
                            <div className={`font-semibold text-[12px] sm:text-sm ${theme === 'dark' ? 'text-white' : 'text-secondary'} opacity-100`}>{item.endDate}</div>
                        </div>
                        <div className={`w-[6px] h-10 ${theme === 'dark' ? 'bg-gray-600' : 'bg-highlight'} mx-auto transition-all duration-300 ease-in-out`}></div>
                    </div>

                    <div className="w-full sm:w-2/5 md:px-4 sm:py-8">
                        <div className={`flex flex-col w-full rounded-lg shadow-lg border-2 ${theme === 'dark' ? 'border-gray-600' : 'border-secondary'} px-4 py-6 transition-all duration-300 ease-in-out hover:shadow-xl`}>
                            <div className={`mb-3 ${theme === 'dark' ? 'text-gray-200' : 'text-secondary'} transition-colors duration-300`}>
                                <div className="font-bold text-lg">{item.degree}</div>
                                <div className={`font-medium text-sm tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-secondary'}`}>{item.institution}</div>
                            </div>
                            <div className={`text-sm leading-6 sm:text-base ${theme === 'dark' ? 'text-gray-200' : 'text-secondary'}`}>{item.details}</div>
                        </div>
                    </div>

                    {/* Timeline Dot on the left for desktop view */}
                    <div className="w-[10%] mx-2 sm:w-1/5 sm:flex justify-center hidden">
                        <div className="relative flex h-full w-1 items-center justify-center" style={{ backgroundColor: theme === 'dark' ? '#4B5563' : '#E5E7EB' }}>
                            <div className={`absolute -left-12 transform translate-x-0 flex flex-col items-center justify-center sm:h-24 sm:w-24 rounded-full leading-none text-center z-10 ${theme === 'dark' ? 'bg-darkBackground' : 'bg-lightGray'}`}>
                                <div className={`font-semibold text-[12px] sm:text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-secondary'} opacity-100`}>{item.startDate}</div>
                                <div className={`font-medium my-1 text-[12px] sm:text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-secondary'} opacity-100`}>|</div>
                                <div className={`font-semibold text-[12px] sm:text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-secondary'} opacity-100`}>{item.endDate}</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-2/5 md:px-4 py-10 hidden sm:block"></div>
                </>
            ) : (
                <>
                    <div className="sm:hidden">
                        <div className={`w-[6px] h-10 ${theme === 'dark' ? 'bg-gray-600' : 'bg-highlight'} mx-auto ${index === 0 && '-mt-1'} transition-all duration-300 ease-in-out`}></div>
                        <div className={`w-20 h-20 rounded-full flex flex-col items-center justify-center mx-auto ${theme === 'dark' ? 'bg-darkBackground' : 'bg-transparent'}`}>
                            <div className={`font-semibold text-[12px] sm:text-sm ${theme === 'dark' ? 'text-white' : 'text-secondary'} opacity-100`}>{item.startDate}</div>
                            <div className={`font-medium my-1 text-[12px] sm:text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-secondary'} opacity-100`}>|</div>
                            <div className={`font-semibold text-[12px] sm:text-sm ${theme === 'dark' ? 'text-white' : 'text-secondary'} opacity-100`}>{item.endDate}</div>
                        </div>
                        <div className={`w-[6px] h-10 ${theme === 'dark' ? 'bg-gray-600' : 'bg-highlight'} mx-auto transition-all duration-300 ease-in-out`}></div>
                    </div>

                    <div className="w-full sm:w-2/5 md:px-4 py-10 hidden sm:block"></div>

                    {/* Timeline Dot on the right for desktop view */}
                    <div className="w-[10%] mx-2 sm:w-1/5 sm:flex justify-center hidden">
                        <div className="relative flex h-full w-1 items-center justify-center" style={{ backgroundColor: theme === 'dark' ? '#4B5563' : '#E5E7EB' }}>
                            <div className={`absolute -right-12 transform translate-x-0 flex flex-col items-center justify-center sm:h-24 sm:w-24 rounded-full leading-none text-center z-10 ${theme === 'dark' ? 'bg-darkBackground' : 'bg-lightGray'}`}>
                                <div className={`font-semibold text-[12px] sm:text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-secondary'} opacity-100`}>{item.startDate}</div>
                                <div className={`font-medium my-1 text-[12px] sm:text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-secondary'} opacity-100`}>|</div>
                                <div className={`font-semibold text-[12px] sm:text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-secondary'} opacity-100`}>{item.endDate}</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-2/5 md:px-4 sm:py-10">
                        <div className={`flex flex-col w-full rounded-lg shadow-lg border-2 ${theme === 'dark' ? 'border-gray-600' : 'border-secondary'} px-4 py-6 transition-all duration-300 ease-in-out hover:shadow-xl`}>
                            <div className={`mb-3 ${theme === 'dark' ? 'text-gray-200' : 'text-secondary'} transition-colors duration-300`}>
                                <div className="font-bold text-lg">{item.degree}</div>
                                <div className={`font-medium text-sm tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-secondary'}`}>{item.institution}</div>
                            </div>
                            <div className={`text-sm leading-6 sm:text-base ${theme === 'dark' ? 'text-gray-200' : 'text-secondary'}`}>{item.details}</div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

const RenderEducationData = ({ data }: { data: IEducation[] }) => {
    return (
        <>
            {data.map((item, index) => (
                <EducationItem key={index} item={item} index={index} />
            ))}
        </>
    );
};

const Education = () => {
    return (
        <section id="education-timeline" className="p-5 py-10">
            <div className="min-h-full flex justify-center">
                <div className="lg:w-2/3 w-full mx-auto">
                    <RenderEducationData data={EDUCATION} />
                </div>
            </div>
        </section>
    );
};

export default Education;