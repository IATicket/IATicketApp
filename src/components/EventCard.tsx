// src/components/EventCard.tsx
'use client';

import { useRouter } from 'next/navigation';
import styles from './EventCard.module.css'; // Importa los estilos del módulo CSS
import { ShoppingCart } from 'lucide-react'; // Importa el icono de carrito de compra

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
}

export default function EventCard({ event }: { event: Event }) {
  const router = useRouter();
  function handleBuyTickets() {
    router.push('/event-detail');
  }

  return (
    <div className={styles.card}>
      <img
        src={event.imageUrl}
        alt={event.title}
        className={styles.image}
        onError={(e) => {
          e.currentTarget.src = 'https://placehold.co/200x200/282c34/white?text=No+Image';
        }}
      />
      <div className={styles.details}>
        <h2 className={styles.title}>{event.title}</h2>
        <p className={styles.meta}><strong>📅 Fecha:</strong> {event.date}</p>
        <p className={styles.meta}><strong>📍 Lugar:</strong> {event.location}</p>
        <p className={styles.description}>{event.description}</p> {/* Added styles.description class */}
        
        <button className={styles.buyButton} onClick={handleBuyTickets}>
          <ShoppingCart size={18} />
          <span>Comprar Tickets</span>
        </button>
      </div>
    </div>
  );
}
