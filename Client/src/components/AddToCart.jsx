import React from 'react';
import '../CSS/AddToCart.css'

const AddToCart = ({ order }) => {
    let price=order.price
    let quantity=order.quantity
    let total = price * quantity
  return (
    <tr>
      <td>{order.idProduct.name}</td>
      <td><img src={order.idProduct.images[0].url} alt="" className='imageProd'/></td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
    </tr>
  );
};

export default AddToCart;