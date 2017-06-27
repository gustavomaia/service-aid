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

  postMessage(serviceOrderCode, message) {
    let data = {
      content: JSON.stringify(message),
      contentType: 'application/json'
    }
    return this.httpRequest.doPost(`/service-order/${serviceOrderCode}/message`, data)
  }

  finishOS(serviceOrderCode) {
    let data = {
      content: "",
      contentType: 'application/json'
    }

    return this.httpRequest.doPost(`/service-order/${serviceOrderCode}/finish`, data)
  }

  manageOS(serviceOrderCode, managementData) {
    let data = {
      content: "implement",
      contentType: 'application/json'
    }

    return this.httpRequest.doPost(`/service-order/${serviceOrderCode}/manage`, data)
  }

  getServiceOrders(userType, status) {
    return this.httpRequest.doGet(`/service-order/${userType}/${status}`)
  }

  getServiceOrder(serviceOrderCode) {
    return this.httpRequest.doGet(`/service-order/${serviceOrderCode}`);
  }

  getCompanyInfo() {
    return this.httpRequest.doGet('/company')
  }

}
