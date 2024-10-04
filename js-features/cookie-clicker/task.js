let cookie = document.getElementById("cookie");
let clickerCounter = document.getElementById("clicker__counter");
let startValue = Number(clickerCounter.textContent);
let clickerTime = document.getElementById("clicker__time");
let oldClick = new Date;
let newClick = new Date;
cookie.onclick = () => {
    oldClick = newClick;
    newClick = new Date;
    let differenceTime = ((oldClick - newClick) / 1000) * -1;
    clickerTime.textContent = `${differenceTime}`;
    startValue ++;
    clickerCounter.textContent = startValue;
    if (cookie.width <= 200) {
        cookie.width = 205;
    } else {
        cookie.width = 200;
    }
}
