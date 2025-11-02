// Exercise 10: Pagination System
// Complete the TODOs below


// TODO 1: Define your state object
const state = {
    currentPage: 1,
    itemsPerPage: 5,
    items: Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`) // sample data
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const app = document.getElementById("app");

    const start = (state.currentPage - 1) * state.itemsPerPage;
    const end = start + state.itemsPerPage;
    const visibleItems = state.items.slice(start, end);

    const totalPages = Math.ceil(state.items.length / state.itemsPerPage);

    // Display current items
    const listHTML = visibleItems.map(item => `<li>${item}</li>`).join("");

    // Page Buttons
    const pageButtons = Array.from({ length: totalPages }, (_, i) => `
        <button class="page-btn ${state.currentPage === i + 1 ? "active" : ""}" data-page="${i + 1}">
            ${i + 1}
        </button>
    `).join("");

    app.innerHTML = `
        <ul class="item-list">${listHTML}</ul>

        <div class="pagination">
            <button id="prevBtn" ${state.currentPage === 1 ? "disabled" : ""}>Prev</button>
            ${pageButtons}
            <button id="nextBtn" ${state.currentPage === totalPages ? "disabled" : ""}>Next</button>
        </div>
    `;
}

// TODO 4: Add your event listeners and logic
document.addEventListener("click", function(e) {
    // Numbered page buttons
    if (e.target.classList.contains("page-btn")) {
        const page = Number(e.target.dataset.page);
        updateState({ currentPage: page });
    }

    // Prev button
    if (e.target.id === "prevBtn" && state.currentPage > 1) {
        updateState({ currentPage: state.currentPage - 1 });
    }

    // Next button
    if (e.target.id === "nextBtn") {
        const totalPages = Math.ceil(state.items.length / state.itemsPerPage);
        if (state.currentPage < totalPages) {
            updateState({ currentPage: state.currentPage + 1 });
        }
    }
});

// TODO 5: Initial render
render();
