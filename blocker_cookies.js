function refuseCookies() {
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++) {
      var cookieName = cookies[i].split('=')[0];
      var cookieValue = cookies[i].split('=')[1];
      var expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() - 86400);
      document.cookie = cookieName + "=" + cookieValue + "; expires=" + expirationDate.toGMTString() + "; path=/";
    }
  }
  window.onload = refuseCookies;