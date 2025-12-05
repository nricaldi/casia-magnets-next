"use client";

import FadeIn from "../motion/fade-in";
import Reveal from "../motion/reveal";
import Magnet from "../gallery/magnet";
import styles from "../main/gallery.module.css";
import type { Image as MagnetImage} from "../../types/image";

type GalleryGridProps = {
  images: MagnetImage[]
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className={styles.galleryGrid}>
      {images.map((image, i) => {
        if (i < 3) {
          // Top three: reveal on initial load
          return (
            <FadeIn key={i} delay={0.02 + i * 0.04} y={0}>
              <Magnet image={image} />
            </FadeIn>
          );
        }
        // Rest: reveal on scroll into view
        return (
          <Reveal key={i} threshold={0.2} delay={0.01}>
            <Magnet image={image} />
          </Reveal>
        );
      })}
    </div>
  );
}
