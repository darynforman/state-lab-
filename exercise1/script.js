// Exercise 1: Color Picker
// Follow the TODOs below to complete this exercise

// TODO 1: Create a state object with a 'color' property
// HINT: Start with a default color like 'lightblue'
const state = {
    color: 'lightblue'
};

// TODO 2: Create an updateState function
// HINT: It should take an object with changes, merge them into state, and call render()
function updateState(changes) {
    if (!changes || typeof changes !== 'object'){
     return;
    }

    // Guard: validate color input
    if (Object.prototype.hasOwnProperty.call(changes, 'color')) {
        const nextColor = changes.color;
        if (typeof nextColor !== 'string' || nextColor.trim() === '') {
    return;
        }
            
    }

    Object.assign(state, changes);
    render();
}

// TODO 3: Create a render function
// HINT: 
// - Update the #display element to show the current color name
// - Change the body background color to match state.color
function render() {
    const display = document.getElementById('display');
    if (!display) {
            return;
    }

    const color = typeof state.color === 'string' && state.color.trim() !== ''
        ? state.color
        : 'lightblue';

    display.textContent = `Current Color: ${color}`;
    if (document && document.body && document.body.style) {
        document.body.style.backgroundColor = color;
    }
}

// TODO 4: Add event listeners for all color buttons
// HINT: Get each button by ID and add a click listener that calls updateState()

// Red button
const redBtn = document.getElementById('redBtn');
if (redBtn){

redBtn.addEventListener('click', () => updateState({ color: 'red' }));
}

// Green button
const greenBtn = document.getElementById('greenBtn');
if (greenBtn){

     greenBtn.addEventListener('click', () => updateState({ color: 'green' }));
}

// Blue button
const blueBtn = document.getElementById('blueBtn');
if (blueBtn){
    blueBtn.addEventListener('click', () => updateState({ color: 'blue' }));
} 

// Yellow button
const yellowBtn = document.getElementById('yellowBtn');
if (yellowBtn){
 yellowBtn.addEventListener('click', () => updateState({ color: 'yellow' }));
}

// TODO 5: Call render() once to display the initial state
render();
