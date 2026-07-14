export function scrollToHash(hash) {
  const id = String(hash || '').replace('#', '');
  if (!id) return;

  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

