import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faProjectDiagram, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false); // Explicitly close the menu
    };

    return (
        <div className='nav-bar'>
            <button className="menu-button" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} color="#4d4d4e" />
            </button>
            <div className={isOpen ? "menu-content open" : "menu-content"}>
                <NavLink exact="true" activeClassName="active" to="/" onClick={closeMenu}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" to="/about" onClick={closeMenu}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" to="/project" onClick={closeMenu}>
                    <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" to="/contact" onClick={closeMenu}>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <a href='https://www.linkedin.com/in/jaskomalmattu/' target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                    <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
                </a>
                <a href='https://github.com/jaskomalsingh' target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
