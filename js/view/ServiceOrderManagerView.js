class ServiceOrderManagerView {

  constructor(mainView) {
    this.mainView = mainView;
  }

  loadSideBarOptions() {
    this.mainView.createSideNavigatorAnchor(`Gerenciar O.S's`)
      .addEventListener('click', ()=>this._loadMainContainer(), false);
  }

  _loadMainContainer() {
    this.mainView.clearMainContainer();
    this.mainView.createCurrentFilter("GERENCIAR")
      .addEventListener('click', () => this._showServiceOrdersToManage(), false);
  }

  _showServiceOrdersToManage() {

  }

}
