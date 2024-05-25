import Navbar from "./components/Navbar"
import Contactus from "./components/Contactus";
import './App.css';
import { Route, Routes, useParams } from 'react-router-dom';
import Cart from "./components/Card";
import { useEffect } from "react";
import Paiment from "./components/Paiment";
import ProductCart from "./components/ProductCart";
import ProductList from "./components/ProductList";

export default function App(){
    let product1= {
        productName:"Crème À Main DORIS Gourmande Fruité - 100ml",
        images:['https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/b/i/bison-x10-black1_30_1.jpg',],
        price:"9000",
        quantity:"2",
        rating:"4.5"
    }
   
    return (
        <div>
            {/* <Cart></Cart> */}
            {/* <Contactus></Contactus> */}
            {/* <Paiment></Paiment> */}
            <ProductCart product={product1}></ProductCart>
            <ProductList></ProductList>
        </div>
        // <Routes>
        //     <Route path="/messages" element={<Contactus />}/>
        // </Routes>
    )
}