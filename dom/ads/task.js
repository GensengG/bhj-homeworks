let rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));

rotatorCase.forEach((elem) => {
    elem.setAttribute("style", `color: ${elem.dataset.color}`);
})

let time = "";

function rotate(array) {
    let elementActive = document.querySelector(".rotator__case_active");
    let nextElement = elementActive.nextElementSibling;
    if(nextElement === null){
        nextElement = document.querySelector(".rotator__case");
    }
    elementActive.classList.toggle("rotator__case_active");
    time = Number(elementActive.dataset.speed);
    nextElement.classList.toggle("rotator__case_active");
}

rotate(rotatorCase);
setInterval(rotate, time);
