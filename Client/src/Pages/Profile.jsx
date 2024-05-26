import '../CSS/Profile.css'
import UserContext from '../contexts/UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Profile(){
    let {user,setUser}=useContext(UserContext)
    const navigate = useNavigate()
    function handleClick() {
        navigate('/profil/editAccount');
      }
    function handleLogout(){
        setUser(null);
        navigate('/');
    }
    
    return(
        <div className="profile">
            <h2 className="profile-title">
                My Account
            </h2>
            <div className="profile-content">
                <table className='user-infos'>
                    <tbody>
                    <tr>
                        <td>User ID :</td>
                        <td>{user.id}</td>
                    </tr>
                    <tr>
                        <td>User Name : </td>
                        <td>{user.username}</td>
                    </tr>
                    <tr>
                        <td>User Email :</td>
                        <td>{user.email}</td>
                    </tr>

                    </tbody>
                </table>
                <div className='button-container'>
                <button onClick={handleClick}>Edit Profile</button>
                <button onClick={handleLogout}>Log out</button>

                </div>
            </div>
        </div>
    )
}