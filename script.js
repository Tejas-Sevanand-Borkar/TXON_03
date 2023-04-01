//selectors
const todoInput = document.querySelector(".todo_input");
const todoButton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_list");
const filterOption = document.querySelector(".filter_todo");
//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
//functions
function addTodo(event) {
  event.preventDefault();
  //todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //todo LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo_item");
  todoDiv.appendChild(newTodo);
  if (todoInput.value === "") {
    return null;
  }
  //check mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete_btn");
  todoDiv.appendChild(completedButton);
  
  //delete Button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete_btn");
  todoDiv.appendChild(deleteButton);
  //Append to Actual List
  todoList.appendChild(todoDiv);
  //Clear todo input value
  todoInput.value = "";
}

//Delete & Check
function deleteCheck(e) {
  const item = e.target;
  //Delete Item
  if (item.classList[0] === "delete_btn") {
    const todo = item.parentElement;
    //Animation Transition
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  } 
  //Complete ITEM
  if (item.classList[0] === "complete_btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completedItem");
  }
}
//Filtering The Tasks According The Option
function filterTodo(e) {
  const todos = todoList.childNodes;
  for (let i = 0; i < todos.length; i++) {
    switch (e.target.value) {
      case "all":
        todos[i].style.display = "flex";
        break;
      case "completed":
        if (todos[i].classList.contains("completedItem")) {
          todos[i].style.display = "flex";
        } 
        else {
          todos[i].style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todos[i].classList.contains("completedItem")) {
          todos[i].style.display = "flex";
        } else {
          todos[i].style.display = "none";
        }
        break;
    }
  }
}