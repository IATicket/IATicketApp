import { User, ShoppingCart } from 'lucide-react';
import styles from './EventNavbar.module.css';

export default function EventNavbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-container']}>
        <div className={styles['navbar-logo']}>
          <a href="/" className={styles['navbar-logo-link']}>
            IA Ticket Colombia
          </a>
        </div>
        <div className={styles['navbar-icons']}>
          <button className={styles['navbar-icon-button']} aria-label="Cuenta">
            <User size={20} />
          </button>
          <button className={styles['navbar-icon-button']} aria-label="Carrito">
            <ShoppingCart size={20} />
            <span className={styles['cart-count']}>1</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
