// Exercise 13: Timer/Stopwatch
// Complete the TODOs below

// Exercise 13: Timer/Stopwatch

// TODO 1: Define your state object
const state = {
    time: 0,        // time in seconds
    isRunning: false,
    intervalId: null
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// Format time (mm:ss)
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// TODO 3: Create render function
function render() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <div class="timer-display">${formatTime(state.time)}</div>
        <div class="controls">
            <button id="startBtn">${state.isRunning ? "Pause" : "Start"}</button>
            <button id="resetBtn">Reset</button>
        </div>
    `;

    // TODO 4: Add your event listeners and logic
    document.getElementById("startBtn").onclick = () => {
        if (state.isRunning) {
            clearInterval(state.intervalId);
            updateState({ isRunning: false, intervalId: null });
        } else {
            const interval = setInterval(() => {
                updateState({ time: state.time + 1 });
            }, 1000);
            updateState({ isRunning: true, intervalId: interval });
        }
    };

    document.getElementById("resetBtn").onclick = () => {
        clearInterval(state.intervalId);
        updateState({ time: 0, isRunning: false, intervalId: null });
    };
}

// TODO 5: Initial render
render();
