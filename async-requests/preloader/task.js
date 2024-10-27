const items = document.getElementById("items");
const loader = document.getElementById("loader");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");

xhr.addEventListener("load", () => {
    let data = xhr.response;
    
    function restoreObject(key){
        try{
            return JSON.parse(key)
        } catch {
            return null;
        }
    }

    let response = restoreObject(data).response;
    let valutes = response.Valute;
    let valutesArr = Object.values(valutes);

    valutesArr.forEach(obg => {
        items.insertAdjacentHTML("afterbegin", `
            <div class="item__code">
                ${obg.CharCode}
            </div>
            <div class="item__value">
                ${obg.NumCode}
            </div>
            <div class="item__currency">
                руб.
            </div>`);
    });

    loader.classList.toggle("loader_active");
})
xhr.send();
