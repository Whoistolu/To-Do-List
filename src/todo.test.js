import { addTodo } from './add.js';

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
