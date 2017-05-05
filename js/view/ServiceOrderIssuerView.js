class ServiceOrderIssuerView {

  show() {
    this._getServiceOrders = new ServiceOrderController().getIssuerPendingServiceOrders();
    this.mainContainerView = new MainContainerView();
    this._setupFilters();
  }

  _setupFilters() {
    this.mainContainerView.createCurrentFilter("EM ANDAMENTO")
      .addEventListener('click', () => this._loadInProgressOrders(), false);
    this.mainContainerView.createFilter("PENDENTE")
      .addEventListener('click', () => this._loadWaitingManagementOrders(), false);
  }

  _loadInProgressOrders() {
    console.log('teste');
  }

  _loadWaitingManagementOrders() {
    this._getServiceOrders
      .then(serviceOrders => {
        for(let waitingManagement of serviceOrders.waitingManagement) {
          let serviceOrderTr = document.createElement('tr');

          let codeTd = document.createElement('td');
          let descriptionTd = document.createElement('td');
          let localTd = document.createElement('td');
          let createdAt = document.createElement('td');

          codeTd.textContent = waitingManagement.code;
          descriptionTd.textContent = waitingManagement.description;
          localTd.textContent = waitingManagement.place;
          createdAt.textContent = waitingManagement.createdAt;

          serviceOrderTr.appendChild(codeTd);
          serviceOrderTr.appendChild(descriptionTd);
          serviceOrderTr.appendChild(localTd);
          serviceOrderTr.appendChild(createdAt);

          this.mainContainerView.serviceOrderTable.appendChild(serviceOrderTr);
        }
    });
  }

  _loadFinishedOrders() {
  }

}
