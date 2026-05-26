/* ===== script.js — Ryan Portfolio ===== */

// ── Custom Cursor ──────────────────────────────────────────────
const cursor = document.getElementById('cursor');
const trail  = document.getElementById('cursorTrail');

let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

// Trail follows with slight delay
let trailX = 0, trailY = 0;
function animateTrail() {
  trailX += (mouseX - trailX) * 0.14;
  trailY += (mouseY - trailY) * 0.14;
  trail.style.left = trailX + 'px';
  trail.style.top  = trailY + 'px';
  requestAnimationFrame(animateTrail);
}
animateTrail();

// ── Nav scroll effect ──────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Smooth reveal on scroll ────────────────────────────────────
const revealEls = document.querySelectorAll(
  '.sobre-grid, .projeto-card, .skills-category, .contato-content, .section-title, .section-label'
);
revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80 * (Array.from(revealEls).indexOf(entry.target) % 4));
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ── Skill bars animate on scroll ──────────────────────────────
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));

// ── Hero bg text parallax ──────────────────────────────────────
const bgText = document.querySelector('.hero-bg-text');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (bgText) {
    bgText.style.transform = `translate(-50%, calc(-50% + ${y * 0.3}px))`;
    bgText.style.opacity = Math.max(0, 1 - y / 500);
  }
});

// ── Navbar active link highlight ──────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--accent)' : '';
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => sectionObserver.observe(s));

// ── Float cards wobble on mouse ────────────────────────────────
const floatCards = document.querySelectorAll('.hero-float-card');
document.addEventListener('mousemove', e => {
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;
  floatCards.forEach((card, i) => {
    const depth = (i + 1) * 6;
    card.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
  });
});

// ── Contact form ───────────────────────────────────────────────
function sendMsg() {
  const nome  = document.getElementById('f-nome').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const msg   = document.getElementById('f-msg').value.trim();
  const fb    = document.getElementById('feedback');
  const btn   = document.getElementById('send-btn');

  if (!nome || !email || !msg) {
    fb.textContent = '⚠ Preencha todos os campos.';
    fb.style.color = 'var(--accent2)';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fb.textContent = '⚠ Insira um e-mail válido.';
    fb.style.color = 'var(--accent2)';
    return;
  }

  // Simulate send
  btn.textContent = 'Enviando...';
  btn.style.opacity = '0.7';
  btn.disabled = true;

  setTimeout(() => {
    fb.textContent = '✓ Mensagem enviada! Em breve entrarei em contato.';
    fb.style.color = 'var(--accent)';
    btn.textContent = 'Enviar Mensagem ↗';
    btn.style.opacity = '1';
    btn.disabled = false;
    document.getElementById('f-nome').value = '';
    document.getElementById('f-email').value = '';
    document.getElementById('f-msg').value = '';
  }, 1400);
}

// ── Typing effect on hero tag ──────────────────────────────────
const heroTag = document.querySelector('.hero-tag');
if (heroTag) {
  const text = heroTag.textContent;
  heroTag.textContent = '◆ ';
  let i = 2;
  const type = () => {
    if (i < text.length) {
      heroTag.textContent += text[i];
      i++;
      setTimeout(type, 38);
    }
  };
  setTimeout(type, 600);
}

// ── Stats count up animation ──────────────────────────────────
const statNums = document.querySelectorAll('.stat-num');

const countObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el   = entry.target;
      const text = el.textContent;
      const num  = parseInt(text.replace(/\D/g, ''));
      const plus = text.includes('+');
      let current = 0;
      const step  = Math.ceil(num / 30);
      const tick  = setInterval(() => {
        current = Math.min(current + step, num);
        el.textContent = (plus ? '+' : '') + current;
        if (current >= num) clearInterval(tick);
      }, 40);
      countObserver.unobserve(el);
    }
  });
}, { threshold: 0.6 });

statNums.forEach(el => countObserver.observe(el));

// ── Cursor hover effect on cards ──────────────────────────────
document.querySelectorAll('.projeto-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    cursor.style.width  = '48px';
    cursor.style.height = '48px';
  });
  card.addEventListener('mouseleave', () => {
    cursor.style.width  = '12px';
    cursor.style.height = '12px';
  });
});