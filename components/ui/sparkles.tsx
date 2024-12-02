"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const generateSparkle = () => ({
  id: Math.random(),
  createdAt: Date.now(),
  size: Math.random() * 10 + 10,
  style: {
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    zIndex: 2,
  },
});

interface SparklesProps {
  children: React.ReactNode;
  className?: string;
}

export function Sparkles({ children, className = "" }: SparklesProps) {
  const [sparkles, setSparkles] = useState<Array<any>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const sparkle = generateSparkle();
      setSparkles(sparkles => [...sparkles, sparkle]);
      setTimeout(() => {
        setSparkles(sparkles => sparkles.filter(s => s.id !== sparkle.id));
      }, 500);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`inline-block relative ${className}`}>
      {sparkles.map(sparkle => (
        <motion.span
          key={sparkle.id}
          className="absolute inline-block"
          style={sparkle.style}
          initial={{ scale: 0, rotate: 0 }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 0.5 }}
        >
          ✨
        </motion.span>
      ))}
      {children}
    </span>
  );
}