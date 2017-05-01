class ServiceOrderController {

  getIssuerPendingServiceOrders() {
    return new Promise((resolve, reject) => {
      new ServiceAidBackHttpRequest().getServiceOrders('issuer')
        .then(serviceOrders => {
          resolve(JSON.parse(serviceOrders));
        });
    });
  }

}
