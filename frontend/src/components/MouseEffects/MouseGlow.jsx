import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function MouseGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const sx = useSpring(x, { damping: 35, stiffness: 250 });
  const sy = useSpring(y, { damping: 35, stiffness: 250 });

  useEffect(() => {
    const isTouch = matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0"
      style={{ translateX: sx, translateY: sy }}
    >
      <div className="h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.25),transparent_55%)] blur-2xl" />
    </motion.div>
  );
}

