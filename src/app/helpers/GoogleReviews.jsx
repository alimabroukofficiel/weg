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
  hidden: { opacity: 0, scale: 0.5, rotate: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 260, damping: 16 },
  },
};

export default function GoogleReviews() {
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

          {/* Golden star image instead of SVG */}
          <motion.div className={styles.iconWrapper} variants={iconVariants}>
            <motion.img
              src="https://i.ibb.co/xqx0cBzW/Pngtree-glossy-yellow-star-icon-3d-21270306.png"
              alt="Google Review Star"
              className={styles.starIcon}
              animate={{ rotate: [0, -8, 8, -4, 0], scale: [1, 1.08, 1] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: 1.6,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          <motion.h2 variants={fadeUp}>
            Verbessern Sie den Ruf Ihres Unternehmens mit Google-Bewertungen
          </motion.h2>

          <motion.p variants={fadeUp}>
            Vertrauen ist entscheidend. Helfen Sie neuen Kunden, Ihr Unternehmen zu finden und
            sich anhand von Google-Bewertungen von der Qualität Ihrer Dienstleistungen zu überzeugen.
          </motion.p>

          <motion.a
            href="#contact"
            className={styles.darkBtn}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Jetzt Kontakt aufnehmen
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}