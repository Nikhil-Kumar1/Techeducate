// Function to update the digital clock
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  clockContent.textContent = `${hours}:${minutes}:${seconds}`;
}
// Function to toggle between time and date
function toggleFormat() {
  const isRectangular = digitalClock.classList.toggle("rectangular");

  if (isRectangular) {
    updateDate();
  } else {
    updateClock();
  }
}

// Function to update the date format
function updateDate() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  clockContent.textContent =
    now.toLocaleDateString("en-US", options) + " " + now.toLocaleTimeString();
}

// Initial setup
const digitalClock = document.getElementById("digitalClock");
const clockContent = document.getElementById("clockContent");
updateClock();

// Update the clock every second
setInterval(() => {
  if (!digitalClock.classList.contains("rectangular")) {
    updateClock();
  }
}, 1000);
