// Exercise 9: Accordion Menu
// Complete the TODOs below

// Exercise 9: Accordion Menu

// TODO 1: Define your state object
const state = {
    activeSection: null, // will store the id of the open section
    sections: [
        { id: "s1", title: "Section 1", content: "This is the content for section 1." },
        { id: "s2", title: "Section 2", content: "This is the content for section 2." },
        { id: "s3", title: "Section 3", content: "This is the content for section 3." }
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

    const html = state.sections.map(section => `
        <div class="accordion-item">
            <button class="accordion-title" data-id="${section.id}">
                ${section.title}
            </button>

            ${
                state.activeSection === section.id
                ? `<div class="accordion-content">${section.content}</div>`
                : ""
            }
        </div>
    `).join("");

    app.innerHTML = html;
}

// TODO 4: Add your event listeners and logic
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("accordion-title")) {
        const id = e.target.dataset.id;
        
        // If already open, close it. Otherwise open it.
        updateState({
            activeSection: state.activeSection === id ? null : id
        });
    }
});

// TODO 5: Initial render
render();
