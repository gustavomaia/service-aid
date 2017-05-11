class DetailedServiceOrderView {

  constructor() {
    this._overlay = document.getElementById('overlay');
    this._overlay.addEventListener('click', ()=>this._hideDetailedServiceOrderModal(), true);
    this._detailedServiceOrderModal = document.getElementById('detailedServiceOrderModal');
  }

  show(serviceOrderCode) {
    this._detailedServiceOrderModal.style.display="inline";
    this._overlay.style.display="inline";
  }

  _hideDetailedServiceOrderModal() {
    this._detailedServiceOrderModal.style.display="none";
    this._overlay.style.display="none";
  }

}