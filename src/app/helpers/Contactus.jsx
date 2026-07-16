"use client"
import React, { useState } from 'react';
import styles from './ContactUs.module.css';

const validators = {
  name: (v) => v.trim().length >= 2,
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
  project: (v) => v.trim().length >= 10,
};

const errorMessages = {
  name: 'Bitte gib deinen Namen ein.',
  email: 'Bitte gib eine gültige E-Mail-Adresse ein.',
  project: 'Erzähl uns etwas mehr über dein Projekt (mindestens 10 Zeichen).',
};

export default function ContactUs() {
  const [values, setValues] = useState({ name: '', email: '', project: '' });
  const [errors, setErrors] = useState({ name: false, email: false, project: false });
  const [showSuccess, setShowSuccess] = useState(false);

  function handleChange(id, value) {
    setValues((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: !validators[id](value) }));
    }
  }

  function handleBlur(id) {
    setErrors((prev) => ({ ...prev, [id]: !validators[id](values[id]) }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowSuccess(false);

    const newErrors = {};
    let allValid = true;
    Object.keys(validators).forEach((id) => {
      const isValid = validators[id](values[id]);
      newErrors[id] = !isValid;
      if (!isValid) allValid = false;
    });
    setErrors(newErrors);

    if (!allValid) return;

    // Hier würdest du die Daten normalerweise an dein Backend / deine API senden
    console.log('Formular gesendet:', values);

    setShowSuccess(true);
    setValues({ name: '', email: '', project: '' });
  }

  return (
    <section className={styles.sectionContact} id='contact'>
        <div className={styles.contactSection}>
      <div className={styles.contactHeader}>
        <h2>Kontaktiere uns</h2>
        <svg className={styles.squiggle} viewBox="0 0 60 12">
          <path d="M1 6 Q8 0, 15 6 T29 6 T43 6 T57 6" />
        </svg>
        <p>
          Erzähl uns von deinem Projekt und wir melden uns innerhalb von 24 Stunden mit einem
          maßgeschneiderten Angebot.
        </p>
      </div>

      <div className={styles.contactWrap}>
        <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
          <div className={`${styles.formSuccess} ${showSuccess ? styles.show : ''}`}>
            <svg viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span>Vielen Dank! Deine Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze.</span>
          </div>

          <div className={`${styles.field} ${errors.name ? styles.hasError : ''}`}>
            <label htmlFor="name">
              Vollständiger Name <span className={styles.req}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={(e) => handleChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
            />
            <div className={styles.errorMsg}>
              <svg width="13" height="13" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4" fill="none">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{errorMessages.name}</span>
            </div>
          </div>

          <div className={`${styles.field} ${errors.email ? styles.hasError : ''}`}>
            <label htmlFor="email">
              E-Mail-Adresse <span className={styles.req}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
            />
            <div className={styles.errorMsg}>
              <svg width="13" height="13" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4" fill="none">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{errorMessages.email}</span>
            </div>
          </div>

          <div className={`${styles.field} ${errors.project ? styles.hasError : ''}`}>
            <label htmlFor="project">
              Erzähl uns von deinem Projekt <span className={styles.req}>*</span>
            </label>
            <textarea
              id="project"
              name="project"
              value={values.project}
              onChange={(e) => handleChange('project', e.target.value)}
              onBlur={() => handleBlur('project')}
            />
            <div className={styles.errorMsg}>
              <svg width="13" height="13" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4" fill="none">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{errorMessages.project}</span>
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Nachricht senden
            <svg viewBox="0 0 24 24">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>
    </div>
    </section>
  );
}