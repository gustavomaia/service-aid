new ServiceAidBackHttpRequest().checkSession().catch(function(s) {
  window.location.href = 'http://localhost:8080/login.html';
})
