import Image from "next/image";
import styles from "./page.module.css";

import NavBar from "./ui/nav-bar"
import Hero from "./ui/hero"

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <NavBar />
      </header>

      <main className={styles.main}>

        <Hero />

      </main>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  );
}
