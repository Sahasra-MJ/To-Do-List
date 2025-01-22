const todoList = document.getElementById("todolist");
const newTodoInput = document.getElementById("newTodoInput");
const addTodobtn = document.getElementById("addTodobtn");

addTodobtn.addEventListener("click", () => {
    const newTodoText = newTodoInput.value;
    if (newTodoText !== "") {
        const newTodoItem = document.createElement("li");
        newTodoItem.innerText = newTodoText;

        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.innerText = "Delete"; 
        deleteTodoBtn.classList.add("delete-todo-btn");
        deleteTodoBtn.addEventListener("click", function () {
            newTodoItem.remove();
        });

        newTodoItem.appendChild(deleteTodoBtn);
        todoList.appendChild(newTodoItem);
        newTodoInput.value = ""; 
    }
});
