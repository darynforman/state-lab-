// Exercise 25: Dashboard
// Complete the TODOs below


// TODO 1: Define your state object
const state = {
    stats: {
        users: 1200,
        sales: 450,
        revenue: 15800,
    },
    trends: [60, 75, 90, 40, 80, 100, 55],
    lastUpdated: new Date().toLocaleTimeString()
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// Helper to generate random stats and trends
function generateRandomData() {
    const newStats = {
        users: Math.floor(Math.random() * 2000),
        sales: Math.floor(Math.random() * 1000),
        revenue: Math.floor(Math.random() * 25000)
    };

    const newTrends = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));

    updateState({
        stats: newStats,
        trends: newTrends,
        lastUpdated: new Date().toLocaleTimeString()
    });
}

// TODO 3: Create render function
function render() {
    const app = document.getElementById("app");

    const statsHTML = `
        <div class="stats">
            <div class="card">
                <h3>👥 Users</h3>
                <p>${state.stats.users}</p>
            </div>
            <div class="card">
                <h3>🛍️ Sales</h3>
                <p>${state.stats.sales}</p>
            </div>
            <div class="card">
                <h3>💰 Revenue</h3>
                <p>$${state.stats.revenue}</p>
            </div>
        </div>
    `;

    const chartHTML = `
        <div class="chart">
            ${state.trends
                .map(
                    (value, index) => `
                    <div class="bar" style="height:${value * 2}px;" title="Day ${index + 1}: ${value}">
                        <span class="bar-label">${value}</span>
                    </div>
                `
                )
                .join("")}
        </div>
    `;

    app.innerHTML = `
        <div class="dashboard">
            <h2>📊 Performance Overview</h2>
            ${statsHTML}
            <h3>📈 Weekly Activity</h3>
            ${chartHTML}
            <div class="footer">
                <button id="refresh">🔄 Refresh Data</button>
                <p>Last updated: <strong>${state.lastUpdated}</strong></p>
            </div>
        </div>
    `;

    // TODO 4: Add your event listeners and logic
    document.getElementById("refresh").addEventListener("click", generateRandomData);
}

// TODO 5: Initial render
render();