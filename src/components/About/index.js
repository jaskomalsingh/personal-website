import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

   
    useEffect(() => {
        const timer =  setTimeout (() =>{
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timer);
    }, [])

    return (
        <div className='container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx = {15}
                    />
                </h1>
                <p>Hey there, I'm Jaskomal Mattu and I'm currently a student at the University of Western Ontario pursuing a Bachelor's degree in software engineering due to be completed May 2025. While I have experience in many coding languages, java, python, and full stack development are my strengths as of right now. </p>
                <p>Over the years I have worked on several projects which I recommend checking out in my github attached below.  As a result of my unbound passion for software development, I'm excited at the opportunities available in this field and am keen to pursue them.</p>
                <p>When looking at my interests outside of software development, I've been a competitive dancer for over a decade while being an avid reader and gym enthusiast.</p>

            </div>

        </div>
    )
}

export default About