import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";

const ProductPage = () => {
  const { id } = useParams();
  const products = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));
  

  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleAddToCart = () => {
    setIsAnimating(true);

    setTimeout(() => {
      addToCart(product); // Add product to cart after animation
      setIsAnimating(false);
    }, 1000); // 1 second for the animation duration
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4 mt-28 mb-28">
      <Link to="/" className=" mb-4">
        <svg
          className="cursor-pointer"
          fill="#000000"
          width="20px"
          height="20px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z" />
        </svg>
      </Link>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/2 max-h-[65vh]">
          <img
            src={product.images[selectedImageIndex]}
            alt={product.title}
            className="w-full rounded object-contain mb-4 h-[65vh]"
          />
        </div>
        <div className="sm:w-1/2 sm:pl-8">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-base mb-4">{product.description}</p>
          <p className="text-700 text-[30px] mb-2 mt-2 font-semibold">
            ${(product.price - product.price * 0.1).toFixed(2)}
            <span className="text-sm font-medium text-[20px] text-[#ed1111] ml-2 line-through ">
              ${product.price}
            </span>
            <span className="text-sm font-medium text-[20px] text-[#47ed52] ml-2">
              (10%)
            </span>
          </p>
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
          <p className="text-base font-semibold my-4">
            Category: {product.category}
          </p>
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index + 1}`}
                className={`w-24 h-24 object-contain border rounded cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl ${
                  selectedImageIndex === index
                    ? "border-[#1f2937] border-[3px]"
                    : ""
                }`}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
