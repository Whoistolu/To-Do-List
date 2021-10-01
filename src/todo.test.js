import { addTodo, removeTodos } from './add.js';

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