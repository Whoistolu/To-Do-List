export const saveLocalStorage = (data) => {
  const todoItems = document.querySelectorAll('.todo-item');
  todoItems.forEach((item, idx) => {
    item.id = idx + 1;
  });
  data.forEach((d, idx) => {
    d.index = idx + 1;
  });
  localStorage.setItem('toDoStorage', JSON.stringify(data));
};

export const updateCompleted = (item, input) => {
  item.completed = input.checked;
};
