import Navbar from "./components/Navbar"
import Contactus from "./components/Contactus";
import './App.css';
import { Route, Routes, useParams } from 'react-router-dom';
import { useEffect } from "react";
import Paiment from "./components/Paiment";
import ProductList from "./Pages/ProductList";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import ProductsDetails from "./Pages/ProductsDetails";
import Editprofile from "./Pages/Editprofile"
import Layout from './Pages/Layout'
import Home from "./Pages/Home"
import Cart from "./Pages/Card";
import Profile from "./Pages/Profile";



export default function App(){
   
    return (   
        <Routes>
            <Route path="/" element={<Layout />} > 
                <Route index element={<Home />} />
                <Route path="logIn" element={<LogIn />} />
                <Route path="signUp" element={<SignUp />} />
                <Route path="products" element={< ProductList />} />
                <Route path="products/details/:id" element={< ProductsDetails />} />
                <Route path="profil/editAccount" element={< Editprofile />} />
                <Route path="messages" element={<Contactus />}/>
                <Route path="cart" element={<Cart />}/>
                <Route path="profil" element={<Profile />}/>
            </Route >
        </Routes>
    )
}
