// ── Cursor ──
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx+'px'; cursor.style.top = my+'px'; });
  (function animRing(){
    rx += (mx - rx) * .12; ry += (my - ry) * .12;
    ring.style.left = rx+'px'; ring.style.top = ry+'px';
    requestAnimationFrame(animRing);
  })();

  // ── Nav scroll ──
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  });

  // ── Scroll reveal ──
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ── Skill bars on scroll ──
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.style.getPropertyValue('--w') || bar.parentElement.dataset?.w || '0%';
        });
      }
    });
  }, { threshold: .2 });
  const skillGrid = document.querySelector('.skills-grid');
  if(skillGrid) barObserver.observe(skillGrid);

  // ── Form submit ──
  function handleSubmit(){
    const name = document.getElementById('firstName').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();
    if(!name || !email || !msg){ alert('Please fill in your name, gmail, and message.'); return; }
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  }
