import './style.css';
import { saveLocalStorage, updateCompleted } from './active.js';

let items = [];

const storageData = JSON.parse(localStorage.getItem('toDoStorage'));
if (storageData) {
  items = storageData;
}

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

  input.addEventListener('change', () => {
    updateCompleted(item, input);
    saveLocalStorage(items);
  });

  todos.appendChild(div);
});


const form = document.getElementById('form-id');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const result = form.querySelector('input').value;
  console.log('length: ', items.length);
  items.push({completed: false, description: result, index: items.length});
  console.log(items);
  saveLocalStorage(items);
  window.location.reload();

});
