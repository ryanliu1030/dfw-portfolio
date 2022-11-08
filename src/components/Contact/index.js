import { useEffect } from 'react';
import { useState } from 'react';
import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 3000)
        },[])
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm (
            'default_service',
            'template_owg0dic',
            refForm.current,
            'fj8RXFrn9-gJq8vy-'
        ).then(
            () => {
                alert("Inquiry has received")
                window.location.reload(false)
            },
            () => {
                alert("Failed to send the message, please try again")
            }
        )
    }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','u','s']}
                        idx={10} 
                    />
                    </h1>
                    <p>
                        We seek customers who need to revamp their current website, who need a window to display
                        their product in the most modern manner, and to use internet as the medium to grow their business.
                        Contact us if you would like a fresh start of your business website!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>

                                <li >
                                    <input placeholder="Subject" type="text" name='subject' required />
                                </li>
                                <li >
                                    <textarea
                                        placeholder='Message'
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li >
                                    <input type="submit" className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <div className='info-map'>
                DFW Web Design
                <br />
                <span>xinrui.liu.1030@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[32.902498812785886, -97.0342492052253]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[32.902498812785886, -97.0342492052253]}>
                        <Popup>DFW airport, I'll meet you there.</Popup>
                    </Marker>
                </MapContainer>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact