import './Landing.css';
import logo from '../logo.png'
import login from '../login.png'
import HeaderBack from '../header_back.png'
import HeaderBrand from '../header_brand.png'
import Ellipse from '../ellipse.png'
import AboutImg from '../about_img.png'
import AboutHeader from '../about_header.png'
import AboutContent from '../about_content.png'
import Ellipse2 from '../ellipse2.png'
import Features from '../features.png'
import Benefits from '../benefits.png'
import Contact from '../contact.png'
import Instagram from '../instagram.png'
import Linkedin from '../linkedin.png'
import Twitter from '../twitter.png'
import Telegram from '../telegram.png'
import Line from '../line.png'

function Landing() {
  
  return (
    <div>
        <div className='navbar'>

            <button><img className='login' src={login}/></button>
            <a className='menuItem' href='#contact'>تماس با ما</a>
            <a className='menuItem' href='#benefits'>مزیت‌ها</a>
            <a className='menuItem' href='#features'>قابلیت‌ها</a>
            <a className='menuItem' href='#about'>درباره‌ی ما</a>
            <a className='menuItem' href='#home'>خانه</a>
            <img className='logo' src={logo}/>
            
        </div>


        <div className='header' id='home'>
            <div className='header1'>
                <img className='header-brand' src={HeaderBrand} />
            </div>
            

            <img className='header-ellipse' src={Ellipse} />
        </div>

        <div className='about-container' id='about'>
            <div className='about-content-container'>
                <div className='about-header-container'>
                    <img className='about-header' src={AboutHeader} />
                </div>
                <img className='about-content' src={AboutContent} />
            </div>

            <div className='about-img-container'>
                <img className='about-img' src={AboutImg} />
            </div>
        </div>
        
        <div className='grad'>
        <img className='header-ellipse-2' src={Ellipse2} />

        <h1 className='title' id='features'>قابلیت‌ها</h1>
        <div className='features-container'>
            <img src={Features} />
        </div>

        <div className='benefits-container' id='benefits'>
            <img className='benefits' src={Benefits} />
        </div>

        <div className='contact-container' id='contact'>
            <h1 className='title'>تماس با ما</h1>

            <div className='contacts-con'>
                <img className='contact-img' src={Contact} />
                <button><img className='contact-icon' src={Instagram} /></button>
                <button><img className='contact-icon' src={Linkedin} /></button>
                <button><img className='contact-icon' src={Twitter} /></button>
                <button><img className='contact-icon' src={Telegram} /></button>
            </div>
        </div>

        <img className='' src={Line} />
        
        <div className='footer'>
            <img className='logo-footer' src={logo}/>
            <h2 className='copyright'>ⓒ 2023</h2>
        </div>

        </div>
    </div>
  );
}

export default Landing;
