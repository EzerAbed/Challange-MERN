import Navbar from "./components/Navbar"
import Contactus from "./components/Contactus";
import './App.css';
import { Route, Routes, useParams } from 'react-router-dom';
import { useEffect } from "react";

export default function App(){
    useEffect(()=> {
        fetch("http://localhost:8000/")
    })
    return (
        <div>
            <Contactus></Contactus>
        </div>
        // <Routes>
        //     <Route path="/messages" element={<Contactus />}/>
        // </Routes>
    )
}