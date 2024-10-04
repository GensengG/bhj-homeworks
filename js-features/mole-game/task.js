let dead = document.getElementById("dead");
let deadCount = Number(dead.textContent);
let lost = document.getElementById("lost");
let lostCount = Number(lost.textContent);

function click() {
    getHole = index => document.getElementById(`hole${index}`);
    for(let holeItem = 1; holeItem < 10; holeItem++){
        let holeClick = getHole(holeItem);
        holeClick.addEventListener("click", function() {
            if(holeClick.className === "hole hole_has-mole"){
                deadCount ++;
                dead.textContent = deadCount;
            } else {
                lostCount ++;
                lost.textContent = lostCount;
            }
        })
    }
}

function game() {
    if(lostCount === 5 || deadCount === 10){
        deadCount = 0;
        dead.textContent = deadCount;
        lostCount = 0;
        lost.textContent = lostCount;
        return;
    } 
    click();
}


game();
