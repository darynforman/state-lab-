// Exercise 8: Tabs Component
// Complete the TODOs below
// TODO 1: Define your state object
const state = {
    activeTab: "home", // default tab
    tabs: [
        { id: "home", label: "Home", content: "Welcome to the Home tab!" },
        { id: "about", label: "About", content: "Here is some information about us." },
        { id: "contact", label: "Contact", content: "You can contact us at support@example.com." }
    ]
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const app = document.getElementById("app");

    // Create buttons for each tab
    const tabButtons = state.tabs.map(tab => `
        <button 
            class="tab-btn ${state.activeTab === tab.id ? "active" : ""}"
            data-id="${tab.id}"
        >
            ${tab.label}
        </button>
    `).join("");

    // Get current tab content
    const current = state.tabs.find(tab => tab.id === state.activeTab);

    // Render UI
    app.innerHTML = `
        <div class="tabs">${tabButtons}</div>
        <div class="tab-content">${current.content}</div>
    `;
}

// TODO 4: Add your event listeners and logic
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("tab-btn")) {
        const id = e.target.dataset.id;
        updateState({ activeTab: id });
    }
});

// TODO 5: Initial render
render();