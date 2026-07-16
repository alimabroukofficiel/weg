"use client"
import React from 'react';
import { motion } from 'framer-motion';
import styles from './PasosAgenciaDigital.module.css';

export default function PasosAgenciaDigital() {
  // Container variants to stagger children entry upon scrolling into view
  const trackVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // Entry animation for each individual step card
  const stepVariants = {
    hidden: {
      opacity: 0,
      y: 35
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 14
      }
    },
  };

  return (
    <section className={styles.stepsSection } id='arbeiten'>
      {/* Header with Fade In */}
      <motion.div
        className={styles.stepsHeader}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2>Wie wir arbeiten</h2>

        <svg className={styles.squiggle} viewBox="0 0 60 12">
          <path d="M1 6 Q8 0, 15 6 T29 6 T43 6 T57 6" />
        </svg>

        <p>
          Ein strategischer und transparenter Drei-Schritte-Prozess, der darauf ausgelegt ist, die Präsenz Ihrer Marke zu stärken und Ihre digitalen Ziele zu erreichen.
        </p>
      </motion.div>

      {/* Step Grid/Track with Staggered Scroll Animations */}
      <motion.div
        className={styles.stepsTrack}
        variants={trackVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Step 1 */}
        <motion.div className={styles.step} variants={stepVariants}>
          <div className={styles.stepCircle}>01</div>
          <div className={styles.stepContent}>
            <h3>Analyse und Strategie</h3>
            <p>
              Wir analysieren Ihr Unternehmen, Ihre Wettbewerber und Ihre Geschäftsziele gründlich, um eine maßgeschneiderte Strategie zu entwickeln.
            </p>
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div className={styles.step} variants={stepVariants}>
          <div className={styles.stepCircle}>02</div>
          <div className={styles.stepContent}>
            <h3>Design und Entwicklung</h3>
            <p>
              Wir entwickeln ansprechende, optimierte und benutzerorientierte digitale Erlebnisse mit modernster Technologie.
            </p>
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div className={styles.step} variants={stepVariants}>
          <div className={styles.stepCircle}>03</div>
          <div className={styles.stepContent}>
            <h3>Launch und Optimierung</h3>
            <p>
              Wir veröffentlichen Ihr Projekt sicher und überwachen seine Leistung kontinuierlich, um Verbesserungen umzusetzen und Ihre Ergebnisse zu maximieren.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}