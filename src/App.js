import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import CheckoutPage from "./pages/CheckoutPage";

import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";

function App() {
  return (
    <Router>
      {/* Wrapping the entire app with ProductsProvider to make product data available throughout */}
      <ProductsProvider>
        {/* Wrapping the entire app with CartProvider to manage cart state throughout */}
        <CartProvider>
          {/* Flexbox container to ensure the footer stays at the bottom and the content fills the remaining space */}
          <div className="flex flex-col min-h-screen">
            {/* Header component at the top */}
            <Header />
            {/* Main content area that grows to fill available space */}

            <main className="flex-grow bg-gray-100">
              {/* Defining the routes for different pages */}
              <Routes>
                <Route path="/" element={<Products />} />{" "}
                {/* Route for the main products listing page */}
                <Route path="/product/:id" element={<ProductPage />} />{" "}
                {/* Route for individual product details page */}
                <Route path="/cart" element={<CartPage />} />{" "}
                {/* Route for the shopping cart page */}
                <Route path="/about" element={<AboutPage />} />{" "}
                {/* Route for the about page */}
                <Route path="/checkout" element={<CheckoutPage />} />{" "}
                {/* Route for the checkout process page */}
              </Routes>
            </main>
            {/* Footer component at the bottom */}
            <Footer />
          </div>
        </CartProvider>
      </ProductsProvider>
    </Router>
  );
}

export default App;
