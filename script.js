function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Set the countdown time (10 minutes from the page load time)
let countdownTime = 10 * 60; // 10 minutes in seconds

// Function to update the timer
function updateTimer() {
  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;

  // Display the timer
  document.getElementById("countdown").textContent = `${minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;

  // Decrease countdown time by 1 second
  if (countdownTime <= 0) {
    clearInterval(timerInterval);
    document.getElementById("countdown").textContent = "Time's up!";
  } else {
    countdownTime--;
  }
}

// Update the timer every second
const timerInterval = setInterval(updateTimer, 1000);

// Initialize the timer immediately
updateTimer();
