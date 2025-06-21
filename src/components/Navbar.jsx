import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar" style={{ backgroundColor: 'var(--primary-blue)' }}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <img src="/Logo.jpg" alt="Anchored in Christ Logo" />
        </a>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#mission" className="nav-link">Mission</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'change' : ''}`} />
          <div className={`bar ${isOpen ? 'change' : ''}`} />
          <div className={`bar ${isOpen ? 'change' : ''}`} />
        </div>
      </div>
    </nav>
  );
}
