const tasksInput = document.querySelector(".tasks__input");
const tasksList = document.querySelector(".tasks__list");
const tasksBtn = document.querySelector(".tasks__add");


tasksBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(String(tasksInput.value).trim() === ""){
        tasksInput.value = null;
    } else {
        tasksList.insertAdjacentHTML("afterbegin", `
            <div class="task">
              <div class="task__title">
                ${tasksInput.value};
              </div>
              <a href="#" class="task__remove">
                &times;
              </a>
            </div>
        `);
        tasksInput.value = null;

        let taskRemove = document.querySelector(".task__remove");
        taskRemove.addEventListener("click", () => {
            let parentElem = taskRemove.parentElement;
            parentElem.outerHTML = "";
        })
    }
})
