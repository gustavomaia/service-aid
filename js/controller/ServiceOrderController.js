class ServiceOrderController {

  getWaitingManagementServiceOrdersOf(userType) {
    return new Promise((resolve, reject) => {
      new ServiceAidBackHttpRequest().getServiceOrders(userType, 'waitingManagement')
        .then(serviceOrders => {
          resolve(JSON.parse(serviceOrders));
        });
    });
  }

getServiceOrder(serviceOrderCode) {
  return new Promise((resolve, reject) => {
    new ServiceAidBackHttpRequest().getServiceOrder(serviceOrderCode)
      .then(serviceOrder => {
        resolve(JSON.parse(serviceOrder));
      })
  })
}

  getInProgressServiceOrdersOf(userType) {
    return new Promise((resolve, reject) => {
      new ServiceAidBackHttpRequest().getServiceOrders(userType, 'inProgress')
        .then(serviceOrders => {
          resolve(JSON.parse(serviceOrders));
        });
    });
  }

  sendMessage(serviceOrderCode, message) {
    return new Promise((resolve, reject) => {
      new ServiceAidBackHttpRequest().postMessage(serviceOrderCode, message)
        .then(newMessage=>{
          resolve(JSON.parse(newMessage));
        })
    })
  }

  finishOS(serviceOrderCode) {
    return new Promise((resolve, reject) => {
      new ServiceAidBackHttpRequest().finishOS(serviceOrderCode)
        .then(()=>{
          resolve();
        })
    })
  }

  manageOS(serviceOrderCode, data) {
    return new Promise((resolve, reject) => {
      new ServiceAidBackHttpRequest().manageOS(serviceOrderCode, data)
        .then(()=>{
          resolve();
        })
    })
  }

  getExecutors() {
    return new Promise(resolve => {
      new ServiceAidBackHttpRequest().getExecutors()
        .then(executors => {
          resolve(JSON.parse(executors))
        })
    })
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
