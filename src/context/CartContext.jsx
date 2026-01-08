import { createContext, useContext, useState } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (cartItems.some((item) => item.id === product.id)) {
      Swal.fire({
        title: 'Opps!',
        text: 'This product is ALREADY in your cart.',
        icon: 'warning',
      });
    } else {
      setCartItems((prevItems) => [...prevItems, product]);
      Swal.fire({
        title: 'Added!',
        text: 'This product is ADDED in your cart.',
        icon: 'success',
      });
    }
  };
  const cartCount = cartItems.length;
  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
