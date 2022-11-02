import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const hiArray = ['G','r','e','e','t','i','n','g','s',',']
    const companyArray = ['W','e','b',' ','d','e','s','i','g','n']
    return (
        <div className='container home-page'>
        <div className='text-zone'>
            <h1><AnimatedLetters
              letterClass={letterClass}
              strArray={hiArray}
              idx={10}/> <br />
            <span className={letterClass}>T</span>
            <span className={`${letterClass} _12`}>h</span>
            <span className={`${letterClass} _13`}>i</span>
            <span className={`${letterClass} _14`}>s</span>
            <span className={`${letterClass} _15`}> </span>
            <span className={`${letterClass} _16`}>i</span>
            <span className={`${letterClass} _17`}>s</span>
            <img src={LogoTitle} alt="company" />
            <br />
           <AnimatedLetters
              letterClass={letterClass}
              strArray={companyArray}
              idx={10}/>
            </h1>
            <h2>Website Design / SEO Optimization / Brand Design</h2>
            <Link to="/contact" className='flat-button'>CONTACT US</Link>
            </div>
        </div>
    );
}


export default Home