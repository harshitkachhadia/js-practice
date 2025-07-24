
  let currentIndex = 3;
  function addTodo() {
    // fetching the Elemenets
    const inputEl = document.getElementById("inp");
    // Create the Elements
    const textNode = document.createElement("div");
    // Updating the Elements
    textNode.innerHTML = "<div id='todo-" + currentIndex + "'><h4>" + inputEl.value + '</h4><button onclick="deleteTodo(' + currentIndex + ') ">Delete</button>';
    const parentEl = document.getElementById("todos");
    // Appending the child to parent Elements
    parentEl.appendChild(textNode);

    currentIndex = currentIndex + 1;
  }

  function deleteTodo(index) {
    const element = document.getElementById("todo-" + index);
    // Deleting the child from parent Elements
    element.parentNode.removeChild(element);
  }
