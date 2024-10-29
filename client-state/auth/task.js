const signinForm = document.getElementById("signin__form");
const signin = document.getElementById("signin");
const welcome = document.getElementById("welcome"); 
const userId = document.getElementById("user_id");

const signinBtn = document.getElementById("signin__btn");

signinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newdata = new FormData(signinForm);

    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
        let data = xhr.response;
        function restoreObject(key){
            try{
                return JSON.parse(key)
            } catch {
                return null;
            }
        }
        let response = restoreObject(data)["user_id"];
        localStorage.setItem("userId", response);

        if(response){
            signin.classList.toggle("signin_active");
            welcome.classList.toggle("welcome_active");
            
            if(localStorage.getItem("userId")){
                userId.textContent = `${localStorage.getItem("userId")}`;
            } else {
                localStorage.setItem("userId", response);
                userId.textContent = `${response}`;
            }
            
        } else {
            alert("Неверный логин/пароль");
        }
    })

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    xhr.send(newdata);
});
