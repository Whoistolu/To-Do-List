import './style.css';

const items = [
  {
    description: 'wash the dishes',
    completed: true,
    index: 0,
  },
  {
    description: 'complete To Do List project',
    completed: false,
    index: 1,
  },
];

const todos = document.querySelector('.todos');
items.forEach((item) => {
  const html = `<input type="checkbox">
  <input value=${item.description} type="text"></input>
  <i class="fas fa-ellipsis-v"></i>`;
  const div = document.createElement('div');
  div.innerHTML = html;
  const input = div.querySelector('input[type=checkbox]');
  input.checked = item.completed;
  div.classList.add('todo-item');
  div.id = item.index;

  todos.appendChild(div);
});
