new ServiceAidBackHttpRequest().checkSession()
  .catch(function(response) {
    if (response === 401) {
      window.location.href = 'http://localhost:8080/login.html';
    } else {
      window.location.href = 'http://localhost:8080/error.html';
    }
  })
