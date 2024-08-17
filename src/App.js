import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import AboutPage from "./components/AboutPage";
import CheckoutPage from "./components/CheckoutPage";

import { ProductsProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <ProductsProvider>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-gray-100">
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
        </CartProvider>
      </ProductsProvider>
    </Router>
  );
}

export default App;
