import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { cart } = useContext(CartContext); // Access the cart from the CartContext
  const [totalItem, setTotalItem] = useState(0); // State to keep track of the total number of items in the cart

  // Effect to calculate the total number of items in the cart whenever the cart changes
  useEffect(() => {
    const total = cart.reduce(
      (total, item) => total + item.quantity, // Summing up the quantity of each item in the cart
      0
    );
    setTotalItem(total); // Updating the totalItem state with the calculated total
  }, [cart]); // Dependency array: this effect runs every time the cart changes

  return (
    <header className="bg-gray-800 text-white p-4 w-[100%] fixed z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold cursor-pointer">
          My Shop
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:underline">
                Cart ({totalItem})
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
