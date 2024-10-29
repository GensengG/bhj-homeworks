const subscribeModal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

let closeCookie = document.cookie.split("; ");

subscribeModal.classList.toggle("modal_active");

modalClose.addEventListener("click", () => {
    subscribeModal.classList.toggle("modal_active");
    document.cookie = "close=true";
})

window.addEventListener("DOMContentLoaded", () => {
    if(closeCookie.includes("close=true")){
        subscribeModal.classList.remove("modal_active");
    } else {
        subscribeModal.classList.add("modal_active");
    }
})
