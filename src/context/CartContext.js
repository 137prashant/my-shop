import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [hold, setHold] = useState(false);


  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingProductIndex !== -1) {
        // If the product is already in the cart, increment its quantity
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };


  const removeFromCart = (productId) => {
    setHold(true);
     setTimeout(() => {
      setHold(false);
  }, 1000);

    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.product.id === productId) {
          if (item.quantity > 1) {
            // Decrement the quantity
            return { ...item, quantity: item.quantity - 1 };
          } else {
            // Remove the item from the cart
            return null;
          }
        }
        
        return item;
      }).filter(item => item !== null); // Filter out null values (removed items)
      
    });
  };


  const deleteFromCart = (productId) => {
    setHold(true);
    setTimeout(() => {
      setCart((prevCart) =>
        prevCart.filter((item) => item.product.id !== productId)
      );
      setHold(false);
    }, 1000);
  };

  const deleteAllFormCart = () => {
      setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, deleteFromCart, deleteAllFormCart, hold }}>
      {children}
    </CartContext.Provider>
  );
};
