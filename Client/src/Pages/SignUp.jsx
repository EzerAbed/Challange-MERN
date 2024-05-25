import { useState } from 'react';
import signInImage from '../assets/SignImage.jpg'
import '../CSS/SignUp.css'
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Page definition
const SignUp = () => {

    //State creation 
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    //Creation of the handleSubmit function
    const handleSubmit = (event) =>{
        event.preventDefault()
        
        //checking that non of the fields is empty on submiting
        if (!username || !email || !password || !confirmPassword) {
            toast.error('Please fill in all fields');
            return;
        }

        //checking if the password field and confirm password field match
        if(password != confirmPassword){
            toast.error('The Password and the confirmation Password Do not match !')
            return
        }

        //Sending a POST request to add the new user
        let newUser = { username, email, password }
        fetch("http://localhost:8000/signUp", {
            method : 'POST',
            headers: {
                "content-type":"application/json",
            },
            body : JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message){
                toast.error(data.message)
            }
            else{
                toast.success("New Acount created please log in to continue !")
                setUsername('')
                setEmail('')
                setPassword('')
                setConfirmPassword('')
            }
        })
    }

    return(
        <>
            <ToastContainer />
            <div className='signUpContainer'>
                <img src={signInImage} alt="signUpImage" />
                <div className='signUpFormField'>
                    <div>
                        <h1>Create an accout</h1>
                        <h4>Enter your detail below</h4>
                    </div>
                    <form onSubmit={handleSubmit} className='signUpForm'>
                        <input
                            type="text"
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <br />
                        <input
                            type="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <input
                            type="password"
                            placeholder='Confirm your password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <br />
                        <button type="submit">Create Account</button>
                    </form>
                    <p>Already have an Account? <Link to="/login">Log In</Link></p>
                </div>
            </div>
        </>
    )
}

export default SignUp
