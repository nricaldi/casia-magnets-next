
import GalleryPage from '../ui/gallery/gallery-page';

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
    <section>

      <GalleryPage images={images} />

    </section>
  );
}
