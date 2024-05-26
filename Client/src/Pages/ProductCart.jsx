import '../CSS/ProductCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function ProductCart(props){
    const product = props.product
    const navigate = useNavigate()

    //Rendering stars equal to the rating
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<FontAwesomeIcon icon={faStar} className='staricon' key={i} />);
        }
        return stars;
    };

    //creating a function that onclick take us to the corresponding detail page
    const handleClick = () => {
        navigate(`/products/details/${product._id}`);
    };

    return(
        <div className='productcart' onClick={handleClick}>
            <div className="product-img">
            {product.images && <img src={product.images[0].url} alt="product image" />}
                </div>
            <div className="description">
                <div className="title">
                    {product.name}
                </div>
                <div className="price">
                    <span>{product.price}</span>
                    <span>DT</span>
                </div>
                <div className="quantity">
                    <span>{product.quantity}</span>
                </div>
                <div className="rate">
                    <span>{renderStars(product.rating)}</span>
                </div>
            </div>
        </div>
    )
}
