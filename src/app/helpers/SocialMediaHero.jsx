"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SocialMediaHero.module.css";

export default function SocialMediaHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const menuPanelVariants = {
    closed: {
      y: "-100%",
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
      },
    },
  };

  const menuLinkVariants = {
    closed: {
      opacity: 0,
      x: -20,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const menuLinks = [
    { name: "Startseite", link: "/" },
    { name: "Dienstleistungen", link: "#services" },
    { name: "Warum wir", link: "#why-us" },
    { name: "Wie wir arbeiten", link: "#arbeiten" },
    { name: "Kontakt", link: "#contact" },
  ];

  return (
    <section id="home" className={styles.hero}>
      {/* Header */}
      <header
        className={`${styles.header} ${
          isMenuOpen ? styles.menuOpen : ""
        }`}
      >
        <div className={styles.logo}>
          <img
            src="/logowhite.png"
            alt="Soap Media"
            className={styles.logoImage}
          />
        </div>

        {/* Desktop Menu */}
        <nav className={`${styles.navMenu} ${styles.desktopNav}`}>
          {menuLinks.map((item) => (
            <a key={item.link} href={item.link}>
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className={`${styles.navMenu} ${styles.mobileNav}`}
              variants={menuPanelVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {menuLinks.map((item) => (
                <motion.a
                  key={item.link}
                  variants={menuLinkVariants}
                  href={item.link}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Mobile Button */}
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Menü umschalten"
        >
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <motion.line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              animate={
                isMenuOpen
                  ? { rotate: 45, y: 6 }
                  : { rotate: 0, y: 0 }
              }
            />

            <motion.line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              animate={
                isMenuOpen
                  ? { opacity: 0 }
                  : { opacity: 1 }
              }
            />

            <motion.line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
              animate={
                isMenuOpen
                  ? { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0 }
              }
            />
          </motion.svg>
        </button>
      </header>

      {/* Hero */}
      <motion.div
        className={styles.heroContent}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          Full-Service
          <br />
          Digitalmarketing-Agentur
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className={styles.squiggleWrapper}
        >
          <svg className={styles.squiggle} viewBox="0 0 60 12">
            <path d="M1 6 Q8 0, 15 6 T29 6 T43 6 T57 6" />
          </svg>
        </motion.div>

        <motion.p variants={itemVariants}>
          Wir helfen Unternehmen, online zu wachsen – mit professionellen
          Websites, Werbekampagnen, Social-Media-Management, SEO und
          leistungsstarken digitalen Strategien. Unser datenbasierter Ansatz
          hilft Ihnen, mehr Kunden zu gewinnen, Ihre Sichtbarkeit zu erhöhen
          und eine stärkere Online-Präsenz aufzubauen.
        </motion.p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className={styles.ctaWrap}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          type: "spring",
          stiffness: 80,
        }}
      >
        <div className={styles.ctaGroup}>
          <motion.a
            href="#contact"
            className={`${styles.btn} ${styles.btnPrimary}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Kontakt
          </motion.a>

          <motion.a
            href="#services"
            className={`${styles.btn} ${styles.btnSecondary}`}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.15)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Unsere Dienstleistungen
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}