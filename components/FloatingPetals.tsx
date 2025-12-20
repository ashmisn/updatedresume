'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function FloatingPetals() {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const petals = Array.from({ length: 15 }, (_, i) => i);

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {petals.map((index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{
            x: Math.random() * dimensions.width,
            y: -50,
            rotate: 0,
          }}
          animate={{
            y: dimensions.height + 100,
            rotate: 360,
            x: Math.random() * dimensions.width,
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <ellipse
              cx="10"
              cy="10"
              rx="3"
              ry="8"
              fill="#FFB6C1"
              opacity="0.6"
              transform="rotate(0 10 10)"
            />
            <ellipse
              cx="10"
              cy="10"
              rx="3"
              ry="8"
              fill="#FFC0CB"
              opacity="0.6"
              transform="rotate(72 10 10)"
            />
            <ellipse
              cx="10"
              cy="10"
              rx="3"
              ry="8"
              fill="#FFB6C1"
              opacity="0.6"
              transform="rotate(144 10 10)"
            />
            <ellipse
              cx="10"
              cy="10"
              rx="3"
              ry="8"
              fill="#FFC0CB"
              opacity="0.6"
              transform="rotate(216 10 10)"
            />
            <ellipse
              cx="10"
              cy="10"
              rx="3"
              ry="8"
              fill="#FFB6C1"
              opacity="0.6"
              transform="rotate(288 10 10)"
            />
            <circle cx="10" cy="10" r="2" fill="#FFD700" opacity="0.8" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
