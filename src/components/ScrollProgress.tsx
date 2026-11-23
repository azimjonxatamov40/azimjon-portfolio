"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[200] h-[2px] w-full origin-left bg-gradient-to-r from-[#8b7bff] to-[#4fd8e0]"
    />
  );
}
