import styles from "./page.module.css";
import localFont from 'next/font/local'

import NavBar from "./ui/nav-bar"
import Hero from "./ui/hero"
import Gallery from "./ui/gallery"
import About from "./ui/about"
import Footer from "./ui/footer"

const highTide = localFont({
  display: 'swap',
  src: [
    {
      path: '../public/fonts/high-tide-regular.otf',
      weight: '400',
      style: 'regular'
    },
    {
      path: '../public/fonts/high-tide-bold.otf',
      weight: '600',
      style: 'bold'
    },
    {
      path: '../public/fonts/high-tide-sans.otf',
      weight: '400',
      style: 'sans'
    },
  ],
});

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>

        <h3 className={`${styles.typeLogo} ${highTide.className}`}>Casia Magnets</h3>

        <NavBar />

      </header>

      <main className={styles.main}>

        <Hero />

        <Gallery />

        <About />

      </main>

      <Footer />
    </div>
  );
}
