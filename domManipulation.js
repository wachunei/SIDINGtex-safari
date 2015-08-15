(function() {
  var c5 = document.querySelectorAll('.caption5');
  var c2 = document.querySelectorAll('.caption2');

  [c5, c2].forEach(function(c) {
    [].forEach.call(c, function(el) {
      var td = document.createElement('td');
      el.parentNode.appendChild(td);
    });
  });

  if (document.querySelector('.caption5 img')) {
    var helpTextPlace = document.querySelector('.caption5 img').parentNode;
    var helpPlace = document.createElement('span');
    helpTextPlace.appendChild(helpPlace);
    helpPlace.style.color = "#888";
    helpPlace.innerHTML = "SIDINGtex est&aacute; activado. Para matem&aacute;tica <em>inline</em> usar <code>\\(</code> y <code>\\)</code>, para <em>display</em> <code>\\[</code> y <code>\\]</code>";

    var postText = document.querySelector('textarea[name=postText]');
    var previewtd = postText.parentNode.nextElementSibling;
    postText.parentNode.style.verticalAlign = 'top';
    previewtd.style.minWidth = '400px';
    previewtd.style.padding = ' 0 20px';
    previewtd.style.verticalAlign = 'top';

    var timeOut;
    postText.addEventListener('keyup', function(ev) {
      previewtd.innerHTML = postText.value.replace(/\n\r?/g, '<br />');
      clearTimeout(timeOut);
      timeOut = setTimeout(function () {
        MathJax.Hub.Queue(["Typeset",MathJax.Hub,previewtd]);
      }, 500);

    });

    var button = document.querySelector('.caption5 input[type=button]');
    button.onclick = null;
    button.addEventListener('click', function(ev) {
      ev.preventDefault();
      if( confirm('Esta seguro de querer publicar el mensaje?') === true ) {
        postText.value = postText.value.replace(/\\/g, '\\\\');
        document.querySelector('form[name=postMsg]').submit();
      }
    });
  }
})();
