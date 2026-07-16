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
          <path className={styles.squigglePath} d="M1 6 Q8 0, 15 6 T29 6 T43 6 T57 6" />
        </svg>
      </div>

      <div className={styles.legalPanel}>
        <div className={styles.legalBody}>
          <div className={styles.infoBox}>
            <p><strong>Mediaweg</strong></p>
            <p>Inhaber: Ali Mabrouk</p>
            <p>Rue Omar Ibn Abdel Aziz 1151</p>
            <p>Hay Rahma</p>
            <p>Salé</p>
            <p>Marokko</p>
            <p><strong>Telefon:</strong> 00212 723 331453</p>
            <p><strong>E-Mail:</strong> kontakt@mediaweg.de</p>
          </div>

          <h2>Verantwortlich für den Inhalt</h2>
          <p>Ali Mabrouk</p>

          <h2>Hinweis</h2>
          <p>
            Mediaweg ist eine Digitalmarketing-Agentur mit Sitz in Marokko, die Unternehmen 
            im deutschsprachigen Raum bei Social-Media-Management, Werbeanzeigen, 
            Webseitenerstellung und Google-Maps-Bewertungsmanagement unterstützt. 
            Die Zusammenarbeit erfolgt vollständig remote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impressum;