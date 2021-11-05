



let addBtn = document.getElementById('add')
let toDoContainer = document.getElementById('toDoContainer')
let input = document.getElementById('input')
let doneContainer = document.getElementById("doneContainer")

addBtn.addEventListener('click', function(e){
    let toDo = document.createElement('li')
    e.target.previousSibling.innerHTML = input.value + `
    <button class=change>Ändra</button>
    <button class=done>Färdig</button> 
    <button class=delete>Radera</button>`
    toDoContainer.append(e.target.previousSibling.innerHTML)

    let doneWithToDoBtn = document.querySelector("#toDoContainer .done")
    doneWithToDoBtn.addEventListener("click", function(e) {
        toDo.remove()
         doneContainer.append(e.target.parentNode)
    }) 
    
})



