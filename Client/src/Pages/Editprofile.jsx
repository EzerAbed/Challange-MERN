import { useState, useEffect } from 'react';  // Added useEffect import
import signInImage from '../assets/SignImage.jpg';
import '../CSS/SignUp.css';
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Editprofile() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const { id } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!username || !email || !password || !newPassword) {
            toast.error('All fields must be filled !!');
            return;
        }

        let user = { username, email, password, newPassword };
        fetch(`http://localhost:8000/edit/${id}`, { 
            method: 'PUT',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                toast.error(data.message);
            } else {
                toast.success("Account updated!");
                setPassword('');
                setNewPassword('');
            }
        })
        .catch(error => {
            toast.error('An error occurred');
        });
    }

    useEffect(() => {
        fetch(`http://localhost:8000/signUp/${id}`)  
        .then(res => res.json())
        .then(data => {
            if (data.message) {
                toast.error(data.message);
            } else {
                setUsername(data.username);
                setEmail(data.email);
            }
        })
        .catch(error => {
            toast.error('An error occurred');
        });
    }, [id]);

    return (
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
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <br />
                        <button type="submit">Update</button>
                    </form>
                </div>
            </div>
        </>
    );
}
