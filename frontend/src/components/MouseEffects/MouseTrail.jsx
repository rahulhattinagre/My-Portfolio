import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function MouseTrail() {
  const [enabled, setEnabled] = useState(true);
  const points = useRef([]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const isTouch = matchMedia('(pointer: coarse)').matches;
    setEnabled(!isTouch);
    if (isTouch) return;

    const onMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [cursorX, cursorY]);

  useEffect(() => {
    if (!enabled) return;
    points.current = points.current.slice(0, 10);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[40]">
      {Array.from({ length: 8 }).map((_, idx) => {
        const delay = idx * 0.08;
        const sx = useSpring(cursorX, { damping: 40 + idx * 3, stiffness: 300 });
        const sy = useSpring(cursorY, { damping: 40 + idx * 3, stiffness: 300 });
        return (
          <motion.div
            key={idx}
            className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full border border-accent/50 bg-accent/10"
            style={{ translateX: sx, translateY: sy, opacity: 0.65 - idx * 0.06 }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay, duration: 0.4 }}
          />
        );
      })}
    </div>
  );
}

