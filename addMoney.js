const addMoneyBtn = document.getElementById("add-money-btn");

addMoneyBtn.addEventListener("click", () => {
  const bank = getValueFromInput("select-bank");
  if (bank === "select bank") {
    // alert("Please Select a Bank");
    openModal("Select Bank", "Please Select a Bank");
    return;
  }
  const bankAccountNumber = getValueFromInput("bank-account-number");
  if (bankAccountNumber.length !== 11) {
    // alert("Invalid Bank Account Number");
    openModal("Invalid Bank Account Number!", "Please Provide Right Number");
    return;
  }
  const addAmount = getValueFromInput("add-amount");
  const currentBalance = getElementFromInput("current-balance");
  const mainBalance = Number(addAmount) + currentBalance;
  document.getElementById("current-balance").innerText = mainBalance;
  const pin = getValueFromInput("pin");
  if (pin.length !== 4) {
    // alert("Invalid Pin");
    openModal("Wrong Pin!", "Please Provide Right Pin Number");
    return;
  }
  openModal("Add Money Successfully");
});
