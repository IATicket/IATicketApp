'use client';

import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="quienes-somos" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutHeading}>¿Quiénes Somos?</h2>
        <p className={styles.aboutParagraph}>
          Somos la plataforma líder para conectar a los amantes de la música y el entretenimiento con los eventos más vibrantes de Colombia. Desde conciertos masivos hasta íntimas obras de teatro y emocionantes encuentros deportivos, nuestra misión es asegurar que nunca te pierdas la oportunidad de vivir una experiencia inolvidable. Creemos en el poder de los momentos en vivo para unir a las personas y crear recuerdos duraderos. ¡Únete a nuestra comunidad y descubre el próximo gran evento!
        </p>
      </div>
    </section>
  );
}
