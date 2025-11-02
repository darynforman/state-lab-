// Exercise 2: Todo Toggle
// Follow the TODOs below to complete this exercise

// TODO 1: Create a state object with 'text' and 'completed' properties
// HINT: text should be a string, completed should be a boolean (false initially)
const state = {
    text: 'Learning Centralized Object Pattern',
    completed: false
};

// TODO 2: Create an updateState function
function updateState(changes) {
    if (!changes || typeof changes !== 'object') return;
    Object.assign(state, changes);
    render();
}

// TODO 3: Create a render function
// HINT: You need to:
// - Display the todo text with a class that adds strike-through if completed
// - Show status: "✅ Complete" if completed, "⏳ Pending" if not
// - Use conditional classes: completed vs pending
function render() {
    const display = document.getElementById('display');
    if (!display){
         return;
    }

    display.innerHTML = `
        <p class="${state.completed ? 'completed' : ''}">
            ${state.text}
        </p>
        <p class="status">
            Status: ${state.completed ? '✅ Complete' : '⏳ Pending'}
        </p>
    `;
}

// TODO 4: Add event listener to toggle button
// HINT: When clicked, flip the completed status using !state.completed
const toggleBtn = document.getElementById('toggleBtn');
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        updateState({ completed: !state.completed });
    });
}

// TODO 5: Call render() initially
render();
