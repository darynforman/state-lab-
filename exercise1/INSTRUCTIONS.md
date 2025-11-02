# Exercise 1: Color Picker

## Objective
Build a simple color picker that changes the background color using the Centralized Object Pattern.

## What You'll Learn
- How to set up a basic centralized state object
- How to create an updateState function
- How to render UI from state
- How to connect button clicks to state updates

## Requirements
1. Create a state object with a `color` property (default: 'lightblue')
2. Create 4 buttons for different colors: Red, Green, Blue, Yellow
3. When a button is clicked, update the state and change the background color
4. Display the current color name on the screen

## Steps to Complete
1. Define the state object in script.js
2. Create the updateState() function
3. Create the render() function to update the UI
4. Add event listeners to all buttons
5. Call render() initially

## Hints
- The state object only needs one property: `color`
- Use `document.body.style.backgroundColor` to change the page background
- Remember: state → render → UI (always in that order)
- Each button should call updateState() with the new color

## Expected Behavior
- Clicking "Red" button → background turns red, text shows "Current Color: red"
- Clicking "Green" button → background turns green, text shows "Current Color: green"
- And so on...

Good luck! 🎨
