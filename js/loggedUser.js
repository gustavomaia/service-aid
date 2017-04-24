// var request = new XMLHttpRequest();
// request.open('GET', 'http://localhost:8080/application', false);
// request.withCredentials = true;
//
// try {
//   request.send(null);
//   if (request.status === 200) {
//     console.log(request.responseText);
//   } else {
//       console.log("ae");
//   }
// } catch (err) {
//   console.log(request.statusText);
//   //se der 401 redirecionar para login, se der erro redirecionar para pagina de erro
//   // window.location.href = 'file:///Users/gustavomaia/development/service-aid/login.html';


  var request = new XMLHttpRequest();
  request.open("GET", "http://localhost:8080/application", true);
  // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  // request.getResponseHeader("Set-Cookie");
  request.withCredentials = true;

  request.onload = function (e) {
    if (request.readyState === 4) {
      if (request.status === 200) {
        console.log(request.responseText);
        // window.location.href = 'file:///Users/gustavomaia/development/service-aid/home.html';
      } else {
        console.log('status code != 200');
        console.error(request.statusText);
        // window.location.href = 'file:///Users/gustavomaia/development/service-aid/login.html';
      }
    }
  };
  request.onerror = function (e) {
    console.log('error');
    console.error(request.statusText);
    // window.location.href = 'file:///Users/gustavomaia/development/service-aid/error.html';
  };

  request.send(null);
