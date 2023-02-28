const todoInput = document.querySelector(".task-input")
const todoBtn = document.querySelector(".task-btn")
const todoResult = document.querySelector(".task-result")


function addTodo(e){
    e.preventDefault();
    console.log(todoInput.value)
    
    //create li
    const todoLi = document.createElement("li")
    todoLi.classList.add("border")
    todoLi.classList.add("shadow")
    //create h5
    const todotitle = document.createElement("h5")
    todotitle.classList.add("ms-3")
    todotitle.classList.add("d-inline-block")
    todotitle.classList.add("w-75")
    todotitle.innerText = todoInput.value
    todoLi.appendChild(todotitle)

    todoResult.appendChild(todoLi)

    //todoInput.value=''
}





todoBtn.addEventListener('click' ,addTodo)