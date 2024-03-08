"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import * as React from "react";

interface FadeInProps {
  children: React.ReactNode;
}
export default function FadeIn({ children }: FadeInProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <motion.div
      ref={ref}
      animate={{ x: inView ? 0 : -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
