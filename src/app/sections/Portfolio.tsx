'use client';

import React, { useState } from 'react';
import PortfolioCard from '../components/PortfolioCard';
import ProjectPopup from '../components/ProjectPopup';
import projects from '../assets/data/Projects';
import { StaticImageData } from 'next/image';

interface Project {
    title: string;
    description: string;
    category: string;
    image: { src: StaticImageData };
    github: string;
    demo: string;
}

const Portfolio: React.FC = () => {
    const [isPopup, setIsPopup] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handlePopup = (project: Project) => {
        setSelectedProject(project);
        setIsPopup(true);
    };

    const handlePopupClose = () => {
        setSelectedProject(null);
        setIsPopup(false);
    };

    return (
        <main className='p-10 bg-lightGray'>
            <h1 className='font-poppins font-bold text-5xl text-secondary text-center mb-8'>PROJECTS</h1>
            <div className='flex flex-wrap gap-5 justify-center'>
                {projects.map((project: Project, index: number) => (
                    <PortfolioCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        category={project.category}
                        image={project.image}
                        github={project.github}
                        demo={project.demo}
                        onReadMore={handlePopup}
                    />
                ))}
            </div>
            {isPopup && (
                <ProjectPopup project={selectedProject} onClose={handlePopupClose} />
            )}
        </main>
    );
};

export default Portfolio;