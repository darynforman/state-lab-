// Exercise 6: Todo List Manager
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    todos: []
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const app = document.getElementById("app");

    // Create input + add button
    const inputSection = `
        <div class="input-section">
            <input id="todoInput" type="text" placeholder="Enter a new todo...">
            <button id="addBtn">Add</button>
        </div>
    `;

    // If no todos yet
    if (state.todos.length === 0) {
        app.innerHTML = `
            ${inputSection}
            <p class="empty">No todos yet. Add one!</p>
        `;
        return;
    }

    // Create HTML for todo list
    const listHTML = state.todos.map(todo => `
        <div class="todo-item">
            <span class="${todo.completed ? "done" : ""}" data-id="${todo.id}" class="todo-text">
                ${todo.text}
            </span>
            <button class="toggle-btn" data-id="${todo.id}">
                ${todo.completed ? "Undo" : "Complete"}
            </button>
            <button class="delete-btn" data-id="${todo.id}">Delete</button>
        </div>
    `).join("");

    app.innerHTML = `
        ${inputSection}
        <div class="todo-list">
            ${listHTML}
        </div>
    `;
}

// TODO 4: Add event listeners and logic
document.addEventListener("click", function(e) {
    // Add todo
    if (e.target.id === "addBtn") {
        const input = document.getElementById("todoInput");
        const text = input.value.trim();
        if (text === "") return;

        const newTodo = {
            id: Date.now(),
            text,
            completed: false
        };

        updateState({ todos: [...state.todos, newTodo] });
        input.value = "";
    }

    // Toggle complete
    if (e.target.classList.contains("toggle-btn")) {
        const id = Number(e.target.dataset.id);

        updateState({
            todos: state.todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        });
    }

    // Delete todo
    if (e.target.classList.contains("delete-btn")) {
        const id = Number(e.target.dataset.id);

        updateState({
            todos: state.todos.filter(todo => todo.id !== id)
        });
    }
});

// TODO 5: Initial render
render();