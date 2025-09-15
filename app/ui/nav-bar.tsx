"use client";

import styles from './nav-bar.module.css';
import { LuShoppingCart } from "react-icons/lu";
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { usePrefersReducedMotion } from './motion-prefs';

export default function NavBar() {

  const [isActive, setIsActive] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    // Clear any pending close timeouts to avoid race conditions
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    if (!isActive && !isClosing) {
      // Start opening
      setIsActive(true);
      return;
    }

    if (isActive) {
      // Start closing with reverse animation on content
      setIsActive(false);
      setIsClosing(true);
      // Match CSS transition duration (max of opacity/transform)
      closeTimeoutRef.current = setTimeout(() => {
        setIsClosing(false);
        closeTimeoutRef.current = null;
      }, 300);
    }
  };

  const disableMenu = () => {
    setIsActive(false);
  };

  const reduce = usePrefersReducedMotion();

  return (
  <motion.nav
    className={`${styles.navBar} ${isActive ? styles.open : ''} ${isClosing ? styles.closing : ''}`}
    initial={{ opacity: reduce ? 1 : 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1], delay: reduce ? 0 : 0.0 }}
  >

    <div
      className={styles.hamburger}
      tabIndex={0}
      onClick={handleClick}
      onBlur={disableMenu}
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
      >
        <Link href="#" className={styles.navLink}>Home</Link>
      </motion.span>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.16 }}
        className={styles.navLink}
      >
        <Link href="#" className={styles.navLink}>Gallery</Link>
      </motion.span>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.22 }}
        className={styles.navLink}
      >
        <Link href="/">About</Link>
      </motion.span>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.28 }}
        className={styles.navLink}
      >
        <Link href="/"><LuShoppingCart /></Link>
      </motion.span>
    </div>
  </motion.nav>
  );
}
