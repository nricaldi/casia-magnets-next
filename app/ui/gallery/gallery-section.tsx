"use client";

import "../../globals.css";
import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";
import FadeIn from "../motion/fade-in";
import GalleryGrid from "./gallery-grid";
import styles from "../main/gallery.module.css";

type GallerySectionProps = {
  images: {
    size: number,
    url: string,
    alt: string
  }[]
};

export default function GallerySection({ images }: GallerySectionProps) {
  return (
    <section className={styles.gallery}>
      <div className={styles.galleryContainer}>

        <FadeIn delay={0.08}>
          <h1 className={styles.galleryTitle}>Featured</h1>
        </FadeIn>

        <GalleryGrid images={images} />
      </div>

      <FadeIn delay={0.08 + images.length * 0.04}>
        <Link href="/gallery" className={`button ${styles.viewGalleryButton}`}>
          VIEW FULL GALLERY <LuMoveRight />
        </Link>
      </FadeIn>

      <div className={styles.boxTop}></div>
      <div className={styles.curveTop}></div>

      <div className={styles.boxBottom}></div>
      <div className={styles.curveBottom}></div>
    </section>
  );
}
