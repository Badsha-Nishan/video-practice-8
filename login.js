const login = document
  .getElementById("login-btn")
  .addEventListener("click", (event) => {
    const numberInput = document.getElementById("number-input");
    const number = numberInput.value;
    if (number.length !== 11) {
      alert("Invalid Number");
      return;
    } else {
      // const success = document.getElementById("number-input");
      // success.value += "✅";
      const target = document.getElementById("target");
      const p = document.createElement("p");
      p.innerText = "Correct";
      p.style.color = "green";
      target.appendChild(p);
    }
    const pinInput = document.getElementById("pin");
    const pin = pinInput.value;
    if (pin.length !== 4) {
      alert("Invalid Pin");
    } else {
      alert("Login Successfully");
      window.location.assign("./home.html");
      return;
    }
  });
