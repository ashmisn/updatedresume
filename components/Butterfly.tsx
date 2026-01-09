'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ButterflyProps {
  index: number;
}

export default function Butterfly({ index }: ButterflyProps) {
  const [path, setPath] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const generatePath = () => {
      const newPath = [];
      const numPoints = 5;
      const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
      const height = typeof window !== 'undefined' ? window.innerHeight : 800;

      for (let i = 0; i < numPoints; i++) {
        newPath.push({
          x: Math.random() * width,
          y: Math.random() * height,
        });
      }
      return newPath;
    };

    setPath(generatePath());
  }, []);

  const colors = ['#FFB6C1', '#DDA0DD', '#B0E0E6'];
  const color = colors[index % colors.length];

  return (
    <motion.div
      className="hidden sm:block fixed pointer-events-none z-20"
      animate={
        path.length > 0
          ? {
              x: path.map((p) => p.x),
              y: path.map((p) => p.y),
            }
          : {}
      }
      transition={{
        duration: 20 + index * 5,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        top: 0,
        left: 0,
      }}
    >
      <svg width="30" height="30" viewBox="0 0 30 30">
        <g>
          <ellipse
            cx="10"
            cy="15"
            rx="8"
            ry="12"
            fill={color}
            opacity="0.7"
            transform="rotate(-20 10 15)"
          />
          <ellipse
            cx="20"
            cy="15"
            rx="8"
            ry="12"
            fill={color}
            opacity="0.7"
            transform="rotate(20 20 15)"
          />
          <circle cx="15" cy="15" r="2" fill="#333" />
        </g>
      </svg>
    </motion.div>
  );
}
