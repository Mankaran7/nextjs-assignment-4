import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT } from '../reducers/productReducer';

export async function fetchProducts(dispatch) {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=5');
    const data = await response.json();
    dispatch({ type: GET_PRODUCTS, payload: data.products });
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
}

export async function addProduct(dispatch, title, price, description) {
  if (!title || !price) return;

  try {
    const response = await fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        price: Number(price),
        description
      })
    });
    
    const newProduct = await response.json();
    dispatch({ type: ADD_PRODUCT, payload: newProduct });
  } catch (error) {
    console.error('Failed to add product:', error);
  }
}

export async function deleteProduct(dispatch, id) {
  try {
    await fetch(`https://dummyjson.com/products/${id}`, {
      method: 'DELETE'
    });

    dispatch({ type: DELETE_PRODUCT, payload: id });
  } catch (error) {
    console.error('Failed to delete product:', error);
  }
}
