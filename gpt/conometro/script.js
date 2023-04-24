let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

const timerElement = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
  clearInterval(timerInterval);
}

function resetTimer() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateTimer();
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  const formattedTime = padNumber(hours) + ':' + padNumber(minutes) + ':' + padNumber(seconds);
  timerElement.textContent = formattedTime;
}

function padNumber(number) {
  return (number < 10 ? '0' : '') + number;
}