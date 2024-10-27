const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

xhr.addEventListener("load", () => {
    function restoreObject(key){
        try{
            return JSON.parse(key)
        } catch {
            return null;
        }
    }

    let response = restoreObject(xhr.response).data;
    pollTitle.textContent = response.title;

    let answers = Array.from(response.answers);
    answers.forEach((answer) => {
        pollAnswers.insertAdjacentHTML("beforeend", `
            <button class="poll__answer">
              ${answer}
            </button>
            `);
        });
    
    let pollsAnswer = Array.from(document.querySelectorAll(".poll__answer"));

    pollsAnswer.forEach((answer) => {
        answer.addEventListener("click", () => {
            alert("Спасибо, ваш голос засчитан!"); 
        })
    })
})
xhr.send();
