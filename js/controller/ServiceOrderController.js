class ServiceOrderController {

  getIssuerPendingServiceOrders() {
    return new Promise((resolve, reject) => {
      new ServiceAidBackHttpRequest().getServiceOrders('issuer')
        .then(serviceOrders => {
          resolve(JSON.parse(serviceOrders));
        });
    });
  }

  postNewServiceOrder(serviceOrder) {
    return new Promise((resolve, reject) => {
      new ServiceAidBackHttpRequest().postNewOS(serviceOrder)
        .then(newServiceOrder => {
          resolve(JSON.parse(newServiceOrder));
        })
        .catch(error => {
          console.error(error);
        })
    })

  }

}
