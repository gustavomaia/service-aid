// var request = new XMLHttpRequest();
// request.open('GET', 'http://localhost:8080/login', false);
//
// try {
//   request.send(null);
//   if (request.status === 200) {
//     console.log(request.responseText);
//   } else {
//       console.log("ae");
//   }
// } catch (err) {
//   //se der 401 redirecionar para login, se der erro redirecionar para pagina de erro
//   window.location.href = 'file:///Users/gustavomaia/development/service-aid/login.html';
// }

class LoginController {
  login(event) {
    event.preventDefault();

    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    let loginParams = 'username=' + login + '&password=' + password;

    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:8080/login", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.getResponseHeader("Set-Cookie");
    // request.withCredentials = true;
    request.onload = function (e) {
      if (request.readyState === 4) {
        if (request.status === 200) {
          console.log(request.responseText);
          window.location.href = 'file:///Users/gustavomaia/development/service-aid/home.html';
        } else {
          console.error(request.statusText);
          window.location.href = 'file:///Users/gustavomaia/development/service-aid/login.html';
        }
      }
    };
    request.onerror = function (e) {
      console.error(request.statusText);
      // window.location.href = 'file:///Users/gustavomaia/development/service-aid/error.html';
    };

    request.send(loginParams);
  }
}
