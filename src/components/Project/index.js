import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import cheerHomepage from '../../assets/images/cheer-homepage.png';
import chatroomvideo from '../../assets/videos/chatroom-video.mp4';

const projects = [
    {
        name: "Full-Stack Website for Non-Profit Organization",
        imageUrl: cheerHomepage,
        description: "I spearheaded the development of a MERN stack website for a non-profit supporting adults with disabilities, hosted on Google Cloud. This accessible website features enhanced navigation options, screen reader compatibility, and high-contrast visuals. It centralizes information on various support services and integrates seamlessly with social media to boost user engagement. Key functionalities include a client inquiry system, newsletter management, and comprehensive admin controls for content and user management. This project showcases my expertise in creating accessible, user-friendly digital solutions that address specific community needs.",
        codeUrl: "https://github.com/jaskomalsingh/Cheer-Client-Website",
        date: "2024-04"
    },
    {
        name: "Dynamic Messenger App",
        imageUrl: chatroomvideo,
        description: "As part of a team project, I contributed to the development of a dynamic chat room application that facilitates real-time communication among users. This application, crafted using C++, React, and Node.js, operates on a robust multi-threaded WebSocket server hosted on Google Cloud. It features an intuitive, dynamic user interface that updates live without user input, supporting multiple simultaneous user connections. This project highlights my capabilities in full-stack development and my understanding of real-time network communication and concurrency management.",
        codeUrl: "https://github.com/jaskomalsingh/Messenger-App",
        date: "2024-03"
    },
    {
        name: "Sorting Algorithm UI",
       
        description: "This Project is a visual representation of sorting algorithms in action. The user can create an arbitrary size array (as bars) and this array will get sorted based on the users selection of the sorting algorithm.",
        codeUrl: "https://github.com/jaskomalsingh/Sortinghub-project",
        date: "2023-02"
    },
    { // Placeholder project 1
        name: "Mail Client program",
       
        description: "This program is a simple mail client that sends email to any recipient. The client will need to connect to a mail server, communicate with the mail server using the SMTP protocol, and send an email message to the mail server",
        codeUrl: "https://github.com/jaskomalsingh/Mail-Client-Program/tree/main",
        date: "2023-10"
    },
    { // Placeholder project 2
        name: "Product Recommendation System",
        
        description: "Users can input their names, and the system suggests products based on their preferences and purchase history, resulting in more diverse and user-specific recommendations.",
        codeUrl: "https://github.com/jaskomalsingh/Product_rec_system/tree/main",
        date: "2023-11"
    },
   
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
                        {project.imageUrl && project.imageUrl.toString().endsWith('.mp4') ? (
                            <video width="405" height="250" controls>
                                <source src={project.imageUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <img src={project.imageUrl} alt={project.name} />
                        )}
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
