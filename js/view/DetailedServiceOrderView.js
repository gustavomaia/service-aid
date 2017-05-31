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
    this._serviceOrderController = new ServiceOrderController();
  }

  show(serviceOrderCode, view) {
    this._serviceOrderController.getServiceOrder(serviceOrderCode).then(serviceOrders => {
      let serviceOrder = serviceOrders[0];
      this._detailedOSModalNumber.textContent = serviceOrder.code;
      this._detailedOSDescription.textContent = serviceOrder.description;
      this._detailedOSIssuer.textContent = serviceOrder.Issuer.name;
      this._detailedOSExecutor.textContent = serviceOrder.Executor.name;

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

      if (view) {
        let executorButton = document.createElement('button');
        executorButton.type = 'submit';
        executorButton.textContent = 'Finalizar';
        executorButton.addEventListener('click', ()=>{
          this._serviceOrderController.finishOS(this._detailedOSModalNumber.textContent).then(()=>{
          view.parentNode.deleteRow(view.rowIndex);
          this._hideDetailedServiceOrderModal();
        });

        }, false);

        this.detailedOSHeader.appendChild(executorButton);
      }

      messageToFocus.scrollIntoView();
      this._descriptionInput.focus();
    })
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
  }

}