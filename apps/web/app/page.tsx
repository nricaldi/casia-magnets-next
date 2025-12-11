"use client"

import styles from "./page.module.css";

import Hero from "./ui/main/hero"
import GallerySection from "./ui/gallery/gallery-section"
import About from "./ui/main/about"

export default function Home() {

  // TODO - get featured images from API
  const numImages =  9;
  const imageSize = 300;
  const randNum = Math.random();

  const images = Array.from({ length: numImages }, (_, i) => ({
    id: i,
    size: imageSize,
    url: `https://picsum.photos/${imageSize}?random=${i+randNum}`,
    alt: "Random Image",
  }));

  return (
    <div className={styles.page}>

      <main className={styles.main}>

        <Hero />

        <GallerySection images={images}/>

        <About />

      </main>

    </div>
  );
}
