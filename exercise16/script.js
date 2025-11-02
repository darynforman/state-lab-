// Exercise 16: Drag & Drop List
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
    dragSrcIndex: null

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
        <ul class="drag-drop-list">
            ${state.items.map((item, index) => `
                <li 
                    class="draggable-item" 
                    draggable="true" 
                    data-index="${index}">
                    ${item}
                </li>
            `).join('')}
        </ul>
    `;

    // TODO 4: Add your event listeners and logic       
    const items = document.querySelectorAll('.draggable-item');
    items.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            state.dragSrcIndex = Number(item.getAttribute('data-index'));
            e.dataTransfer.effectAllowed = 'move';
        });

        item.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });

        item.addEventListener('drop', (e) => {
            e.preventDefault();
            const dragDstIndex = Number(item.getAttribute('data-index'));
            const updatedItems = [...state.items];
            const [movedItem] = updatedItems.splice(state.dragSrcIndex, 1);
            updatedItems.splice(dragDstIndex, 0, movedItem);
            updateState({ items: updatedItems, dragSrcIndex: null });
        });
    }); 
}


// TODO 5: Initial render
render();
