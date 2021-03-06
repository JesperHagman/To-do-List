let taskInput = document.getElementById("new-task")
let addButton = document.getElementById("addTask")
let incompleteTasks = document.getElementById("incomplete-tasks")
let completedTasks = document.getElementById("completed-tasks")
let clearButton = document.getElementById("clear")

let createNewTask = function() {
    let toDo = document.createElement("li")
    let editInput = document.createElement("input")
    let doneButton = document.createElement("button")
    let editButton = document.createElement("button")
    let deleteButton = document.createElement("button") 

    editInput.className = "input"
    editButton.innerText = "Ändra"
    editButton.className = "edit"
    deleteButton.innerText = "Radera"
    deleteButton.className = "delete"
    doneButton.innerText = "Färdig"
    doneButton.className = "done"
    editInput.value = taskInput.value
    toDo.appendChild(editInput).disabled = true
    toDo.appendChild(editButton)
    toDo.appendChild(doneButton)
    toDo.appendChild(deleteButton)
    return toDo;
}
let addTask = function() {
    let message = document.getElementById("error-message")
    if (taskInput.value === "") {
        message.innerText = "vänligen fyll i en sysla"
    } else {
        let toDo = createNewTask(taskInput.value)
        incompleteTasks.appendChild(toDo)
        clickEvents(toDo)
        taskInput.value = ""
        message.innerText = ""
    }
}
let clickEvents = function(toDoItem) {
    let doneButton = toDoItem.querySelector("button.done")
    let editButton = toDoItem.querySelector("button.edit")
    let deleteButton = toDoItem.querySelector("button.delete")
    editButton.addEventListener("click", clickFunction.editTask)
    deleteButton.addEventListener("click", clickFunction.deleteTask)
    doneButton.addEventListener("click", clickFunction.taskCompleted)
}
let clear = function() { 
    incompleteTasks.innerHTML = ""
    completedTasks.innerHTML = ""
}
clearButton.addEventListener('click', clear)
addButton.addEventListener("click", addTask)

let clickFunction = {
    taskCompleted: function() {
        let toDo = this.parentNode
        completedTasks.appendChild(toDo)
        let doneButtonDelete = document.querySelector("button.done")
        this.remove(doneButtonDelete)
    },
    deleteTask: function() {
        let toDo = this.parentNode
        let ul = toDo.parentNode
        ul.removeChild(toDo)
    },
    editTask: function() {
        let toDo = this.parentNode
        let editInput = toDo.querySelector(".input")
        let message = document.getElementById("error-message")

        if (editInput.value === "") {
            message.innerText = "vänligen fyll i en sysla"
            taskInput.disabled = true
        }else {
            editInput.toggleAttribute("disabled")
            message.innerText = ""
            taskInput.disabled = false
        }
    }
}