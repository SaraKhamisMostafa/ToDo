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
    todoLi.classList.add("my-2")
    //todoLi.classList.add("uncompleted")
    
    //create h5
    const todotitle = document.createElement("h5")
    todotitle.classList.add("ms-3")
    todotitle.classList.add("d-inline-block")
    todotitle.classList.add("w-75")
    todotitle.innerText = todoInput.value
    todoLi.appendChild(todotitle)

    const todocomplete = document.createElement("button")
    todocomplete.classList.add("btn")
    todocomplete.classList.add("btn-primary")
    todocomplete.classList.add("m-1")
    todocomplete.innerHTML =`<i class="fa-solid fa-check"></i>`
    todoLi.appendChild(todocomplete)

    const tododelete = document.createElement("button")
    tododelete.classList.add("btn")
    tododelete.classList.add("btn-danger")
    tododelete.classList.add("m-1")
    tododelete.innerHTML =`<i class="fa-solid fa-trash"></i>`
    todoLi.appendChild(tododelete)
    
    todoResult.appendChild(todoLi)

    todoInput.value=''
}

function toggleToDo(e){
    const item = e.target

    console.log(item.classList)

     if (item.classList[1] == 'fa-check'){
        console.log('complete task')
        item.parentElement.parentElement.classList.toggle('completed')
     }else{
        console.log('delete task')
        item.parentElement.parentElement.classList.toggle('delete')
     }
}
 





todoBtn.addEventListener('click' ,addTodo)
todoResult.addEventListener('click',toggleToDo)