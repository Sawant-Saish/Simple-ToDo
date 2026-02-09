# To-Do List Application

A simple and clean to-do list web application that allows users to manage their daily tasks with due dates.

## Features

- ✅ Add tasks with due dates
- 🗑️ Delete individual tasks
- 📅 Date picker for task scheduling
- 🎨 Clean and centered UI with a dark theme

## Project Structure

## Files Overview

- **[todo.html](todo.html)** - Contains the main structure with input fields for task name and date, and a container for displaying tasks
- **[todo.css](todo.css)** - Provides styling with a centered layout, grid system for task display, and color-coded buttons
- **[todo.js](todo.js)** - Implements the core functionality including [`addtodo()`](todo.js) and [`renderTodoList()`](todo.js) functions

## How to Use

1. Open [todo.html](todo.html) in your web browser
2. Enter a task in the text input field
3. Select a due date using the date picker
4. Click the "Add" button to add the task to your list
5. Click the "delete" button next to any task to remove it

## Technical Details

- **Grid Layout**: Uses CSS Grid with 3 columns (200px for task, 150px for date, 100px for delete button)
- **Data Storage**: Tasks are stored in the [`todolist`](todo.js) array in memory
- **Dynamic Rendering**: The [`renderTodoList()`](todo.js) function regenerates the task list HTML whenever changes occur

## Browser Compatibility

Works in all modern browsers that support:

- CSS Grid
- ES6 JavaScript (destructuring, template literals)
- HTML5 date input type

## Future Enhancements

- Local storage persistence
- Edit task functionality
- Task completion/checkbox feature
- Task filtering and sorting
