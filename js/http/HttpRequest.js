class HttpRequest {

  constructor(serverAddress) {
    this.server = serverAddress;
  }

  doGet(endpoint) {
    let method = 'GET';
    let path = `${this.server}${endpoint}`;

    return new Promise((resolve, reject) => {
      let request = this._createHttpRequest(method, path);
      request.onload = function() {
        if (request.status === 200)
          resolve(request.response);
        else
          reject(request.status);
      }
      request.onerror = function() {
        reject(Error(`Error while performing ${method} on ${path}`));
      };
      request.send();
    });
  }

  doPost(endpoint, data) {
    let method = 'POST';
    let path = `${this.server}${endpoint}`;

    return new Promise((resolve, reject) => {
      let request = this._createHttpRequest(method, path);
      request.setRequestHeader("Content-type", data.contentType);
      request.onload = function() {
        if (request.status === 200)
          resolve(request.response);
        else
          reject(request.status);
      }
      request.onerror = function() {
        reject(Error(`Error while performing ${method} on ${path}`));
      };
      request.send(data.content);
    });
  }

  _createHttpRequest(method, path) {
    let request = new XMLHttpRequest();
    request.open(method, path, true);
    request.withCredentials = true;
    request.timeout = 10000;
    return request;
  }

}
