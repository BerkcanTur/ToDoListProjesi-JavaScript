//! TO-DO LİST 1

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCard = document.querySelector(".card-body")[0];
const secondCard = document.querySelector(".card-body")[1];
const clearButton = document.querySelector("#clearButton");

runTodo();

function runTodo(){
    form.addEventListener("submit", addTodo);
}

function addTodo(e){
    const inputText = addInput.value.trim();
    if(inputText==null || inputText==""){
        alert("Lütfen geçerli bilgi giriniz!")
    }else{
        addTodoToUI(inputText)
    }
    console.log("basarili")
    e.preventDefault();
}

function addTodoToUI(newTodo){

const li = document.createElement("li");
li.className = "list-group-item d-flex justify-content-between";
li.textContent = newTodo;
const a = document.createElement("a");
a.className = "delete-item";
const i = document.createElement("i");
i.className = "fa fa-remove";

a.appendChild(i)
li.appendChild(a)
todoList.appendChild(li)
addInput.value = "";
}
