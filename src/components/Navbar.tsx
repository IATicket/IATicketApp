'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, User, Menu, X } from 'lucide-react';
import styles from './EventNavbar.module.css';
import { useSession, signOut, signIn } from 'next-auth/react';

export default function Navbar() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
    setShowDropdown(false);
  };

  const handleProfile = () => {
    setShowDropdown(false);
    router.push('/profile');
  };

  const handleLogin = () => {
    signIn('keycloak', { callbackUrl: '/' });
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  if (status === 'loading') {
    return (
      <nav className={styles.navbar}>
        <div className={styles['navbar-container']}>
          <p>Cargando sesión...</p>
        </div>
      </nav>
    );
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-container']}>
        {/* Menu hamburguesa para móvil */}
        <button
          className={styles['menu-toggle']}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links de navegación */}
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

        {/* Íconos de la derecha */}
        <div className={styles['navbar-icons']}>
          <button className={styles['navbar-icon-button']} aria-label="Buscar">
            <Search size={20} />
          </button>

          {session ? (
            <>
              {/* Texto Bienvenida separado */}
              <span className={styles['navbar-welcome']}>
                Bienvenido: <strong>{session.user?.name || session.user?.email || 'Usuario'}</strong>
              </span>

              {/* Botón usuario con dropdown */}
              <div className={styles['user-dropdown']} ref={dropdownRef}>
                <button
                  className={styles['navbar-icon-button']}
                  aria-label="Cuenta"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <User size={20} />
                </button>

                {showDropdown && (
                  <div className={styles['dropdown-menu']}>
                    <button onClick={handleProfile}>Perfil</button>
                    <button onClick={handleLogout}>Cerrar sesión</button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <button
              className={styles['navbar-icon-button']}
              aria-label="Cuenta"
              onClick={handleLogin}
            >
              <User size={20} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}