import { useEffect, useState } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={
        'fixed inset-x-0 top-0 z-50 transition-all ' +
        (scrolled ? 'bg-bg/50 backdrop-blur-md border-b border-white/5' : 'bg-transparent border-b border-transparent')
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary/70 to-accent/40 shadow-[0_0_30px_rgba(145,94,255,0.35)]" />
          <span className="text-sm font-semibold tracking-wide">RAHUL // PORTFOLIO</span>
        </div>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm text-secondaryText hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              <span>{item.label}</span>
              <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => setDarkMode((v) => !v)}
            aria-label="Toggle theme"
            className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            {darkMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a
            href="#contact"
            className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-black shadow-[0_0_30px_rgba(145,94,255,0.4)] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open navigation"
        >
          <Menu size={18} />
        </button>
      </div>

      {mobileOpen ? (
        <div className="md:hidden border-t border-white/5 bg-bg/60 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="grid gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-secondaryText hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-xl bg-primary px-3 py-2 text-center text-sm font-medium text-black"
                onClick={() => setMobileOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

