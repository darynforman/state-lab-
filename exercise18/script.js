// Exercise 18: Kanban Board
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    columns: {  


        'todo': { title: 'To Do', tasks: [] },
        'inprogress': { title: 'In Progress', tasks: [] },
        'done': { title: 'Done', tasks: [] }
    }       
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();

}

// TODO 3: Create render function
function render() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="kanban-board">
            ${Object.entries(state.columns).map(([key, column]) => `
                <div class="kanban-column" data-key="${key}">
                    <h2>${column.title}</h2>
                    <div class="kanban-tasks">
                        ${column.tasks.map((task, index) => `
                            <div class="kanban-task" data-index="${index}">
                                <p>${task}</p>
                            </div>
                        `).join('')}
                    </div>
                    <input type="text" class="new-task-input" placeholder="New task" />
                    <button class="add-task-btn">Add Task</button>
                </div>
            `).join('')}
        </div>
    `;

    // TODO 4: Add your event listeners and logic
    const addTaskButtons = document.querySelectorAll('.add-task-btn');
    addTaskButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const columnElement = button.closest('.kanban-column');
            const columnKey = columnElement.getAttribute('data-key');
            const input = columnElement.querySelector('.new-task-input');
            const taskText = input.value.trim();
            if (taskText) {
                const updatedColumns = { ...state.columns };
                updatedColumns[columnKey].tasks.push(taskText);
                updateState({ columns: updatedColumns });
                input.value = '';
            }
        });
    });
}


// TODO 5: Initial render
render();
