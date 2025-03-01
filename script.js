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
async function updateDateTimeAndLink() {
  try {
    const response = await fetch("data.txt?nocache=" + new Date().getTime()); // Prevent caching issues
    const text = await response.text();
    const lines = text.trim().split("\n"); // Split lines from the file

    if (lines.length >= 3) {
      const date = lines[0].trim();
      const time = lines[1].trim();
      const link = lines[2].trim();

      // Update the date and time in the header section
      document.querySelector(".icon-text:nth-child(1) p").textContent = date; // Update date
      document.querySelector(".icon-text:nth-child(2) p").textContent = time; // Update time
      document.querySelector(".playbtn").href = link; // Update main button hyperlink
      document.querySelector(".timer-cta").href = link; // Update main button hyperlink

      // Update FAQ section with the new date and time
      const faqAnswers = document.querySelectorAll(".faq-answer");
      if (faqAnswers.length > 0) {
        faqAnswers[0].innerHTML = `The workshop will be held on ${date}, at ${time} on Zoom. It will last around 2 hours.`;
      }
    }
  } catch (error) {
    console.error("Error fetching date, time, and link:", error);
  }
}

// Run the function initially and refresh every 5 seconds
window.onload = updateDateTimeAndLink;
