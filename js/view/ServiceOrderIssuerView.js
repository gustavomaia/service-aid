class ServiceOrderIssuerView {
  constructor() {
    this._getServiceOrders = new ServiceOrderController().getIssuerPendingServiceOrders;

    let mainContainer = document.getElementById('mainContainer');
    this.serviceOrderTable = document.createElement('table');
    mainContainer.appendChild(this.serviceOrderTable);
  }

  loadPendingServiceOrders() {
    this._getServiceOrders()
      .then(serviceOrders => {
        for(let waitingManagement of serviceOrders.waitingManagement) {
          this.serviceOrderTable.appendChild(this._generateWaitingManagementServiceOrdersTr(waitingManagement));
        }
    });
  }

  _generateWaitingManagementServiceOrdersTr(serviceOrders) {
    let serviceOrderTr = document.createElement('tr');

    let numberTd = document.createElement('td');
    let descriptionTd = document.createElement('td');
    let localTd = document.createElement('td');
    let createdAt = document.createElement('td');

    numberTd.textContent = serviceOrders.id;
    descriptionTd.textContent = serviceOrders.description;
    localTd.textContent = serviceOrders.place;
    createdAt.textContent = serviceOrders.createdAt;

    serviceOrderTr.appendChild(numberTd);
    serviceOrderTr.appendChild(descriptionTd);
    serviceOrderTr.appendChild(localTd);
    serviceOrderTr.appendChild(createdAt);

    return serviceOrderTr;
  }

}
