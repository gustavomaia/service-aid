class HttpRequest {

  constructor() {
    this.server = 'http://localhost:8081/';
  }

  getApplication() {
    this._doGetHttpRequest('application');
  }

  _doGetHttpRequest(endpoint) {
    let request = this._createHttpRequest(endpoint, "GET");
    request.send();
  }

  _doPostHttpRequest(endpoint, data) {
    let request = this._createHttpRequest(endpoint, "POST");
    request.send(data);
  }

  _createHttpRequest(endpoint, method) {
    let request = new XMLHttpRequest();
    request.open(method, `${this.server}${endpoint}`, true);
    request.withCredentials = true;
    request.timeout = 10000;
    request.onload = this._handleRequisition();
    request.onerror = this._handleRequisitionError();
    return request
  }

  _handleRequisition() {
    if (this.status === 200) {
      console.log('200')
      console.log(this.responseText)
    } else if (this.status === 401) {
      console.log('401')
    }
    else if (this.status){
      console.error(`Status code was: ${this.status}`)
    }
  }

  _handleRequisitionError() {
    console.error(`Unexpected error `);
  }

}
