// Exercise 12: Star Rating
// Complete the TODOs below

// Exercise 12: Star Rating

// TODO 1: Define your state object
const state = {
    rating: 0, // Default selected rating
    maxStars: 5
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const app = document.getElementById("app");

    let starsHTML = "";
    for (let i = 1; i <= state.maxStars; i++) {
        starsHTML += `
            <span class="star" data-value="${i}">
                ${i <= state.rating ? "★" : "☆"}
            </span>
        `;
    }

    app.innerHTML = `
        <div class="stars">${starsHTML}</div>
        <p>Your rating: <strong>${state.rating}</strong> / ${state.maxStars}</p>
    `;

    // TODO 4: Add your event listeners and logic
    document.querySelectorAll(".star").forEach(star => {
        star.addEventListener("click", (e) => {
            const value = Number(e.target.getAttribute("data-value"));
            updateState({ rating: value });
        });
    });
}

// TODO 5: Initial render
render();