import styles from './hero.module.css';
import logo from '../../public/logo.svg'
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {

  const numImages = 9;
  const images = [];
  const imageSize = 500;

  for (let i=0; i<numImages; i++) {
    images.push({
      size: imageSize,
      url: `https://picsum.photos/${imageSize}`,
      alt: 'Random Image'
    });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.fluidBackground}>
        <div className={styles.boxBottom}></div>
        <div className={styles.curveBottom}></div>
      </div>

      {/* Background decorative text */}
      <Image
        className={styles.logo}
        src={logo}
        width={500}
        height={500}
        alt="Logo"
      />
      {/* Curved design elements */}

      <div className={styles.heroContentContainer}>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <p className={styles.tagline}>IT'S THE LITTLE THINGS THAT COUNT</p>
          <h1 className={styles.title}>Create your own custom magnets</h1>
          <p className={styles.subtitle}>
            Turn your favorite memories into stunning 2x2 magnets. Choose from<br />
            curated our gallery or upload your own!
          </p>

          <Link href="/gallery" className={`${styles.button} ${styles.ctaButton}`}>
            START MY ORDER →
          </Link>

          <p className={styles.orderInfo}>* One order includes 9 magnets for $25 + shipping</p>
        </div>

      </div>

        {/*

        Image Gallery Grid

          <div className={styles.galleryGrid}>
            {images.map((image, index) => {
              return (
                <div className={`${styles.imageCard} ${styles.featured}`} key={index}>
                  <Image
                    className={styles.image}
                    src={image.url}
                    alt={`${image.alt} - ${index + 1}`}
                    width={image.size}
                    height={image.size}
                  />
                  <span className={styles.featuredTag}>Featured</span>
                  <button className={styles.addButton}>+</button>
                </div>
              );
            })}
          </div>


        <div className={styles.viewGallery}>
          <Link href="/gallery" className={styles.viewGalleryButton}>
            VIEW FULL GALLERY →
          </Link>
        </div>

      */}
    </section>
  );
}
