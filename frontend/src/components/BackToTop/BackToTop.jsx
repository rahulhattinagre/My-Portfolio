import { useEffect, useState } from 'react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={
        'fixed bottom-6 right-4 z-50 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-secondaryText backdrop-blur-md transition-all ' +
        (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none')
      }
    >
      ↑ Back to top
    </a>
  );
}

