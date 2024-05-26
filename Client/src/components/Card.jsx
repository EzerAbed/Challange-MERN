import Navbar from "./Navbar"
import Footer from "./Footer"
import './Cart.css'


export default function Cart(){
    return (
        <div className="cart">
            <div className="cart-content">
                <h2>Cart</h2>
                <div className="cart-container">
                    <table className="cart-table">
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </table>
                    <div className="cart-buttons">
                        <button className="cart-button">Return To shop</button>
                        <button className="cart-button">Update Cart</button>
                    </div>
                </div>
                <div className="undercart">
                    <div className="undercart-content">
                        <h3>Cart Total</h3>
                        
                        <div className="under-cart-element">
                            <span>Total</span>
                            <span></span>
                        </div>
                        <div className="under-cart-button">
                            <button className="cart-button">Process to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}