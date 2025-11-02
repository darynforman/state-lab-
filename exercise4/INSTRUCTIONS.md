# Exercise 4: Shopping Cart

## Objective
Create a simple shopping cart where you can add/remove items and see the total price.

## What You'll Learn
- Managing arrays in state
- Adding and removing items from arrays
- Rendering lists from state
- Calculating totals from array data
- Working with objects inside arrays

## Requirements
1. Create state with an `items` array (each item has: name, price, id)
2. Display all items in the cart
3. Add 3 product buttons that add items to cart
4. Show a "Remove" button for each cart item
5. Calculate and display the total price

## Steps to Complete
1. Define state with `items` array (start empty)
2. Create updateState() function
3. Create render() function that:
   - Maps through items array
   - Shows each item with remove button
   - Calculates total
4. Add event listeners for "Add" buttons
5. Add event listeners for "Remove" buttons (use event delegation)
6. Initial render

## Hints
- Each item needs: `{ id: Date.now(), name: 'Apple', price: 1.99 }`
- Use `Date.now()` for unique IDs
- Add item: `updateState({ items: [...state.items, newItem] })`
- Remove item: `updateState({ items: state.items.filter(item => item.id !== id) })`
- Calculate total: `state.items.reduce((sum, item) => sum + item.price, 0)`
- Use event delegation for remove buttons (they're created dynamically)

## Expected Behavior
- Initially: Empty cart, Total: $0.00
- Click "Add Apple" → Apple appears in cart, Total: $1.99
- Click "Add Banana" → Banana added, Total: $2.98
- Click remove next to Apple → Apple removed, Total: $0.99

Good luck! 🛒
