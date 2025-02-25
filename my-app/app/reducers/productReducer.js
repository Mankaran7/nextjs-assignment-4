export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const initialState = [];

export function productReducer(state, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;
    case ADD_PRODUCT:
      return [...state, action.payload];
    case DELETE_PRODUCT:
      return state.filter(product => product.id !== action.payload);
    default:
      return state;
  }
}