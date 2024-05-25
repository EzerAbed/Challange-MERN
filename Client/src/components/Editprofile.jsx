import { useState } from 'react';
import signInImage from '../assets/SignImage.jpg'
import '../CSS/SignUp.css'
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Page definition
export default function Editprofile(){

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
            toast.error('All fields must be not null');
            return;
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
                toast.success("Acount updated!")
                setUsername('')
                setEmail('')
                setPassword('')
                setConfirmPassword('')
            }
        })
    }
    useEffect(()=>{
        fetch("http://localhost:8000/signUp/"+id)
        .then(res=>res.json())
        .then(data=>{
            setUsername(data.username)
            setEmail(data.email)
            setPassword(data.password)

        })
      },[])

    return(
        <>
            <ToastContainer />
            <div className='signUpContainer'>
                <img src={signInImage} alt="signUpImage" />
                <div className='signUpFormField'>
                    <div>
                        <h1>Edit your profile</h1>
                        <h4>Update your details</h4>
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
                            placeholder='Enter your last password to reset password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <input
                            type="password"
                            placeholder='New password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <br />
                        <button type="submit">Update </button>
                    </form>

                </div>
            </div>
        </>
    )
}

