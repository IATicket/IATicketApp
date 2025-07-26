'use client';

import React from 'react';

export default function About() {
  return (
    <>
      <style jsx>{`
        .about-section {
          background-color: #0a0a0a; /* Ajustado para coincidir con el fondo de otras secciones */
          color: white; /* text-white */
          padding-top: 5rem; /* py-20 */
          padding-bottom: 5rem; /* py-20 */
          padding-left: 1.5rem; /* px-6 */
          padding-right: 1.5rem; /* px-6 */
          text-align: center; /* text-center */
        }

        .about-container {
          max-width: 48rem; /* max-w-3xl (768px) */
          margin-left: auto; /* mx-auto */
          margin-right: auto; /* mx-auto */
        }

        .about-heading {
          font-size: 2.25rem; /* text-3xl */
          font-weight: bold; /* font-bold */
          color: white; /* text-blue-400 */
          margin-bottom: 1.5rem; /* mb-6 */
        }

        .about-paragraph {
          font-size: 1rem; /* text-gray-300 (default text size) */
          color: #d1d5db; /* text-gray-300 */
          line-height: 1.625; /* leading-relaxed */
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .about-heading {
            font-size: 2rem;
          }
        }
      `}</style>

      <section id="quienes-somos" className="about-section">
        <div className="about-container">
          <h2 className="about-heading">¿Quiénes Somos?</h2>
          <p className="about-paragraph">
            Somos la plataforma líder para conectar a los amantes de la música y el entretenimiento con los eventos más vibrantes de Colombia. Desde conciertos masivos hasta íntimas obras de teatro y emocionantes encuentros deportivos, nuestra misión es asegurar que nunca te pierdas la oportunidad de vivir una experiencia inolvidable. Creemos en el poder de los momentos en vivo para unir a las personas y crear recuerdos duraderos. ¡Únete a nuestra comunidad y descubre el próximo gran evento!
          </p>
        </div>
      </section>
    </>
  );
}
