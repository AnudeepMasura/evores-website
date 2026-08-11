import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleHashNav = (e, hash) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === "/") {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <span>EvoRES</span> Technology LLP
        </Link>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="/#about" onClick={(e) => handleHashNav(e, "about")}>
            ABOUT US
          </a>
          <a href="/#mission" onClick={(e) => handleHashNav(e, "mission")}>
            MISSION
          </a>
          <a href="/#products" onClick={(e) => handleHashNav(e, "products")}>
            PRODUCTS
          </a>
          <Link
            to="/team"
            className={location.pathname === "/team" ? "active" : ""}
            onClick={closeMenu}
          >
            TEAM
          </Link>
          <Link
            to="/careers"
            className={location.pathname === "/careers" ? "active" : ""}
            onClick={closeMenu}
          >
            CAREERS
          </Link>
          <Link
            to="/investors"
            className={location.pathname === "/investors" ? "active" : ""}
            onClick={closeMenu}
          >
            INVESTORS
          </Link>
          <a href="/#contact" onClick={(e) => handleHashNav(e, "contact")}>
            CONTACT US
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;