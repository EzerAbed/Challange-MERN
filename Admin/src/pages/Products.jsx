import React, { useState, useEffect } from 'react';
import "./Products.css"

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    description: '',
    price: 0,
    images: [],
    stock_quantity: 0,
  });

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    })
      .then(response => response.json())
      .then(data => {
        setProducts([...products, data]);
        setNewProduct({
          name: '',
          category: '',
          description: '',
          price: 0,
          images: [],
          stock_quantity: 0,
        });
      });
  };

  const handleUpdate = (id, updatedProduct) => {
    fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct),
    })
      .then(response => response.json())
      .then(data => {
        setProducts(products.map(product => product._id === id ? data : product));
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/products/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        setProducts(products.filter(product => product._id !== id));
      });
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={newProduct.name} onChange={(event) => setNewProduct({ ...newProduct, name: event.target.value })} />
        </label><br />
        <label>
          Category:
          <input type="text" value={newProduct.category} onChange={(event) => setNewProduct({ ...newProduct, category: event.target.value })} />
        </label><br />
        <label>
          Description:
          <textarea value={newProduct.description} onChange={(event) => setNewProduct({ ...newProduct, description: event.target.value })} />
        </label><br />
        <label>
          Price:
          <input type="number" value={newProduct.price} onChange={(event) => setNewProduct({ ...newProduct, price: parseInt(event.target.value, 10) })} />
        </label><br />
        <label>
          Images:
          <input type="file" multiple onChange={(event) => setNewProduct({ ...newProduct, images: event.target.files })} />
        </label><br />
        <label>
          Stock Quantity:
          <input type="number" value={newProduct.stock_quantity} onChange={(event) => setNewProduct({ ...newProduct, stock_quantity: parseInt(event.target.value, 10) })} />
        </label><br />
        <button type="submit">Create Product</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th>Images</th>
            <th>Stock Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.images[0].url} alt="" />
              </td>
              <td>{product.stock_quantity}</td>
              <td>
                <button onClick={() => handleUpdate(product._id, { ...product, name: 'Updated Name' })}>Update</button>
                <button onClick={() => handleDelete(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;