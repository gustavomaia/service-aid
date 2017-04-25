var request = new XMLHttpRequest();
request.open("GET", "http://localhost:8081/session-check", true);

request.withCredentials = true;

request.onload = function (e) {
  if (request.readyState === 4) {
    if (request.status === 200) {
      console.log(request.responseText);
      // if (window.localtion.href == 'http://localhost:8080/login.html') {
        window.location.href = 'http://localhost:8080';
      // }
    } else {
      console.log('status code != 200');
      console.error(request.statusText);
      // if (window.localtion.href != 'http://localhost:8080/login.html') {
          // window.location.href = 'http://localhost:8080/login.html';
      // }
    }
  }
};
request.onerror = function (e) {
  console.log('error');
  console.error(request.statusText);
  window.location.href = 'http://localhost:8080/error.html';
};

request.send(null);
