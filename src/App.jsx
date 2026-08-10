import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Navbar from "./components/Navbar/Navbar";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      {/* Navbar visible on every page */}
      <Navbar />

      <Routes>

        {/* Home page */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Product details page */}
        <Route
          path="/products/:slug"
          element={<ProductDetails />}
        />

        {/* Sub-product details fallback route */}
        <Route
          path="/products/:slug/:subslug"
          element={<ProductDetails />}
        />

      </Routes>
    </>
  );
}

export default App;