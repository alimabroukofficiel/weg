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
          <path
            className={styles.squigglePath}
            d="M1 6 Q8 0, 15 6 T29 6 T43 6 T57 6"
          />
        </svg>
      </div>

      <div className={styles.legalPanel}>
        <div className={styles.legalBody}>
          <h2>1. Allgemeine Hinweise</h2>
          <p>
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir
            behandeln Ihre Daten vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften, insbesondere der
            Datenschutz-Grundverordnung (DSGVO).
          </p>

          <h2>2. Verantwortlicher</h2>
          <div className={styles.infoBox}>
            <p><strong>Badr Kassimi</strong></p>
            <p>Schulstraße 30</p>
            <p>49191 Belm</p>
            <p>Deutschland</p>
            <p><strong>Telefon:</strong> +49 177 2462833</p>
            <p><strong>E-Mail:</strong> kontakt@mediaweg.de</p>
          </div>

          <h2>3. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <p>
            Wenn Sie uns über das Kontaktformular kontaktieren, verarbeiten wir
            folgende personenbezogene Daten:
          </p>

          <ul>
            <li>Name</li>
            <li>E-Mail-Adresse</li>
            <li>Telefonnummer (falls angegeben)</li>
            <li>Inhalt Ihrer Nachricht</li>
          </ul>

          <p>
            Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage und
            zur Kommunikation mit Ihnen verwendet.
          </p>

          <h2>4. Nutzung von WhatsApp</h2>
          <p>
            Auf unserer Website befindet sich ein WhatsApp-Button. Beim Anklicken
            werden Sie zu WhatsApp weitergeleitet. Dabei können personenbezogene
            Daten an WhatsApp Ireland Limited übermittelt werden. Es gelten die
            Datenschutzbestimmungen von WhatsApp.
          </p>

          <h2>5. Speicherdauer</h2>
          <p>
            Personenbezogene Daten werden nur so lange gespeichert, wie dies zur
            Bearbeitung Ihrer Anfrage oder aufgrund gesetzlicher
            Aufbewahrungspflichten erforderlich ist.
          </p>

          <h2>6. Ihre Rechte</h2>
          <p>Sie haben nach der DSGVO insbesondere folgende Rechte:</p>

          <ul>
            <li>Auskunft über Ihre gespeicherten Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung Ihrer Daten</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerspruch gegen die Verarbeitung</li>
          </ul>

          <p>
            Bei Fragen zum Datenschutz können Sie uns jederzeit kontaktieren.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Datenschutz;
