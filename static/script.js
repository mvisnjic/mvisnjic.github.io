let modal = document.getElementById("modal");
let btnContact = document.getElementById("contactBtn");
let btnSend = document.getElementById("sendBtn");
let btnX = document.getElementById("closeX");

btnContact.onclick = function () {
  modal.style.display = "block";
};

btnSend.onclick = function () {
  alert("U izradi...Uskoro!");
};

btnX.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
