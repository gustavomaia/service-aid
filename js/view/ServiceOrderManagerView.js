class ServiceOrderManagerView {

  constructor(mainView) {
    this.mainView = mainView;
    this._serviceOrderController = new ServiceOrderController();
  }

  loadSideBarOptions() {
    this.mainView.createSideNavigatorAnchor(`Gerenciar O.S's`)
      .addEventListener('click', ()=>{this._loadMainContainer();this._showServiceOrdersToManage()}, true)
      // .addEventListener('click', ()=>, false);
  }

  _loadMainContainer() {
    this.mainView.clearMainContainer();
    this.mainView.createCurrentFilter("GERENCIAR")
      .addEventListener('click', () => this._showServiceOrdersToManage(), false);
    // this._showServiceOrdersToManage();
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

}
