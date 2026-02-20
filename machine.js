function getValueFromInput(id) {
  const value = document.getElementById(id).value;
  return value;
}

function getElementFromInput(id) {
  let value = document.getElementById(id).innerText;
  return Number(value);
}

function showButton(id) {
  const show = document.getElementById(id);
  if (!show) return;
  show.classList.toggle("hidden");
}
