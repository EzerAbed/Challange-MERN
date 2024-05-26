import Navbar from "./components/Navbar"
import Contactus from "./components/Contactus";
import './App.css';
import { Route, Routes, useParams } from 'react-router-dom';
import Cart from "./components/Card";
import { useEffect } from "react";
import Paiment from "./components/Paiment";
import ProductList from "./Pages/ProductList";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import ProductsDetails from "./Pages/ProductsDetails";
import Editprofile from "./Pages/Editprofile"
import Layout from './Pages/Layout'
import Home from "./Pages/Home";



export default function App(){
   
    return (   
        <Routes>
            <Route path="/" element={<Layout />} > 
                <Route index element={<Home />} />
                <Route path="logIn" element={<LogIn />} />
                <Route path="signUp" element={<SignUp />} />
                <Route path="products" element={< ProductList />} />
                <Route path="products/details/:id" element={< ProductsDetails />} />
                <Route path="editAccount/:id" element={< Editprofile />} />
                <Route path="messages" element={<Contactus />}/>
            </Route >
        </Routes>
    )
}
