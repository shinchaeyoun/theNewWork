(function() {
  var __sections__ = {};
  (function() {
    for(var i = 0, s = document.getElementById('sections-script').getAttribute('data-sections').split(','); i < s.length; i++)
      __sections__[s[i]] = true;
  })();
  (function() {
  if (!__sections__["header"]) return;
  try {
    
    // VanillaJS eventListener summary
    const details = document.querySelector('.nav-wrapper details');
    const summary = document.querySelector('.nav-wrapper summary');
    console.log(summary);
    summary.addEventListener('click', () => {
        details.classList.toggle('menu-drawer-open');
        document.body.classList.toggle('menu-drawer-open');
    })

  } catch(e) { console.error(e); }
})();

})();
