const textarea = document.getElementById("editor");
const clearBtn = document.querySelector(".clear__btn");

textarea.addEventListener("keyup", function(){
    localStorage.setItem("value", textarea.value);
})

clearBtn.addEventListener("click", function(){
    localStorage.removeItem("value");
    textarea.value = "";
})

if(localStorage.getItem("value") !== null){
    textarea.value = localStorage.getItem("value");
} else {
    textarea.value = "";
}
