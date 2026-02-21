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

  const history = document.getElementById("history-container");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
  <img src="./assets/opt-3.png" />
  <h2 class="text-black/50 text-xl">Transfer Money Successfully to ${userAccountNumber} amount of taka ${transferAmount} at ${new Date().toLocaleString()} </h2>
  `;
  history.appendChild(newHistory);
});

// Get Bonus Section

const bonus = document.getElementById("bonus-btn");
const bonusTaka = 1000;
bonus.addEventListener("click", () => {
  const coupon = getValueFromInput("coupon-number");
  if (coupon === "12345") {
    openModal("Congratulation!!", "You have got the bonus");
    // const bonus = 1000;
    const mainBalance = getElementFromInput("current-balance");
    const restBalance = mainBalance + bonusTaka;
    document.getElementById("current-balance").innerText = restBalance;
  } else {
    openModal("Wrong Coupon", "Enter the right coupon number");
    return;
  }

//   Transaction History

  const history = document.getElementById("history-container");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
  <img src="./assets/opt-4.png" />
  <h2 class="text-black/50 text-xl">Bonus Added Successfully to your account amount of taka ${bonusTaka} at ${new Date().toLocaleString()} </h2>
  `;
  history.appendChild(newHistory);
});
