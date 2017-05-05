class ServiceOrderManagerView {

  load() {
    // this._getServiceOrders = new ServiceOrderController().getIssuerPendingServiceOrders();

    // this._setupTable();
    // this._setupFilters();
    let sideNavigator = document.getElementById('sideNavigator');
    let manageAnchor = document.createElement('a');
    manageAnchor.text = `Gerenciar O.S's`
    manageAnchor.addEventListener('click', ()=>this._showServiceOrdersToManage(), false);

    sideNavigator.appendChild(manageAnchor)
  }

  _showServiceOrdersToManage() {
      let filterBox = document.getElementById('filterBox');
      filterBox.innerHTML = '';

      let inProgressBoxFilter = document.createElement('div');
      inProgressBoxFilter.className = 'box'
      let waitingManagementBoxFilter = document.createElement('div');
      waitingManagementBoxFilter.className = 'box'

      let inProgressFilter = document.createElement('a');
      inProgressFilter.className = 'currentFilter'
      inProgressFilter.addEventListener('click', () => {this._changeCurrentFilter(inProgressFilter)}, true);
      inProgressFilter.text = 'Aguardando'
      inProgressBoxFilter.appendChild(inProgressFilter)
      filterBox.appendChild(inProgressBoxFilter);

      let waitingManagementFilter = document.createElement('a');
      waitingManagementFilter.addEventListener('click', () => {this._changeCurrentFilter(waitingManagementFilter)}, true);
      waitingManagementFilter.text = 'PENDENTE'
      waitingManagementBoxFilter.appendChild(waitingManagementFilter);
      filterBox.appendChild(waitingManagementBoxFilter);

      this._allFiltersArray = new Array();
      this._allFiltersArray.push(inProgressFilter);
      this._allFiltersArray.push(waitingManagementFilter);
  }

  _changeCurrentFilter(selectedFilter) {
    // this.serviceOrderTable.innerHTML = '';
    this._allFiltersArray
      .find(filter => {return filter.className == 'currentFilter'})
      .classList.remove('currentFilter');

    selectedFilter.className = 'currentFilter';
  }
  

  // _setupTable() {
  //   this.serviceOrderTable = document.createElement('table');
  //   document.getElementById('mainContainer').appendChild(this.serviceOrderTable);
  // }

  // _setupFilters() {
  //   this._allFiltersArray = new Array();
  //   for (let filter of document.getElementById('filterBox').getElementsByTagName('a')) {
  //     filter.addEventListener('click', () => {this._changeCurrentFilter(filter)}, true);
  //     this._allFiltersArray.push(filter);
  //   }

  //   this._allFiltersArray
  //     .find(filter => {return filter.id == 'inProgressFilter'})
  //     .addEventListener('click', () => this._loadPendingOrders(), false);
  //   this._allFiltersArray
  //     .find(filter => {return filter.id == 'pendingFilter'})
  //     .addEventListener('click', () => this._loadWaitingManagementOrders(), false);
  //   this._allFiltersArray
  //     .find(filter => {return filter.id == 'finishedFilter'})
  //     .addEventListener('click', () => this._loadFinishedOrders(), false);
  // }

  // _changeCurrentFilter(selectedFilter) {
  //   this.serviceOrderTable.innerHTML = '';
  //   this._allFiltersArray
  //     .find(filter => {return filter.className == 'currentFilter'})
  //     .classList.remove('currentFilter');

  //   selectedFilter.className = 'currentFilter';
  // }

  // _loadPendingOrders() {
  // }

  // _loadWaitingManagementOrders() {
  //   this._getServiceOrders
  //     .then(serviceOrders => {
  //       for(let waitingManagement of serviceOrders.waitingManagement) {
  //         let serviceOrderTr = document.createElement('tr');

  //         let codeTd = document.createElement('td');
  //         let descriptionTd = document.createElement('td');
  //         let localTd = document.createElement('td');
  //         let createdAt = document.createElement('td');

  //         codeTd.textContent = waitingManagement.code;
  //         descriptionTd.textContent = waitingManagement.description;
  //         localTd.textContent = waitingManagement.place;
  //         createdAt.textContent = waitingManagement.createdAt;

  //         serviceOrderTr.appendChild(codeTd);
  //         serviceOrderTr.appendChild(descriptionTd);
  //         serviceOrderTr.appendChild(localTd);
  //         serviceOrderTr.appendChild(createdAt);

  //         this.serviceOrderTable.appendChild(serviceOrderTr);
  //       }
  //   });
  // }

  // _loadFinishedOrders() {
  // }

}
