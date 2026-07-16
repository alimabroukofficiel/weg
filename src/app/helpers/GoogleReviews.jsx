'use client';

import React from 'react';
import styles from './GoogleReviews.module.css';

export default function GoogleReviews() {
  return (
    <section className={styles.sectionGoogle}>
      <div className={styles.googleReviewsSection}>
        <div className={styles.reviewsContent}>
          
          {/* Golden star image instead of SVG */}
          <div className={styles.iconWrapper}>
            <img
              src="https://i.ibb.co/xqx0cBzW/Pngtree-glossy-yellow-star-icon-3d-21270306.png"
              alt="Google Review Star"
              className={styles.starIcon}
            />
          </div>

          <h2>Verbessern Sie den Ruf Ihres Unternehmens mit Google-Bewertungen</h2>
          <p>
            Vertrauen ist entscheidend. Helfen Sie neuen Kunden, Ihr Unternehmen zu finden und
            sich anhand von Google-Bewertungen von der Qualität Ihrer Dienstleistungen zu überzeugen.
          </p>

          <a href="#contact" className={styles.darkBtn}>
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
}