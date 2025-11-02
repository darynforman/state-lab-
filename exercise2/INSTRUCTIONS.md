# Exercise 2: Todo Toggle

## Objective
Create a todo item that can be marked complete/incomplete with a visual strike-through effect.

## What You'll Learn
- Managing multiple properties in state
- Working with boolean values
- Conditional rendering based on state
- CSS classes based on state

## Requirements
1. Create a state object with `text` and `completed` properties
2. Display the todo text
3. Add a "Toggle Complete" button
4. When clicked, toggle the completed status
5. Apply strike-through styling when completed
6. Show completion status

## Steps to Complete
1. Define state with `text` and `completed` properties
2. Create updateState() function
3. Create render() function with conditional styling
4. Add event listener to toggle button
5. Initial render

## Hints
- State needs two properties: `text` (string) and `completed` (boolean)
- Use template literals with conditional class: `class="${state.completed ? 'completed' : ''}"`
- Toggle a boolean: `!state.completed`
- Display different text based on status: "Status: ✅ Complete" or "Status: ⏳ Pending"

## Expected Behavior
- Initially shows: "Learn Centralized Object Pattern" (not completed)
- Click toggle → text gets strike-through, status shows "✅ Complete"
- Click again → strike-through removed, status shows "⏳ Pending"

Good luck! ✅
