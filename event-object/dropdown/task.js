const input = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const listItem = Array.from(document.querySelectorAll(".dropdown__item"));

function openList() {
    if(list.className === "dropdown__list"){
        list.className = "dropdown__list dropdown__list_active";
    } else {
        list.className = "dropdown__list";
    }
}

listItem.forEach(item => {
    item.addEventListener("click", function(event) {
        event.preventDefault();
        list.className = "dropdown__list";
        input.textContent = event.currentTarget.textContent;
        })
})

input.addEventListener ('click', openList);
