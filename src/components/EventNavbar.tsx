'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { User, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import styles from './EventNavbar.module.css';
import { getUser, mockLogout } from '@/app/lib/auth';

export default function EventNavbar() {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setUsername(getUser());
  }, []);

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    mockLogout();
    router.push('/');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-container']}>
        <div className={styles['navbar-logo']}>
        <Link href="/" className={styles['navbar-logo-link']}>
          IA Ticket Colombia
        </Link>
        </div>

        <div className={styles['navbar-icons']}>
          {/* Bienvenida */}
          {username && (
            <span className={styles['navbar-welcome']}>
              Bienvenido: <strong>{username}</strong>
            </span>
          )}

          {/* Icono Usuario */}
          <div className={styles['navbar-user']} ref={menuRef}>
            <button
              className={styles['navbar-icon-button']}
              aria-label="Cuenta"
              onClick={() => setMenuOpen(prev => !prev)}
            >
              <User size={20} />
            </button>
            {menuOpen && (
              <div className={styles['user-dropdown']}>
                <button
                  className={styles['user-dropdown-button']}
                  onClick={() => {
                    setMenuOpen(false);
                    router.push('/profile');
                  }}
                >
                  Perfil
                </button>
                <button
                  className={styles['user-dropdown-button']}
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>

          {/* Icono Carrito */}
          <button className={styles['navbar-icon-button']} aria-label="Carrito">
            <ShoppingCart size={20} />
            <span className={styles['cart-count']}>1</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
