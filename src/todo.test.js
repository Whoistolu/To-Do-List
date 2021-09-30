import { addTodo } from './add.js';

describe('Test to add items to To-Do-List', () => {
  test('Test addToDo function', () => {
    const givenArr = [1];

    addTodo(givenArr, 'Added to the listli');

    const firstElement = givenArr[1];
    expect(givenArr).toHaveLength(2);
    expect(firstElement.completed).toBe(false);
    expect(firstElement.description).toBe('Added to the listli');
    expect(firstElement.index).toBe(2);
  });
});
