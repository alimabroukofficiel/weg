'use client';

import React from 'react';
import styles from './GoogleReviews.module.css';

export default function WebsiteBuilder() {
  return (
    <section className={styles.sectionGoogle}>
      <div className={styles.googleReviewsSection}>
        <div className={styles.reviewsContent}>
          
          {/* Website icon */}
          <div className={styles.iconWrapper}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3273/3273413.png"
              alt="Website-Erstellung"
              className={styles.starIcon}
            />
          </div>

          <h2>Bringen Sie Ihr Unternehmen mit einer professionellen Website voran</h2>
          <p>
            Ihre Website ist Ihr bester Verkäufer. Wir entwickeln moderne und schnelle
            Websites, die Besucher in treue Kunden verwandeln und das professionelle
            Erscheinungsbild Ihrer Marke stärken.
          </p>

          <a href="#contact" className={styles.darkBtn}>
            Meine Website erstellen
          </a>
        </div>
      </div>
    </section>
  );
}