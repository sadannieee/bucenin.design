document.getElementById('burger').addEventListener('click', () => document.getElementById('mobile-menu').classList.toggle('open'));

const io = new IntersectionObserver(e => e.forEach(x => {
  if (x.isIntersecting) { x.target.classList.add('visible'); io.unobserve(x.target); }
}), { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
