function getValueFromInput(id) {
  const value = document.getElementById(id).value;
  return value;
}

function getElementFromInput(id) {
  let value = document.getElementById(id).innerText;
  return Number(value);
}

// Toggle Button

function showButton(id) {
  const addMoney = document.getElementById("add-money-section");
  const cashout = document.getElementById("cashout-section");
  const transfer = document.getElementById("transfer-section");
  const bonus = document.getElementById("bonus-section");
  const payBill = document.getElementById("pay-bill-section");
  const history = document.getElementById("history");

  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");
  transfer.classList.add("hidden");
  bonus.classList.add("hidden");
  payBill.classList.add("hidden");
  history.classList.add("hidden");

  const selected = document.getElementById(id);
  selected.classList.remove("hidden");

  //   const show = document.getElementById(id);
  //   if (!show) return;
  //   show.classList.toggle("hidden");
}

// For Modal

const modal = document.getElementById("my_modal_2");
const modalTitle = document.getElementById("title");
const modalMessage = document.getElementById("msg");
function openModal(title = "", message = "") {
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  modal.showModal();
}

// Get sessionStorage

const status = sessionStorage.getItem("showModal");
if (status === "Login-Success") {
  openModal("Login Successfully", "Welcome!");
  sessionStorage.removeItem("showModal");
}
