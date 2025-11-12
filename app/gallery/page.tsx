import "../globals.css";
import FadeIn from "../ui/motion/fade-in";
import GalleryGrid from "../ui/gallery/gallery-grid";
import styles from "../ui/main/gallery.module.css";

export default function Gallery() {

  // TODO - get featured images from API
  const numImages =  50;
  const imageSize = 300;
  const randNum = Math.random();

  const images = Array.from({ length: numImages }, (_, i) => ({
    size: imageSize,
    url: `https://picsum.photos/${imageSize}?random=${i+randNum}`,
    alt: "Random Image",
  }));

  return (
    <section className={`${styles.gallery} ${styles.fullPage}`}>

      <div className={styles.galleryContainer}>

        <FadeIn delay={0.08}>
          <h1 className={styles.galleryTitle}>Gallery</h1>
        </FadeIn>

        <GalleryGrid images={images} />
      </div>

    </section>
  );
}
