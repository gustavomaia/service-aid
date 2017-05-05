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

  newOS(event) {
    event.preventDefault();

    let serviceOrder = {
      categoryId: this._categorySelect.item(this._categorySelect.selectedIndex).value,
      place: this._placeInput.value,
      contactPhoneNumber: this._contactPhoneInput.value,
      description: this._descriptionInput.value
    }

    new ServiceOrderController().postNewServiceOrder(serviceOrder)
      .then(serviceOrder => {
        console.log(serviceOrder)
        this._serviceOrderForm.reset();
        this.hideNewServiceOrderModal();
      })
      .catch(error => {
        console.error(error);
      })
  }

  _showNewServiceOrderModal() {
    console.log('teste');
    this._serviceOrderForm.style.display="inline";
    this._overlay.style.display="inline";
  }

  _hideNewServiceOrderModal() {
    this._serviceOrderForm.style.display="none";
    this._overlay.style.display="none";
  }
}
