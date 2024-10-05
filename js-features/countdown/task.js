let timerElement = document.getElementById("timer");
let startValue = Number(timerElement.textContent);
function timer() {
    if(startValue > 0){
        startValue -=1;
        timerElement.textContent = startValue;
    } else {
        alert ("Вы победили в конкурсе!");
        clearTimeout(timerId);
    }
}

timer();
let timerId = setInterval(timer, 1000);


// Повышенный уровень сложности #1

let timerElement = document.getElementById("timer");
timerElement.textContent = "00:00:30";
let startValueArr = Array.from(timerElement.textContent);
let startValue = Number(startValueArr[6] + startValueArr[7]);
function timer() {
    if(startValue > 0){
        startValue -=1;
        timerElement.textContent = `00:00:${startValue}`;
    } else {
        alert ("Вы победили в конкурсе!");
        clearTimeout(timerId);
    }
}
timer();
let timerId = setInterval(timer, 1000)
