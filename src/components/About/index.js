import './index.scss'
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faGithub, faHtml5, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am a very ambitious developer, who soon aims to be a full-stack.
                    I am currently working on developing my skills to strengthen my arsenal
                    so that I can help anyone develop any kind of app they want.
                </p>
                <p>
                    I am passionate about more than just coding, I believe technology is the progressor
                    of humanity, and through technology we shall prevail. I take an interest in the field of robotics by
                    competing on a national level for the FIRST Lego League in India.
                </p>
                <p>
                    Technology is a versatile tool that connects humans better than ever. I believe even the greatest
                    mysteries of science can be answered through computing. Quantum computing and Artificial Intelligence
                    are on the brink of being the most accomplished they have ever been, and I am a supporter and contributor
                    to this new era of tech.
                </p>
                <span className='signature'>Alyque Farishta</span>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJs} color="#f0db4f" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faPython} color="#306998" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color="#fff" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About