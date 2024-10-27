const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newdata = new FormData(form);

    const xhr = new XMLHttpRequest();
    console.log(xhr.upload);
    xhr.upload.addEventListener("progress", (e) => {
        progress.value = `${e.loaded / e.total}`;
    })
    
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.send(newdata);
});
