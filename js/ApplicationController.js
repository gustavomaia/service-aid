class ApplicationController {

  constructor() {
    this.backEndRequest = new ServiceAidBackHttpRequest();
    this.frontEndRequest = new ServiceAidFrontHttpRequest();
  }

  loadHome() {
    this.backEndRequest.getApplication()
      .then(this._loadHome(e))
      .catch(this._handleErrors(e));


    frontEndRequest.getDefaultHome()
      .then(function(response) {
        console.log(response);
        console.log(document.body.innerHTML);
        document.body.innerHTML = response;
      })
      .catch(function(unexpectedResponse) {
        console.log('error');
      });
  }

  getApplication() {
    let backEndRequest = new ServiceAidBackHttpRequest();
    backEndRequest.getApplication()
      .then(function(success) {
        console.log(success);
      })
      .catch(function(unexpectedResponse) {
        switch (unexpectedResponse) {
          case 401:
            window.location.href = 'http://localhost:8080/login.html';
            break;
          default:
            window.location.href = 'http://localhost:8080/error'
        }
        console.log(r);
      });
  }

  _handleErrors(unexpectedResponse) {
    switch (unexpectedResponse) {
      case 401:
        frontEndRequest.showLogin();
        break;
      default:
        frontEndRequest.showError();
    }
    console.log(r);
  }
}
