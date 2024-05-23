import signInImage from '../assets/SignImage.jpg'
import '../CSS/LogIn.css'

//Page definition
const LogIn = () => {
    return(
        <div className='logInContainer'>
            <img src={signInImage} alt="logInImage" />
            <div className='logInFormField'>
                <div>
                    <h1>Log In</h1>
                    <h4>Enter your detail below</h4>
                </div>
                <input type="email" name="" id="" placeholder='Email'/>
                <input type="password" name="" id="" placeholder='Password'/>
                <div className='logInBtn'>
                    <button>Log In</button>
                    <p> Forgot Password? </p>
                </div>
            </div>
        </div>
    )
}

export default LogIn