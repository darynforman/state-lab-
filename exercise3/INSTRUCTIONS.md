# Exercise 3: Temperature Converter

## Objective
Build a Celsius to Fahrenheit converter that updates in real-time as the user types.

## What You'll Learn
- Handling user input in the Centralized Object Pattern
- Working with input events
- Computed/derived values from state
- Number formatting

## Requirements
1. Create state with `celsius` property
2. Display an input field for Celsius temperature
3. Calculate and display the Fahrenheit equivalent
4. Update in real-time as user types
5. Handle the conversion formula: F = (C × 9/5) + 32

## Steps to Complete
1. Define state with `celsius` property (default: 0)
2. Create updateState() function
3. Create render() function that displays both values
4. Add input event listener to update celsius value
5. Initial render

## Hints
- State only needs: `celsius` (number)
- Fahrenheit is computed, not stored in state
- Use `input.addEventListener('input', ...)` for real-time updates
- Formula: `fahrenheit = (celsius * 9/5) + 32`
- Use `.toFixed(1)` to format to 1 decimal place
- Get input value with: `parseFloat(input.value) || 0`

## Expected Behavior
- Input shows 0°C initially
- Display shows: "0.0°C = 32.0°F"
- Type 100 → Display shows: "100.0°C = 212.0°F"
- Type 37 → Display shows: "37.0°C = 98.6°F"

Good luck! 🌡️
