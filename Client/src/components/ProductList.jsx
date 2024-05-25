import React, { useState, useEffect } from 'react';
import ProductCart from './ProductCart';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .then(console.log(products))
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCart key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;