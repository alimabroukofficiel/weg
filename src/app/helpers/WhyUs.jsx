"use client"

import React from 'react';
import { motion } from 'framer-motion';
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

// --- Animation variants -----------------------------------------------

const rowVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// --- Components ---------------------------------------------------------

function FeatureCard({ title, text, icon }) {
  return (
    <motion.div
      className={styles.whyCard}
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
    >
      <div className={styles.iconBox}>
        <span className={`${styles.corner} ${styles.tl}`}></span>
        <span className={`${styles.corner} ${styles.tr}`}></span>
        <span className={`${styles.corner} ${styles.bl}`}></span>
        <span className={`${styles.corner} ${styles.br}`}></span>
        <motion.div
          className={styles.iconCircle}
          whileHover={{ rotate: 8, scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          {icon}
        </motion.div>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className={styles.whySection} id="why-us">
      <div className={styles.whyPanel}>
        <motion.div
          className={styles.adsHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={headerVariants}
        >
          <h2>Warum wir?</h2>

          <motion.svg
            className={styles.squiggle}
            viewBox="0 0 60 12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.path
              d="M1 6 Q8 0, 15 6 T29 6 T43 6 T57 6"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: { duration: 0.9, ease: 'easeInOut', delay: 0.2 },
                },
              }}
            />
          </motion.svg>

          <p>
            Wir verbinden Daten, Kreativität und eine kontinuierliche Kommunikation,
            um eine starke digitale Strategie zu entwickeln, die das nachhaltige
            Wachstum Ihres Unternehmens fördert.
          </p>
        </motion.div>

        <div className={styles.whyGrid}>
          <motion.div
            className={`${styles.whyRow} ${styles.top}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={rowVariants}
          >
            {features.top.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </motion.div>

          <motion.div
            className={`${styles.whyRow} ${styles.bottom}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={rowVariants}
          >
            {features.bottom.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}