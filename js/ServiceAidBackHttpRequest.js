class ServiceAidBackHttpRequest {
  constructor() {
    this.httpRequest = new HttpRequest('http://localhost:8081');
  }

  getApplication() {
    return this.httpRequest.doGet('/application');
  }

  checkSession() {
    return this.httpRequest.doGet('/session-check')
  }
}
