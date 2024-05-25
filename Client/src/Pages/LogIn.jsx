import { useState } from 'react'
import signInImage from '../assets/SignImage.jpg'
import '../CSS/LogIn.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//Page definition
const LogIn = () => {
    //State Creation
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Creation of the handleSubmit function
    const handleSubmit = async (event) => {
        event.preventDefault()

        //sending the POST request to verify the user's information
        let userInfo = {email, password}
        fetch("http://localhost:8000/logIn", {
            method : 'POST',
            headers: {
                "content-type":"application/json",
            },
            body : JSON.stringify(userInfo)
        })
        .then(response => response.json())
        .then(data => {
            if(data.message){
                toast.error()
            }
            else{
                toast.success("welcome back " + data.user.username )
                setEmail('')
                setPassword('')
            }
        }) 
    }
    return(
        <>
            <ToastContainer />
            <div className='logInContainer'>
                <img src={signInImage} alt="logInImage" />
                <div className='logInFormField'>
                    <div>
                        <h1>Log In</h1>
                        <h4>Enter your details below</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Log In</button>
                        <p>Forgot Password?</p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LogIn
