import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ProjectPopupProps {
    project: {
        title: string;
        description: string;
        category: string;
        image: { src: StaticImageData };
    } | null;
    onClose: () => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ project, onClose }) => {
    if (!project) return null;

    const { title, description, category, image } = project;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 w-40 h-40">
            <div className="bg-white rounded-lg p-5 relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">X</button>
                <ul>
                    <li className="font-bold">{title}</li>
                    <li>{description}</li>
                    <li>{category}</li>
                </ul>
                <Image
                    src={image.src} 
                    alt={title}
                    className="object-cover rounded-md mt-4"
                />
                <button onClick={onClose} className="mt-4 bg-secondary text-primary px-4 py-2 rounded">Close</button>
            </div>
        </div>
    );
}

export default ProjectPopup;