"use client";

import styles from './nav-bar.module.css';
import { LuShoppingCart } from "react-icons/lu";
import Link from 'next/link';
import React, { useEffect,useState, useRef } from 'react';
import { motion } from 'motion/react';
import { usePrefersReducedMotion } from '../(motion)/motion-prefs';

export default function NavBar() {

  const [isActive, setIsActive] = useState(false);
  const navMenu = useRef<HTMLDivElement | null>(null);

  // Add/remove the outside-click listener whenever the menu is open/closed
  useEffect(() => {
    if (!isActive) return;

    const onDocumentClick = (e: MouseEvent) => {
      const menu = navMenu.current;
      if (!menu) return;

      // works with shadow DOM; fallback to contains for older envs
      const inPath = typeof e.composedPath === "function"
        ? e.composedPath().includes(menu)
        : menu.contains(e.target as Node);

      if (!inPath) setIsActive(false);
    };

    document.addEventListener("click", onDocumentClick);
    return () => document.removeEventListener("click", onDocumentClick);
  }, [isActive]);

  const disableMenu = () => {
    setIsActive(false);
  };

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  const reduce = usePrefersReducedMotion();

  return (
  <motion.nav
    className={`${styles.navBar} ${isActive ? styles.open : ''}`}
    initial={{ opacity: reduce ? 1 : 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1], delay: reduce ? 0 : 0.0 }}
    ref={navMenu}
  >

    <div
      className={styles.hamburger}
      tabIndex={0}
      onClick={handleMenuClick}
    >
      <motion.div
        className={styles.hamburgerLine}
        initial={{ opacity: reduce ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduce ? 0 : 0.24, ease: [0.22, 1, 0.36, 1], delay: reduce ? 0 : 0.06 }}
      />
      <motion.div
        className={styles.hamburgerLine}
        initial={{ opacity: reduce ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduce ? 0 : 0.24, ease: [0.22, 1, 0.36, 1], delay: reduce ? 0 : 0.10 }}
      />
      <motion.div
        className={styles.hamburgerLine}
        initial={{ opacity: reduce ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduce ? 0 : 0.24, ease: [0.22, 1, 0.36, 1], delay: reduce ? 0 : 0.14 }}
      />
    </div>

    <div className={styles.menu}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.10 }}
        className={styles.navLink}
        onClick={disableMenu}
      >
        <Link href="/" className={styles.navLink}>Home</Link>
      </motion.span>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.16 }}
        className={styles.navLink}
        onClick={disableMenu}
      >
        <Link href="/gallery" className={styles.navLink}>Gallery</Link>
      </motion.span>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.22 }}
        className={styles.navLink}
        onClick={disableMenu}
      >
        <Link href="/">About</Link>
      </motion.span>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.28 }}
        className={styles.navLink}
        onClick={disableMenu}
      >
        <Link href="/"><LuShoppingCart /></Link>
      </motion.span>
    </div>
  </motion.nav>
  );
}
