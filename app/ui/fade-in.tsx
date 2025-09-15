"use client";

import { motion } from "motion/react";
import React from "react";
import { usePrefersReducedMotion } from "./motion-prefs";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  as?: React.ElementType;
  className?: string;
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  y = 6,
  as: As = motion.div,
  className,
}: FadeInProps) {
  const reduce = usePrefersReducedMotion();
  const d = reduce ? 0 : duration;
  const dy = reduce ? 0 : y;
  const de = reduce ? 0 : delay;
  return (
    <As
      className={className}
      initial={{ opacity: reduce ? 1 : 0, y: dy }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: d, delay: de, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </As>
  );
}
