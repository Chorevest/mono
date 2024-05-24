import { useState } from "react";
import "./Navbar.css"; // Import a CSS file for styling
import logo from "../assets/images/chorevest_logo.png"; // Adjust the path to your logo image

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <ul>
          {/* <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact Us</a></li> */}
          <li>
            <button className="login-button">Get App</button>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
