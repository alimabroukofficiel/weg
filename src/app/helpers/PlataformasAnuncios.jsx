"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './PlataformasAnuncios.module.css';

export default function PlataformasAnuncios() {
  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 75,
        damping: 15,
      },
    },
  };

  return (
    <section className={styles.sectionAds} id='services'>
      <div className={styles.adsSection}>
        <motion.div
          className={styles.adsHeader}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2>Kompatibel mit Ihren Werbeplattformen</h2>
          <svg className={styles.squiggle} viewBox="0 0 60 12">
            <path d="M1 6 Q8 0, 15 6 T29 6 T43 6 T57 6" />
          </svg>
          <p>
            Verbinden, optimieren und automatisieren Sie Ihre Werbekampagnen
            auf den führenden digitalen Plattformen, um Ihren Return on
            Investment (ROI) einfach und effizient zu maximieren.
          </p>
        </motion.div>

        <motion.div
          className={styles.adsGrid}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Meta Ads Card */}
          <motion.div
            className={`${styles.adPlatformCard} ${styles.metaCard}`}
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <div className={styles.cardArtContainer}>
              <svg
                viewBox="0 0 32 32"
                className={styles.logoSvg}
                fill="#ffffff"
              >
                <path d="M5,19.5c0-4.6,2.3-9.4,5-9.4c1.5,0,2.7,0.9,4.6,3.6c-1.8,2.8-2.9,4.5-2.9,4.5c-2.4,3.8-3.2,4.6-4.5,4.6 C5.9,22.9,5,21.7,5,19.5 M20.7,17.8L19,15c-0.4-0.7-0.9-1.4-1.3-2c1.5-2.3,2.7-3.5,4.2-3.5c3,0,5.4,4.5,5.4,10.1 c0,2.1-0.7,3.3-2.1,3.3S23.3,22,20.7,17.8 M16.4,11c-2.2-2.9-4.1-4-6.3-4C5.5,7,2,13.1,2,19.5c0,4,1.9,6.5,5.1,6.5 c2.3,0,3.9-1.1,6.9-6.3c0,0,1.2-2.2,2.1-3.7c0.3,0.5,0.6,1,0.9,1.6l1.4,2.4c2.7,4.6,4.2,6.1,6.9,6.1c3.1,0,4.8-2.6,4.8-6.7 C30,12.6,26.4,7,22.1,7C19.8,7,18,8.8,16.4,11" />
              </svg>
            </div>
            <div className={styles.cardBody}>
              <h3>
                Meta Ads <span className={styles.arrow}>&rarr;</span>
              </h3>
              <p>
                Erreichen Sie zielgerichtete Zielgruppen mit höchster Präzision
                auf Facebook, Instagram und Messenger durch moderne
                Conversion-Kampagnen.
              </p>
            </div>
          </motion.div>

          {/* TikTok Ads Card */}
          <motion.div
            className={`${styles.adPlatformCard} ${styles.tiktokCard}`}
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <div className={styles.cardArtContainer}>
              <svg
                viewBox="0 0 32 32"
                className={styles.logoSvg}
                fill="#ffffff"
              >
                <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z" />
              </svg>
            </div>
            <div className={styles.cardBody}>
              <h3>
                TikTok Ads <span className={styles.arrow}>&rarr;</span>
              </h3>
              <p>
                Erreichen Sie junge und hochaktive Zielgruppen mit nativen
                Kurzvideos und besonders interaktiven Werbeinhalten.
              </p>
            </div>
          </motion.div>

          {/* Google Ads Card */}
          <motion.div
            className={`${styles.adPlatformCard} ${styles.googleCard}`}
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <div className={styles.cardArtContainer}>
              <svg viewBox="-3 0 262 262" className={styles.logoSvg}>
                <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/>
                <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/>
                <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/>
                <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/>
              </svg>
            </div>
            <div className={styles.cardBody}>
              <h3>
                Google Ads <span className={styles.arrow}>&rarr;</span>
              </h3>
              <p>
                Erreichen Sie Kunden mit hoher Kaufabsicht über die weltweit
                führende Suchmaschine sowie mit Kampagnen auf YouTube, Gmail
                und im Display-Netzwerk.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.adsNote}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Sofort einsatzbereit – schnelle Einrichtung in weniger als 10 Minuten
          pro Kanal.
        </motion.div>
      </div>
    </section>
  );
}