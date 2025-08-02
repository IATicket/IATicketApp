'use client';

import React, { useEffect, useRef } from 'react'; // Importa useRef

// Interfaz para un elemento de noticia
interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
  imageUrl: string;
  link: string;
}

// Datos de noticias de ejemplo (puedes reemplazarlos con datos reales o de una API)
const fakeNewsData: NewsItem[] = [
  {
    id: 1,
    title: 'Festival de Rock "Sonidos del Verano" Anuncia Fechas',
    date: '25 de Julio, 2025',
    category: 'Conciertos',
    summary: 'El esperado festival de rock "Sonidos del Verano" ha revelado sus fechas y primeros artistas confirmados para su edición de este año, prometiendo una experiencia inolvidable.',
    imageUrl: 'https://placehold.co/400x250/333/white?text=Festival+Rock',
    link: '#',
  },
  {
    id: 2,
    title: 'Nueva Obra de Teatro "El Reflejo Perdido" en Cartelera',
    date: '20 de Julio, 2025',
    category: 'Teatro',
    summary: 'Una conmovedora historia sobre la identidad y el autodescubrimiento llega a los escenarios, recibiendo ovaciones de pie en sus primeras funciones. No te la pierdas.',
    imageUrl: 'https://placehold.co/400x250/555/white?text=Teatro+Drama',
    link: '#',
  },
  {
    id: 3,
    title: 'Concierto Benéfico "Voces por la Esperanza" Recauda Fondos',
    date: '18 de Julio, 2025',
    category: 'Eventos Especiales',
    summary: 'Artistas de renombre se unieron en un emotivo concierto para recaudar fondos destinados a causas sociales, superando todas las expectativas de asistencia.',
    imageUrl: 'https://placehold.co/400x250/777/white?text=Concierto+Benefico',
    link: '#',
  },
  {
    id: 4,
    title: 'Gira Mundial de "The Rhythms" Llega a Colombia',
    date: '15 de Julio, 2025',
    category: 'Conciertos',
    summary: 'La aclamada banda "The Rhythms" confirma su paso por varias ciudades colombianas como parte de su exitosa gira internacional. ¡Prepárate para bailar!',
    imageUrl: 'https://placehold.co/400x250/999/white?text=Gira+Musical',
    link: '#',
  },
  {
    id: 5,
    title: 'Exposición de Arte Moderno "Visiones del Futuro" Inaugurada',
    date: '10 de Julio, 2025',
    category: 'Arte',
    summary: 'Una fascinante colección de arte contemporáneo que explora las posibilidades del mañana, ya abierta al público con entrada gratuita por tiempo limitado.',
    imageUrl: 'https://placehold.co/400x250/AAA/white?text=Arte+Moderno',
    link: '#',
  },
  {
    id: 6,
    title: 'Festival Gastronómico Internacional en Bogotá',
    date: '05 de Julio, 2025',
    category: 'Eventos Gastronómicos',
    summary: 'Descubre sabores del mundo en el festival gastronómico que reúne a los mejores chefs y restaurantes internacionales en la capital colombiana.',
    imageUrl: 'https://placehold.co/400x250/BBB/white?text=Festival+Gastronomico',
    link: '#',
  },
  {
    id: 7,
    title: 'Conferencia de Innovación Tecnológica 2025',
    date: '01 de Julio, 2025',
    category: 'Tecnología',
    summary: 'Expertos y líderes de la industria se darán cita para discutir las últimas tendencias y avances en inteligencia artificial y desarrollo de software.',
    imageUrl: 'https://placehold.co/400x250/CCC/white?text=Conferencia+Tecnologia',
    link: '#',
  },
];

export default function NewsFeed() {
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Crea una referencia para el contenedor de scroll

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const scrollAmount = 350; // Cantidad a desplazar cada vez (ajusta según necesites)

        // Si llega al final, vuelve al principio
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Si no, desplaza hacia adelante
          scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 4000); // Desplaza cada 4 segundos (ajusta el intervalo según necesites)

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(scrollInterval);
  }, []); // El efecto se ejecuta una vez al montar

  return (
    <>
      <style jsx>{`
        .news-feed-section {
          background-color: #0a0a0a;
          padding: 4rem 1.5rem;
          color: white;
        }

        .news-feed-container {
          max-width: 75rem; /* Aumentado para ocupar más espacio */
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .news-feed-heading {
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          color: white;
          margin-bottom: 3rem;
        }

        .news-grid {
          display: flex; /* Cambiado de grid a flex */
          flex-direction: row; /* Para desplazamiento horizontal */
          overflow-x: auto; /* Para permitir el scroll horizontal */
          gap: 2rem; /* Espacio entre las tarjetas */
          padding-bottom: 1rem; /* Para que la barra de scroll sea visible */
          /* Ocultar scrollbar para una apariencia más limpia */
          -ms-overflow-style: none;  /* IE y Edge */
          scrollbar-width: none;  /* Firefox */
        }

        .news-grid::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        .news-card {
          background-color: #030B15;
          border: 1px solid #30363d;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          flex-shrink: 0; /* Evita que las tarjetas se encojan */
          width: 300px; /* Ancho fijo para las tarjetas, ajusta según necesites */
        }

        .news-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 15px rgba(31, 111, 235, 0.6);
        }

        .news-card-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-bottom: 1px solid #30363d;
        }

        .news-card-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .news-card-category {
          font-size: 0.85rem;
          color: #60a5fa;
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .news-card-title {
          font-size: 1.3rem;
          font-weight: bold;
          color: white;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .news-card-meta {
          font-size: 0.8rem;
          color: #c9d1d9;
          margin-bottom: 1rem;
        }

        .news-card-summary {
          font-size: 0.95rem;
          color: #a0a0a0;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .news-card-link {
          display: inline-block;
          background-color: #1f6feb;
          color: white;
          padding: 0.75rem 1.25rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          transition: background-color 0.3s ease;
          align-self: flex-start;
        }

        .news-card-link:hover {
          background-color: #1a5bbd;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .news-grid {
            /* En pantallas pequeñas, sigue siendo horizontal pero las tarjetas pueden ser un poco más pequeñas */
            /* grid-template-columns: 1fr; */ /* Esto ya no es necesario con flex */
          }
          .news-card {
            width: 280px; /* Ajusta el ancho de las tarjetas en móviles */
          }
          .news-feed-heading {
            font-size: 2rem;
          }
        }
      `}</style>

      <section id='news' className="news-feed-section">
        <div className="news-feed-container">
          <h2 className="news-feed-heading">Últimas Noticias</h2>
          <div className="news-grid" ref={scrollContainerRef}> {/* Asocia la referencia aquí */}
            {fakeNewsData.map((item) => (
              <div key={item.id} className="news-card">
                <img src={item.imageUrl} alt={item.title} className="news-card-image" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x250/333/white?text=Imagen+No+Disponible'; }} />
                <div className="news-card-content">
                  <span className="news-card-category">{item.category}</span>
                  <h3 className="news-card-title">{item.title}</h3>
                  <p className="news-card-meta">{item.date}</p>
                  <p className="news-card-summary">{item.summary}</p>
                  <a href={item.link} className="news-card-link">Leer más</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
