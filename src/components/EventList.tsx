'use client';

import { useEffect, useState, useRef } from 'react'; // Import useRef
import EventCard from './EventCard';

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
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Create a ref for the scroll container

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
        const scrollAmount = 250; // Amount to scroll each time (adjust as needed)

        // If at the end, jump back to the beginning
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Otherwise, scroll forward
          scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3000); // Scroll every 3 seconds (adjust interval as needed)

    // Clear the interval when the component unmounts
    return () => clearInterval(scrollInterval);
  }, [events.length]); // Re-run effect if events change (e.g., loaded from API)

  return (
    <>
      {/* Standard CSS for the EventList */}
      <style jsx>{`
        .event-section {
          background-color: #0a0a0a; /* bg-[#0a0a0a] */
          padding-top: 5rem; /* py-20 */
          padding-bottom: 5rem; /* py-20 */
          padding-left: 3rem; /* Increased from 1.5rem (px-6 to px-12) */
          padding-right: 3rem; /* Increased from 1.5rem (px-6 to px-12) */
        }

        .event-list-container {
          max-width: 70rem; /* Increased from 50rem to 70rem (approx 1120px) */
          margin-left: auto; /* mx-auto */
          margin-right: auto; /* mx-auto */
        }

        .event-heading {
          font-size: 2.25rem; /* text-4xl */
          font-weight: 700; /* font-bold */
          text-align: center; /* text-center */
          color: white; /* text-blue-400 */
          margin-bottom: 3rem; /* mb-12 */
        }

        .events-horizontal-scroll {
          display: flex; /* flex */
          flex-direction: row; /* flex-row */
          overflow-x: auto; /* overflow-x-auto */
          gap: 2rem; /* space-x-8 (converted to gap) */
          padding-bottom: 1rem; /* pb-4 */
          /* Hide scrollbar for a cleaner look, but still allow scrolling */
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        .events-horizontal-scroll::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        /* Styles for individual EventCard within the horizontal list */
        /* This ensures cards don't shrink and maintain a consistent width */
        .events-horizontal-scroll > :global(.event-card-wrapper) {
          flex-shrink: 0; /* Prevents cards from shrinking */
          width: 24rem; /* Increased width from 20rem to 24rem */
        }

        /* Responsive adjustments for smaller screens if needed */
        @media (max-width: 768px) {
          .events-horizontal-scroll > :global(.event-card-wrapper) {
            width: 20rem; /* Increased width from 18rem to 20rem on mobile */
          }
        }
      `}</style>

      <section id="eventos" className="event-section">
        <div className="event-list-container">
          <h2 className="event-heading">
            Próximos Eventos
          </h2>
          <div className="events-horizontal-scroll" ref={scrollContainerRef}> {/* Attach the ref here */}
            {events.map((event) => (
              // Add a wrapper class to EventCard for styling its container in the flex layout
              <div key={event.id} className="event-card-wrapper">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
