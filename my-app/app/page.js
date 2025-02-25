"use client"
import React, { useReducer, useEffect, useState } from 'react';
import { productReducer} from './reducers/productReducer';
import { fetchProducts,addProduct,deleteProduct } from './actions/productActions';

export default function Home() {
  const [products, dispatch] = useReducer(productReducer,[]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    fetchProducts(dispatch);
  }, []);

  function handleAddProduct(e) {
    e.preventDefault();
    addProduct(dispatch, title, price);
    setTitle('');
    setPrice('');
  }

  return (
    <div>
      

      <div>
        <h2>Add New Product</h2>
        <form onSubmit={handleAddProduct}>
          <div>
            <label>Product Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label>Product Price ($):</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>

      <div>
      {Array.isArray(products) && products.length === 0 ? (
      <p>No products found.</p>
) : (
  <ul>
    {products?.map(product => (
      <li key={product.id}>
        <div>
          <strong>{product.title}</strong> - ${product.price}
        </div>
        <button onClick={() => deleteProduct(dispatch, product.id)}>Delete</button>
      </li>
    ))}
  </ul>
)}

        
      </div>
    </div>
  );
}
