import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar" style={{ backgroundColor: 'var(--primary-blue)' }}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={`${import.meta.env.BASE_URL}Logo.jpg`} alt="Anchored in Christ Logo" />
        </Link>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/#mission" className="nav-link">Mission</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/#contact" className="nav-link">Contact</Link>
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
