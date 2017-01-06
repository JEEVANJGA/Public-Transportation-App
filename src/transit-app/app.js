<script>
    (function(document) {
  'use strict';

  var app = document.querySelector("#app");

  // offline detection with event handlers for monitoring the network state
  app.online = function() {
        mozExpr =  /rv:([^\)]+)\) Gecko\/\d{8}/;

    if (!mozExpr.test(navigator.userAgent))
      return navigator.onLine;

    // navigator.onLine doesn't really work in Firefox so we'll test the network instead
    // inspired by: https://developer.mozilla.org/en-US/Apps/Fundamentals/Offline
    var req = new window.XMLHttpRequest({mozSystem: true});
    req.open('HEAD', 'http://www.mozilla.org/robots.txt');
    req.timeout = 5750;

    req.addEventListener('load', function() {
      app.online = true;
    });

    req.addEventListener('error', function() {
      app.online = false;
    });

    req.addEventListener('timeout', function() {
      app.online = false;
    });

    req.send(null);
  }();

  window.addEventListener('online', function() {
    app.online = true;
  });

  window.addEventListener('offline', function() {
    app.online = false;
  });

  

})(document);
  </script>