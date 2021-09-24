import './style.css';
import { saveLocalStorage, updateCompleted } from './active.js';

let itemsArray = [];

const storageData = JSON.parse(localStorage.getItem('toDoStorage'));
if (storageData) {
  itemsArray = storageData;
}

const todos = document.querySelector('.todos');
console.log(itemsArray);
itemsArray.forEach((item) => {
  const html = `<input type="checkbox">
  <input class="edit" value=${item.description} type="text"></input>
  <i class="fas fa-ellipsis-v vertical"></i>
  <i class="fas fa-trash-alt trash"></i>`;
  const div = document.createElement('div');
  div.innerHTML = html;
  const input = div.querySelector('input[type=checkbox]');
  input.checked = item.completed;
  div.classList.add('todo-item');
  div.id = item.index;

  input.addEventListener('change', () => {
    updateCompleted(item, input);
    saveLocalStorage(itemsArray);
  });

  todos.appendChild(div);
  const vertical = div.querySelector('.vertical');
  const trash = div.querySelector('.trash');
  const edit = div.querySelector('.edit');
  edit.addEventListener('change', () => {
    console.log('new text: ', edit.value, ' my div.id', div.id);
    itemsArray.forEach((item) => {
      if (item.index.toString() === div.id) {
        item.description = edit.value;
      }
    });
    saveLocalStorage(itemsArray);
  });
  vertical.addEventListener('click', () => {
    vertical.style.display = 'none';
    trash.style.display = 'block';
  });
  trash.addEventListener('click', () => {
    div.remove();
    itemsArray = itemsArray.filter((something) => {
      if (something.index.toString() === div.id) {
        return false;
      }
      return true;
    });
    saveLocalStorage(itemsArray);
  });
});

const form = document.getElementById('form-id');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const result = form.querySelector('input').value;
  itemsArray.push({ completed: false, description: result, index: itemsArray.length });
  saveLocalStorage(itemsArray);
  window.location.reload();
});

const clearButton = document.querySelector('#button');
clearButton.addEventListener('click', () => {
  const todoArray = document.querySelectorAll('.todo-item');
  todoArray.forEach((div) => {
    const input = div.querySelector('input');
    if (input.checked) {
      div.remove();
      itemsArray = itemsArray.filter((something) => {
        if (something.index.toString() === div.id) {
          return false;
        }
        return true;
      });
      saveLocalStorage(itemsArray);
    }
  });
});
