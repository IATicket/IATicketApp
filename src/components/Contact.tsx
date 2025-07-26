'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario, por ejemplo, a una API.
    // Por ahora, solo lo mostraremos en la consola.
    console.log('Formulario enviado:', formData);
    // Puedes añadir un mensaje de éxito o limpiar el formulario aquí
    setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.'); // Usar un modal en lugar de alert en producción
  };

  return (
    <>
      <style jsx>{`
        .contact-section {
          background-color: #0a0a0a; /* Ajustado para coincidir con el fondo de otras secciones */
          color: white; /* text-white */
          padding-top: 5rem; /* py-20 */
          padding-bottom: 5rem; /* py-20 */
          padding-left: 1.5rem; /* px-6 */
          padding-right: 1.5rem; /* px-6 */
          text-align: center; /* text-center */
        }

        .contact-container {
          max-width: 48rem; /* max-w-3xl (768px) */
          margin-left: auto; /* mx-auto */
          margin-right: auto; /* mx-auto */
        }

        .contact-heading {
          font-size: 2.25rem; /* text-3xl */
          font-weight: bold; /* font-bold */
          color: white; /* text-blue-400 */
          margin-bottom: 1.5rem; /* mb-6 */
        }

        .contact-paragraph {
          font-size: 1rem;
          color: #d1d5db;
          margin-bottom: 2rem; /* mb-4 */
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem; /* Espacio entre los campos del formulario */
          background-color: #161b22; /* Fondo del formulario */
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          text-align: left; /* Alinea el texto de las etiquetas a la izquierda */
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-size: 0.95rem;
          color: #c9d1d9;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .form-group input,
        .form-group textarea {
          background-color: #0d1117; /* Fondo de los inputs */
          border: 1px solid #30363d;
          border-radius: 8px;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          color: white;
          width: 100%;
          box-sizing: border-box; /* Incluye padding y border en el ancho */
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #6b7280;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #1f6feb;
          box-shadow: 0 0 0 2px rgba(31, 111, 235, 0.5);
        }

        .form-group textarea {
          resize: vertical; /* Permite redimensionar verticalmente */
          min-height: 100px;
        }

        .submit-button {
          background-color: #1f6feb;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
          margin-top: 1rem;
          align-self: center; /* Centra el botón en el formulario */
          width: fit-content; /* Ajusta el ancho al contenido */
        }

        .submit-button:hover {
          background-color: #1a5bbd;
          transform: translateY(-2px);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .contact-heading {
            font-size: 2rem;
          }
          .contact-form {
            padding: 1.5rem; /* Menos padding en móviles */
          }
        }
      `}</style>

      <section id="contacto" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-heading">Contáctanos</h2>
          <p className="contact-paragraph">
            ¿Tienes un evento que quieras publicar, una duda, o simplemente quieres saludar? ¡Hablemos!
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu.email@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Escribe tu mensaje aquí..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
