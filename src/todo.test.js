/**
 * @jest-environment jsdom
 */
import {
  addTodo,
  removeTodos,
  editTodo,
  clearCompletedTodos,
} from './add.js';
import { updateCompleted } from './active.js';

describe('A test to add items to To-Do-List', () => {
  test('Test addToDo function', () => {
    // Arrange
    const givenArr = [1];

    // Act
    addTodo(givenArr, 'Added to the listli');

    // Assert
    const firstElement = givenArr[1];
    expect(givenArr).toHaveLength(2);
    expect(firstElement.completed).toBe(false);
    expect(firstElement.description).toBe('Added to the listli');
    expect(firstElement.index).toBe(2);
  });
});

describe('A test to remove items from the To-Do-List', () => {
  test('Test removeTodos function', () => {
    // Arrange
    const tolu = { index: 3 };
    const id = '3';
    // Act
    const result = removeTodos(tolu, id);
    // Assert
    expect(result).toBe(false);
  });
});

describe('A test to edit items in the To-Do-List', () => {
  test('Test editTodo function', () => {
    const takenArr = [{ index: 2, description: 'push in this' }];
    const id2 = '2';
    const newestItem = 'push this in';

    editTodo(takenArr, id2, newestItem);

    expect(takenArr[0].description).toBe('push this in');
  });
});

describe('A test to update items that are completed', () => {
  test('Test updateCompleted function', () => {
    const newItem = { completed: true };
    const newInput = { checked: true };

    updateCompleted(newItem, newInput);

    expect(newItem.completed).toBe(newInput.checked);
  });
});

describe('A test for the clear completed to-do function', () => {
  test('Test clearCompletedTodos function', () => {
    document.body.innerHTML = `
    <div class="todo-item">
        <input type="checkbox"></input>
    </div>
    <div class="todo-item">
        <input type="checkbox" checked></input>
    </div>
    <div class="todo-item>
        <input type="checkbox"></input>
    </div>
    `;
    clearCompletedTodos([]);
    const remainingItems = document.querySelectorAll('.todo-item');
    expect(remainingItems).toHaveLength(2);
  });
});