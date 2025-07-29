'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './EventDetail.module.css';
import EventNavbar from '@/components/EventNavbar';
// Ajusta la ruta según tu estructura

export default function EventDetailPage() {
  const router = useRouter();

  const [tickets, setTickets] = useState(1);
  const [locality, setLocality] = useState('general');

  const ticketInfo = {
    general: { remaining: 150, price: 50000 },
    vip: { remaining: 50, price: 120000 },
  };

  function handleBuy() {
    sessionStorage.setItem('purchase', JSON.stringify({ tickets, locality }));
    router.push('/payment');
  }

  return (
    <>
      {/* Navbar fijo arriba */}
      <EventNavbar />

      <main className={styles.container} style={{ marginTop: '90px' }}> 
        <h1 className={styles.title}>Concierto de Rock Estelar</h1>

        <div className={styles.bannerWrapper}>
          <img
            className={styles.banner}
            src="/images/concierto.png"
            alt="Concierto"
          />

          <section className={styles.buySection}>
            <h2>Comprar entradas</h2>
            <div className={styles.compactFields}>
              <div className={styles.compactField}>
                <label>Boletas:</label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={tickets}
                  onChange={e => setTickets(Number(e.target.value))}
                />
              </div>
              <div className={styles.compactField}>
                <label>Localidad:</label>
                <select
                  value={locality}
                  onChange={e => setLocality(e.target.value)}
                >
                  <option value="general">General</option>
                  <option value="vip">VIP</option>
                </select>
              </div>
            </div>
            <button className={styles.buyButton} onClick={handleBuy}>
              Comprar
            </button>
          </section>
        </div>

        <p className={styles.description}>
          Vive una noche inolvidable con las mejores bandas en vivo. Luces,
          sonido y energía en el mejor escenario de Bogotá.
        </p>
        <p className={styles.location}>📍 Coliseo El Campín - Bogotá, Colombia</p>

        <section className={styles.availabilitySection}>
          <h2>Entradas disponibles</h2>
          <div className={styles.locality}>
            <img src="/images/general.svg" alt="General Icon" />
            <div>
              <p><strong>General</strong></p>
              <p>Disponibles: {ticketInfo.general.remaining}</p>
              <p>Precio: ${ticketInfo.general.price} COP</p>
            </div>
          </div>
          <div className={styles.locality}>
            <img src="/images/vip.svg" alt="VIP Icon" />
            <div>
              <p><strong>VIP</strong></p>
              <p>Disponibles: {ticketInfo.vip.remaining}</p>
              <p>Precio: ${ticketInfo.vip.price} COP</p>
            </div>
          </div>
        </section>

        <section className={styles.seatmapSection}>
          <h2>Mapa de asientos</h2>
          <img
            src="/images/seatmap.png"
            alt="Seat Map"
            className={styles.seatmap}
          />
        </section>

        <section className={styles.mapSection}>
          <h2>¿Cómo llegar?</h2>
          <div className={styles.mapEmbed}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.897554757088!2d-74.080756!3d4.646219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bf8d3a3e7a9%3A0xd5d4578712d00db8!2sEstadio%20El%20Camp%C3%ADn!5e0!3m2!1ses-419!2sco!4v1681234567890"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
}
