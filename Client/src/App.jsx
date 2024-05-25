import Navbar from "./components/Navbar"
import Contactus from "./components/Contactus";
import './App.css';
import { Route, Routes, useParams } from 'react-router-dom';
import Cart from "./components/Card";
import { useEffect } from "react";
import Paiment from "./components/Paiment";
import ProductCart from "./components/ProductCart";

export default function App(){
   
    return (
        <div>
            {/* <Cart></Cart> */}
            {/* <Contactus></Contactus> */}
            {/* <Paiment></Paiment> */}
            <ProductCart></ProductCart>
        </div>
        // <Routes>
        //     <Route path="/messages" element={<Contactus />}/>
        // </Routes>
    )
}