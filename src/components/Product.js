import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext); // Get the addToCart function from the CartContext

  const [isAnimating, setIsAnimating] = useState(false); // State to control the animation effect when adding a product to the cart

  // Function to handle adding a product to the cart
  const handleAddToCart = () => {
    setIsAnimating(true); // Start the animation

    setTimeout(() => {
      addToCart(product); // Add the product to the cart after the animation duration
      setIsAnimating(false); // Stop the animation after adding to the cart
    }, 1000); // 1 second for the animation duration
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-48 object-contain mb-2"
        />
        <h2 className="text-lg font-semibold truncate ">{product.title}</h2>
      </Link>
      <p className="text-sm font-semibold text-gray-600 mb-2">
        Category: {product.category}
      </p>
      <div className="flex space-x-2 overflow-x-auto">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product  ${index + 1}`}
            className="w-16 h-16 object-contain border rounded"
          />
        ))}
      </div>
      <p className="text-700 text-[22px] mb-2 mt-2">
        ${(product.price - product.price * 0.1).toFixed(2)}
        <span className="text-sm text-[18px] text-[#ed1111] ml-2 line-through ">
          ${product.price}
        </span>
        <span className="text-sm text-[18px] text-[#47ed52] ml-2">(10%)</span>
      </p>
      {/* <p className="text-sm text-gray-500 mb-2">{product.description}</p> */}

      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 h-[40px] w-[133px] rounded hover:bg-blue-600 "
        disabled={isAnimating}
      >
        <span className="flex items-center gap-1">
          <svg
            className={isAnimating ? "animate-icon" : ""}
            fill="#ffffff"
            width="15px"
            height="15px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8,3V7H21l-2,7H8v2H18a1,1,0,0,1,0,2H7a1,1,0,0,1-1-1V4H4A1,1,0,0,1,4,2H7A1,1,0,0,1,8,3ZM6,20.5A1.5,1.5,0,1,0,7.5,19,1.5,1.5,0,0,0,6,20.5Zm9,0A1.5,1.5,0,1,0,16.5,19,1.5,1.5,0,0,0,15,20.5Z" />
          </svg>
          {!isAnimating ? "Add to Cart" : ""}
        </span>
      </button>
    </div>
  );
};

export default Product;
