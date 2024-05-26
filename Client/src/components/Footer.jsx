import ReactDOM from 'react-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook ,  faInstagram , faTwitter} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";


export default function Footer(){
    let {user, setUser}=useContext(UserContext)
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
                    {user? <div> <Link to="/profil">Account</Link></div> : <Link to="/logIn">Log In</Link>} <br />
                    <Link to="/cart">Cart</Link><br />
                    <Link to="">Last </Link><br />
                </div>
                
            </div>
            <div className="support">
                <ul>
                    <li>10 Rue Saint Augustin 1002 Tunis Tunisia</li>
                    <li>+216 12 345 678</li>
                    <li>contact@Aladdin.com</li>
                </ul>
                
            </div>
        </div>
    )
}
