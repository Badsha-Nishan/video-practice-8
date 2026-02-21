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
  openModal("I Love You K+B", "Congrats!!");

  // Transaction History

  const history = document.getElementById("history-container");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
  <img src="./assets/opt-5.png" />
  <h2 class="text-black/50 text-xl">Pay Bill Successfully from ${bank} amount of taka ${payAmount} at ${new Date().toLocaleString()} </h2>
  `;
  history.appendChild(newHistory);
});
