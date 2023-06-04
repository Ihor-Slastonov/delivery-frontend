const LOCAL_CART_KEY = 'currentCart';

const currentCart = () => JSON.parse(localStorage.getItem(LOCAL_CART_KEY));

const addToCart = cartItem => {
  let localCart = currentCart() || [];
  if (localCart.some(item => item._id === cartItem._id)) {
    console.log('this product is in cart');
    return;
  }
  localCart.push(cartItem);
  localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(localCart));
  return;
};

const removeItemById = id => {
  const cart = currentCart();

  const updatedCart = cart.filter(item => item._id !== id);

  localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(updatedCart));
};

const clearCart = () =>
  localStorage.setItem(LOCAL_CART_KEY, JSON.stringify([]));

const localStorageCartApi = {
  currentCart,
  addToCart,
  removeItemById,
  clearCart,
};

export default localStorageCartApi;
