'use client';

import styles from './Banner.module.css';

export default function Banner() {
  return (
    <section className={styles.banner}>
      {/* Superposición para mejorar la legibilidad del texto */}
      <div className={styles['banner-overlay']}></div>
  
      {/* Encabezado principal del banner */}
      <h1 className={styles['banner-heading']}>
        <br></br>
        <br></br>
      </h1>
      
      {/* Contenedor del input de búsqueda */}
      <div className={styles['banner-search-container']}>
        <input
          type="search"
          placeholder="Busca por artista o por evento"
          className={styles['banner-search-input']}
        />
      </div>
    </section>
  );
}
