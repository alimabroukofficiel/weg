'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './GoogleReviews.module.css';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 16 },
  },
};

export default function WebsiteBuilder() {
  return (
    <section className={styles.sectionGoogle}>
      <motion.div
        className={styles.googleReviewsSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={container}
      >
        <div className={styles.reviewsContent}>

          {/* Website icon */}
          <motion.div className={styles.iconWrapper} variants={iconVariants}>
            <motion.svg
              className={styles.starIcon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Website-Erstellung"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <path
                d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
                stroke="#0075ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>

          <motion.h2 variants={fadeUp}>
            Bringen Sie Ihr Unternehmen mit einer professionellen Website voran
          </motion.h2>

          <motion.p variants={fadeUp}>
            Ihre Website ist Ihr bester Verkäufer. Wir entwickeln moderne und schnelle
            Websites, die Besucher in treue Kunden verwandeln und das professionelle
            Erscheinungsbild Ihrer Marke stärken.
          </motion.p>

          <motion.a
            href="#contact"
            className={styles.darkBtn}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Meine Website erstellen
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}