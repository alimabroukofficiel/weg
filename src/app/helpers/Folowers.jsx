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
  hidden: { opacity: 0, scale: 0.5, rotate: -12 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 260, damping: 16 },
  },
};

export default function Folowers() {
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

          {/* Image instead of SVG icon */}
          <motion.div className={styles.iconWrapper} variants={iconVariants}>
            <motion.img
              src="https://images.icon-icons.com/2857/PNG/512/instagram_like_heart_love_icon_181629.png"
              alt="Instagram Like-Herz"
              className={styles.starIcon}
              animate={{ scale: [1, 1.12, 1] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                repeatDelay: 1.2,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          <motion.h2 variants={fadeUp}>
            Bringen Sie Ihre Social-Media-Präsenz auf das nächste Level
          </motion.h2>

          <motion.p variants={fadeUp}>
            Gewinnen Sie mehr Follower, erhalten Sie mehr Likes und erzielen Sie Tausende
            von Aufrufen für Ihre Beiträge. Sorgen Sie dafür, dass Ihre Inhalte hervorstechen
            und erreichen Sie schnell, sicher und professionell eine echte Zielgruppe.
          </motion.p>

          <motion.a
            href="#contact"
            className={styles.darkBtn}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Jetzt wachsen
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}