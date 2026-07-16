import styles from './AGB.module.css';

const AGB = () => {
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
        <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
        <svg className={styles.squiggle} viewBox="0 0 60 12">
          <path className={styles.squigglePath} d="M1 6 Q8 0, 15 6 T29 6 T43 6 T57 6" />
        </svg>
      </div>

      <div className={styles.legalPanel}>
        <div className={styles.legalBody}>
          <h2>1. Geltungsbereich</h2>
          <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Dienstleistungen von <strong>Mediaweg</strong> im Bereich Digitalmarketing.</p>

          <h2>2. Leistungsangebot</h2>
          <p>Mediaweg bietet Dienstleistungen im Bereich Social-Media-Management, Werbeanzeigen (Meta, TikTok, Google Ads), Erstellung von Webseiten sowie Google-Maps-Bewertungsmanagement an. Der Leistungsumfang wird individuell im jeweiligen Angebot festgelegt.</p>

          <h2>3. Vertragsschluss</h2>
          <p>Die Beauftragung erfolgt per E-Mail, WhatsApp oder über das Kontaktformular der Website. Ein Vertrag kommt zustande, sobald das Angebot bestätigt wird.</p>

          <h2>4. Preise und Zahlungsbedingungen</h2>
          <p>Die Leistungsgebühren werden vor Projektbeginn vereinbart. Die Zahlung erfolgt gemäß dem vereinbarten Zahlungsplan (Einmalzahlung, monatlich oder nach Projektmeilensteinen).</p>

          <h2>5. Widerrufsrecht</h2>
          <p>Kunden können ihre Beauftragung innerhalb von 14 Tagen nach Vertragsschluss widerrufen, sofern mit der Leistung noch nicht begonnen wurde. Bereits geleistete Zahlungen werden erstattet.</p>

          <h2>6. Kündigung</h2>
          <p>Nach Projektbeginn ist eine ordentliche Kündigung grundsätzlich ausgeschlossen. In besonderen Fällen kann eine individuelle Vereinbarung getroffen werden.</p>

          <h2>7. Haftung</h2>
          <p>Mediaweg haftet nicht für technische Probleme außerhalb ihres Einflussbereichs (z. B. Werbeplattformen Dritter oder die Internetverbindung des Kunden).</p>

          <h2>8. Anwendbares Recht</h2>
          <p>Es gilt das Recht des Königreichs Marokko. Gerichtsstand ist Salé, Marokko.</p>
        </div>
      </div>
    </section>
  );
};

export default AGB;