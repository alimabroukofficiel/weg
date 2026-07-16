'use client';

import React from 'react';
import styles from './AdPlatforms.module.css';

export default function ServicesManager() {
 const cards = [
    {
      title: "Google Reviews",
      text: "Potenciamos la credibilidad de tu negocio gestionando reseñas que generan confianza real en tus clientes.",
      bg: "url('https://images.unsplash.com/photo-1577896851231-7080b885c3a3?q=80&w=1000')"
    },
    {
      title: "Branding & Photos",
      text: "Diseñamos identidades visuales memorables y capturamos fotografías de productos que resaltan su calidad.",
      bg: "url('https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1000')"
    },
    {
      title: "Social Media",
      text: "Creamos estrategias de contenido dinámicas para aumentar el alcance y la interacción de tu comunidad.",
      bg: "url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000')"
    }
  ];

  return (
    <section className={styles.container}>
      <div className={styles.adsHeader}>
        <h2>Nuestros Servicios Digitales</h2>
        <svg className={styles.squiggle} viewBox="0 0 60 12">
          <path d="M1 6 Q8 0, 15 6 T29 6 T43 6 T57 6" />
        </svg>
        <p>Soluciones creativas y estratégicas diseñadas para escalar tu presencia en el entorno digital.</p>
      </div>

      <div className={styles.grid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card} style={{ backgroundImage: `${card.bg}` }}>
            <div className={styles.overlay}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}