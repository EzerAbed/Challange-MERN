import { useEffect, useState, useContext } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/ProductsDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../contexts/UserContext';

const ProductsDetails = () => {
    const [quantity, setQuantity] = useState(0);
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0.0);
    const [reviewCount, setReviewCount] = useState(0);
    const [images, setImages] = useState([]);
    const [userRating, setUserRating] = useState(0); 

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const { id } = useParams();

    const handlePlusClick = (event) => {
        event.preventDefault();
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleMinusClick = (event) => {
        event.preventDefault();
        if (quantity === 0) {
            toast.error("The Quantity cannot be negative !!!");
        } else {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    useEffect(() => {
        if (!id) {
            toast.error("No product ID provided in the URL");
            return;
        }
        fetch(`http://localhost:8000/products/detail/${id}`)
            .then(response => {
                if (!response.ok) {
                    toast.error(`Error fetching product details: ${response.statusText}`);
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

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= rating; i++) {
            stars.push(<FontAwesomeIcon icon={faStar} className='staricon' key={i} />);
        }
        return stars;
    };

    const handleRatingChange = (event) => {
        setUserRating(parseFloat(event.target.value));
    };

    const handleRatingSubmit = (event) => {
        event.preventDefault();
        if (userRating < 0 || userRating > 5) {
            toast.error("Rating must be between 0 and 5");
            return;
        }

        fetch(`http://localhost:8000/products/rating/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ rating: userRating }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                toast.error(data.message);
            } else {
                toast.success("Your rating has been submitted");
                setRating(data.rating);
                setReviewCount(data.reviews_count);
            }
        })
        .catch(error => {
            console.error('Error submitting rating:', error);
            toast.error("Failed to submit rating");
        });
    };

    const nonPrimaryImages = images.filter(image => !image.is_primary);
    const primaryImages = images.filter(image => image.is_primary);

    const handleBuyNowClick = (event) => {
        event.preventDefault();
        if (!user) {
            toast.error("You need to be connected to buy!");
            return;
        }

        const orderData = {
            idCustumer: user.id,
            idProduct: id,
            quantity: quantity,
            price: price,
        };

        fetch("http://localhost:8000/orders", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                toast.error(data.message);
            } else {
                toast.success("Your order has been placed. Check the cart to confirm the payment or get back to order more products.");
                setQuantity(0);
            }
        });
    };

    return (
        <div className="productDetailsContainer">
            <ToastContainer />
            <div>
                <div className="topPart">
                    <div className="sideImages">
                        {nonPrimaryImages.map((image, index) => (
                            <img key={index} src={image.url} alt={`Image ${index}`} />
                        ))}
                    </div>
                    {primaryImages.map((image, index) => (
                        <img key={index} src={image.url} alt={`Image ${index}`} className="mainImage" />
                    ))}
                    <div className="details">
                        <h1>{productName}</h1>
                        <p>
                            <span>{rating.toFixed(2)}</span>
                            <span>{renderStars(rating)}</span>
                            <span>({reviewCount} person reviewed)</span>
                        </p>
                        <h5>{price}DT</h5>
                        <p className="description">{description}</p>
                        <form action="">
                            <button onClick={handleMinusClick} className="minusBtn">-</button>
                            <input
                                type="number"
                                value={quantity}
                                onChange={(event) => {
                                    if (event.target.value < 0) {
                                        toast.error("Quantity cannot be negative");
                                        setQuantity(0);
                                    } else {
                                        setQuantity(event.target.value);
                                    }
                                }}
                            />
                            <button onClick={handlePlusClick} className="plusBtn">+</button>
                            <button type="submit" onClick={handleBuyNowClick}>Buy now!</button>
                        </form>
                        <br />
                        <br />
                        <form onSubmit={handleRatingSubmit}>
                            <label>
                                Rate this product:
                                <input
                                    type="number"
                                    value={userRating}
                                    onChange={handleRatingChange}
                                    step="0.1"
                                    min="0"
                                    max="5"
                                />
                            </label>
                            <br />
                            <button type="submit">Submit Rating</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;
