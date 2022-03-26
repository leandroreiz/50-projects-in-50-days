const form = document.querySelector('.form');
const input = document.querySelector('.input');
const todos = document.querySelector('.todos');

const updateLocalStorage = () => {
  const todosList = document.querySelectorAll('li');
  const todosArr = [];

  todosList.forEach((todo) =>
    todosArr.push({
      text: todo.innerText,
      completed: todo.classList.contains('completed'),
    })
  );

  localStorage.setItem('todos', JSON.stringify(todosArr));
};

const addTodo = (todo) => {
  let todoText = input.value;

  const todoEl = document.createElement('li');

  if (todo) {
    todoText = todo.text;
    if (todo.completed) todoEl.classList.add('completed');
  }

  todoEl.innerHTML = todoText;

  todoEl.addEventListener('click', () => {
    todoEl.classList.toggle('completed');
    updateLocalStorage();
  });

  todoEl.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    todoEl.remove();
    updateLocalStorage();
  });

  todos.appendChild(todoEl);

  input.value = '';
  input.focus();

  updateLocalStorage();
};

const init = () => {
  input.focus();

  const data = JSON.parse(localStorage.getItem('todos'));
  if (data) data.forEach((todo) => addTodo(todo));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
  });
};

init();
