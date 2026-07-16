'use client';

import React from 'react';
import styles from './GoogleReviews.module.css';

export default function Folowers() {
  return (
    <section className={styles.sectionGoogle}>
      <div className={styles.googleReviewsSection}>
        <div className={styles.reviewsContent}>
          
          {/* Image instead of SVG icon */}
          <div className={styles.iconWrapper}>
            <img
              src="https://images.icon-icons.com/2857/PNG/512/instagram_like_heart_love_icon_181629.png"
              alt="Instagram Like-Herz"
              className={styles.starIcon}
            />
          </div>

          <h2>Bringen Sie Ihre Social-Media-Präsenz auf das nächste Level</h2>
          <p>
            Gewinnen Sie mehr Follower, erhalten Sie mehr Likes und erzielen Sie Tausende
            von Aufrufen für Ihre Beiträge. Sorgen Sie dafür, dass Ihre Inhalte hervorstechen
            und erreichen Sie schnell, sicher und professionell eine echte Zielgruppe.
          </p>

          <a href="#contact" className={styles.darkBtn}>
            Jetzt wachsen
          </a>
        </div>
      </div>
    </section>
  );
}