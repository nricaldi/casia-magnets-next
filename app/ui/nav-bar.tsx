"use client";

import styles from './nav-bar.module.css';
import { LuShoppingCart } from "react-icons/lu";
import Link from 'next/link';

import React, { useState, useRef } from 'react';

export default function NavBar() {

  const [isActive, setIsActive] = useState(true);
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

  return (
  <nav className={`${styles.navBar} ${isActive ? styles.open : ''} ${isClosing ? styles.closing : ''}`}>

    <div
      className={styles.hamburger}
      tabIndex={0}
      onClick={handleClick}
      onBlur={disableMenu}
    >
      <div className={styles.hamburgerLine}></div>
      <div className={styles.hamburgerLine}></div>
      <div className={styles.hamburgerLine}></div>
    </div>

    <div className={styles.menu}>
      <Link href="#" className={styles.navLink}>Home</Link>

      <Link href="#" className={styles.navLink}>Gallery</Link>

      <Link href="/" className={styles.navLink}>About</Link>

      <Link href="/" className={styles.navLink}>
        <LuShoppingCart />
      </Link>
    </div>
  </nav>
  );
}
