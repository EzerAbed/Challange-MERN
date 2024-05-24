import SearchBar from "./SearchBar"
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaFileImage } from 'react-icons/fa';
import '../App.css'



export default function Navbar(){
    return (
        <div className="navbar">
            <div className="logocontainer">
                <h1 className="logo">
                    {/* <FaFileImage></FaFileImage> */}
                    Aladdin
                </h1>
            </div>
            <div className="search-bar">
                <SearchBar></SearchBar>
            </div>
            <div className="nav-pages">
                <a href="" className="page">Get Started</a>
                <a href="" className="page">Contact us</a>
                <a href="" className="page">
                    <FaUser></FaUser>
                </a>
                
                <a href="" className="page">
                <FaShoppingCart></FaShoppingCart>
                </a>
            </div>
        </div>
    )
}