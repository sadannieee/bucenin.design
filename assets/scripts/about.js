document.querySelectorAll('.testi-hover').forEach(el => {
  el.addEventListener('mouseenter', () => el.style.borderColor = 'var(--accent)');
  el.addEventListener('mouseleave', () => el.style.borderColor = 'transparent');
});
if (window.innerWidth < 900) {
  const tw = document.querySelector('.timeline-wrap');
  if (tw) tw.style.gridTemplateColumns = '1fr';
}
