"use client";

import "../../globals.css";
import styles from "./gallery.module.css";
import Link from "next/link";
import Image from "next/image";
import { LuMoveRight } from "react-icons/lu";
import { useRef } from "react";
import FadeIn from "../(motion)/fade-in";
import Reveal from "../(motion)/reveal";

type GalleryProps = {
  fullPage?: boolean;
};

export default function Gallery({ fullPage = false }: GalleryProps) {
  const numImages = fullPage ? 50 : 9;
  const imageSize = 300;
  const randNum = Math.random();

  const images = Array.from({ length: numImages }, (_, i) => ({
    size: imageSize,
    url: `https://picsum.photos/${imageSize}?random=${i+randNum}`,
    alt: "Random Image",
  }));

  const titleText = fullPage ? 'Gallery' : 'Featured';

  return (
    <section className={`${styles.gallery} ${ fullPage ? styles.fullPage : '' }`}>
      <div className={styles.galleryContainer}>

        <h1 className={styles.galleryTitle}>{titleText}</h1>


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
      </div>

      {!fullPage &&
        <FadeIn delay={0.08 + images.length * 0.04}>
          <Link href="/gallery" className={`button ${styles.viewGalleryButton}`}>
            VIEW FULL GALLERY <LuMoveRight />
          </Link>
        </FadeIn>
      }

      <div className={styles.boxTop}></div>
      <div className={styles.curveTop}></div>

      <div className={styles.boxBottom}></div>
      <div className={styles.curveBottom}></div>
    </section>
  );
}

function Magnet({
  image,
}: {
  image: { size: number; url: string; alt: string };
}) {
  const elRef = useRef<HTMLDivElement | null>(null);

  // animation state kept in refs (no re-renders)
  const rafRef = useRef<number | null>(null);
  const tiltCurrent = useRef({ x: 0, y: 0 });
  const tiltTarget = useRef({ x: 0, y: 0 });

  const maxTilt = 10; // deg
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const startRAF = () => {
    if (rafRef.current) return;
    const tick = () => {
      const k = 0.12; // easing
      tiltCurrent.current.x = lerp(tiltCurrent.current.x, tiltTarget.current.x, k);
      tiltCurrent.current.y = lerp(tiltCurrent.current.y, tiltTarget.current.y, k);

      const el = elRef.current!;
      el.style.transform =
        `rotateX(${tiltCurrent.current.x}deg) ` +
        `rotateY(${tiltCurrent.current.y}deg) ` +
        `scale(var(--scale, 1))`;

      // stop when settled
      if (
        Math.abs(tiltCurrent.current.x - tiltTarget.current.x) < 0.01 &&
        Math.abs(tiltCurrent.current.y - tiltTarget.current.y) < 0.01
      ) {
        rafRef.current = null;
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = elRef.current!;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const nx = (e.clientX - cx) / (rect.width / 2);  // -1..1
    const ny = (e.clientY - cy) / (rect.height / 2); // -1..1

    // target tilt (invert X for natural feel)
    tiltTarget.current = { x: -ny * maxTilt, y: nx * maxTilt };

    // update shine position (as %)
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--shine-x", `${px}%`);
    el.style.setProperty("--shine-y", `${py}%`);

    startRAF();
  };

  const onPointerEnter = () => {
    const el = elRef.current!;
    el.classList.add(styles.hover);
    startRAF();
  };

  const onPointerLeave = () => {
    const el = elRef.current!;
    // ease back to neutral; do NOT move shine to center (just fade via CSS)
    tiltTarget.current = { x: 0, y: 0 };
    el.classList.remove(styles.hover);
    startRAF();
  };

  return (
    <div className={styles.imageCard}>
      <div
        ref={elRef}
        className={styles.magnet}
        onPointerEnter={onPointerEnter}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        // set initial shine position out of view so it's invisible until hover
        // use CSS custom properties without any-casts
        style={{ ["--shine-x" as string]: "-100%", ["--shine-y" as string]: "-100%" }}
      >
        <Image
          className={styles.image}
          src={image.url}
          alt={image.alt}
          width={image.size}
          height={image.size}
        />
      </div>

      {/* TODO - do we need these?
          <span className={styles.featuredTag}>Featured</span>
          <button className={styles.addButton}>+</button>
      */}
    </div>
  );
}
