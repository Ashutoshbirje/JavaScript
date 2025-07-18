const form = document.getElementById('taskForm');

let task="";

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputField = document.querySelector('.Userdata');
    task = inputField.value;
    let element=document.querySelector(".todo-item").lastElementChild;
    element.innerHTML=task;
    console.log(element);
    inputField.value = '';
});


