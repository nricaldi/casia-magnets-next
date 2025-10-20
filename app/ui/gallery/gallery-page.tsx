"use client";

import "../../globals.css";
import FadeIn from "../motion/fade-in";
import GalleryGrid from "./gallery-grid";
import styles from "../main/gallery.module.css";

type GalleryPageProps = {
  images: {
    size: number,
    url: string,
    alt: string
  }[]
};

export default function GalleryPage({ images }: GalleryPageProps) {
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
