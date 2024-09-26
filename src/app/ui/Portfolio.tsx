/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState } from 'react';
import PortfolioCard from '../components/PortfolioCard';
import ProjectPopup from '../components/ProjectPopup';
import projects from '../assets/data/Projects';
import { StaticImageData } from 'next/image';
import Pagination from '@mui/material/Pagination';
import { Autocomplete, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

interface Project {
    title: string;
    description: string;
    category: string;
    image: { src: StaticImageData };
    github: string;
    demo: string;
}

const CustomPagination = styled(Pagination)(({ theme }) => ({
    '& .MuiPaginationItem-root.Mui-selected': {
        backgroundColor: '#9A4DFF',
        color: '#f0f4f8',
    },
}));

const Portfolio: React.FC = () => {
    const [isPopup, setIsPopup] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
    const itemsPerPage = 6;

    const handlePopup = (project: Project) => {
        setSelectedProject(project);
        setIsPopup(true);
    };

    const handlePopupClose = () => {
        setSelectedProject(null);
        setIsPopup(false);
    };

    const indexOfLastProject = currentPage * itemsPerPage;
    const indexOfFirstProject = indexOfLastProject - itemsPerPage;

    const filteredProjects = projects.filter(project => {
        const matchesCategory = selectedCategory ? project.category === selectedCategory : true;
        const matchesTitle = selectedTitle ? project.title.toLowerCase().includes(selectedTitle.toLowerCase()) : true;
        return matchesCategory && matchesTitle;
    });

    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

    const uniqueCategories = Array.from(new Set(projects.map(project => project.category)));

    return (
        <main className='p-10 bg-lightGray flex flex-col justify-center items-center'>
            <h1 className='font-poppins font-bold text-5xl text-secondary text-center mb-8'>PROJECTS</h1>
            <div className="flex justify-between mb-4 w-4/5">
                <Autocomplete
                    options={uniqueCategories}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => <TextField {...params} label="Filter by Category" variant="outlined" />}
                    onChange={(event, value) => {
                        setSelectedCategory(value);
                        setCurrentPage(1);
                    }}
                    style={{ width: '48%' }}
                />
                <Autocomplete
                    options={projects}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => <TextField {...params} label="Search by Title" variant="outlined" />}
                    filterOptions={(options, { inputValue }) => {
                        return options.filter((option) =>
                            option.title.toLowerCase().includes(inputValue.toLowerCase())
                        );
                    }}
                    onChange={(event, value) => {
                        setSelectedTitle(value ? value.title : null);
                        setCurrentPage(1);
                    }}
                    style={{ width: '48%' }}
                />
            </div>
            <div className='flex flex-wrap gap-5 justify-center'>
                {currentProjects.map((project: Project, index: number) => (
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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '70px',
                    marginTop: '10px',
                }}
            >
                <CustomPagination
                    count={totalPages}
                    page={currentPage}
                    onChange={(event, value) => setCurrentPage(value)}
                    shape="rounded"
                    showFirstButton
                    showLastButton
                />
            </div>
        </main>
    );
};

export default Portfolio;