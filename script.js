// ─── CURSOR ───
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx - 4 + 'px';
    cursor.style.top = my - 4 + 'px';
  });
  function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx - 16 + 'px';
    ring.style.top = ry - 16 + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();
  document.querySelectorAll('a, button, .service-card, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2.5)';
      ring.style.transform = 'scale(1.5)';
      ring.style.borderColor = 'var(--neon-bright)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      ring.style.transform = 'scale(1)';
      ring.style.borderColor = 'var(--violet-glow)';
    });
  });

  // ─── SCROLL REVEAL ───
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // ─── NAV SCROLL ───
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.cssText = 'background:rgba(5,5,5,0.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(139,92,246,0.12);padding:16px 60px;';
    } else {
      nav.style.cssText = 'padding:24px 60px;';
    }
  });

  // ─── PARTICLES ───
  function spawnParticle() {
    const p = document.createElement('div');
    p.className = 'particle';
    const hero = document.getElementById('hero');
    hero.appendChild(p);
    const dur = 10 + Math.random() * 14;
    p.style.cssText = `left:${Math.random()*100}%;top:${80 + Math.random()*20}%;animation-duration:${dur}s;animation-delay:${Math.random()*-dur}s;opacity:${0.2+Math.random()*0.5};`;
    setTimeout(() => p.remove(), dur * 1000);
  }
  for (let i = 0; i < 18; i++) spawnParticle();
  setInterval(spawnParticle, 2200);

  // ─── HERO PARALLAX ───
  const heroSection = document.getElementById('hero');
  const heroVisual = document.querySelector('.hero-visual');
  heroSection?.addEventListener('mousemove', e => {
    const r = heroSection.getBoundingClientRect();
    const cx = (e.clientX - r.left) / r.width - 0.5;
    const cy = (e.clientY - r.top) / r.height - 0.5;
    if (heroVisual) heroVisual.style.transform = `translate(${cx * 14}px, ${cy * 9}px)`;
  });
  heroSection?.addEventListener('mouseleave', () => {
    if (heroVisual) heroVisual.style.transform = '';
  });