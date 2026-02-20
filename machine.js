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
  const show = document.getElementById(id);
  if (!show) return;
  show.classList.toggle("hidden");
}

// For Modal

const modal = document.getElementById("my_modal_2");
const modalTitle = document.getElementById("title");
const modalMessage = document.getElementById("msg");
function openModal(title, message) {
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  modal.showModal();
}
