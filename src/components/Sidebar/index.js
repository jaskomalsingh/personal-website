import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faProjectDiagram, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='nav-bar'>
            <button className="menu-button" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} color="#4d4d4e" />
            </button>
            <div className={isOpen ? "menu-content open" : "menu-content"}>
                <NavLink exact="true" activeClassName="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" to="/project">
                    <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <a href='https://www.linkedin.com/in/jaskomalmattu/' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
                </a>
                <a href='https://github.com/jaskomalsingh' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
