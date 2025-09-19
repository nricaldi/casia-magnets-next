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
            width={400}
            height={400}
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
                <a className={styles.link} href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a className={styles.link} href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a className={styles.link} href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>Contact</h3>
            <ul className={styles.list}>
              <li><a className={styles.link} href="mailto:hello@casiamagnets.com">hello@casiamagnets.com</a></li>
              <li><a className={styles.link} href="tel:+15555555555">(555)-555-5555</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}
