// Exercise 11: Search & Filter
// Complete the TODOs below
// Exercise 11: Search & Filter

// TODO 1: Define your state object
const state = {
    items: [
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Elderberry",
        "Fig",
        "Grapes",
        "Honeydew",
        "Kiwi",
        "Lemon",
        "Mango",
        "Nectarine",
        "Orange",
        "Papaya",
        "Quince",
        "Raspberry",
        "Strawberry",
        "Tomato",
        "Ugli fruit",
        "Watermelon"
    ],
    searchQuery: '',
    filteredItems: []
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const app = document.getElementById("app");

    // Filter items based on search query
    const filteredItems = state.items.filter(item =>
        item.toLowerCase().includes(state.searchQuery.toLowerCase())
    );

    app.innerHTML = `
        <input 
            type="text" 
            id="searchInput" 
            placeholder="Search items..." 
            value="${state.searchQuery}"
            class="input"
        />

        <ul class="list">
            ${filteredItems.map(item => `<li class="list-item">${item}</li>`).join("")}
        </ul>
    `;

    // TODO 4: Add event listeners and logic
    document.getElementById("searchInput").addEventListener("input", (e) => {
        updateState({ searchQuery: e.target.value });
    });
}

// TODO 5: Initial render
render();