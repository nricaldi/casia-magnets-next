"use client"

import styles from "./magnet.module.css";
import Image from "next/image";
import { useRef } from "react";
import { useCartDispatch } from "../../providers/cart-provider";
import type { Image as MagnetImage } from "../../types/image";

type MagnetProps = {
  image: MagnetImage
};

export default function Magnet({ image }: MagnetProps) {
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


  const dispatch = useCartDispatch();
  const handleClick = () => {
    dispatch({
      type: 'added',
      item: {
        id: image.id,
        url: image.url,
        size: image.size,
        alt: image.alt
      }
    });
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
      <button className={styles.addButton} onClick={handleClick}>Add to cart</button>

    </div>
  );
}

