"use client"

import styles from "./page.module.css";

import Hero from "./ui/(main)/hero"
import Gallery from "./ui/(main)/gallery"
import About from "./ui/(main)/about"

export default function Home() {

  return (
    <div className={styles.page}>

      <main className={styles.main}>

        <Hero />

        <Gallery />

        <About />

      </main>

    </div>
  );
}
