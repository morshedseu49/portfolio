export function scrollToSection(id, offset = 78) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
  }
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
