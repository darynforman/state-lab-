// Exercise 21: Calendar
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    currentDate: new Date(), // active month and year
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// Helper: Get days in month
function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

// Helper: Get first weekday of month (0 = Sunday)
function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay();
}

// TODO 3: Create render function
function render() {
    const app = document.getElementById("app");
    const year = state.currentDate.getFullYear();
    const month = state.currentDate.getMonth();

    const today = new Date();
    const isCurrentMonth =
        today.getFullYear() === year && today.getMonth() === month;

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const firstDay = getFirstDayOfMonth(year, month);
    const totalDays = getDaysInMonth(year, month);

    let daysHTML = "";

    // Add blank cells for offset
    for (let i = 0; i < firstDay; i++) {
        daysHTML += `<div class="day empty"></div>`;
    }

    // Add actual days
    for (let day = 1; day <= totalDays; day++) {
        const isToday =
            isCurrentMonth && day === today.getDate();

        daysHTML += `
            <div class="day ${isToday ? "today" : ""}">
                ${day}
            </div>
        `;
    }

    app.innerHTML = `
        <div class="calendar">
            <div class="calendar-header">
                <button id="prevMonth" class="nav-btn">←</button>
                <h2>${monthNames[month]} ${year}</h2>
                <button id="nextMonth" class="nav-btn">→</button>
            </div>
            <div class="calendar-grid">
                ${daysOfWeek
                    .map((day) => `<div class="weekday">${day}</div>`)
                    .join("")}
                ${daysHTML}
            </div>
        </div>
    `;

    // TODO 4: Add your event listeners and logic
    document.getElementById("prevMonth").addEventListener("click", () => {
        const newDate = new Date(year, month - 1, 1);
        updateState({ currentDate: newDate });
    });

    document.getElementById("nextMonth").addEventListener("click", () => {
        const newDate = new Date(year, month + 1, 1);
        updateState({ currentDate: newDate });
    });
}

// TODO 5: Initial render
render();