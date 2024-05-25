import { useEffect, useState } from "react"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import image from "../assets/SignImage.jpg"
import '../CSS/ProductsDetails.css'
import { useParams  } from 'react-router-dom'


const ProductsDetails = () => {
    //State definition 
    const [quantity , setQuantity] = useState(0)
    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [rating, setRating] = useState(0.0)
    const [reviewCount, setReviewCount] = useState(0)
    const [images , setImages] = useState([])

    //get the id from the params 
    const { id } = useParams()

    //Click handler definition
    const handlePlusClick = (event) => {
        event.preventDefault()
        let newquantity = quantity + 1
        setQuantity(newquantity)
    }

    const handleMinusClick = (event) => {
        event.preventDefault()
        if (quantity === 0){
            toast.error("The Quantity cannot be negative !!!")
        }else{
            let newquantity = quantity - 1
            setQuantity(newquantity)
        }
    }

    //load all the information related to the product 
    useEffect(() => {
        if (!id) {
            toast.error("No product ID provided in the URL")
            return
        }
        fetch(`http://localhost:8000/products/${id}`)
            .then(response => {
                if (!response.ok) {
                    toast.error(`Error fetching product details: ${response.statusText}`)
                }
                return response.json();
            })
            .then(data => {
                setProductName(data.name);
                setDescription(data.description);
                setPrice(data.price);
                setImages(data.images);
                setRating(data.rating);
                setReviewCount(data.reviews_count);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
                toast.error("Failed to load product details");
            });
    }, [id]);

    //getting the non primary images 
    const nonPrimaryImages = images.filter(image => !image.is_primary)

    return(
        <div className="productDetailsContainer">
            <ToastContainer />
            <div>
                <div className="topPart">
                    <div className="sideImages">
                        {nonPrimaryImages.map((image, index) => (
                            <img key={index} src={image.url} alt={`Image ${index}`} />
                        ))}
                    </div>
                    <img src={image} alt="" className="mainImage"/>
                    <div className="details">
                        <h1>{productName}</h1>
                        <p>{rating} <span>({reviewCount} person reviewed)</span> </p>
                        <h5>{price}DT</h5>
                        <p>{description}</p>
                        <form action="">
                            <button 
                            onClick={handleMinusClick}
                            className="minusBtn">-</button>
                            <input 
                            type="number" 
                            value={quantity}
                            onChange={(event) => {
                                if(event.target.value < 0){
                                    toast.error("quantity cannot be negative")
                                    setQuantity(0)
                                }else{
                                    setQuantity(event.target.value)
                                }}}/>
                            <button 
                            onClick={handlePlusClick}
                            className="plusBtn">+</button>
                            <button type="submit"> buy now ! </button>
                        </form>
                    </div>
                </div>
                <div className="bottomPart">
                    <h2>Related Items</h2>
                    <ul>
                        <li>
                            <img src={image} alt="" />
                            <h1>What is Lorem Ipsum?</h1>
                            <p>123 DT</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductsDetails