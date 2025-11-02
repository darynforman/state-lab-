# Exercise 5: User Profile Form

## Objective
Build a multi-field user profile form with validation that shows errors and a success message.

## What You'll Learn
- Managing complex state with nested objects
- Form validation
- Handling multiple input types
- Error state management
- Conditional rendering based on validation

## Requirements
1. Create state with: username, email, age, errors object, and isValid flag
2. Create input fields for username, email, and age
3. Validate on every input change:
   - Username: at least 3 characters
   - Email: must contain @ symbol
   - Age: must be between 13 and 120
4. Show error messages for invalid fields
5. Show success message when all fields are valid
6. Display current values

## Steps to Complete
1. Define state with all form fields, errors, and isValid
2. Create updateState() function
3. Create a validate() function that checks all fields
4. Create render() function with conditional error/success display
5. Add input event listeners for all fields
6. Initial render

## Hints
- State structure: `{ username: '', email: '', age: '', errors: {}, isValid: false }`
- Validation returns errors object: `{ username: 'error message', ... }`
- Use Object.keys(errors).length === 0 to check if valid
- Update state with both new values AND validation results
- Show errors only for fields that have been touched/filled

## Expected Behavior
- Initially: Empty form, no errors
- Type "ab" in username → Error: "Username must be at least 3 characters"
- Type "test" → Error disappears
- Type "test@" in email → Error: "Please enter a valid email"
- Type "test@email.com" → Error disappears
- All valid → Success message: "✅ Profile is valid!"

Good luck! 📝
