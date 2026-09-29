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
})();
