// Exercise 23: Form Builder
// Complete the TODOs below


// TODO 1: Define your state object
const state = {
    fields: [], // Array of field objects { id, label, type, value }
    newFieldType: "text", // Default selected type
    newFieldLabel: "" // Label for the new field
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// Helper: Generate unique IDs
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

// TODO 3: Create render function
function render() {
    const app = document.getElementById("app");

    // Preserve focus and caret before re-render
    const activeEl = document.activeElement;
    const shouldRestore = activeEl && app.contains(activeEl) && activeEl.id;
    let restoreInfo = null;
    if (shouldRestore) {
        try {
            restoreInfo = {
                id: activeEl.id,
                type: activeEl.type,
                start: typeof activeEl.selectionStart === "number" ? activeEl.selectionStart : null,
                end: typeof activeEl.selectionEnd === "number" ? activeEl.selectionEnd : null
            };
        } catch (_) {
            restoreInfo = { id: activeEl.id, type: activeEl.type, start: null, end: null };
        }
    }

    // Field builder controls
    const builderHTML = `
        <div class="builder-controls">
            <h3>Add New Field</h3>
            <label>Label:</label>
            <input id="labelInput" type="text" value="${state.newFieldLabel}" placeholder="Enter field label">
            
            <label>Type:</label>
            <select id="typeSelect">
                <option value="text" ${state.newFieldType === "text" ? "selected" : ""}>Text</option>
                <option value="number" ${state.newFieldType === "number" ? "selected" : ""}>Number</option>
                <option value="email" ${state.newFieldType === "email" ? "selected" : ""}>Email</option>
                <option value="checkbox" ${state.newFieldType === "checkbox" ? "selected" : ""}>Checkbox</option>
            </select>

            <button id="addFieldBtn">Add Field</button>
        </div>
    `;

    // Built form display
    const formHTML = `
        <div class="form-preview">
            <h3>Form Preview</h3>
            ${
                state.fields.length === 0
                    ? `<p class="empty">No fields added yet.</p>`
                    : `<form id="dynamicForm">
                        ${state.fields.map(field => `
                            <div class="form-group">
                                <label>${field.label}</label>
                                ${
                                    field.type === "checkbox"
                                        ? `<input type="checkbox" id="${field.id}" ${field.value ? "checked" : ""}>`
                                        : `<input type="${field.type}" id="${field.id}" value="${field.value || ""}" placeholder="${field.label}">`
                                }
                                <button class="remove-btn" data-id="${field.id}">🗑️</button>
                            </div>
                        `).join("")}
                    </form>`
            }
        </div>
    `;

    app.innerHTML = `
        <div class="form-builder">
            ${builderHTML}
            ${formHTML}
        </div>
    `;

    // Restore focus and caret after re-render
    if (restoreInfo) {
        const el = document.getElementById(restoreInfo.id);
        if (el) {
            el.focus();
            if (
                restoreInfo.type !== "checkbox" &&
                typeof restoreInfo.start === "number" &&
                typeof restoreInfo.end === "number" &&
                typeof el.setSelectionRange === "function"
            ) {
                try { el.setSelectionRange(restoreInfo.start, restoreInfo.end); } catch (_) {}
            }
        }
    }

    // TODO 4: Add your event listeners and logic

    // Update new field label
    document.getElementById("labelInput").addEventListener("input", (e) => {
        updateState({ newFieldLabel: e.target.value });
    });

    // Update selected type
    document.getElementById("typeSelect").addEventListener("change", (e) => {
        updateState({ newFieldType: e.target.value });
    });

    // Add new field
    document.getElementById("addFieldBtn").addEventListener("click", () => {
        if (!state.newFieldLabel.trim()) {
            alert("Please enter a field label!");
            return;
        }

        const newField = {
            id: generateId(),
            label: state.newFieldLabel,
            type: state.newFieldType,
            value: state.newFieldType === "checkbox" ? false : ""
        };

        updateState({
            fields: [...state.fields, newField],
            newFieldLabel: ""
        });
    });

    // Handle field input changes
    state.fields.forEach(field => {
        const el = document.getElementById(field.id);
        if (el) {
            el.addEventListener("input", (e) => {
                const newValue =
                    field.type === "checkbox" ? e.target.checked : e.target.value;
                const updatedFields = state.fields.map(f =>
                    f.id === field.id ? { ...f, value: newValue } : f
                );
                updateState({ fields: updatedFields });
            });
        }
    });

    // Handle field removal
    document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const id = e.target.dataset.id;
            const updatedFields = state.fields.filter(f => f.id !== id);
            updateState({ fields: updatedFields });
        });
    });
}

// TODO 5: Initial render
render();
