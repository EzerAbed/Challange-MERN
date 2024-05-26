import SearchBar from "./SearchBar"
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaFileImage } from 'react-icons/fa';
import '../App.css'
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { Link } from "react-router-dom";



export default function Navbar(){
    let {user, setUser}=useContext(UserContext)
    return (
        <div className="navbar">
            <div className="logocontainer">
                <h1 className="logo">
                    {/* <FaFileImage></FaFileImage> */}
                    <Link to="/" className="page">Aladdin</Link>
                </h1>
            </div>
            <div className="search-bar">
                <SearchBar></SearchBar>
            </div>
            <div className="nav-pages">
                <Link to="/messages" className="page">Contact us</Link>
                {user? <div> <Link to="/profil" className="page"><FaUser></FaUser></Link> <Link to="/cart" className="page"><FaShoppingCart></FaShoppingCart></Link></div>: <Link to="/signUp" className="page">Get Started</Link>}
                <Link to="/products"  className="page">Our Products</Link>
                
                
                
            </div>
        </div>
    )
}
