// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Garde ton CSS

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      {/* Logo */}
      <div className="logo-container">
        <Link to="/" onClick={closeMobileMenu}>
          <img src="/images/logo.jpeg" alt="Avenue Prestige" className="logo" />
        </Link>
      </div>

      {/* Menu */}
      <nav className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link" onClick={closeMobileMenu}>
          Accueil
        </Link>
        <Link to="/homme" className="nav-link" onClick={closeMobileMenu}>
          Homme
        </Link>
        <Link to="/femme" className="nav-link" onClick={closeMobileMenu}>
          Femme
        </Link>
        <a
          href="https://wa.me/33646288535"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMobileMenu}
        >
          Contact
        </a>
      </nav>

      {/* Icône menu mobile */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};
