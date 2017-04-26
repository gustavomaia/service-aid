class LoginController {
  constructor() {
    this.httpRequest = new ServiceAidBackHttpRequest();
    this.httpRequest.checkSession()
      .then(function(loggedUser) {
        window.location.href = 'http://localhost:8080';
      })
      .catch(function(unauthenticatedUser){
        console.log('Authentication needed');
      })
  }

  login(event) {
    event.preventDefault();

    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    let loginParams = 'username=' + login + '&password=' + password;

    this.httpRequest.doLogin(loginParams)
      .then(function(loggedUser) {
        window.location.href = 'http://localhost:8080';
      })
      .catch(function(invalidCredentials) {
        console.log('invalid credentials');
      });
  }
}
