const reveal = Array.from(document.querySelectorAll(".reveal"));
console.log(reveal);
window.addEventListener('scroll', function() {
    reveal.forEach(element => {
        let {top, bottom} = element.getBoundingClientRect();
        if ((top > 0) && (bottom < this.window.innerHeight)) {
            element.classList.add("reveal_active");
        } else {
            element.classList.remove("reveal_active");
        }
    }); 
})
