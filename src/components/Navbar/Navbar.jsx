import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">

        <div className="logo">
          <span>EvoRES</span> Technology
        </div>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#mission">Mission</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;