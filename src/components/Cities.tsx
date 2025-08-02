'use client';

import React, { useState } from 'react';

export default function Ciudades() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const cities = [
    { name: 'Bogotá', lat: 4.7110, lon: -74.0721 },
    { name: 'Medellín', lat: 6.2442, lon: -75.5812 },
    { name: 'Cali', lat: 3.4516, lon: -76.5320 },
    { name: 'Cartagena', lat: 10.3910, lon: -75.4794 },
    { name: 'Barranquilla', lat: 10.9685, lon: -74.7813 },
  ];

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    console.log(`Ciudad seleccionada: ${city}`);
  };

  return (
    <>
      <style jsx>{`
        .cities-section {
          background-color: #0a0a0a;
          padding: 4rem 1.5rem;
          color: white;
          text-align: center;
        }

        .cities-container {
          max-width: 75rem;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .cities-heading {
          font-size: 2.5rem;
          font-weight: bold;
          color: #60a5fa;
          margin-bottom: 3rem;
          color: white
        }

        .map-container {
          position: relative;
          width: 100%;
          max-width: 900px; /* Ancho máximo para el mapa */
          margin: 0 auto 2rem auto;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
        }

        .map-image {
          width: 100%;
          height: auto;
          display: block;
          filter: brightness(0.8) contrast(1.2); /* Oscurecer y contrastar un poco la imagen */
        }

        .city-buttons-container {
          display: flex;
          flex-wrap: wrap; /* Permite que los botones se envuelvan en varias líneas */
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .city-button {
          background-color: #1f6feb;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .city-button:hover {
          background-color: #1a5bbd;
          transform: translateY(-2px);
        }

        .city-button.selected {
          background-color: #0f4c81; /* Color diferente para la ciudad seleccionada */
          border: 2px solid #60a5fa;
          transform: scale(1.05);
        }

        .selected-city-info {
          margin-top: 2rem;
          font-size: 1.2rem;
          color: #c9d1d9;
        }

        @media (max-width: 768px) {
          .cities-heading {
            font-size: 2rem;
            color: white;
          }
          .map-container {
            max-width: 100%;
          }
        }
      `}</style>

      <section id='cities' className="cities-section">
        <div className="cities-container">
          <h2 className="cities-heading">Explora Eventos por Ciudad</h2>

          <div className="city-buttons-container">
            {cities.map((city) => (
              <button
                key={city.name}
                // Aquí se corrigió el uso de las clases CSS
                className={`city-button ${selectedCity === city.name ? 'selected' : ''}`}
                onClick={() => handleCitySelect(city.name)}
              >
                {city.name}
              </button>
            ))}
          </div>

          {selectedCity && (
            <p className="selected-city-info">
              Has seleccionado: <strong>{selectedCity}</strong>. Aquí se mostrarían los eventos para esta ciudad.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
