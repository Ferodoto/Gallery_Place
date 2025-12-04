import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer__main">
          <div class="footer__info">
            <p class="footer__info-text">
              Gallery Place<br />
              Calle 88 Trans. 94 L, Bogotá, Colombia<br />
              +57 314 4279384
            </p>
            <div class="footer__socials">
              <a href="https://facebook.com/GalleryPlace" class="footer__social-link" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://linkedin.com/GalleryPlace" class="footer__social-link" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href="https://youtube.com/@GalleryPlace" class="footer__social-link" aria-label="YouTube">
                <Youtube />
              </a>
              <a href="https://instagram.com/GalleryPlace" class="footer__social-link" aria-label="Instagram">
                <Instagram />
              </a>
            </div>
          </div>
          <div class="footer__links">
            <div class="footer__links-column">
              <h4 class="footer__links-title">Cuenta</h4>
              <ul class="footer__links-list">
                <li><Link to="/registro">Registro</Link></li>
                <li><Link to="/login">Inicio de Sesion</Link></li>
                <li><Link to="#">Pedidos</Link></li>
              </ul>
            </div>
            <div class="footer__links-column">
              <h4 class="footer__links-title">Catalogo</h4>
              <ul class="footer__links-list">
                <li><Link to="#">Pinturas</Link></li>
                <li><Link to="#">Marcos</Link></li>
              </ul>
            </div>
            <div class="footer__links-column">
              <h4 class="footer__links-title">Nosotros</h4>
              <ul class="footer__links-list">
                <li><Link to="#">Contacto</Link></li>
                <li><Link to="/nosotros">Sobre nosotros</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
