import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/J.png'
import LogoSubtitle from '../../assets/images/JASKOMAL-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faProjectDiagram, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Sidebar = ()=> (
    <div className='nav-bar'>
        <Link className = 'logo' to = '/'>
            <img src={LogoS} alt = "logo"/>
            <img className = "sub-logo" src = {LogoSubtitle} alt = "logo"/>
        </Link>
        <nav>
            <NavLink exact= "true" activeclassname = "active" to = "/">
                <FontAwesomeIcon icon = {faHome} color= "#4d4d4e" />
            </NavLink>
            <NavLink exact= "true" activeclassname = "active" className = "about-link"to = "/about">
                <FontAwesomeIcon icon = {faUser} color= "#4d4d4e" />
            </NavLink>

            <NavLink exact= "true" activeclassname = "active" className="project-link" to = "/project">
                <FontAwesomeIcon icon = {faProjectDiagram} color= "#4d4d4e" />
            </NavLink>

            <NavLink exact= "true" activeclassname = "active" className="contact-link" to = "/contact">
                <FontAwesomeIcon icon = {faEnvelope} color= "#4d4d4e" />
            </NavLink>
            
        </nav>
        <ul>
            <li>
                <a target = "_blank" rel = "noreferrer" href='https://www.linkedin.com/in/jaskomalmattu/'>
                    <FontAwesomeIcon icon = {faLinkedinIn} color = "#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target = "_blank" rel = "noreferrer" href='https://github.com/jaskomalsingh'>
                    <FontAwesomeIcon icon = {faGithub} color = "#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
