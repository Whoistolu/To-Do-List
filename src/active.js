export const saveLocalStorage = (data) => {
  localStorage.setItem('toDoStorage', JSON.stringify(data));
};

export const updateCompleted = (item, input) => {
  item.completed = input.checked;
};
