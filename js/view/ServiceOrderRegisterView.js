class ServiceOrderRegisterView {
  constructor() {
    this._serviceOrderForm = document.getElementById('newServiceOrderForm');
    this._newOrderServiceButton = document.getElementById('newOrderServiceButton');
    this._newOrderServiceButton.addEventListener('click', () => this._showNewServiceOrderModal(), false);
    this._overlay = document.getElementById('newServiceOrderOverlay');
    this._overlay.addEventListener('click', () => this._hideNewServiceOrderModal(), false);
    this._companyNameInput = document.getElementById('companyNameInput');
    this._categorySelect = document.getElementById('categorySelect');
    this._placeInput = document.getElementById('placeInput');
    this._contactPhoneInput = document.getElementById('contactPhoneInput');
    this._descriptionInput = document.getElementById('descriptionInput');
    this._serviceOrderController = new ServiceOrderController();

    new CompanyController().getCompanyInfo().then(company => {
      this._companyNameInput.placeholder = company.name;
      company.categories.forEach(category => {
        let categoryOption = document.createElement('option');
        categoryOption.text = category.name;
        categoryOption.value = category.id;
        this._categorySelect.appendChild(categoryOption);
      });
    });
  }

  saveNewOS(event) {
    event.preventDefault();

    let serviceOrder = {
      categoryId: this._categorySelect.item(this._categorySelect.selectedIndex).value,
      place: this._placeInput.value,
      contactPhoneNumber: this._contactPhoneInput.value,
      description: this._descriptionInput.value
    }

    this._serviceOrderController.postNewServiceOrder(serviceOrder)
      .then(serviceOrder => {
        console.log(serviceOrder)
        this._serviceOrderForm.reset();
        this._hideNewServiceOrderModal();
      })
      .catch(error => {
        console.error(error);
      })
  }

  _showNewServiceOrderModal() {
    this._serviceOrderForm.style.display="inline";
    this._overlay.style.display="inline";
  }

  _hideNewServiceOrderModal() {
    this._serviceOrderForm.style.display="none";
    this._overlay.style.display="none";
  }
}
