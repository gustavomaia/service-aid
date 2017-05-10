class ApplicationView {

  constructor() {
    this.mainView = new MainView()
  }

  load() {
    new UserController().getUser().then(loggedUser => {
      this._handleLoggedUser(loggedUser);
    })
  }

  _handleLoggedUser(loggedUser) {
    let serviceOrderIssuerView = new ServiceOrderIssuerView(this.mainView);
    serviceOrderIssuerView.show();

    if (loggedUser.type == 'manager') {
      this.mainView.createSideNavigatorAnchor(`Emissão`)
        .addEventListener('click', ()=>serviceOrderIssuerView.show(), false);

      new ServiceOrderManagerView(this.mainView).loadSideBarOptions();
    }
  }
}