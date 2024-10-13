let book = document.getElementById("book");
let fontSize = Array.from(document.querySelectorAll(".font-size"));
let colorTextAll = Array.from(document.querySelector(".book__control_color").children);
let colorText =  colorTextAll.filter((elem) => elem.classList.contains("color"));
let colorBackgroundAll = Array.from(document.querySelector(".book__control_background").children);
let colorBackground =  colorBackgroundAll.filter((elem) => elem.classList.contains("color"));

colorText.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        e.preventDefault();
        let colorTextActive = "";
        colorText.forEach((elem) => {
            if (elem.classList.contains("color_active")){
                colorTextActive = elem;
            }
        })
        colorTextActive.classList.toggle("color_active");
        colorTextActive = elem.classList.toggle("color_active");
        if(elem.classList.contains("text_color_black")){
            book.classList.add("book_color-black");
            book.classList.remove("book_color-gray");
            book.classList.remove("book_color-whitesmoke");
        }

        if(elem.classList.contains("text_color_gray")){
            book.classList.remove("book_color-black");
            book.classList.add("book_color-gray");
            book.classList.remove("book_color-whitesmoke");
        }

        if(elem.classList.contains("text_color_whitesmoke")){
            book.classList.remove("book_color-black");
            book.classList.remove("book_color-gray");
            book.classList.add("book_color-whitesmoke");
        }
    })
})


colorBackground.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        e.preventDefault();
        let colorBackgroundActive = "";
        colorBackground.forEach((elem) => {
            if (elem.classList.contains("color_active")){
                colorBackgroundActive = elem;
            }
        })
        colorBackgroundActive.classList.toggle("color_active");
        colorBackgroundActive = elem.classList.toggle("color_active");
        if(elem.classList.contains("bg_color_black")){
            book.classList.add("book_bg-black");
            book.classList.remove("book_bg-gray");
            book.classList.remove("book_bg-white");
        }

        if(elem.classList.contains("bg_color_gray")){
            book.classList.remove("book_bg-black");
            book.classList.add("book_bg-gray");
            book.classList.remove("book_bg-white");
        }

        if(elem.classList.contains("bg_color_white")){
            book.classList.remove("book_bg-black");
            book.classList.remove("book_bg-gray");
            book.classList.add("book_bg-white");
        }
    })
})


fontSize.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        e.preventDefault();
        let fontSizeActive = document.querySelector(".font-size_active");
        fontSizeActive.classList.toggle("font-size_active");
        fontSizeActive = elem.classList.toggle("font-size_active");
        if(elem.dataset.size === "small"){
            book.className = "book book_fs-small";
        }

        if(elem.dataset.size === "big"){
            book.className = "book book_fs-big";
        }

        if(elem.dataset.size === undefined){
            book.className = "book";
        }
    })
})
