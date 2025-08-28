// Heart icon increase

const heartCounter = document.getElementById("heart-icon");
const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let currentCount = parseInt(heartCounter.textContent);
    heartCounter.textContent = currentCount + 1;

    btn.classList.toggle("text-red-500");
  });
});

// call button

let coins = 100;
const moneyIcon = document.getElementById("money-icon");
const callButtons = document.querySelectorAll(".call-btn");

document.body.addEventListener("click", function (e) {
    let btn = e.target.closest('.call-btn')
  if (btn) {
    let card = btn.closest(".card-body");
    let serviceName = card.querySelector("p").innerText;
    let serviceNumber = card.querySelector("h1").innerText;

    if (coins < 20) {
      alert("Not enough coins! You need at least 20 coins to make a call.");
      return;
    }

    coins = coins - 20;
    moneyIcon.innerText = coins;

    alert("calling " + serviceName + " at " + serviceNumber + "...");
  }
});
