import '../CSS/Cart.css';
import AddToCart from "../components/AddToCart";
import { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

export default function Cart() {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(UserContext);

    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            toast.error("Nice Try but you must be connected to get in here");
            return;
        }
        const userId = user.id;
        fetch(`http://localhost:8000/orders/${userId}`)
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    toast.error(data.message);
                } else {
                    setOrders(data);
                }
            })
            .catch(error => {
                toast.error("An error occurred while fetching orders");
                console.error("Error fetching orders:", error);
            });
    }, [user]);

    const calculateTotal = () => {
        return orders.reduce((acc, order) => acc + (order.price * order.quantity), 0);
    };

    const handleShopClick = () =>{
        navigate("/products")
    }

    return (
        <div className="cart">
            <div className="cart-content">
                <h2>Cart</h2>
                <div className="cart-container">
                    {orders.length > 0 ? (
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <AddToCart key={order._id} order={order} />
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>You didn't Shop yet. Your cart is empty.</p>
                    )}
                    <div className="cart-buttons">
                        <button className="cart-button" onClick={handleShopClick}>Return To Shop</button>
                    </div>
                </div>
                <div className="undercart">
                    <div className="undercart-content">
                        <h3>Cart Total</h3>
                        <div className="under-cart-element">
                            <span>Total :</span>
                            <br />
                            <span>{calculateTotal()}</span>
                        </div>
                        <div className="under-cart-button">
                            <button className="cart-button">Process to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
