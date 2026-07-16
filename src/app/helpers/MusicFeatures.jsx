import React from 'react';
import styles from './MusicFeatures.module.css';

const platforms = [
  {
    title: 'Meta Ads',
    text: 'Impulsa tu marca en Facebook e Instagram con campañas segmentadas que conectan con tu audiencia ideal en el momento justo.',
    icon: (
      <svg viewBox="0 0 36 36" fill="none">
        <path
          d="M9 20.5c0-6 3.6-11 9-11 3.4 0 5.7 2 7.4 5.2.9-3.2 3-5.2 5.6-5.2 3.7 0 5 4.1 5 8.6 0 4.9-1.8 8.4-4.9 8.4-2.1 0-3.5-1.6-4.7-4.1l-2.6-5.5c-.5 4.9-2.7 9.6-6.4 9.6C13 26.5 9 25.2 9 20.5z"
          fill="#0866FF"
        />
      </svg>
    ),
  },
  {
    title: 'TikTok Ads',
    text: 'Crea contenido nativo y viral que capta la atención en segundos, ideal para llegar a audiencias jóvenes y de alto engagement.',
    icon: (
      <svg viewBox="0 0 36 36" fill="none">
        <path
          d="M24.5 6c.5 3.1 2.5 5.2 5.7 5.4v4.3c-2 .1-3.9-.5-5.6-1.6v9.1c0 4.7-3.4 7.8-7.6 7.8-4.3 0-7.6-3.2-7.6-7.3 0-4.5 4-8 9-7.4v4.5c-2.2-.5-4.2.9-4.2 2.9 0 1.8 1.5 3 3.2 3 2.1 0 3.6-1.7 3.6-4.2V6h3.5z"
          fill="#111111"
        />
      </svg>
    ),
  },
  {
    title: 'Google Ads',
    text: 'Aparece en el momento preciso con búsquedas, display y YouTube, capturando la intención de compra de tus clientes.',
    icon: (
      <svg viewBox="0 0 36 36" fill="none">
        <path
          d="M28.8 18.3c0-.9-.1-1.7-.2-2.5H18v4.8h6.1c-.3 1.6-1.2 2.9-2.5 3.8v3.1h4.1c2.4-2.2 3.1-5.5 3.1-9.2z"
          fill="#4285F4"
        />
        <path
          d="M18 29c3.1 0 5.7-1 7.6-2.8l-4.1-3.1c-1.1.7-2.5 1.2-3.5 1.2-2.7 0-5-1.8-5.8-4.3H8v3.2C9.9 26.6 13.6 29 18 29z"
          fill="#34A853"
        />
        <path
          d="M12.2 19.9c-.2-.7-.3-1.4-.3-2.1s.1-1.4.3-2.1v-3.2H8c-.8 1.6-1.2 3.4-1.2 5.3s.4 3.7 1.2 5.3l4.2-3.2z"
          fill="#FBBC05"
        />
        <path
          d="M18 10.7c1.7 0 3.2.6 4.4 1.7l3.3-3.3C23.7 7.2 21.1 6 18 6c-4.4 0-8.1 2.4-10 6.6l4.2 3.2c.8-2.5 3.1-4.3 5.8-4.3z"
          fill="#EA4335"
        />
      </svg>
    ),
  },
];

export default function AdsPlatforms() {
  return (
    <section className={styles.platformsSection}>
      <div className={styles.platformsPanel}>
        <div className={styles.adsHeader}>
          <h2>Compatible con tus plataformas de anuncios</h2>

          <svg className={styles.squiggle} viewBox="0 0 60 12">
            <path d="M1 6 Q8 0, 15 6 T29 6 T43 6 T57 6" />
          </svg>

          <p>
            Conecta, optimiza y automatiza tus campañas publicitarias en los principales canales
            digitales del mercado para maximizar tu retorno de inversión sin complicaciones.
          </p>
        </div>

        <div className={styles.platformsGrid}>
          {platforms.map((p) => (
            <div className={styles.platformCard} key={p.title}>
              <div className={styles.iconCircle}>{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}