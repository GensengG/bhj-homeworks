const select = document.getElementById("genre");
const name = document.getElementById("name");
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const form =  document.forms[0];

const dramaSelect = document.createElement("option");
const comedySelect = document.createElement("option");
const fantasySelect = document.createElement("option");
select.appendChild(dramaSelect);
select.appendChild(comedySelect);
select.appendChild(fantasySelect);
dramaSelect.label = 'Драма';
comedySelect.label = 'Комедия';
fantasySelect.label = 'Фантастика';
dramaSelect.value = 'Драма';
comedySelect.value = 'Комедия';
fantasySelect.value = 'Фантастика';

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const pName = document.createElement("p");
    const pGenre = document.createElement("p");
    content.appendChild(pName);
    content.appendChild(pGenre);
    pName.textContent = `Название фильма: ${name.value}`;
    pGenre.textContent = `Жанр: ${select.value}`;
    form.reset();
})
