import styles from './Impressum.module.css';

const Impressum = () => {
  return (
    <section className={styles.legalSection}>
      <div className={styles.legalHeader}>
        <div className={styles.legalBadge}>
          <div className={styles.dot}>
            <svg viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
            </svg>
          </div>
          <span className={styles.badgeText}>Rechtliches</span>
        </div>

        <h1>Impressum</h1>

        <svg className={styles.squiggle} viewBox="0 0 60 12">
          <path
            className={styles.squigglePath}
            d="M1 6 Q8 0, 15 6 T29 6 T43 6 T57 6"
          />
        </svg>
      </div>

      <div className={styles.legalPanel}>
        <div className={styles.legalBody}>
          <div className={styles.infoBox}>
            <p><strong>Badr Kassimi</strong></p>
            <p>Inhaber: Badr Kassimi</p>
            <p>Schulstraße 30</p>
            <p>49191 Belm</p>
            <p>Deutschland</p>
            <p><strong>Telefon:</strong> +49 177 2462833</p>
            <p><strong>E-Mail:</strong> kontakt@mediaweg.de</p>
          </div>

          <h2>Verantwortlich für den Inhalt</h2>
          <p>Badr Kassimi</p>

          <h2>Hinweis</h2>
          <p>
            Badr Kassimi bietet professionelle Dienstleistungen im Bereich
            Digitalmarketing an. Dazu gehören Social-Media-Management,
            Werbeanzeigen (Meta, Google Ads und TikTok Ads),
            Webseitenerstellung sowie Google-Maps-Bewertungsmanagement.
            Die Zusammenarbeit erfolgt vollständig remote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impressum;
