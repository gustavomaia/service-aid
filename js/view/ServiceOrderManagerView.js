class ServiceOrderManagerView {

  constructor(mainView) {
    this.mainView = mainView;
    this._executorSelect = document.getElementById('executorSelect');
    this._serviceOrderController = new ServiceOrderController();

    this._serviceOrderController.getExecutors().then(executors => {
      executors.forEach(executor => {
        let executorOption = document.createElement('option');
        executorOption.text = executor.name;
        executorOption.value = executor.id;
        this._executorSelect.appendChild(executorOption);
      });
    });
  }

  loadSideBarOptions() {
    this.mainView.createSideNavigatorAnchor(`Gerenciar O.S's`)
      .addEventListener('click', ()=>{this._loadMainContainer();this._showServiceOrdersToManage()}, true)
  }

  _loadMainContainer() {
    this.mainView.clearMainContainer();
    this.mainView.createCurrentFilter("GERENCIAR")
      .addEventListener('click', () => this._showServiceOrdersToManage(), false);
    this.mainView.createFilter("EM EXECUÇÃO")
      .addEventListener('click', () => this._showServiceOrdersInProgress(), false);
    this.mainView.createFilter("FINALIZADAS")
      .addEventListener('click', () => this._showServiceOrdersFinished(), false);
  }

  _showServiceOrdersToManage() {
    this._serviceOrderController.getWaitingManagementServiceOrdersOf('manager')
      .then(serviceOrders => {
        for(let waitingManagement of serviceOrders) {
          let serviceOrderTr = document.createElement('tr');

          let codeTd = document.createElement('td');
          let descriptionTd = document.createElement('td');
          let localTd = document.createElement('td');
          let categoryTd = document.createElement('td');
          let issuerTd = document.createElement('td');

          codeTd.textContent = waitingManagement.code;
          descriptionTd.textContent = waitingManagement.description;
          localTd.textContent = waitingManagement.place;
          issuerTd.textContent = waitingManagement.Issuer.name;
          categoryTd.textContent = waitingManagement.category.name;

          serviceOrderTr.appendChild(codeTd);
          serviceOrderTr.appendChild(descriptionTd);
          serviceOrderTr.appendChild(localTd);
          serviceOrderTr.appendChild(issuerTd);
          serviceOrderTr.appendChild(categoryTd);

          serviceOrderTr.addEventListener('click', ()=>detailedServiceOrderView.showForManagement(waitingManagement.code, serviceOrderTr), false);

          this.mainView.serviceOrderTable.appendChild(serviceOrderTr);
        }
    });
  }

  _showServiceOrdersInProgress() {
    this._serviceOrderController.getInProgressServiceOrdersOf('manager')
      .then(serviceOrders => {
        for(let inProgress of serviceOrders) {
          let serviceOrderTr = document.createElement('tr');

          let codeTd = document.createElement('td');
          let descriptionTd = document.createElement('td');
          let localTd = document.createElement('td');
          let limitDateTd = document.createElement('td');
          let categoryTd = document.createElement('td');
          let issuerTd = document.createElement('td');

          codeTd.textContent = inProgress.code;
          descriptionTd.textContent = inProgress.description;
          localTd.textContent = inProgress.place;
          limitDateTd.textContent = inProgress.limitDate;
          issuerTd.textContent = inProgress.Issuer.name;
          categoryTd.textContent = inProgress.category.name;

          serviceOrderTr.appendChild(codeTd);
          serviceOrderTr.appendChild(descriptionTd);
          serviceOrderTr.appendChild(localTd);
          serviceOrderTr.appendChild(issuerTd);
          serviceOrderTr.appendChild(categoryTd);
          serviceOrderTr.appendChild(limitDateTd);

          serviceOrderTr.addEventListener('click', ()=>detailedServiceOrderView.show(inProgress.code), false);
          this.mainView.serviceOrderTable.appendChild(serviceOrderTr);
        }
    });
  }

_showServiceOrdersFinished() {
    this._serviceOrderController.getFinishedServiceOrdersOf('manager')
      .then(serviceOrders => {
        for(let finished of serviceOrders) {
          let serviceOrderTr = document.createElement('tr');

          let codeTd = document.createElement('td');
          let descriptionTd = document.createElement('td');
          let localTd = document.createElement('td');
          let categoryTd = document.createElement('td');
          let issuerTd = document.createElement('td');
          let executorTd = document.createElement('td');

          codeTd.textContent = finished.code;
          descriptionTd.textContent = finished.description;
          localTd.textContent = finished.place;
          executorTd.textContent = finished.Executor.name;
          issuerTd.textContent = finished.Issuer.name;
          categoryTd.textContent = finished.category.name;

          serviceOrderTr.appendChild(codeTd);
          serviceOrderTr.appendChild(descriptionTd);
          serviceOrderTr.appendChild(localTd);
          serviceOrderTr.appendChild(issuerTd);
          serviceOrderTr.appendChild(executorTd);
          serviceOrderTr.appendChild(categoryTd);

          serviceOrderTr.addEventListener('click', ()=>detailedServiceOrderView.show(finished.code), false);
          this.mainView.serviceOrderTable.appendChild(serviceOrderTr);
        }
    });
  }

}
