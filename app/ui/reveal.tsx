"use client";

import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./motion-prefs";

type RevealProps = {
  children: React.ReactNode;
  once?: boolean;
  threshold?: number | number[];
  rootMargin?: string;
  delay?: number;
  duration?: number;
  y?: number;
  as?: React.ElementType;
  className?: string;
};

export default function Reveal({
  children,
  once = true,
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
  delay = 0,
  duration = 0.5,
  y = 6,
  as: As = motion.div,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { root: null, rootMargin, threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once, rootMargin, threshold]);

  return (
    <As
      ref={ref as any}
      className={className}
      initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : y }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : (reduce ? 0 : y) }}
      transition={{ duration: reduce ? 0 : duration, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </As>
  );
}
