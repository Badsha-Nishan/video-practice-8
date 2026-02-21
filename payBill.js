const payBillBtn = document.getElementById("pay-bill-btn");

payBillBtn.addEventListener("click", () => {
  const bank = getValueFromInput("select-bank-pay");
  if (bank === "select bank") {
    // alert("Please Select a Bank");
    openModal("Select Bank", "Please Select a Bank");
    return;
  }
  const billerAccountNumber = getValueFromInput("biller-account-number");
  if (billerAccountNumber.length !== 11) {
    // alert("Invalid Bank Account Number");
    openModal("Invalid Biller Account Number!", "Please Provide Right Number");
    return;
  }
  const pin = getValueFromInput("pay-pin");
  if (pin.length !== 4) {
    // alert("Invalid Pin");
    openModal("Wrong Pin!", "Please Provide Right Pin Number");
    return;
  }
  const payAmount = getValueFromInput("pay-amount");
  if (payAmount === "") {
    openModal("Wrong!!", "Enter Amount");
    return;
  }
  const currentBalance = getElementFromInput("current-balance");
  if (payAmount > currentBalance) {
    openModal("Insufficient!!", "Not Enough Balance");
    return;
  }
  const mainBalance = currentBalance - Number(payAmount);
  document.getElementById("current-balance").innerText = mainBalance;
  openModal("Pay Bill Successfully", "Congrats!!");
});
