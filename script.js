function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Set the countdown time (10 minutes from the page load time)
let timeLeft = 600; // 10 minutes in seconds

function updateTime() {
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  document.getElementById("timer").innerText = `${minutes} Min  ${seconds} Sec`;

  if (timeLeft > 0) {
    timeLeft--;
  }
}

setInterval(updateTime, 1000);

document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentElement;
    parent.classList.toggle("active");
    const icon = item.querySelector("span");
    icon.textContent = parent.classList.contains("active") ? "-" : "+";
  });
});
