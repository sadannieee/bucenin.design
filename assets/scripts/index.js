const hdr = document.getElementById('header');
window.addEventListener('scroll', () => hdr.classList.toggle('scrolled', scrollY > 20));
hdr.classList.add('scrolled');
