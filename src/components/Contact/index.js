import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timer =  setTimeout (() =>{
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timer);
    }, [])

    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs
            .sendForm(
                'service_2kz1t82',
                'template_3w6kqbm',
                refForm.current,
                '6TaBbWtdDIxaRj-3E'
            )
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                (error) => {
                    alert('Failed to send the message, please try again!');
                    console.error('EmailJS Error:', error);
                }
            )
    }
    return(
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                        idx={15}
                        />
                        
                    </h1>
                    <p>Enter your information below if you would like to get in touch!</p>
                    <div className="contac-form">
                        <form ref = {refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type='text' name="name" placeholder="name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="email" required/>
                                </li>
                                <li>
                                    <input placeholder="Subject" type='text' name='subject' required/>
                                </li>
                                <li>
                                    <textarea placeholder="Message" name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact
