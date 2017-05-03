class ServiceOrderRegisterView {
  constructor() {
    this._serviceOrderForm = document.getElementById('newServiceOrderForm');
    this._overlay = document.getElementById('overlay');

    // companyController = new CompanyController();
    // this._getCompanyName = companyController.getName();
    // this._getCompanyCategories = companyController.getCategories();
  }

  showNewServiceOrderModal() {
    this._serviceOrderForm.style.display="inline";
    this._overlay.style.display="inline";
  }

  hideNewServiceOrderModal() {
    this._serviceOrderForm.style.display="none";
    this._overlay.style.display="none";
  }
}

