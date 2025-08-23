// --- Mobile sheet toggle
const toggles = document.querySelectorAll('.nav-toggle');
const sheet = document.getElementById('mobile-sheet');
const updateAria = (open) => toggles.forEach(t => t.setAttribute('aria-expanded', String(open)));
toggles.forEach(btn => btn.addEventListener('click', () => {
  sheet.classList.toggle('open');
  const open = sheet.classList.contains('open');
  sheet.setAttribute('aria-hidden', String(!open));
  updateAria(open);
}));
sheet?.addEventListener('click', (e) => { if (e.target === sheet) { sheet.classList.remove('open'); sheet.setAttribute('aria-hidden', 'true'); updateAria(false); } });
sheet.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { sheet.classList.remove('open'); sheet.setAttribute('aria-hidden', 'true'); updateAria(false); }));

// --- Typing effect (multiple roles)
document.addEventListener('DOMContentLoaded', () => {
  const roles = ['Junior Developer', 'Tech Enthusiast', 'Graphic Designer'];
  const el = document.getElementById('typing');
  if (!el) return;
  let roleIndex = 0, charIndex = 0, typing = true;
  const TYPE_SPEED = 120, ERASE_SPEED = 60, HOLD_TIME = 1200;
  function tick(){
    const text = roles[roleIndex];
    if (typing){
      charIndex++; el.textContent = text.slice(0, charIndex);
      if (charIndex === text.length){ typing = false; return setTimeout(tick, HOLD_TIME); }
      return setTimeout(tick, TYPE_SPEED);
    } else {
      charIndex--; el.textContent = text.slice(0, charIndex);
      if (charIndex === 0){ typing = true; roleIndex = (roleIndex + 1) % roles.length; return setTimeout(tick, 500); }
      return setTimeout(tick, ERASE_SPEED);
    }
  }
  tick();
});

// --- Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('show'); });
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
