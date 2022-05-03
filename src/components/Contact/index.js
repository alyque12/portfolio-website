import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2500)
        return () => clearTimeout(timer)
    }, [])
    return(
    <>
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                idx={15} 
                />
            </h1>
            <p>
            I am currently a student at Drexel University and am looking for co-op opportunities, I can help you develop basically anything you need. Be it a simple web-app or a complex neural network, I will do my utmost to get you what you need on time. My main areas of interest are AI/ML and Quantum Computing but I also enjoy making mobile and web apps.
            </p>
            <div className='contact-form'>
                <form>
                    <ul>
                        <li className='half'>
                            <input type="text" name="name" placeholder="Name" required/>
                        </li>
                        <li className='half'>
                            <input type="email" name="email" placeholder="Email" required/>
                        </li>
                        <li className='half'>
                            <input type="text" name="subject" placeholder="Subject" required/>
                        </li>
                        <li className='half'>
                            <textarea name="message" placeholder="Message" required/>
                        </li>
                        <li className='half'>
                            <input type="submit" className='flat-button' value="SEND"/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
    </>)
}

export default Contact