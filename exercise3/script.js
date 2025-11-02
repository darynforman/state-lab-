// Exercise 3: Temperature Converter
// Follow the TODOs below to complete this exercise

// TODO 1: Create a state object with 'celsius' property
// HINT: Start with 0 as the default value
const state = {
    celsius: 0
};

// TODO 2: Create an updateState function
function updateState(changes) {
    if (!changes || typeof changes !== 'object') return;
    Object.assign(state, changes);
    render();
}

// TODO 3: Create a render function
// HINT: 
// - Calculate fahrenheit from celsius: (celsius * 9/5) + 32
// - Display both temperatures with 1 decimal place using .toFixed(1)
// - Update the input value to match state.celsius
function render() {
    const c = Number.isFinite(state.celsius) ? state.celsius : 0;
    const fahrenheit = (c * 9 / 5) + 32;
    const display = document.getElementById('display');
    const input = document.getElementById('celsiusInput');
    if (!display || !input) return;

    // Update display text
    display.textContent = `${state.celsius.toFixed(1)}°C = ${fahrenheit.toFixed(1)}°F`;

    // Keep input synced with state
    input.value = c;
}

// TODO 4: Add event listener to the input field
// HINT: 
// - Use 'input' event for real-time updates
// - Get the value with: parseFloat(input.value) || 0
// - Call updateState with the new celsius value
const celsiusInput = document.getElementById('celsiusInput');
if (celsiusInput) {
    celsiusInput.addEventListener('input', (event) => {
        const newValue = parseFloat(event.target.value) || 0;
        updateState({ celsius: newValue });
    });
}

// TODO 5: Call render() initially
render();
