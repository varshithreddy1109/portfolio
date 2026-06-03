/* ============================================================
   PORTFOLIO SCRIPT — Karri Varshith Reddy
   ============================================================ */

/* ──────────────────────────────────────────────────────────
   1. NAVBAR — scroll effect + hamburger
   ────────────────────────────────────────────────────────── */
const navbar    = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});

// Close mobile menu on link click
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("open");
  });
});

/* ──────────────────────────────────────────────────────────
   3. PARTICLE + NEURAL NETWORK CANVAS
   ────────────────────────────────────────────────────────── */
const canvas = document.getElementById("particleCanvas");
const ctx    = canvas.getContext("2d");

let particles = [];
const PARTICLE_COUNT = 80;
const CONNECT_DIST   = 130;

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", () => { resize(); initParticles(); });

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x   = Math.random() * canvas.width;
    this.y   = Math.random() * canvas.height;
    this.vx  = (Math.random() - 0.5) * 0.5;
    this.vy  = (Math.random() - 0.5) * 0.5;
    this.r   = Math.random() * 2 + 1;
    this.alpha = Math.random() * 0.6 + 0.2;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width)  this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 229, 255, ${this.alpha})`;
    ctx.shadowBlur  = 8;
    ctx.shadowColor = "rgba(0, 229, 255, 0.6)";
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

function initParticles() {
  particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
}

function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx   = particles[i].x - particles[j].x;
      const dy   = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CONNECT_DIST) {
        const alpha = (1 - dist / CONNECT_DIST) * 0.25;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
        ctx.lineWidth   = 0.8;
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  drawConnections();
  requestAnimationFrame(animate);
}

initParticles();
animate();

/* ──────────────────────────────────────────────────────────
   4. TYPING ANIMATION
   ────────────────────────────────────────────────────────── */
const typingEl  = document.getElementById("typingText");
const phrases   = [
  "Learning Python…",
  "Exploring Development…",
  "Building My Skills…",
  "Improving Problem Solving…"
];

let phraseIdx = 0, charIdx = 0, isDeleting = false;

function typeLoop() {
  const current = phrases[phraseIdx];
  if (!isDeleting) {
    typingEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    typingEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(typeLoop, 400);
      return;
    }
  }
  setTimeout(typeLoop, isDeleting ? 45 : 80);
}

typeLoop();

/* ──────────────────────────────────────────────────────────
   5. SCROLL REVEAL (IntersectionObserver)
   ────────────────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger sibling reveals
        const siblings = entry.target.parentElement.querySelectorAll(".reveal");
        let delay = 0;
        siblings.forEach((sib, idx) => {
          if (sib === entry.target) delay = idx * 80;
        });
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
);

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* ──────────────────────────────────────────────────────────
   6. SKILL BAR FILL (animate when visible)
   ────────────────────────────────────────────────────────── */
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill  = entry.target.querySelector(".skill-fill");
        const width = fill.getAttribute("data-width");
        fill.style.width = width + "%";
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

document.querySelectorAll(".skill-card").forEach(card => skillObserver.observe(card));

/* ──────────────────────────────────────────────────────────
   7. PROJECT MODALS
   ─────────────────────────────────────────────────────────
   Each .proj-card has data-project="id". The matching modal
   has id="modal-{id}". Clicking the card opens the modal;
   clicking the overlay or close button closes it.
   ────────────────────────────────────────────────────────── */
function openModal(id) {
  const modal = document.getElementById("modal-" + id);
  if (!modal) return;
  modal.classList.add("open");
  document.body.style.overflow = "hidden"; // prevent background scroll
}

function closeModal(id) {
  const modal = document.getElementById("modal-" + id);
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

// Open on card click
document.querySelectorAll(".proj-card").forEach(card => {
  card.addEventListener("click", () => openModal(card.dataset.project));
});

// Close on overlay click
document.querySelectorAll(".proj-modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", () => {
    const modal = overlay.closest(".proj-modal");
    if (modal) closeModal(modal.id.replace("modal-", ""));
  });
});

// Close on ✕ button click
document.querySelectorAll(".proj-modal-close").forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".proj-modal");
    if (modal) closeModal(modal.id.replace("modal-", ""));
  });
});

// Close on Escape key
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    document.querySelectorAll(".proj-modal.open").forEach(modal => {
      closeModal(modal.id.replace("modal-", ""));
    });
  }
});

/* ──────────────────────────────────────────────────────────
   7. RESUME BUTTON
   ─────────────────────────────────────────────────────────
   The "View Resume" button in the HTML is a plain <a> tag
   with target="_blank", so no JS handler is needed.
   To update the link, change the href in index.html on the
   #resumeBtn element to your hosted PDF URL.
   ────────────────────────────────────────────────────────── */

/* ──────────────────────────────────────────────────────────
   9. SMOOTH SCROLL for anchor links
   ────────────────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    const offset = 72; // navbar height
    const top    = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

/* ──────────────────────────────────────────────────────────
   10. ACTIVE NAV LINK HIGHLIGHT on scroll
   ────────────────────────────────────────────────────────── */
const sections  = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navAnchors.forEach(a => {
          a.style.color = a.getAttribute("href") === `#${id}` ? "var(--cyan)" : "";
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));
