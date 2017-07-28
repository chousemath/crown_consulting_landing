window.onload = function() {

  var iframe = document.createElement('iframe');
  iframe.id = 'docandme-widget';
  var w = window.innerWidth;
  var h = window.innerHeight;
  if (w < 411) {
    iframe.style.height = h + 'px';
    iframe.style.width = w + 'px';
  } else {
    iframe.style.height = '731px';
    iframe.style.width = '450px';
  }
  iframe.style.position = 'fixed';
  iframe.style.bottom = '0';
  iframe.style.right = '0';
  iframe.style.display = 'none';
  iframe.src = "https://www.docandme.com";

  var mainImage = document.getElementById('top');

  iframe.addEventListener("mouseenter", function( event ) {
    obscureMainBody();
  }, false);

  iframe.addEventListener("mouseleave", function( event ) {
    restoreMainBody();
  }, false);

  var widgetButtonClose = document.createElement('button');
  widgetButtonClose.style.height = '40px';
  widgetButtonClose.style.width = '65px';
  widgetButtonClose.style.borderRadius = '8px';
  widgetButtonClose.style.backgroundColor = '#50BBC2';
  widgetButtonClose.style.color = '#ffffff';
  widgetButtonClose.style.position = 'fixed';
  widgetButtonClose.style.bottom = '0';
  widgetButtonClose.style.right = '0';
  widgetButtonClose.style.marginTop = '5px';
  widgetButtonClose.style.marginRight = '5px';
  widgetButtonClose.style.fontSize = '18px';
  widgetButtonClose.style.fontWeight = 'bold';
  widgetButtonClose.style.display = 'none';
  widgetButtonClose.id = 'docandme-widget-button-close';
  widgetButtonClose.innerText = "Close";

  document.body.appendChild(iframe);
  document.body.appendChild(widgetButtonClose);

  widgetButtonClose.addEventListener("click", function(){
    if (iframe.style.display === 'none') {
      iframe.style.display = 'block';
    } else {
      iframe.style.display = 'none';
    }
    iframe.style.display = 'none';
    widgetButtonClose.style.display = 'none';
    restoreMainBody();
  });

  var reserveBtn = document.getElementById('make-reservation-button');
  var sideNavBtn = document.getElementById('menu-toggle');

  reserveBtn.addEventListener("click", function(){
    displayIframeClose();
    obscureMainBody();
  });

  widgetButtonClose.addEventListener("mouseenter", function(){
    displayIframeClose();
    obscureMainBody();
  });

  function displayIframeClose() {
    iframe.style.display = 'block';
    widgetButtonClose.style.display = 'block';
  }

  function obscureMainBody() {
    document.body.style.position = "fixed";
    mainImage.style.opacity = "0.3";
    sideNavBtn.style.display = "none";
  }

  function restoreMainBody() {
    document.body.style.position = "static";
    mainImage.style.opacity = "1";
    sideNavBtn.style.display = "block";
  }
};
