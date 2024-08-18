import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CheckoutPage = () => {
  const { deleteAllFormCart } = useContext(CartContext); // Accessing the function to clear the cart after the order is placed

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your purchase. We appreciate your business!
        </p>
        <Link
          to="/"
          onClick={() => deleteAllFormCart()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
