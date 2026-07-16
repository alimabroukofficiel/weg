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
            <motion.img
              src="https://cdn-icons-png.flaticon.com/512/3273/3273413.png"
              alt="Website-Erstellung"
              className={styles.starIcon}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
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