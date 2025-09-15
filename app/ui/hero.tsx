import '../globals.css';
import styles from './hero.module.css';
import logo from '../../public/logo.svg'
import Link from 'next/link';
import Image from 'next/image';
import { LuMoveRight } from "react-icons/lu";
import FadeIn from './fade-in';

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.heroContentContainer}>

        {/* Hero Content */}
        <div className={styles.heroContent}>

          <FadeIn delay={0.02} duration={0.6} y={0}>
            <Image
              className={styles.logo}
              src={logo}
              width={500}
              height={500}
              alt="Logo"
            />
          </FadeIn>

          <FadeIn delay={0.04}>
            <p className={styles.tagline}>{`It's the litle things that count`}</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className={styles.title}>Small magnets. Big memories.</h1>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className={styles.subtitle}>Choose from our curated gallery or upload your own. Printed, laminated, and ready to display. </p>
          </FadeIn>

          <FadeIn delay={0.16}>
            <Link href="/gallery" className={`button ${styles.ctaButton}`}>BUILD MY SET <LuMoveRight /></Link>
          </FadeIn>
          <FadeIn delay={0.20}>
            <p className={styles.subText}>* One order includes <strong>9</strong> magnets &bull; <strong>$25 + shipping</strong></p>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
