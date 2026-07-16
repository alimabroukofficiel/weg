import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const navLinks = [
    { name: "Start", link: "/" },
    { name: "Impressum", link: "/impressum" },
    { name: "Datenschutz", link: "/datenschutz" },
    { name: "AGB", link: "/agb" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      link: "https://facebook.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="#fff" stroke="none">
          <path d="M15 3h-2a5 5 0 00-5 5v3H6v4h2v6h4v-6h3l1-4h-4V8a1 1 0 011-1h3z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      link: "https://instagram.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src="/logoblue.png" alt="Soap Media" className={styles.logoImage} />
        </div>

        <div className={styles.navLinks}>
          {navLinks.map((item) => (
            <Link key={item.link} href={item.link}>
              {item.name}
            </Link>
          ))}
        </div>

        <div className={styles.socialIcons}>
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>Soap Media. Alle Rechte vorbehalten. &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}