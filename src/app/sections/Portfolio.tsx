'use client'

import React, { useState } from 'react';
import PortfolioCard from '../components/PortfolioCard';
// import Image from '../assets/images/placeholder.jpg';
import ProjectPopup from '../components/ProjectPopup';
import projects from '../assets/data/Projects'

// const projects = Array(6).fill({
//     title: "Project Title",
//     description: "A brief description of the project.",
//     category: "Web Development",
//     image: {
//         src: Image,
//     }
// });

const Portfolio: React.FC = () => {
    const [isPopup, setIsPopup] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handlePopup = (project) => {
        setSelectedProject(project);
        setIsPopup(!isPopup);
    }

    const handlePopupClose = () => {
        setSelectedProject(null);
        setIsPopup(!isPopup);
    }

    return (
        <main className='p-10 bg-lightGray'>
            <h1 className='font-poppins font-bold text-5xl text-secondary text-center mb-8'>PROJECTS</h1>
            <div className='flex flex-wrap gap-5 justify-center'>
                {projects.map((project, index) => (
                    <PortfolioCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        category={project.category}
                        image={project.image}
                        onReadMore={handlePopup}
                    />
                ))}
            </div>
            {isPopup && (
                <ProjectPopup project={selectedProject} onClose={handlePopupClose} />
            )}
        </main>
    );
}

export default Portfolio;