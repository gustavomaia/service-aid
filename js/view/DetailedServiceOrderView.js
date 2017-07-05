class DetailedServiceOrderView {

  constructor() {
    this._overlay = document.getElementById('overlay');
    this._overlay.addEventListener('click', ()=>this._hideDetailedServiceOrderModal(), true);
    this._detailedServiceOrderModal = document.getElementById('detailedServiceOrderModal');
    this._descriptionInput = document.getElementById('chatMessageInput');
    this._detailedOSModalNumber = document.getElementById('detailedOSModalNumber');
    this._chatConversation = document.getElementById('chatConversation');
    this._detailedOSIssuer = document.getElementById('detailedOSIssuer');
    this._detailedOSExecutor = document.getElementById('detailedOSExecutor');
    this._detailedOSDescription = document.getElementById('detailedOSDescription');
    this.detailedOSHeader = document.getElementById('detailedOSHeader');
    this._executorSelect = document.getElementById('executorSelect');
    this._executorButton;
    this._managementButton;
    this._limitDate;
    this._serviceOrderController = new ServiceOrderController();
  }

  show(serviceOrderCode) {
    this._serviceOrderController.getServiceOrder(serviceOrderCode).then(serviceOrders => {
      let serviceOrder = serviceOrders[0];
      this._detailedOSModalNumber.textContent = serviceOrder.code;
      this._detailedOSDescription.textContent = serviceOrder.description;
      this._detailedOSIssuer.textContent = serviceOrder.Issuer.name;
      if (serviceOrder.Executor) this._detailedOSExecutor.textContent = serviceOrder.Executor.name;

      let messageToFocus;
      serviceOrder.messages.forEach(message => {
        let dtAuthor = document.createElement('dt');
        let ddMessage = document.createElement('dd');
        dtAuthor.textContent = message.author;
        ddMessage.textContent = message.message;
        this._chatConversation.appendChild(dtAuthor);
        this._chatConversation.appendChild(ddMessage);
        messageToFocus = ddMessage;
      });

      this._detailedServiceOrderModal.style.display="inline";
      this._overlay.style.display="inline";

      messageToFocus.scrollIntoView();
      this._descriptionInput.focus();
    })
  }

  showForExecution(serviceOrderCode, view) {
    this.show(serviceOrderCode);

    this._executorButton = document.createElement('button');
    this._executorButton.id = 'finishOSBtn'
    this._executorButton.type = 'submit';
    this._executorButton.textContent = 'Finalizar';
    this._executorButton.addEventListener('click', ()=>{
      this._serviceOrderController.finishOS(this._detailedOSModalNumber.textContent).then(()=>{
      view.parentNode.deleteRow(view.rowIndex);
      this._hideDetailedServiceOrderModal();
    });

    }, false);

    this.detailedOSHeader.appendChild(this._executorButton);
  }

  showForManagement(serviceOrderCode, view) {
    this.show(serviceOrderCode);

    this._executorSelect.style.visibility = 'visible';

    this._managementButton = document.createElement('button');
    this._managementButton.id = 'manageOSBtn';
    this._managementButton.type = 'submit';
    this._managementButton.textContent = 'Gerenciar';

    this._limitDate = document.createElement('input');
    this._limitDate.id = 'osLimitDate';
    this._limitDate.type='date';

    this._managementButton.addEventListener('click', ()=>{
      let managementData = {
        limitDate: this._limitDate.value,
        executorId: this._executorSelect.item(this._executorSelect.selectedIndex).value,
      }
      this._serviceOrderController.manageOS(this._detailedOSModalNumber.textContent, managementData).then(()=>{
        view.parentNode.deleteRow(view.rowIndex);
        this._hideDetailedServiceOrderModal();
      });
    }, false);

    this.detailedOSHeader.appendChild(this._managementButton);
    this.detailedOSHeader.appendChild(this._limitDate);
  }

  sendMessage(event) {
    if (event.keyCode == 13) {
      let messageText = this._descriptionInput.value.trim();
      if (messageText) {
        this._serviceOrderController.sendMessage(this._detailedOSModalNumber.textContent, {message: messageText})
          .then(message=>{
            let dtAuthor = document.createElement('dt');
            let ddMessage = document.createElement('dd');
            dtAuthor.textContent = message.author;
            ddMessage.textContent = message.message;
            this._chatConversation.appendChild(dtAuthor);
            this._chatConversation.appendChild(ddMessage);
            ddMessage.scrollIntoView();
          });

      }

      this._descriptionInput.value = '';
    }
  }

  _hideDetailedServiceOrderModal() {
    this._descriptionInput.value = "";
    this._detailedServiceOrderModal.style.display="none";
    this._overlay.style.display="none";
    this._chatConversation.innerHTML = "";
    if (this._executorButton) this._executorButton.remove();
    if (this._managementButton) this._managementButton.remove();
    if (this._limitDate) this._limitDate.remove();
    this._executorSelect.style.visibility = 'hidden';
  }

}