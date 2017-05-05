class UserView {

  loadApplicationView() {
    new UserController().getUser().then(loggedUser => {
      this._handleLoggedUser(loggedUser);
    })
  }

  _handleLoggedUser(loggedUser) {
    let serviceOrderRegisterView = new ServiceOrderRegisterView();

    let serviceOrderIssuerView = new ServiceOrderIssuerView();
    serviceOrderIssuerView.show();

    if (loggedUser.type == 'manager') {
      new ServiceOrderManagerView().load();
    }
  }
}