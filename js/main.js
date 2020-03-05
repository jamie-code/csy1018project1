/* ANCHOR Todo List */
window.onload = function() {

}
// variables
let form = document.getElementById("form");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let list = document.getElementById("list");



let liItem = "";
let todoList = [];

//button event listener
btn.addEventListener("click", addTodoItem);

//list event listener
list.addEventListener("click", boxChecked);

//event listener for clean list
btnClt.addEventListener("click", clearList);






//checking localstorage has data
if (localStorage.length > 0){
    displayList();
}

//add todo item to list
function addTodoItem(){
    if(input.value==""){

    }
    let text =input.value;
    let item = "" //FIXME

}

function boxChecked(event){
    const element = event.element;
    //REVIEW
}

function displayList(){
    //list.style
}

function clearList(){
    
}