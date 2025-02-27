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

async function updateDateTime() {
  try {
    const response = await fetch("data.txt?nocache=" + new Date().getTime()); // Prevent caching
    const text = await response.text();
    const lines = text.trim().split("\n"); // Split lines from the file

    if (lines.length >= 2) {
      document.querySelector(".icon-text:nth-child(1) p").textContent =
        lines[0].trim(); // Update date
      document.querySelector(".icon-text:nth-child(2) p").textContent =
        lines[1].trim(); // Update time
    }
  } catch (error) {
    console.error("Error fetching date and time:", error);
  }
}

setInterval(updateDateTime, 5000); // Check for updates every 5 seconds
window.onload = updateDateTime;
