// Exercise 5: User Profile Form
// Follow the TODOs below to complete this exercise

// TODO 1: Create a state object with form fields and validation state
// HINT: Include username, email, age (all empty strings), errors (empty object), isValid (false)
const state = {
    username: '',
    email: '',
    age: '',
    errors: {},
    isValid: false
};

// TODO 2: Create an updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render(); 
}

// TODO 3: Create a validate function that returns an errors object
// HINT: Check each field and add error messages to errors object if invalid
// Return the errors object
function validate() {
    const errors = {};
    
    // Validate username (at least 3 characters)
    if (state.username.trim().length < 3) {
        errors.username = 'Username must be at least 3 characters long.';
    }
    
    // Validate email (must contain @)
    if (!state.email.includes('@')) {
        errors.email = 'Email must be a valid email address.';
    }
    
    // Validate age (between 13 and 120)
    const ageNum = parseInt(state.age);
    if (!state.age || isNaN(ageNum) || ageNum < 13 || ageNum > 120) {
        errors.age = 'Age must be between 13 and 120';
    }
    
    return errors;
}

// TODO 4: Create a render function
// HINT: 
// - Update each input's value from state
// - Display errors for each field
// - Add 'invalid' or 'valid' class to inputs
// - Show success message if isValid is true
// - Show profile summary if valid
function render() {
    // Update input values
     document.getElementById('usernameInput').value = state.username;
    document.getElementById('emailInput').value = state.email;
    document.getElementById('ageInput').value = state.age;
    
    // Display errors
     document.getElementById('usernameError').textContent = state.errors.username || '';
    document.getElementById('emailError').textContent = state.errors.email || '';
    document.getElementById('ageError').textContent = state.errors.age || '';
    
    // Update input classes (invalid/valid)
    document.getElementById('usernameInput').className = state.errors.username ? 'invalid' : 'valid';
    document.getElementById('emailInput').className = state.errors.email ? 'invalid' : 'valid';
    document.getElementById('ageInput').className = state.errors.age ? 'invalid' : 'valid';
    
    // Display validation status
    const statusDisplay = document.getElementById('statusDisplay');
    if (state.isValid) {
        statusDisplay.textContent = 'Profile is valid!';
    } else {
        statusDisplay.textContent = '';
    }
}

// TODO 5: Add event listeners to all input fields
// HINT: For each input change:
// - Get the new value
// - Run validation
// - Check if valid (no errors)
// - Update state with new value, errors, and isValid

// Helper function for input change
function handleInputChange(field, value) {
    const newState = { [field]: value };
    const errors = validate();
    newState.errors = errors;
    newState.isValid = Object.keys(errors).length === 0;
    updateState(newState);
}

// Username input
document.getElementById('usernameInput').addEventListener('input', (e) => {
    handleInputChange('username', e.target.value);
});

// Email input
document.getElementById('emailInput').addEventListener('input', (e) => {
    handleInputChange('email', e.target.value);
});

// Age input
document.getElementById('ageInput').addEventListener('input', (e) => {
    handleInputChange('age', e.target.value);
});

// TODO 6: Call render() initially
render();

