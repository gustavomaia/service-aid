class ServiceAidBackHttpRequest {
  constructor() {
    this.httpRequest = new HttpRequest('http://localhost:8081');
  }

  getUser() {
    return this.httpRequest.doGet('/user');
  }

  checkSession() {
    return this.httpRequest.doGet('/session-check')
  }

  postNewOS(newOS) {
    let data = {
      content: JSON.stringify(newOS),
      contentType: 'application/json'
    }
    return this.httpRequest.doPost('/service-order', data)
  }

  doLogin(credentials) {
    let data = {
      content: credentials,
      contentType: 'application/x-www-form-urlencoded'
    }
    return this.httpRequest.doPost('/login', data)
  }

  getServiceOrders(status) {
    return this.httpRequest.doGet(`/service-order/${status}`)
  }

  getCompanyInfo() {
    return this.httpRequest.doGet('/company')
  }

}
