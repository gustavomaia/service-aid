class ServiceOrderIssuerView {
  constructor() {
    this._getServiceOrders = new ServiceOrderController().getIssuerPendingServiceOrders();

    this._setupTable();
    this._setupFilters();
  }

  _setupTable() {
    this.serviceOrderTable = document.createElement('table');
    document.getElementById('mainContainer').appendChild(this.serviceOrderTable);
  }

  _setupFilters() {
    this._allFiltersArray = new Array();
    for (let filter of document.getElementById('filterBox').getElementsByTagName('a')) {
      filter.addEventListener('click', () => {this._changeCurrentFilter(filter)}, true);
      this._allFiltersArray.push(filter);
    }

    this._allFiltersArray
      .find(filter => {return filter.id == 'inProgressFilter'})
      .addEventListener('click', () => {this._loadPendingOrders()}, false);
    this._allFiltersArray
      .find(filter => {return filter.id == 'pendingFilter'})
      .addEventListener('click', () => {this._loadWaitingManagementOrders()}, false);
    this._allFiltersArray
      .find(filter => {return filter.id == 'finishedFilter'})
      .addEventListener('click', () => {this._loadFinishedOrders()}, false);
  }

  _changeCurrentFilter(selectedFilter) {
    this.serviceOrderTable.innerHTML = '';
    this._allFiltersArray
      .find(filter => {return filter.className == 'currentFilter'})
      .classList.remove('currentFilter');

    selectedFilter.className = 'currentFilter';
  }

  _loadPendingOrders() {
  }

  _loadWaitingManagementOrders() {
    this._getServiceOrders
      .then(serviceOrders => {
        for(let waitingManagement of serviceOrders.waitingManagement) {
          let serviceOrderTr = document.createElement('tr');

          let numberTd = document.createElement('td');
          let descriptionTd = document.createElement('td');
          let localTd = document.createElement('td');
          let createdAt = document.createElement('td');

          numberTd.textContent = waitingManagement.id;
          descriptionTd.textContent = waitingManagement.description;
          localTd.textContent = waitingManagement.place;
          createdAt.textContent = waitingManagement.createdAt;

          serviceOrderTr.appendChild(numberTd);
          serviceOrderTr.appendChild(descriptionTd);
          serviceOrderTr.appendChild(localTd);
          serviceOrderTr.appendChild(createdAt);

          this.serviceOrderTable.appendChild(serviceOrderTr);
        }
    });
  }

  _loadFinishedOrders() {
  }

}
