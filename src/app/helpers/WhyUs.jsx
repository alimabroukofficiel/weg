import React from 'react';
import styles from './WhyChooseUs.module.css';

const features = {
  top: [
    {
      title: 'Datenbasierte Strategien',
      text: 'Jede Kampagne wird anhand echter Leistungsdaten entwickelt und optimiert, damit Ihr Budget dort eingesetzt wird, wo es die besten Ergebnisse erzielt.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M3 3v18h18" />
          <path d="M18.7 8l-5.2 5.2-3-3L4 16.7" />
        </svg>
      ),
    },
    {
      title: 'Messbare Ergebnisse',
      text: 'Wir arbeiten von Anfang an mit klar definierten Zielen und analysieren jede Maßnahme, um den Erfolg Ihrer Investition transparent nachzuweisen.',
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="6" />
          <path d="M9 14l-2 7 5-3 5 3-2-7" />
        </svg>
      ),
    },
    {
      title: 'Direkte Kommunikation',
      text: 'Unser Team steht Ihnen jederzeit zur Verfügung, beantwortet Ihre Fragen und informiert Sie regelmäßig über den Fortschritt Ihres Projekts.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      ),
    },
  ],
  bottom: [
    {
      title: 'Multichannel-Lösungen',
      text: 'Wir kombinieren Social Media, Online-Werbung und SEO, um Ihre digitale Präsenz auf mehreren Plattformen erfolgreich auszubauen.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.1-3.1a4 4 0 01-5.4 5.4L5 22l-2-2 10.4-10.4a4 4 0 015.4-5.4l-3.1 3.1z" />
        </svg>
      ),
    },
    {
      title: 'Flexible Budgets',
      text: 'Starten Sie mit einem Budget, das zu Ihrem Unternehmen passt, und erweitern Sie Ihre Strategie Schritt für Schritt mit Ihrem Wachstum.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M4 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Transparente Berichte',
      text: 'Erhalten Sie regelmäßige und verständliche Berichte über die tatsächliche Leistung Ihrer Kampagnen – ohne versteckte Informationen.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
        </svg>
      ),
    },
  ],
};

function FeatureCard({ title, text, icon }) {
  return (
    <div className={styles.whyCard}>
      <div className={styles.iconBox}>
        <span className={`${styles.corner} ${styles.tl}`}></span>
        <span className={`${styles.corner} ${styles.tr}`}></span>
        <span className={`${styles.corner} ${styles.bl}`}></span>
        <span className={`${styles.corner} ${styles.br}`}></span>
        <div className={styles.iconCircle}>{icon}</div>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className={styles.whySection} id='why-us'>
      <div className={styles.whyPanel}>
        <div className={styles.adsHeader}>
          <h2>Warum wir?</h2>

          <svg className={styles.squiggle} viewBox="0 0 60 12">
            <path d="M1 6 Q8 0, 15 6 T29 6 T43 6 T57 6" />
          </svg>

          <p>
            Wir verbinden Daten, Kreativität und eine kontinuierliche Kommunikation,
            um eine starke digitale Strategie zu entwickeln, die das nachhaltige
            Wachstum Ihres Unternehmens fördert.
          </p>
        </div>

        <div className={styles.whyGrid}>
          <div className={`${styles.whyRow} ${styles.top}`}>
            {features.top.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>

          <div className={`${styles.whyRow} ${styles.bottom}`}>
            {features.bottom.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}