const tooltipArr = document.querySelectorAll(".has-tooltip");

tooltipArr.forEach((elem) => {
    let createTooltip = document.createElement("div");
    createTooltip.textContent = String(elem.title);
    createTooltip.classList.add("tooltip");
    elem.appendChild(createTooltip);
    const elemCoordinates = elem.getBoundingClientRect();
    let left = Math.round(elemCoordinates.left);
    elem.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(createTooltip);
        createTooltip.classList.toggle("tooltip_active");
        createTooltip.setAttribute("style", `position: absolute; left: ${left}px`);
    })
})
