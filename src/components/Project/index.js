import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const projects = [
    {
        name: "Product Recommendation System",
        imageUrl: "/path/to/image1.jpg",
        description: "Users can input their names, and the system suggests products based on their preferences and purchase history, resulting in more diverse and user-specific recommendations.",
        codeUrl: "https://github.com/jaskomalsingh/Product_rec_system/tree/main",
        date: "2024-01"
    },
    {
        name: "Mail Client program",
        imageUrl: "/path/to/image1.jpg",
        description: "This program is a simple mail client that sends email to any recipient. The client will need to connect to a mail server, communicate with the mail server using the SMTP protocol, and send an email message to the mail server",
        codeUrl: "https://github.com/jaskomalsingh/Mail-Client-Program/tree/main",
        date: "2024-02"
    },
    {
        name: "Sorting Algorithm UI",
        imageUrl: "/path/to/image1.jpg",
        description: "This Project is a visual representation of sorting algorithms in action. The user can create an arbitrary size array (as bars) and this array will get sorted based on the users selection of the sorting algorithm.",
        codeUrl: "https://github.com/jaskomalsingh/Sortinghub-project",
        date: "2024-03"
    },
    { // Placeholder project 1
        name: "Placeholder Project 1",
        imageUrl: "/path/to/placeholder.jpg",
        description: "Description of Placeholder Project 1.",
        codeUrl: "#",
        date: "2024-04"
    },
    { // Placeholder project 2
        name: "Placeholder Project 2",
        imageUrl: "/path/to/placeholder.jpg",
        description: "Description of Placeholder Project 2.",
        codeUrl: "#",
        date: "2024-05"
    },
    { // Placeholder project 3
        name: "Placeholder Project 3",
        imageUrl: "/path/to/placeholder.jpg",
        description: "Description of Placeholder Project 3.",
        codeUrl: "#",
        date: "2024-06"
    }
];

const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='container project-page'>
            <h1 className="page-title">Projects</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="card" key={index}>
                        <h2>{project.name}</h2>
                        <img src={project.imageUrl} alt={project.name} />
                        <p>{project.description}</p>
                        <p><strong>Date:</strong> {project.date}</p>
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">View Code</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
