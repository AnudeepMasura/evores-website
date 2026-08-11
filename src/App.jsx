import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Team from "./pages/Team/Team";
import CareersPage from "./pages/Careers/CareersPage";
import Investors from "./pages/Investors/Investors";
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
      {/* Global Navbar */}
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Dedicated Ecosystem & Product detail routes */}
        <Route path="/products/asat" element={<ProductDetails />} />
        <Route path="/products/happi" element={<ProductDetails />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/products/:slug/:subslug" element={<ProductDetails />} />

        {/* Dedicated Company Pages */}
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/investors" element={<Investors />} />
      </Routes>
    </>
  );
}

export default App;