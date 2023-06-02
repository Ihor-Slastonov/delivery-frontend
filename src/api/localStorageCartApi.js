const LOCAL_CART_KEY = 'currentCart';

export const currentCart = () =>
  JSON.parse(localStorage.getItem(LOCAL_CART_KEY));

export const addToCart = cartItem => {
  let localCart = currentCart() || [];
  if (localCart.some(item => item._id === cartItem._id)) {
    console.log('this product is in cart');
    return;
  }
  localCart.push(cartItem);
  localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(localCart));
  return;
};

export const clearCart = () =>
  localStorage.setItem(LOCAL_CART_KEY, JSON.stringify([]));

const localStorageCartApi = {
  currentCart,
  addToCart,
  clearCart,
};

export default localStorageCartApi;
