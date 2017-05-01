class ServiceAidBackHttpRequest {
  constructor() {
    this.httpRequest = new HttpRequest('http://localhost:8081');
  }

  checkSession() {
    return this.httpRequest.doGet('/session-check')
  }

  doLogin(credentials) {
    let data = {
      content: credentials,
      contentType: "application/x-www-form-urlencoded"
    }

    return this.httpRequest.doPost('/login', data)
  }

  getServiceOrders(status) {
    return this.httpRequest.doGet(`/service-order/${status}`)
  }

}
