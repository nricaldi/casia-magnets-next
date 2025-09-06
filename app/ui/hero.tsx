import '../globals.css';
import styles from './hero.module.css';
import logo from '../../public/logo.svg'
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Curved design elements */}
      <div className={styles.fluidBackground}></div>
      <div className={styles.boxBottom}></div>
      <div className={styles.curveBottom}></div>

      {/* Background decorative text */}
      <Image
        className={styles.logo}
        src={logo}
        width={500}
        height={500}
        alt="Logo"
      />

      <div className={styles.heroContentContainer}>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <p className={styles.tagline}>It's the little things that count</p>
          <h1 className={styles.title}>Create your own custom magnets</h1>
          <p className={styles.subtitle}>
            Turn your favorite memories into stunning 2x2 magnets. Choose from our curated gallery or upload your own!
          </p>

          <Link href="/gallery" className={`button ${styles.ctaButton}`}>START MY ORDER →</Link>

          <p className={styles.subText}>* One order includes 9 magnets for $25 + shipping</p>
        </div>

      </div>
    </section>
  );
}
