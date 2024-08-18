import React, { createContext, useState } from "react";

export const CartContext = createContext(); // Create a context for the cart

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // State to hold the cart items
  const [hold, setHold] = useState(false); // State to control a loading or hold state

  // Function to add a product to the cart
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

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setHold(true); // Set hold state to true (could be used for showing a loader)
    setTimeout(() => {
      setHold(false); // Reset hold state after 1 second
    }, 1000);

    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId) {
            if (item.quantity > 1) {
              // Decrement the quantity if it's more than 1
              return { ...item, quantity: item.quantity - 1 };
            } else {
              // Remove the item from the cart
              return null;
            }
          }

          return item; // Return the item unchanged if it's not the target product
        })
        .filter((item) => item !== null); // Filter out null values (removed items)
    });
  };

  // Function to delete a product entirely from the cart
  const deleteFromCart = (productId) => {
    setHold(true); // Set hold state to true
    setTimeout(() => {
      // Remove the product from the cart
      setCart((prevCart) =>
        prevCart.filter((item) => item.product.id !== productId)
      );
      setHold(false); // Reset hold state
    }, 1000);
  };

  // Function to clear all items from the cart
  const deleteAllFormCart = () => {
    setCart([]); // Clear the cart by setting it to an empty array
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        deleteFromCart,
        deleteAllFormCart,
        hold,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
