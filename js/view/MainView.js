class MainView {

  constructor() {
    this._sideNavigator = document.getElementById('sideNavigator');
    this._mainContainer = document.getElementById('mainContainer');
    this.serviceOrderTable = document.createElement('table');
    document.getElementById('mainContainer').appendChild(this.serviceOrderTable);
    this._mainFilterBox = document.getElementById('filterBox');
    this._currentFilters = new Array();
  }

  clearMainContainer() {
    this._mainFilterBox.innerHTML = ''
    this.serviceOrderTable.innerHTML = '';
    this._currentFilters = new Array();
  }

  createSideNavigatorAnchor(anchorText){
    let manageAnchor = document.createElement('a');
    manageAnchor.text = anchorText;
    this._sideNavigator.appendChild(manageAnchor);
    return manageAnchor;
  }

  createFilter(filterText){
    return this._createFilter(filterText, '');
  }

  createCurrentFilter(filterText){
    return this._createFilter(filterText, 'currentFilter');
  }

  _createFilter(filterText, filterClass) {
    let filterBox = document.createElement('div');
    filterBox.className = 'box'

    let filter = document.createElement('a');
    filter.text = filterText;
    if (filterClass) filter.className = filterClass;

    filter.addEventListener('click', () => this._changeCurrentFilter(filter), true);

    filterBox.appendChild(filter);
    this._mainFilterBox.appendChild(filterBox);
    this._currentFilters.push(filter);

    return filter;
  }

  _changeCurrentFilter(selectedFilter) {
    this.serviceOrderTable.innerHTML = '';
    this._currentFilters
      .find(filter => {return filter.className == 'currentFilter'})
      .classList.remove('currentFilter');

    selectedFilter.className = 'currentFilter';
  }

}