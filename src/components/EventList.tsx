'use client';

import { useEffect, useState, useRef } from 'react'; 
import EventCard from './EventCard';
import styles from './EventList.module.css';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
}

export default function EventList() {
  const [events, setEvents] = useState<Event[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadEvents() {
      const res = await fetch('/api/events');
      const data = await res.json();
      setEvents(data);
    }

    loadEvents();
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const scrollAmount = 250;
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, [events.length]);

  return (
    <section id="eventos" className={styles.eventSection}>
      <div className={styles.eventListContainer}>
        <h2 className={styles.eventHeading}>
          Próximos Eventos
        </h2>
        <div className={styles.eventsHorizontalScroll} ref={scrollContainerRef}>
          {events.map((event) => (
            <div key={event.id} className={styles.eventCardWrapper}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
