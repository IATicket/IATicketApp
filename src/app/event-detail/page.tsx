'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './EventDetail.module.css';

export default function EventDetailPage() {
  const router = useRouter();

  const [tickets, setTickets] = useState(1);
  const [locality, setLocality] = useState('general');

  function handleBuy() {
    // Guardamos los datos en sessionStorage para "pasarlos" a la siguiente página
    sessionStorage.setItem('purchase', JSON.stringify({ tickets, locality }));
    router.push('/payment');
  }

  return (
    <main className={styles.container}>
      <h1>Detalle del Evento</h1>
      <div className={styles.field}>
        <label>Cantidad de boletas:</label>
        <input
          type="number"
          min={1}
          max={10}
          value={tickets}
          onChange={e => setTickets(Number(e.target.value))}
        />
      </div>
      <div className={styles.field}>
        <label>Localidad:</label>
        <select value={locality} onChange={e => setLocality(e.target.value)}>
          <option value="general">General</option>
          <option value="vip">VIP</option>
        </select>
      </div>
      <button className={styles.buyButton} onClick={handleBuy}>
        Comprar
      </button>
    </main>
  );
}
