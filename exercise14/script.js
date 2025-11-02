// Exercise 14: Multi-Step Form
// Complete the TODOs below

// Exercise 14: Multi-Step Form

// TODO 1: Define your state object
const state = {
    step: 1,
    formData: {
        name: "",
        email: "",
        age: ""
    }
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const app = document.getElementById("app");

    let html = "";

    if (state.step === 1) {
        html = `
            <h2>Step 1: Personal Info</h2>
            <label>Name:</label>
            <input id="nameInput" type="text" value="${state.formData.name}">
            <br><br>
            <button id="nextBtn">Next</button>
        `;
    } else if (state.step === 2) {
        html = `
            <h2>Step 2: Contact Information</h2>
            <label>Email:</label>
            <input id="emailInput" type="email" value="${state.formData.email}">
            <br><br>
            <button id="backBtn">Back</button>
            <button id="nextBtn">Next</button>
        `;
    } else if (state.step === 3) {
        html = `
            <h2>Step 3: Additional Info</h2>
            <label>Age:</label>
            <input id="ageInput" type="number" value="${state.formData.age}">
            <br><br>
            <button id="backBtn">Back</button>
            <button id="submitBtn">Submit</button>
        `;
    } else {
        html = `
            <h2>✅ Submission Complete!</h2>
            <p><strong>Name:</strong> ${state.formData.name}</p>
            <p><strong>Email:</strong> ${state.formData.email}</p>
            <p><strong>Age:</strong> ${state.formData.age}</p>
            <button id="resetBtn">Start Again</button>
        `;
    }

    app.innerHTML = html;

    // TODO 4: Add your event listeners and logic

    if (document.getElementById("nameInput")) {
        document.getElementById("nameInput").addEventListener("input", e =>
            state.formData.name = e.target.value
        );
    }

    if (document.getElementById("emailInput")) {
        document.getElementById("emailInput").addEventListener("input", e =>
            state.formData.email = e.target.value
        );
    }

    if (document.getElementById("ageInput")) {
        document.getElementById("ageInput").addEventListener("input", e =>
            state.formData.age = e.target.value
        );
    }

    const nextBtn = document.getElementById("nextBtn");
    const backBtn = document.getElementById("backBtn");
    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");

    if (nextBtn) nextBtn.addEventListener("click", () => updateState({ step: state.step + 1 }));
    if (backBtn) backBtn.addEventListener("click", () => updateState({ step: state.step - 1 }));
    if (submitBtn) submitBtn.addEventListener("click", () => updateState({ step: 4 }));
    if (resetBtn) resetBtn.addEventListener("click", () => updateState({ step: 1, formData: { name: "", email: "", age: "" }}));
}

// TODO 5: Initial render
render();
