let timerValue = 0;        // current time in seconds
let timerId = null;        // holds setInterval reference

const display = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startTimer");
const stopBtn = document.getElementById("stopTimer");
const resetBtn = document.getElementById("resetTimer");

// Update the display
function updateDisplay() {
  display.innerHTML = timerValue;
}

// Start button
startBtn.onclick = function() {
  if (timerId === null) {  // prevent multiple intervals
    timerId = setInterval(function() {
      timerValue++;
      updateDisplay();
    }, 1000);
  }
};

// Stop button
stopBtn.onclick = function() {
  clearInterval(timerId);
  timerId = null;
};

// Reset button
resetBtn.onclick = function() {
  clearInterval(timerId);
  timerId = null;
  timerValue = 0;
  updateDisplay();
};

// Initialize display
updateDisplay();
