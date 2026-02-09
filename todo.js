const todolist = [];

renderTodoList();
function renderTodoList(){
    let tolistHTML = '';

    for(let i=0; i<todolist.length ; i++){
        const todoobject = todolist[i];
        const {task, date} = todoobject;    //shortcut hai called as destructring //const task = todoobject.task;   //const date = todoobject.date;
        const html = 
        `<div> ${task} </div>
        <div>${date} </div>
        <button onclick = 
        "todolist.splice(${i},1); 
         renderTodoList();" class = "todo-delete-button">
         delete
         </button>`;
        tolistHTML += html 
    }
    // console.log(tolistHTML); 

    document.querySelector(".js-todo-list").innerHTML = tolistHTML
}

function addtodo(){
    const inputelement = document.querySelector('.js-name-input');
    const dateinput = document.querySelector('.todoDate');
    const task = inputelement.value;
    const date = dateinput.value;
    todolist.push({
        task , date     // you can also write it as task:task , date:date  but maine jo use keya hai vo shhortcut hai.
    });
    console.log(todolist);
    inputelement.value='';
    dateinput.value = '';
    renderTodoList();
}