const cashoutBtn = document.getElementById("cashout-btn");

cashoutBtn.addEventListener("click", () => {
  const agentNumber = getValueFromInput("agent-number");
  if (agentNumber.length !== 11) {
    // alert("Invalid Bank Account Number");
    openModal("Invalid Agent Number!", "Please Provide Right Number");
    return;
  }
  const cashoutAmount = getValueFromInput("cashout-amount");
  if (cashoutAmount === "") {
    // alert("Please provide amount");
    openModal("Wrong!!", "Enter Cashout Amount");
    return;
  }
  const pin = getValueFromInput("cashout-pin");
  if (pin.length !== 4) {
    // alert("Invalid Pin");
    openModal("Wrong Pin!", "Please Provide Right Pin Number");
    return;
  }
  const currentBalance = getElementFromInput("current-balance");
  const mainBalance = currentBalance - Number(cashoutAmount);
  console.log(mainBalance);
  if (mainBalance < 0) {
    // alert("Invalid");
    openModal("Unavailable!!", "Insufficient Balance");
    return;
  }
  document.getElementById("current-balance").innerText = mainBalance;
  openModal("Congratulations", "Cashout Successfully");

  // Transaction History

  const history = document.getElementById("history-container");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
  <img src="./assets/opt-2.png" />
  <h2 class="text-black/50 text-xl">Cashout Successfully to ${agentNumber} amount of taka ${cashoutAmount} at ${new Date().toLocaleString()} </h2>
  `;
  history.appendChild(newHistory);
});
