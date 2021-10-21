import "./style.css";
import { saveLocalStorage, updateCompleted } from "./active.js";
import { editTodo, removeTodos, addTodo, clearCompletedTodos } from "./add.js";

// let itemsArray = [];

// const storageData = JSON.parse(localStorage.getItem("toDoStorage"));
// if (storageData) {
//   itemsArray = storageData;
// }

let itemsArray = JSON.parse(localStorage.getItem("toDoStorage")) || [];

const todos = document.querySelector(".todos");

itemsArray.reverse().forEach((item) => {
  const html = `<input type="checkbox">
  <input class="edit" value="${item.description}" type="text"></input>
  <i class="fas fa-ellipsis-v vertical"></i>
  <i class="fas fa-trash-alt trash"></i>`;
  const div = document.createElement("div");
  div.innerHTML = html;
  const input = div.querySelector("input[type=checkbox]");
  input.checked = item.completed;
  div.classList.add("todo-item");
  div.id = item.index;

  input.addEventListener("change", () => {
    updateCompleted(item, input);
    saveLocalStorage(itemsArray);
  });

  todos.appendChild(div);
  const vertical = div.querySelector(".vertical");
  const trash = div.querySelector(".trash");
  const edit = div.querySelector(".edit");
  edit.addEventListener("change", () => {
    editTodo(itemsArray, div.id, edit.value);
    saveLocalStorage(itemsArray);
  });
  vertical.addEventListener("click", () => {
    vertical.style.display = "none";
    trash.style.display = "block";
  });
  trash.addEventListener("click", () => {
    div.remove();
    itemsArray = itemsArray.filter((i) => removeTodos(i, div.id));
    saveLocalStorage(itemsArray);
  });
});

const form = document.getElementById("form-id");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { value } = form.querySelector("input");
  addTodo(itemsArray, value);
  saveLocalStorage(itemsArray);
  window.location.reload();
});

const clearButton = document.querySelector("#button");
clearButton.addEventListener("click", () => {
  itemsArray = clearCompletedTodos(itemsArray);
  saveLocalStorage(itemsArray);
});
