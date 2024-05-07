import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/J.png';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 's', 'k', 'o', 'm', 'a', 'l', ' ']
    const jobArray1 = ['--','W', 'e', 'b', ' ']; // Separate 'web'
    const jobArray2 = ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']; // Separate 'developer'

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _12`}>'m</span>
                    <img src={LogoTitle} alt="developer"/>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br/>
                    <span className="job-title">
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray1} idx={22} />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray2} idx={26} />
                    </span>
                </h1>
                <h2>Frontend Developer / Young Software Engineer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
} 

export default Home;
