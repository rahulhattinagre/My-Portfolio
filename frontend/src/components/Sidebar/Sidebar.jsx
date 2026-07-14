import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Home,
  Menu,
  Shield,
  Terminal,
  Code,
  FileText,
  Contact2,
} from 'lucide-react';


import profileImg from '../../assets/images/Profile image.png';
import { scrollToHash } from '../../utils/ScrollToHash.js';

const nav = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: Terminal },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'skills', label: 'Skills', icon: Shield },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'contact', label: 'Contact', icon: Contact2 },
  { id: 'resume', label: 'Resume', icon: FileText },
];

function getScrollSpyActiveSection(ids) {
  const topOffset = 120;
  const candidates = ids
    .map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      return { id, dist: Math.abs(rect.top - topOffset), rectTop: rect.top };
    })
    .filter(Boolean);

  const above = candidates.filter((c) => c.rectTop - topOffset <= 0);
  if (above.length) {
    above.sort((a, b) => b.rectTop - a.rectTop);
    return above[0].id;
  }

  if (!candidates.length) return ids[0];
  candidates.sort((a, b) => a.dist - b.dist);
  return candidates[0].id;
}

export function Sidebar() {
  const ids = useMemo(() => nav.map((n) => n.id), []);
  const [activeId, setActiveId] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setActiveId(getScrollSpyActiveSection(ids));
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const profileCard = (
    <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-cyan-400 shadow-lg">
      <img
        src={profileImg}
        alt="Rahul Hattinagre"
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,194,168,.35),transparent_55%)]" />
    </div>
  );

  function onNavClick(id) {
    scrollToHash('#' + id);
    setMobileOpen(false);
  }


  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden h-screen w-[240px] shrink-0 md:fixed md:left-0 md:top-0 md:block">
        <div className="h-full border-r border-white/5 bg-bg/30 backdrop-blur-md">
          <div className="flex h-full flex-col px-5 py-7">
            <div className="space-y-3">
              {profileCard}
              <div className="text-center">
                <div className="text-sm font-semibold tracking-wide text-white/90">Rahul</div>
                <div className="text-[12px] text-secondaryText">Hattinagre</div>
              </div>
            </div>

            <nav className="mt-6 space-y-1">
              {nav.map((item) => {
                const isActive = activeId === item.id;
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={'#' + item.id}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(item.id);
                    }}

                    className={
                      'group flex items-center gap-3 rounded-2xl px-3 py-2 text-sm transition-all ' +
                      (isActive
                        ? 'bg-[rgba(0,194,168,.12)] text-white shadow-[0_0_0_1px_rgba(0,194,168,.25)]'
                        : 'text-secondaryText hover:text-white hover:bg-white/5')
                    }
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span
                      className={
                        isActive
                          ? 'text-primary'
                          : 'text-white/65 group-hover:text-primary'
                      }
                    >
                      <Icon size={18} />
                    </span>
                    <span className="truncate">{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>
      {/* Mobile hamburger */}
      <div className="fixed left-0 top-0 z-50 md:hidden">
        <button
          type="button"
          className="m-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/90 backdrop-blur-md"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setMobileOpen(false)}
              role="button"
              tabIndex={-1}
              aria-label="Close menu backdrop"
            />
            <motion.aside
              className="absolute left-0 top-0 h-full w-[280px] border-r border-white/5 bg-bg/90 backdrop-blur-md"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 250, damping: 28 }}
            >
              <div className="flex h-full flex-col px-5 py-7">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold tracking-wide text-white/90">Menu</div>
                  <button
                    className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-5 space-y-3">
                  {profileCard}
                  <div className="text-center">
                    <div className="text-sm font-semibold tracking-wide text-white/90">Rahul</div>
                    <div className="text-[12px] text-secondaryText">Hattinagre</div>
                  </div>
                  <div className="flex justify-center">
                    <a
                      href="/Rahul Resume.pdf"
                      download
                      className="rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-black shadow-[0_0_35px_rgba(0,194,168,0.35)] hover:brightness-110"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
                <nav className="mt-8 space-y-1">
                  {nav.map((item) => {
                    const isActive = activeId === item.id;
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.id}
                        href={item.id === 'resume' ? '/Rahul Resume.pdf' : '#' + item.id}
                        onClick={(e) => {
                          if (item.id === 'resume') return;
                          e.preventDefault();
                          onNavClick(item.id);
                        }}
                        download={item.id === 'resume' ? true : undefined}
                        className={
                          'group flex items-center gap-3 rounded-2xl px-3 py-2 text-sm transition-all ' +
                          (isActive
                            ? 'bg-[rgba(0,194,168,.12)] text-white shadow-[0_0_0_1px_rgba(0,194,168,.25)]'
                            : 'text-secondaryText hover:text-white hover:bg-white/5')
                        }
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span
                          className={
                            isActive
                              ? 'text-primary'
                              : 'text-white/65 group-hover:text-primary'
                          }
                        >
                          <Icon size={18} />
                        </span>
                        <span className="truncate">{item.label}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}