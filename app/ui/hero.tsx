import '../globals.css';
import styles from './hero.module.css';
import logo from '../../public/logo.svg'
import Link from 'next/link';
import Image from 'next/image';
import { LuMoveRight } from "react-icons/lu";

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.heroContentContainer}>

        {/* Hero Content */}
        <div className={styles.heroContent}>

          <Image
            className={styles.logo}
            src={logo}
            width={500}
            height={500}
            alt="Logo"
          />

          <p className={styles.tagline}>{`It's the litle things that count`}</p>
          <h1 className={styles.title}>Small magnets. Big memories.</h1>
          <p className={styles.subtitle}>Choose from our curated gallery or upload your own. Printed, laminated, and ready to display. </p>

          <Link href="/gallery" className={`button ${styles.ctaButton}`}>BUILD MY SET <LuMoveRight /></Link>
          <p className={styles.subText}>* One order includes <strong>9</strong> magnets &bull; <strong>$25 + shipping</strong></p>
        </div>

      </div>
    </section>
  );
}
