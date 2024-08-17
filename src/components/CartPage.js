import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, addToCart, hold, deleteFromCart } = useContext(CartContext);
  const [isAnimating, setIsAnimating] = useState(false);
  const [total, setTotal] = useState(0);
  const products = useContext(ProductsContext);

  console.log(hold, "0️⃣0️⃣0️⃣0️⃣0️⃣0️⃣0️⃣0️⃣0️⃣0️⃣0️⃣0️⃣");

  const handleAddToCart = (productForAdding) => {
    setIsAnimating(true);

    setTimeout(() => {
      const product = products.find((p) => p.id === productForAdding);

      addToCart(product); // Add product to cart after animation
      setIsAnimating(false);
    }, 1000); // 1 second for the animation duration
  };

  useEffect(() => {
    const totalPrice = cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  }, [cart]);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-4 pt-28 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-4">
          <span className="text-2xl text-red-500 mr-2">🛒</span> Your Cart
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your cart is empty.
          <span className=" text-blue-600 cursor-pointer hover:underline">
            <Link to="/"> Go to shop</Link>
          </span>
        </p>
        <svg
          width="500px"
          height="500px"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m129.27 142.19-85.32-46.82a2.31 2.31 0 0 0 -3.43 2c-.41 18-2 93.55.09 96 3.31 3.88 85.08 51.16 88.67 51.16s84.53-48.76 88.67-51.16c3.66-2.11.86-78.2.15-96.08a2.32 2.32 0 0 0 -3.43-1.93z"
            fill="#191919"
          />
          <path
            d="m129.27 252.5c-2.47 0-4.81 0-48.44-25.2-42.92-24.79-45.39-27.68-46.32-28.77-2.38-2.8-3.28-3.85-2.89-47.45.19-21.47.69-44.87.9-53.93a10.31 10.31 0 0 1 15.28-8.8l81.48 44.71 81.54-44.74a10.32 10.32 0 0 1 15.27 8.68c.36 9.09 1.23 32.57 1.57 54.15.19 12.24.17 22 0 29.11-.38 12.16-1 17.37-5.66 20.07-.67.39-3.4 2-7.5 4.47-80.02 47.7-81.87 47.7-85.23 47.7zm-81.27-63.59c11.93 8.12 68.16 40.61 81.26 47 8-4 33.89-19.1 77-44.86l4.92-2.94c1-9.16.77-40.76-.71-81.3l-77.35 42.39a8 8 0 0 1 -7.7 0l-77.11-42.31c-.88 41.74-1.01 73-.31 82.02z"
            fill="#191919"
          />
          <path
            d="m40.6 91.49 88.67-47.29 88.67 47.29-88.67 48.65z"
            fill="#ffffff"
          />
          <path d="m130.52 41.08v95.94l-88.67-48.66z" fill="#e6e6e6" />
          <path
            d="m129.27 142.19-88.67-48.66s-2.38 97 0 99.81c3.31 3.88 85.08 51.16 88.67 51.16s84.53-48.76 88.67-51.16 0-99.81 0-99.81z"
            fill="#e83a2a"
          />
          <path
            d="m129.27 142.19c-1 2.06-2 102.81 0 102.31 6.35-1.56 85.32-46.93 89-51.75 1.58-2.09 2.39-97.93-.31-99.22s-87.66 46.6-88.69 48.66z"
            fill="#d32920"
          />
          <path
            d="m217.42 88c4.59-2.53 29.46-16.33 28.15-17.09s-87.67-45.94-89.85-46.6c-2-.61-24.48 14.1-28.13 16.5-3.76-2.61-30.82-21.24-33.9-19.52-3.31 1.8-83.39 46.48-86.26 48.14-2.64 1.57 26.79 16.36 31.34 18.64-4.25 2.15-29.69 14.59-28.12 15.49s83.82 49.44 88.22 49.92c2.83.31 25.8-14.24 28.82-16.24 3.38 2.24 31 20.48 33.76 18.92l87.13-50c1.61-.88-25.92-15.44-31.16-18.16zm-89.73 48.86-87.75-48.81 87.59-46.72 88.31 46.58z"
            fill="#191919"
          />
          <path
            d="m161.14 164.31c-4 0-9.47-2.68-20.47-9.33-4.79-2.9-9.64-6-13-8.2-2.87 1.8-6.64 4.14-10.33 6.33-13.41 7.89-16.34 8.65-19.34 8.33-2.56-.28-5.74-.62-89.37-49.78l-2-1.17a8.12 8.12 0 0 1 -4.06-7.29c.17-5.52 4.61-7.87 14.34-13 1.38-.73 2.82-1.48 4.25-2.21l-3.58-1.99c-14.26-7.76-18.15-10.64-18.31-16.06a8.3 8.3 0 0 1 4.17-7.44c2.2-1.27 46.78-26.15 83.79-46.8l2.57-1.43c5.16-2.88 11-.32 24.84 8.34 4.81 3 9.61 6.2 13.06 8.54 24.9-16.2 26.79-15.62 30.37-14.52 3.42 1 90.8 46.91 91.51 47.33a8.18 8.18 0 0 1 4.04 7.04c-.05 5.43-3.52 7.44-16.41 14.93l-3.21 1.86 4.77 2.63c14.33 8 17.72 10.07 17.82 15.51a8.13 8.13 0 0 1 -4.07 7.2l-79.15 45.38-8 4.58a8.31 8.31 0 0 1 -4.23 1.22zm-18.25-26.76c7.55 4.74 14 8.49 17.37 10.08l5.21-3 67.9-38.93c-4.31-2.43-9.94-5.51-16.7-9.1zm-116.71-34.15c44.25 25.93 66.18 38.21 72.94 41.54 2.91-1.42 8.15-4.46 13.18-7.51l-73.1-40.63c-5.51 2.75-9.76 4.91-13.02 6.6zm30.49-15.2 71 39.48 71.33-39.58-71.48-37.7zm-34.45-17.88c4.58 2.57 10.55 5.74 17 9l73.28-39.08a184 184 0 0 0 -17.58-10.52c-40.63 22.67-61.84 34.52-72.71 40.6zm120.7-29.91 73.68 38.86c5-2.78 9.58-5.39 13.34-7.59-20.94-11-63.28-33-74.59-38.71-2.62 1.41-7.08 4.03-12.43 7.44z"
            fill="#191919"
          />
          <path
            d="m218.42 88c .08-1.3 28.46-16.33 27.15-17.09s-87.67-45.94-89.85-46.6c-2-.61-27.54 16.43-28.13 16.5s-30.83-21.28-33.9-19.56c-3.31 1.84-83.39 46.52-86.26 48.18-2.64 1.57 31.27 17.8 31.34 18.64s-29.69 14.59-28.13 15.49 83.83 49.44 88.23 49.92c2.83.31 27.92-16.24 28.82-16.24s31 20.48 33.76 18.92l87.13-50c1.61-.88-30.24-16.89-30.16-18.16zm-90.73 48.86c-1-.08-87.72-48.14-87.74-48.78s87-46.63 87.59-46.72 88.32 45.33 88.31 46.58-87.15 48.97-88.16 48.89z"
            fill="#ffffff"
          />
          <path
            d="m72.15 187.68-.44-35.68c0-2.23 2.05-2.7 3.71-.82l25.44 28.82c1.59 1.81 1.62 4.47.06 4.89l-25 6.81c-1.63.49-3.74-1.79-3.77-4.02z"
            fill="#ffffff"
          />
          <path
            d="m128.67 142.67c-.67 17.17-1 77.67.61 101.83"
            fill="#d32920"
          />
          <path
            d="m129.27 248.5a4 4 0 0 1 -4-3.73c-1.64-24.68-1.27-85.22-.61-102.25a4 4 0 1 1 8 .31c-.64 16.44-1 77.43.6 101.41a4 4 0 0 1 -3.73 4.26z"
            fill="#191919"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-28">
      <div className="flex flex-row items-center  mb-6">
        <Link to="/" className="">
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
        <div className="text-2xl font-bold ml-4">
          {cart.length} Products in Cart
        </div>
      </div>

      <div className="flex flex-col sm:flex-row md:flex-row ">
        <div className="w-[1000px] pr-16">
          <ul>
            {cart.map((item, index) => (
              <li
                key={index}
                className="border-b py-6 flex items-center justify-between space-y-4 "
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.title}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-lg"
                />
                <div className="flex-1 md:ml-10 ml-1 text-left">
                  <div className="flex flex-row justify-between items-center">
                    <h2 className="text-xl font-semibold mb-2">
                      {item.product.title}
                    </h2>
                    <svg
                      onClick={() => deleteFromCart(item.product.id)}
                    className="cursor-pointer"
                      fill="#1f2937"
                      width="27px"
                      height="27px"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z" />
                    </svg>
                  </div>

                  <p className="text-xl font-semibold text-gray-800">
                    ${(item.product.price * item.quantity * 0.9).toFixed(2)}
                    <span className="text-lg font-medium text-red-500 ml-2 line-through">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                    <span className="text-lg font-medium text-green-500 ml-2">
                      (10% OFF)
                    </span>
                  </p>
                  <p className="text-gray-700 mt-2 text-base font-semibold ">
                    Quantity: {item.quantity}
                  </p>

                  <div className="mt-2 flex flex-row gap-5">
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-500 hover:underline flex items-center justify-center gap-1"
                      disabled={hold}
                    >
                      <span>
                        <svg
                          fill="#1f2937"
                          width="22px"
                          height="22px"
                          viewBox="-1.7 0 20.4 20.4"
                          xmlns="http://www.w3.org/2000/svg"
                          class="cf-icon-svg"
                        >
                          <path d="M16.416 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.916 7.917zm-2.958.01a.792.792 0 0 0-.792-.792H4.32a.792.792 0 0 0 0 1.583h8.346a.792.792 0 0 0 .792-.791z" />
                        </svg>
                      </span>
                      Remove
                    </button>
                    <button
                      onClick={() => handleAddToCart(item.product.id)}
                      className="  font-semibold text-[18px] flex items-center justify-center"
                      disabled={isAnimating}
                    >
                      <span>
                        <svg
                          width="26px"
                          height="26px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Edit / Add_Plus">
                            <path
                              id="Vector"
                              d="M6 12H12M12 12H18M12 12V18M12 12V6"
                              stroke="#1f2937"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                        </svg>
                      </span>
                      Add
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className=" p-6 bg-[#fff1ec] w-full sm:w-[375px] h-fit rounded-lg mt-9 sm:mt-0">
          <div className="text-lg font-medium">
            PRICE DETAILS ({cart.length} Items)
          </div>
          <div className="flex justify-between my-2">
            <div className="font-semibold text-base">Total MRP</div>
            <div className="text-base font-semibold">${total.toFixed(2)}</div>
          </div>
          <div className="flex justify-between my-2">
            <div className="font-semibold text-base">Discount on MRP</div>
            <div className="text-green-500 font-semibold text-base">
              ${(total * 0.1).toFixed(2)}
            </div>
          </div>
          <div className="flex justify-between my-2">
            <div className="font-semibold text-base">Percentage discount</div>
            <div className="text-green-500 text-base font-semibold">
              10% OFF
            </div>
          </div>
          <div className="flex justify-between my-2">
            <div className="font-bold text-lg">Total Amount</div>
            <div className="font-bold text-lg">${(total * 0.9).toFixed(2)}</div>
          </div>
          <div className="mt-6 flex justify-center">
            <Link to="/checkout" className="bg-green-500 text-center text-white px-6 py-3 rounded-lg hover:bg-green-600 w-full">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
