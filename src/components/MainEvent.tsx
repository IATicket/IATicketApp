'use client';

import styles from './MainEvent.module.css';
import { useRouter } from 'next/navigation';

export default function MainEvent() {
  const router = useRouter();

  // Datos simulados de la API. En una aplicación real, esto vendría
  // de una llamada a una API o se pasaría como prop.
  const mainEvent = {
    title: 'Desfile de taxis clásicos en autodromo de Tocancipá',
    imageUrl: '/images/taxis.jpeg',
    id: 'main-event-id', // ID del evento para la navegación
  };

  const handleViewEvent = () => {
    // Lógica de navegación usando el ID del evento
    router.push(`/event/${mainEvent.id}`); 
  };

  return (
    <section className={styles.mainEventContainer}>
      <div 
        className={styles.imageWrapper}
        // Aplicamos la imagen de fondo dinámicamente aquí
        style={{ backgroundImage: `url(${mainEvent.imageUrl})` }}
      >
        <div className={styles.imageOverlay}></div>
        
        <div className={styles.eventContent}>
          <h2 className={styles.eventTitle}>{mainEvent.title}</h2>
          <button 
            onClick={handleViewEvent} 
            className={styles.viewEventButton}
          >
            Ver evento
          </button>
        </div>
      </div>
    </section>
  );
}
