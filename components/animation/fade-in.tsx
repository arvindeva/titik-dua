"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  from: string;
  threshold?: number;
}
export default function FadeIn({
  children,
  from,
  threshold = 0.5,
}: FadeInProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });
  if (from === "left") {
    return (
      <motion.div
        ref={ref}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }
  if (from === "right") {
    return (
      <motion.div
        ref={ref}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }
  if (from === "top") {
    return (
      <motion.div
        ref={ref}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }
  if (from === "bottom") {
    return (
      <motion.div
        ref={ref}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div
      ref={ref}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
