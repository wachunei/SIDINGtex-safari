(function() {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = '//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
  var head = document.getElementsByTagName('head')[0];
  head.insertBefore(s, head.firstChild);

  var s = document.createElement('script');
  s.type = 'text/x-mathjax-config';
  s.text = "MathJax.Hub.Config({ tex2jax: { inlineMath: [ ['\\\\(','\\\\)'] ], displayMath: [ ['\\\\[','\\\\]'] ], processEscapes: true } });";
  head.insertBefore(s, head.firstChild);

  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = safari.extension.baseURI + 'domManipulation.js';
  document.documentElement.appendChild(s);
})();
