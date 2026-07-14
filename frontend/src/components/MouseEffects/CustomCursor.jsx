import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 25, stiffness: 300 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 300 });

  useEffect(() => {
    const isTouch = matchMedia('(pointer: coarse)').matches;
    setEnabled(!isTouch);
    if (isTouch) return;

    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [enabled, mouseX, mouseY]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Tab') setEnabled(true);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[110]"
      style={{ translateX: springX, translateY: springY }}
      aria-hidden="true"
    >
      <div className="h-3.5 w-3.5 rounded-full border border-accent/70 bg-accent/10 shadow-[0_0_35px_rgba(0,255,255,0.35)]" />
    </motion.div>
  );
}

