'use client';

import { useEffect, useState } from 'react';
import styles from './PaymentPage.module.css';
import { useRouter } from 'next/navigation';
import { useAuth } from '../lib/AuthContext'; // Importamos useAuth

type Purchase = {
  tickets: number;
  locality: 'general' | 'vip';
};

export default function PaymentPage() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [purchase, setPurchase] = useState<Purchase | null>(null);
  const { isAuthenticated } = useAuth(); // Usamos useAuth

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    } else {
      const savedPurchase = sessionStorage.getItem('purchase');
      if (savedPurchase) {
        setPurchase(JSON.parse(savedPurchase));
      }
      setLoading(false);
    }
  }, [isAuthenticated, router]);

  if (loading) {
    return null;
  }

  const handlePayment = () => {
    router.push('/confirmation');
  };

  return (
    <main className={styles.paymentContainer}>
      <h1>Pasarela de Pago</h1>

      {purchase ? (
        <div className={styles.summaryBox}>
          <p><strong>Localidad:</strong> {purchase.locality}</p>
          <p><strong>Boletas:</strong> {purchase.tickets}</p>
          <p><strong>Total a pagar:</strong> ${purchase.tickets * (purchase.locality === 'vip' ? 120000 : 50000)} COP</p>
        </div>
      ) : (
        <p>No hay datos de compra.</p>
      )}

      <button className={styles.payButton} onClick={handlePayment}>
        Pagar
      </button>
    </main>
  );
}