import './ProductCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function ProductCart(){
    return(
        <div className='productcart'>
            <div className="product-img">
            <img src="https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/b/i/bison-x10-black1_30_1.jpg" alt="product image" />
                </div>
            <div className="description">
                <div className="title">
                    CRÈME À MAIN DORIS GOURMANDE FRUITÉ - 100ML
                </div>
                <div className="price">
                9,000 DT
                </div>
                <div className="quantity">
                2 items left
                </div>
                <div className="rate">

                <span>4.5</span>
                <span><FontAwesomeIcon icon={faStar} className='staricon' /></span>
                </div>
            </div>
        </div>
    )
}