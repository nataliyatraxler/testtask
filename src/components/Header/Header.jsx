import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="black-text">Travel</span>
        <span className="gray-text">Trucks</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/catalog" className="nav-link">Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
