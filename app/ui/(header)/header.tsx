"use client";

import localFont from 'next/font/local'
import styles from './header.module.css';
import FadeIn from "../(motion)/fade-in";
import NavBar from "./nav-bar";

const highTide = localFont({
  display: 'swap',
  src: [
    {
      path: '../../../public/fonts/high-tide-regular.otf',
      weight: '400',
      style: 'regular'
    },
    {
      path: '../../../public/fonts/high-tide-bold.otf',
      weight: '600',
      style: 'bold'
    },
    {
      path: '../../../public/fonts/high-tide-sans.otf',
      weight: '400',
      style: 'sans'
    },
  ],
});

export default function Header() {

  return (
    <header className={styles.header}>

      <FadeIn delay={0.02}>
        <h3 className={`${styles.typeLogo} ${highTide.className}`}>Casia Magnets</h3>
      </FadeIn>

      <NavBar />

    </header>
  );
}
