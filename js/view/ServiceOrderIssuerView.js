class ServiceOrderIssuerView {

  constructor(mainView) {
    this.mainView = mainView;
  }

  show() {
    this.mainView.clearMainContainer();
    this._serviceOrderController = new ServiceOrderController();
    this._setupFilters();
  }

  _setupFilters() {
    this.mainView.createCurrentFilter("EM ANDAMENTO")
      .addEventListener('click', () => this._loadInProgressOrders(), false);
    this.mainView.createFilter("PENDENTE")
      .addEventListener('click', () => this._loadWaitingManagementOrders(), false);
  }

  _loadInProgressOrders() {
  }

  _loadWaitingManagementOrders() {
    this._serviceOrderController.getWaitingManagementServiceOrdersOf('issuer').then(serviceOrders => {
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

        this.mainView.serviceOrderTable.appendChild(serviceOrderTr);
      }
    });
  }

  _loadFinishedOrders() {
  }

}
