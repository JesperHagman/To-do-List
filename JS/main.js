



let addBtn = document.getElementById('add')
let toDoContainer = document.getElementById('toDoContainer')
let input = document.getElementById('input')
let doneContainer = document.getElementById("doneContainer")

addBtn.addEventListener('click', function(){
    let toDo = document.createElement('li')
    toDo.innerHTML = input.value + `
    <button class=change>Ändra</button>
    <button class=done>Färdig</button> 
    <button class=delete>Radera</button>`
    toDoContainer.append(toDo)

    let doneWithToDoBtn = document.querySelector("#toDoContainer .done")
    doneWithToDoBtn.addEventListener("click", function() {
        toDo.remove()
        doneContainer.append(toDo)
    })
    console.log(doneWithToDoBtn)
})



