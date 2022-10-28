import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div className='container home-page'>
        <div className='text-zone'>
            <h1>Greetings, <br /> This is 
            <img src={LogoTitle} alt="company" />
            DFW 
            <br />
            Web Design
            </h1>
            <h2>Website Design / SEO Optimization / Brand Design</h2>
            <Link to="/contact" className='flat-button'>CONTACT US</Link>
            </div>
        </div>
    );
}


export default Home