'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function AnimatedCursor() {
  const cursorRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cursorRef}
      className="cursor-dot"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        backgroundColor: '#f39c12',
        borderRadius: '50%',
        pointerEvents: 'none',
        translateX: mouseX,
        translateY: mouseY,
        zIndex: 9999,
      }}
    />
  );
}
