class ServiceOrderController {

  getWaitingManagementServiceOrdersOf(userType) {
    return new Promise((resolve, reject) => {
      new ServiceAidBackHttpRequest().getServiceOrders(userType, 'waitingManagement')
        .then(serviceOrders => {
          resolve(JSON.parse(serviceOrders));
        });
    });
  }

  getInProgressServiceOrdersOf(userType) {
    return new Promise((resolve, reject) => {
      new ServiceAidBackHttpRequest().getServiceOrders(userType, 'inProgress')
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
