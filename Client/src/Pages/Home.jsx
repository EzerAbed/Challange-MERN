import { useState, useEffect } from 'react';
import Banner from '../assets/Banner.png';
import '../CSS/Home.css';
import ProductCart from './ProductCart';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const [bestSeller, setBestSeller] = useState([]);
    const [newestProducts, setNewestProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/products/bestProducts")
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    toast.error(data.message);
                } else {
                    setBestSeller(data);
                }
            });

        fetch("http://localhost:8000/products/newestProducts")
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    toast.error(data.message);
                } else {
                    setNewestProducts(data);
                }
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <>
            <ToastContainer />
            <div className="container home-page">
                <img src={Banner} alt="Banner Image" className='bannerImage' />
                <div className='bestSeller'>
                    <h2>Best Sellers</h2>
                    <Slider {...settings}>
                        {bestSeller.map(product => (
                            <ProductCart key={product._id} product={product} />
                        ))}
                    </Slider>
                </div>
                <div className='newProducts'>
                    <h2>New Products</h2>
                    <Slider {...settings}>
                        {newestProducts.map(product => (
                            <ProductCart key={product._id} product={product} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Home;
