'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Confirmation.module.css';
import EventNavbar from '@/components/EventNavbar';

export default function ConfirmationPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <EventNavbar />
      <main className={styles.container}>
        {loading ? (
          <div className={styles.spinnerContainer}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Procesando transacción...</p>
          </div>
        ) : (
          <div className={styles.card}>
            <h1 className={styles.title}>✅ Transacción Exitosa</h1>
            <p className={styles.message}>
              Gracias por tu compra. Hemos enviado los detalles a <strong>example@iaticket.com</strong>.
            </p>

            <div className={styles.qrContainer}>
              <Image
                src="/images/qr.png"
                alt="QR Code"
                width={180}
                height={180}
              />
            </div>

            <p className={styles.note}>
              Presenta este código en la entrada del evento.
            </p>
          </div>
        )}
      </main>
    </>
  );
}
