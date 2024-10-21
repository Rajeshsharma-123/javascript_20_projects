const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const millisecondsLabel = document.getElementById('milliseconds');

const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const pauseButton = document.getElementById('pauseBtn');
const resetButton = document.getElementById('resetBtn');
const lapButton = document.getElementById('lapBtn');
const setTimeButton = document.getElementById('setTimeBtn');
const displayFormat = document.getElementById('displayFormat');

const lapList = document.getElementById('laplist');

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let lastLapTime = { minutes: 0, seconds: 0, milliseconds: 0 };


// Event listeners
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', addToLapList);
setTimeButton.addEventListener('click', setCustomTime);
displayFormat.addEventListener('change', updateDisplayFormat);



// Start the timer
function startTimer() {
    interval = setInterval(updateTimer, 10);
    startButton.disabled = true;
    
}

// Stop the timer and add lap
function stopTimer() {
    clearInterval(interval);
    addToLapList();
    resetTimerData();
    startButton.disabled = false;

}

// Pause the timer
function pauseTimer() {
    clearInterval(interval);
    startButton.disabled = false;
}

// Reset the timer
function resetTimer() {
    clearInterval(interval);
    resetTimerData();
    lapList.innerHTML = ''; // Clear lap list
    startButton.disabled = false;
}

// Update timer every 10 milliseconds
function updateTimer() {
    milliseconds++;
    if (milliseconds === 100) { // 1 second = 1000 milliseconds
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    displayTimer();
}

// Display the current time
function displayTimer() {
    millisecondsLabel.textContent = padTime(milliseconds);
    secondsLabel.textContent = padTime(seconds);
    minutesLabel.textContent = padTime(minutes);
}

// Add lap to list with time difference
function addToLapList() {
    const currentLapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
    const diffMinutes = minutes - lastLapTime.minutes;
    const diffSeconds = seconds - lastLapTime.seconds;
    const diffMilliseconds = milliseconds - lastLapTime.milliseconds;

    const lapDifference = `${padTime(diffMinutes)}:${padTime(diffSeconds)}:${padTime(diffMilliseconds)}`;
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1}: </span>${currentLapTime} (Diff: ${lapDifference})`;
    lapList.appendChild(listItem);

    lastLapTime = { minutes, seconds, milliseconds };
}

// Pad time values to ensure two digits
function padTime(time) {
    return time.toString().padStart(2, '0');
}

// Reset the timer data
function resetTimerData() {
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lastLapTime = { minutes: 0, seconds: 0, milliseconds: 0 };
    displayTimer();
}

// Set custom time
function setCustomTime() {
    const setMinutes = parseInt(document.getElementById('setMinutes').value);
    const setSeconds = parseInt(document.getElementById('setSeconds').value);

    if (!isNaN(setMinutes) && !isNaN(setSeconds)) {
        minutes = setMinutes;
        seconds = setSeconds;
        milliseconds = 0;
        displayTimer();
    }
}



// Update the display format (show/hide milliseconds)
function updateDisplayFormat() {
    const format = displayFormat.value;
    if (format === 'simple') {
        millisecondsLabel.style.display = 'none';
    } else {
        millisecondsLabel.style.display = 'inline';
    }
}


