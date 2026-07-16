import styles from './Datenschutz.module.css';

const Datenschutz = () => {
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
        <h1>Datenschutzerklärung</h1>
        <svg className={styles.squiggle} viewBox="0 0 60 12">
          <path className={styles.squigglePath} d="M1 6 Q8 0, 15 6 T29 6 T43 6 T57 6" />
        </svg>
      </div>

      <div className={styles.legalPanel}>
        <div className={styles.legalBody}>
          <h2>1. Allgemeine Hinweise</h2>
          <p>Der Schutz deiner persönlichen Daten ist uns wichtig. Wir behandeln deine personenbezogenen Daten vertraulich und gemäß den geltenden Datenschutzbestimmungen des Königreichs Marokko.</p>

          <h2>2. Verantwortlicher</h2>
          <div className={styles.infoBox}>
            <p><strong>Mediaweg</strong></p>
            <p>Inhaber: Ali Mabrouk</p>
            <p>Rue Omar Ibn Abdel Aziz 1151</p>
            <p>Hay Rahma, Salé</p>
            <p>Marokko</p>
            <p><strong>E-Mail:</strong> kontakt@mediaweg.de</p>
            <p><strong>Telefon:</strong> 00212 723 331453</p>
          </div>

          <h2>3. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <p>Wenn du uns über das Kontaktformular kontaktierst, verarbeiten wir folgende Daten:</p>
          <ul>
            <li>Name</li>
            <li>E-Mail-Adresse</li>
            <li>Inhalt deiner Nachricht</li>
          </ul>
          <p>Diese Daten werden ausschließlich zur Bearbeitung deiner Anfrage verwendet.</p>

          <h2>4. Nutzung von WhatsApp</h2>
          <p>Auf unserer Website befindet sich ein WhatsApp-Button. Wenn du diesen anklickst, wirst du zu WhatsApp weitergeleitet. Dabei können personenbezogene Daten durch WhatsApp verarbeitet werden. Es gelten die Datenschutzbestimmungen des Anbieters.</p>

          <h2>5. Speicherdauer</h2>
          <p>Deine personenbezogenen Daten werden nur so lange gespeichert, wie es zur Bearbeitung deiner Anfrage oder zur Durchführung unserer Marketingdienstleistungen erforderlich ist.</p>

          <h2>6. Deine Rechte</h2>
          <p>Du hast das Recht:</p>
          <ul>
            <li>Auskunft über deine gespeicherten Daten zu erhalten</li>
            <li>Unrichtige Daten berichtigen zu lassen</li>
            <li>Die Löschung deiner Daten zu verlangen</li>
          </ul>
          <p>Bei Fragen zum Datenschutz kannst du uns jederzeit kontaktieren.</p>
        </div>
      </div>
    </section>
  );
};

export default Datenschutz;