import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header class="header">
      <div class="container">
        <Link to="/" class="header__logo" onClick={closeMenu}>
          <img src="/images/Logo_Black.png" alt="Gallery Place Logo" />
        </Link>
        <nav className={`header__nav ${isMenuOpen ? 'is-active' : ''}`}>
          <ul class="header__nav-list">
            <li><Link to="/" class="header__nav-link" onClick={closeMenu}>Inicio</Link></li>
            <li><Link to="/catalogo" class="header__nav-link" onClick={closeMenu}>Catalogo</Link></li>
            <li><Link to="#" class="header__nav-link" onClick={closeMenu}>Carrito 🛒</Link></li>
          </ul>
          <Link to="/login" class="btn btn--dark" onClick={closeMenu}>Iniciar sesión</Link>
        </nav>
        <button 
          class="header__menu-toggle" 
          aria-label="Open navigation menu"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
