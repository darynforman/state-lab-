// Exercise 7: Modal Dialog System

// TODO 1: Define your state object
const state = {
    isOpen: false,
    message: "This is a modal dialog!"
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const app = document.getElementById("app");

    // Base UI (Open Modal Button)
    let html = `
        <button id="openBtn" class="open-btn">Open Modal</button>
    `;

    // If modal is open, add the modal overlay + box
    if (state.isOpen) {
        html += `
            <div id="overlay" class="overlay">
                <div class="modal">
                    <p>${state.message}</p>
                    <button id="closeBtn" class="close-btn">Close</button>
                </div>
            </div>
        `;
    }

    app.innerHTML = html;
}

// TODO 4: Add your event listeners and logic
document.addEventListener("click", function(e) {
    // Open modal
    if (e.target.id === "openBtn") {
        updateState({ isOpen: true });
    }

    // Close modal
    if (e.target.id === "closeBtn") {
        updateState({ isOpen: false });
    }

    // Close when clicking overlay (but not modal content)
    if (e.target.id === "overlay") {
        updateState({ isOpen: false });
    }
});

// TODO 5: Initial render
render();