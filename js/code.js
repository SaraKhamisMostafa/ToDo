const todoInput = document.querySelector(".task-input")
const todoBtn = document.querySelector(".task-btn")
const todoResult = document.querySelector(".task-result")


function addTodo(e){
    e.preventDefault();
    console.log(todoInput.value)
    
    todoInput.value=''
}





todoBtn.addEventListener('click' ,addTodo)