// State
let todos = [];

function addTodo() {
  const input = document.querySelector("input").value.trim();
  if (input !== "") {
    todos.push({ title: input });
    document.querySelector("input").value = ""; // Clear input
    render();
  }
}

// function deleteLastTodo() {
//   if (todos.length > 0) {
//     todos.pop();
//     render();
//   }
// }

// function deleteFirstTodo() {
//   if (todos.length > 0) {
//     todos.shift();
//     render();
//   }
// }

function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}

// Creating the Component
function createTodoComponent(todo, index) {
  const div = document.createElement("div");
  div.className = "todo";

  // Check if this todo is in editing mode
  if (todo.isEditing) {
    const input = document.createElement("input");
    input.type = "text";
    input.value = todo.title;
    input.className = "edit-input";

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.onclick = () => saveEditedTodo(index, input.value);

    div.appendChild(input);
    div.appendChild(saveBtn);
  } else {
    const text = document.createElement("p");
    text.className = "todo-text";
    text.textContent = todo.title;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => startEditingTodo(index);

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => deleteTodo(index);

    div.appendChild(text);
    div.appendChild(editBtn);
    div.appendChild(delBtn);
  }

  return div;
}

function startEditingTodo(index) {
  todos[index].isEditing = true;
  render();
}

function saveEditedTodo(index, newTitle) {
  todos[index].title = newTitle;
  todos[index].isEditing = false;
  render();
}

// React Does (DOM Manipulation) -- Rendering Logic
function render() {
  const container = document.querySelector("#todos");
  container.innerHTML = "";

  todos.forEach((todo, index) => {
    const element = createTodoComponent(todo, index);
    container.appendChild(element);
  });
}
