"use client";

import styles from './nav-bar.module.css';
import Link from 'next/link';

import React, { useState } from 'react';

export default function NavBar() {

  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    setIsActive(!isActive);
  };

  // <nav className={`${styles.navBar} ${isActive ? 'open' : ''}`}>

  return (
  <nav className={`${styles.navBar} ${isActive ? styles.open : ''}`}>

    <div className={styles.hamburger} onClick={handleClick}>
      <div className={styles.hamburgerLine}></div>
      <div className={styles.hamburgerLine}></div>
      <div className={styles.hamburgerLine}></div>
    </div>

    <Link href="/" className={styles.navLink}>Home</Link>

    <Link href="/" className={styles.navLink}>Gallery</Link>

    <Link href="/" className={styles.navLink}>About</Link>

    <Link href="/" className={styles.navLink}>Contact</Link>

    <Link href="/" className={styles.navLink}>CART</Link>
  </nav>
  );
}
