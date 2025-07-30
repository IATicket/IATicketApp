'use client';
import { Search, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import styles from './EventNavbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close menu on navigation
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-container']}>
        {/* Left: Menu button (mobile only) */}
        <button
          className={styles['menu-toggle']}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center: Nav Links */}
        <ul className={`${styles['navbar-links']} ${menuOpen ? styles.open : ''}`}>
          <li>
            <a href="#eventos" onClick={(e) => handleSmoothScroll(e, 'eventos')}>
              Próximos Eventos
            </a>
          </li>
          <li>
            <a href="#news" onClick={(e) => handleSmoothScroll(e, 'news')}>
              Noticias
            </a>
          </li>
          <li>
            <a href="#cities" onClick={(e) => handleSmoothScroll(e, 'cities')}>
              Ciudades
            </a>
          </li>
          <li>
            <a href="#quienes-somos" onClick={(e) => handleSmoothScroll(e, 'quienes-somos')}>
              Quiénes Somos
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={(e) => handleSmoothScroll(e, 'contacto')}>
              Contacto
            </a>
          </li>
        </ul>

        {/* Right: Icons */}
        <div className={styles['navbar-icons']}>
          <button className={styles['navbar-icon-button']}>
            <Search size={20} />
          </button>
          <button className={styles['navbar-icon-button']}>
            <User size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
