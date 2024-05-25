import './ProductCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function ProductCart(props){
    const product = props.product;
    return(
        <div className='productcart'>
            <div className="product-img">
            {product.images && <img src={product.images[0]} alt="product image" />}
                </div>
            <div className="description">
                <div className="title">
                    {product.productName}
                </div>
                <div className="price">
                    <span>{product.price}</span>
                    <span>DT</span>
                </div>
                <div className="quantity">
                    <span>{product.quantity}</span>
                </div>
                <div className="rate">

                <span>{product.rating}</span>
                <span><FontAwesomeIcon icon={faStar} className='staricon' /></span>
                </div>
            </div>
        </div>
    )
}