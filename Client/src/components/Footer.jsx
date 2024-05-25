import ReactDOM from 'react-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook ,  faInstagram , faTwitter} from '@fortawesome/free-brands-svg-icons';


export default function Footer(){
    return (
        <div className="fouter">
            <div className="fouter-left">
                <img src="" alt="" className="logo" />
                <h1 className="logo">Aladdin</h1>
                <div className="footer-subscribe">
                    <input type="text" placeholder="Your Email" className='footer-input' />
                    <button className='footer-button'>Subscribe</button>
                    <p className='subsciption-p'>Subscribe to recieve our news</p>
                </div>
                <div className="fouter-media">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={faFacebook} size="2x" className='footer-icon'/>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" className='footer-icon' />
                    </a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" className='footer-icon'/>
                </a>
                </div>
            </div>
            <div className="fouter-account">
                <h3>Account</h3>
                <div className="fouter-account-details">
                    <a href="">Account/Log in</a><br />
                    <a href="">Cart</a><br />
                    <a href="">Last </a><br />
                </div>
                
            </div>
            <div className="support">
                <ul>
                    <li>10 Rue Saint Augustin 1002 Tunis Tunisia</li>
                    <li>+8801611112222</li>
                    <li>contact@Aladdin.con</li>
                </ul>
                
            </div>
        </div>
    )
}
