import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const t1 = window.setTimeout(() => setOpen(false), 1400);
    return () => window.clearTimeout(t1);
  }, []);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          aria-label="Loading"
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-white/5 blur-2xl" />
            <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-7 py-4 shadow-[0_0_60px_rgba(145,94,255,0.18)]">
              <motion.span
                className="h-2.5 w-2.5 rounded-full bg-accent"
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.65, 1, 0.65],
                }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-sm font-medium tracking-wide text-white/90">Loading experience</span>
              <motion.span
                className="text-sm font-semibold text-primary"
                animate={{
                  opacity: [0.75, 1, 0.75],
                  filter: ['blur(0px)', 'blur(0.25px)', 'blur(0px)'],
                }}
                transition={{ duration: 1.05, repeat: Infinity, ease: 'easeInOut' }}
              >
                •
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

