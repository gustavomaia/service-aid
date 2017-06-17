class ServiceOrderExecutorView {

  constructor(mainView) {
    this.mainView = mainView;
    this._serviceOrderController = new ServiceOrderController();
  }

  loadSideBarOptions() {
    this.mainView.createSideNavigatorAnchor(`Executar O.S's`)
      .addEventListener('click', ()=>this._loadMainContainer(), false);
  }

  _loadMainContainer() {
    this.mainView.clearMainContainer();
    this.mainView.createCurrentFilter("EM ANDAMENTO")
      .addEventListener('click', () => this._showServiceOrdersInProgress(), false);
    this._showServiceOrdersInProgress();
  }

  _showServiceOrdersInProgress() {
    this._serviceOrderController.getInProgressServiceOrdersOf('executor')
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

          serviceOrderTr.addEventListener('click', ()=>detailedServiceOrderView.showForExecution(inProgress.code, serviceOrderTr), false);
          this.mainView.serviceOrderTable.appendChild(serviceOrderTr);
        }
    });
  }

}