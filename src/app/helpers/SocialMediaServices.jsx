'use client';

import React, { useState } from 'react';
import styles from './SocialMediaServices.module.css';

const SocialMediaServices = () => {
  const [showAll, setShowAll] = useState(false);

  // Iconos definidos como componentes funcionales para mejor legibilidad
  const IconOrganic = () => (
    <svg viewBox="0 0 24 24" fill="#fff" width="40px" height="40px">
      <path d="M19,3c0,2.2-4.3,6-9,6v6c4.7,0,9,3.6,9,6h2v-7.3c0.6-0.3,1-1,1-1.7s-0.4-1.4-1-1.7V3H19z M5,9c-0.8,0-1.5,0.5-1.8,1.2 C2.5,10.5,2,11.2,2,12s0.5,1.5,1.2,1.8C3.5,14.5,4.2,15,5,15h0.2l2.2,7l3.5-1.1L9,15V9H5z"/>
    </svg>
  );

  const IconPaid = () => (
    <svg viewBox="0 0 960 960" fill="#fff" width="40px" height="40px">
      <path d="M493.247 813.129C552.71 810.493 605.628 808.674 658.545 805.492..." />
    </svg>
  );

  const IconHeart = () => (
    <svg viewBox="0 0 24 24" fill="#fff" width="40px" height="40px">
      <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"/>
    </svg>
  );

  const services = [
    { title: "Organic Social Media", text: "Build authentic connections...", icon: <IconOrganic /> },
    { title: "Paid Social Media", text: "Maximise your reach...", icon: <IconPaid /> },
    { title: "Followers & Likes", text: "Give your social presence...", icon: <IconHeart /> },
    { title: "Google Reviews", text: "Build trust and improve...", icon: <IconHeart /> },
    { title: "Website Design", text: "Give your brand a home base...", icon: <IconOrganic /> }
  ];

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section className={styles.services}>
      <div className={styles.servicesHead}>
        <h2>Social Media Services</h2>
        <p>A truly successful social media campaign will often need to leverage both organic and paid social media ads.</p>
      </div>

      <div className={styles.cards}>
        {visibleServices.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardArt}>{service.icon}</div>
            <div className={styles.cardBody}>
              <h3>{service.title} <span className={styles.arrow}>&rarr;</span></h3>
              <p>{service.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.btnContainer}>
        <button className={styles.btnToggle} onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </section>
  );
};

export default SocialMediaServices;