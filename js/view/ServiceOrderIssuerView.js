class ServiceOrderIssuerView {

  constructor(mainView) {
    this.mainView = mainView;
  }

  show() {
    this.mainView.clearMainContainer();
    this._serviceOrderController = new ServiceOrderController();
    this._setupFilters();
    this._loadInProgressOrders();
  }

  loadSideBarOptions() {
    this.mainView.createSideNavigatorAnchor(`Emissão`)
      .addEventListener('click', ()=>this.show(), false);
  }

  _setupFilters() {
    this.mainView.createCurrentFilter("EM ANDAMENTO")
      .addEventListener('click', () => this._loadInProgressOrders(), false);
    this.mainView.createFilter("PENDENTE")
      .addEventListener('click', () => this._loadWaitingManagementOrders(), false);
  }

  _loadInProgressOrders() {
    this._serviceOrderController.getInProgressServiceOrdersOf('issuer').then(serviceOrders => {
      for (let inProgress of serviceOrders.inProgress) {
        let serviceOrderTr = document.createElement('tr');

        let codeTd = document.createElement('td');
        let descriptionTd = document.createElement('td');
        let localTd = document.createElement('td');
        let limitDate = document.createElement('td');
        let executorTd = document.createElement('td');
        let categoryTd = document.createElement('td');

        codeTd.textContent = inProgress.code;
        descriptionTd.textContent = inProgress.description;
        localTd.textContent = inProgress.place;
        limitDate.textContent = inProgress.limitDate;
        executorTd.textContent = inProgress.Executor.name;
        categoryTd.textContent = inProgress.category.name;

        serviceOrderTr.appendChild(codeTd);
        serviceOrderTr.appendChild(categoryTd);
        serviceOrderTr.appendChild(executorTd);
        serviceOrderTr.appendChild(localTd);
        serviceOrderTr.appendChild(limitDate);
        serviceOrderTr.appendChild(descriptionTd);

        serviceOrderTr.addEventListener('click', ()=>detailedServiceOrderView.show(inProgress.code), false);

        this.mainView.serviceOrderTable.appendChild(serviceOrderTr);
      }
    });
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
