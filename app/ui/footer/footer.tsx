import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.footerContainer}>
        <div className={styles.brand}>
          <Image
            className={styles.logo}
            src="/logo.svg"
            alt="Casia Magnets"
            width={180}
            height={160}
            priority={false}
          />
        </div>

        <nav className={styles.columns} aria-label="Footer navigation">
          <div className={styles.column}>
            <h3 className={styles.heading}>Site</h3>
            <ul className={styles.list}>
              <li><Link className={styles.link} href="/">Home</Link></li>
              <li><Link className={styles.link} href="/gallery">Gallery</Link></li>
              <li><Link className={styles.link} href="/about">About Us</Link></li>
              <li><Link className={styles.link} href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>Social</h3>
            <ul className={styles.list}>
              <li>
                <a className={styles.link} href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram CM</a>
              </li>
              <li>
                <a className={styles.link} href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram WSH</a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>Contact</h3>
            <ul className={styles.list}>
              <li><a className={styles.link} href="mailto:hello@casiamagnets.com">adclaros@gmail.com</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}
