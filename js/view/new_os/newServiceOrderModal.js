function showNewServiceOrderModal() {
  document.getElementById('newServiceOrderForm').style.display="inline";
  document.getElementById('overlay').style.display="inline";
}

function hideNewServiceOrderModal() {
  var x = event.keyCode;
  document.getElementById('newServiceOrderForm').style.display="none";
  document.getElementById('overlay').style.display="none";
}
