import './Home.css';
import logo from '../images/logo.png'
import login from '../images/login.png'
import HeaderBrand from '../images/header_brand.png'
import Ellipse from '../images/ellipse.png'
import AboutImg from '../images/about_img.png'
import AboutHeader from '../images/about_header.png'
import AboutContent from '../images/about_content.png'
import Ellipse2 from '../images/ellipse2.png'
import Features from '../images/features.png'
import Benefits from '../images/benefits.png'
import Contact from '../images/contact.png'
import Instagram from '../images/instagram.png'
import Linkedin from '../images/linkedin.png'
import Twitter from '../images/twitter.png'
import Telegram from '../images/telegram.png'
import Line from '../images/line.png'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
  
  return (
    <div>
        <div className='navbar'>

            <button><img alt="salam" className='login' src={login} onClick={() => {navigate('/login')}}/></button>
            <a className='menuItem' href='#contact'>تماس با ما</a>
            <a className='menuItem' href='#benefits'>مزیت‌ها</a>
            <a className='menuItem' href='#features'>قابلیت‌ها</a>
            <a className='menuItem' href='#about'>درباره‌ی ما</a>
            <a className='menuItem' href='#home'>خانه</a>
            <img alt="salam" className='logo' src={logo}/>
            
        </div>


        <div className='header' id='home'>
            <div className='header1'>
                <img alt="salam" className='header-brand' src={HeaderBrand} />
            </div>
            

            <img alt="salam" className='header-ellipse' src={Ellipse} />
        </div>

        <div className='about-container' id='about'>
            <div className='about-content-container'>
                <div className='about-header-container'>
                    <img alt="salam" className='about-header' src={AboutHeader} />
                </div>
                <img alt="salam" className='about-content' src={AboutContent} />
            </div>

            <div className='about-img-container'>
                <img alt="salam" className='about-img' src={AboutImg} />
            </div>
        </div>
        
        <div className='grad'>
        <img alt="salam" className='header-ellipse-2' src={Ellipse2} />

        <h1 className='title' id='features'>قابلیت‌ها</h1>
        <div className='features-container'>
            <img alt="salam" src={Features} />
        </div>

        <div className='benefits-container' id='benefits'>
            <img alt="salam" className='benefits' src={Benefits} />
        </div>

        <div className='contact-container' id='contact'>
            <h1 className='title'>تماس با ما</h1>

            <div className='contacts-con'>
                <img alt="salam" className='contact-img' src={Contact} />
                <button><img alt="salam"className='contact-icon' src={Instagram} /></button>
                <button><img alt="salam" className='contact-icon' src={Linkedin} /></button>
                <button><img alt="salam" className='contact-icon' src={Twitter} /></button>
                <button><img alt="salam" className='contact-icon' src={Telegram} /></button>
            </div>
        </div>

        <img alt="salam" className='' src={Line} />
        
        <div className='footer'>
            <img alt="salam" className='logo-footer' src={logo}/>
            <h2 className='copyright'>ⓒ 2023</h2>
        </div>

        </div>
    </div>
  );
}

export default Home;
