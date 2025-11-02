// Exercise 17: Undo/Redo System
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    past: [],
    present: '',
    future: []  
};

// TODO 2: Create updateState function
function updateState(changes) {
    const newPresent = changes.present !== undefined ? changes.present : state.present;
    const newPast = [...state.past, state.present];
    const newFuture = [];

    Object.assign(state, {
        past: newPast,
        present: newPresent,
        future: newFuture
    });

    render();

}

// TODO 3: Create render function
function render() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="undo-redo-system">
            <div class="display-area">
                <h2>Current State:</h2>
                <p>${state.present}</p>
            </div>
            <div class="controls">
                <button id="undoBtn" ${state.past.length === 0 ? 'disabled' : ''}>Undo</button>
                <button id="redoBtn" ${state.future.length === 0 ? 'disabled' : ''}>Redo</button>
                <input type="text" id="inputField" placeholder="Enter new state" />
                <button id="updateBtn">Update State</button>
            </div>
        </div>
    `;

    // Event listeners
    const undoBtn = document.getElementById('undoBtn');
    undoBtn.addEventListener('click', () => {
        if (state.past.length > 0) {
            const previous = state.past[state.past.length - 1];
            const newPast = state.past.slice(0, state.past.length - 1);
            const newFuture = [state.present, ...state.future];

            Object.assign(state, {
                past: newPast,
                present: previous,
                future: newFuture
            });

            render();
        }
    });

    const redoBtn = document.getElementById('redoBtn');
    redoBtn.addEventListener('click', () => {
        if (state.future.length > 0) {
            const next = state.future[0];
            const newFuture = state.future.slice(1);
            const newPast = [...state.past, state.present];

            Object.assign(state, {
                past: newPast,
                present: next,
                future: newFuture
            });

            render();
        }
    });

    const updateBtn = document.getElementById('updateBtn');
    const inputField = document.getElementById('inputField');
    updateBtn.addEventListener('click', () => {
        const newValue = inputField.value.trim();
        if (newValue) {
            updateState({ present: newValue });
            inputField.value = '';
        }
    });             
}


// TODO 5: Initial render
render();
