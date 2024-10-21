const tasksInput = document.querySelector(".tasks__input");
const tasksList = document.querySelector(".tasks__list");
const tasksBtn = document.querySelector(".tasks__add");

function create() {
    let task = document.createElement("div");
    task.classList.add("task");
    tasksList.appendChild(task);

    let taskTitle = document.createElement("div");
    taskTitle.classList.add("task__title");
    task.appendChild(taskTitle);

    let taskRemove = document.createElement("a");
    taskRemove.classList.add("task__remove");
    taskRemove.textContent = "x";
    task.appendChild(taskRemove); 
    
    taskTitle.textContent = tasksInput.value;
}

tasksInput.addEventListener("keypress", (e) => {
    if(e.code === "Enter"){
        e.preventDefault();
        create();
        tasksInput.value = "";
    }
})

let removeList = [];

function removeTask() {
    removeList = document.querySelectorAll(".task__remove");
    removeList.forEach((elem) => {
        elem.addEventListener("click", () => {
            let parentElem = elem.parentElement;
            parentElem.outerHTML = "";
        })
    })
}

removeTask();
setInterval(removeTask, 1000);
