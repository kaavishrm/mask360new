(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var narrow = window.innerWidth < 720;
  document.querySelectorAll('video[data-loop]').forEach(function (v) {
    if (narrow && v.dataset.mobile) {
      v.poster = v.dataset.mobile + '-poster.webp';
      v.querySelectorAll('source').forEach(function (s) { s.src = v.dataset.mobile + (s.type === 'video/webm' ? '.webm' : '.mp4'); });
      v.load();
    }
    if (reduce) { v.removeAttribute('autoplay'); v.pause(); return; }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else { v.pause(); } });
      }, { rootMargin: '200px' }).observe(v);
    }
  });
  var y = document.querySelector('[data-year]'); if (y) y.textContent = new Date().getFullYear();
  // live clocks for the two markets
  var clocks = document.querySelectorAll('time[data-tz]');
  function tick() { clocks.forEach(function (t) { try { t.textContent = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: t.dataset.tz }).format(new Date()); } catch (e) {} }); }
  tick(); setInterval(tick, 20000);
  // preloader counter, once per session
  var loader = document.querySelector('.loader');
  var seen = false; try { seen = sessionStorage.getItem('m360-loaded') === '1'; } catch (e) {}
  if (loader && !seen && !reduce) {
    loader.classList.add('on'); var pct = loader.querySelector('.pct'); var start = performance.now(), dur = 1100;
    (function step(now) { var k = Math.min(1, (now - start) / dur); var e = 1 - Math.pow(1 - k, 3); pct.textContent = Math.round(e * 100); if (k < 1) requestAnimationFrame(step); else { loader.classList.add('out'); setTimeout(function () { loader.classList.remove('on'); }, 700); try { sessionStorage.setItem('m360-loaded', '1'); } catch (e) {} } })(start);
  }
})();
