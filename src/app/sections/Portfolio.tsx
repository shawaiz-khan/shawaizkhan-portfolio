import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import Image from '../assets/images/placeholder.jpg';

const projects = Array(6).fill({
    title: "Project Title",
    description: "A brief description of the project.",
    category: "Web Development",
    image: Image,
});

const Portfolio: React.FC = () => {
    return (
        <main className='p-6 bg-lightGray'>
            <h1 className='font-poppins font-bold text-5xl text-secondary text-center mb-8'>PROJECTS</h1>
            <div className='flex flex-wrap gap-5 justify-center'>
                {projects.map((project, index) => (
                    <PortfolioCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        category={project.category}
                        image={project.image}
                    />
                ))}
            </div>
        </main>
    );
}

export default Portfolio;