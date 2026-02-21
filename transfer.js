const transferMoney = document.getElementById("transfer-btn");
transferMoney.addEventListener("click", () => {
  const userAccountNumber = getValueFromInput("user-number");
  if (userAccountNumber.length !== 11) {
    openModal("Wrong!!", "Enter the Right Account Number");
    return;
  }
  const transferPin = getValueFromInput("transfer-pin");
  if (transferPin.length !== 4) {
    openModal("Wrong!!", "Enter the Right Pin");
    return;
  }
  const mainBalance = getElementFromInput("current-balance");
  const transferAmount = getValueFromInput("transfer-amount");
  if (transferAmount === "") {
    openModal("Wrong!!", "Enter Amount");
    return;
  }
  if (transferAmount > mainBalance) {
    alert("Insufficient");
    return;
  }
  const restBalance = mainBalance - transferAmount;
  document.getElementById("current-balance").innerText = restBalance;
  openModal("Transfer Successfully", "Done!");
});
