import { URL } from "./url";

const getTodos = async (id) => {
  const response = await fetch(`${URL}/todos?userId=${id}`);
  const data = await response.json();
  renderToDos(data);
};

const renderToDos = (todos) => {
  document.querySelector("#todo_ul").innerHTML = "";
  todos.forEach((todo) => {
    document.querySelector("#todo_ul").innerHTML += `
      <li>${todo.title}</li>`;
  });
};

export { getTodos };
