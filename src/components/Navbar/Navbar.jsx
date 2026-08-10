import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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

        {/* Navigation */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="/#about" onClick={closeMenu}>ABOUT US</a>
          <a href="/#mission" onClick={closeMenu}>MISSION</a>
          <a href="/#products" onClick={closeMenu}>PRODUCTS</a>
          <a href="#" onClick={(e) => { e.preventDefault(); closeMenu(); }}>TEAM</a>
          <a href="/#careers" onClick={closeMenu}>CAREERS</a>
          <a href="#" onClick={(e) => { e.preventDefault(); closeMenu(); }}>INVESTORS</a>
          <a href="/#contact" onClick={closeMenu}>CONTACT US</a>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;