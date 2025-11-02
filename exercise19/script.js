// Exercise 19: Data Table
// Complete the TODOs below
// Exercise 19: Data Table

// TODO 1: Define your state object
const state = {
    data: [
        { name: "Alice", age: 25, country: "USA" },
        { name: "Bob", age: 30, country: "Canada" },
        { name: "Charlie", age: 28, country: "UK" },
        { name: "Diana", age: 22, country: "Australia" },
        { name: "Ethan", age: 35, country: "Germany" }
    ],
    sortBy: null,       // which column to sort
    sortDirection: null // 'asc' or 'desc'
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// Helper: Sort data
function getSortedData() {
    const { data, sortBy, sortDirection } = state;
    if (!sortBy || !sortDirection) return data;

    return [...data].sort((a, b) => {
        const aVal = a[sortBy];
        const bVal = b[sortBy];

        if (typeof aVal === "number" && typeof bVal === "number") {
            return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
        } else {
            return sortDirection === "asc"
                ? String(aVal).localeCompare(String(bVal))
                : String(bVal).localeCompare(String(aVal));
        }
    });
}

// TODO 3: Create render function
function render() {
    const app = document.getElementById("app");
    const sortedData = getSortedData();

    app.innerHTML = `
        <table class="data-table">
            <thead>
                <tr>
                    <th data-column="name">
                        Name ${renderSortIcon("name")}
                    </th>
                    <th data-column="age">
                        Age ${renderSortIcon("age")}
                    </th>
                    <th data-column="country">
                        Country ${renderSortIcon("country")}
                    </th>
                </tr>
            </thead>
            <tbody>
                ${sortedData
                    .map(
                        (row) => `
                    <tr>
                        <td>${row.name}</td>
                        <td>${row.age}</td>
                        <td>${row.country}</td>
                    </tr>
                `
                    )
                    .join("")}
            </tbody>
        </table>
    `;

    // TODO 4: Add your event listeners and logic
    document.querySelectorAll("th").forEach((th) => {
        th.addEventListener("click", () => {
            const column = th.dataset.column;
            let newDirection = "asc";

            // Toggle sort direction
            if (state.sortBy === column && state.sortDirection === "asc") {
                newDirection = "desc";
            } else if (state.sortBy === column && state.sortDirection === "desc") {
                newDirection = null; // Clear sorting
            }

            updateState({
                sortBy: newDirection ? column : null,
                sortDirection: newDirection
            });
        });
    });
}

// Helper to render sort icons
function renderSortIcon(column) {
    if (state.sortBy !== column) return "";
    if (state.sortDirection === "asc") return "▲";
    if (state.sortDirection === "desc") return "▼";
    return "";
}

render();
