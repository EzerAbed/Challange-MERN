import React, { useState, useEffect } from 'react';
import ProductCart from './ProductCart';
import Sidebar from '../components/SideBar';
import "../CSS/ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['Apiderm', 'Express Lifting', 'Watermelon Refreshment', 'Rosacea-Stop', 'Ceramide Power'];

  useEffect(() => {
    let url = 'http://localhost:8000/products';
    if (selectedCategory) {
      url += `/${selectedCategory}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, [selectedCategory]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="product-list-page">
      <Sidebar categories={categories} onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
      <div className="product-list">
        {products.map(product => (
          <ProductCart key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
