const listTab = Array.from(document.querySelectorAll(".tab"));
const listTabContent = Array.from(document.querySelectorAll(".tab__content"));
listTab.forEach(tab => {
    tab.addEventListener("click", function(event) {   
        let tabActive = document.querySelector(".tab_active");
        let contentActiv = document.querySelector(".tab__content_active");
        let tabIndex = listTab.indexOf(tab);
        listTabContent[tabIndex].className = "tab__content tab__content_active";
        event.currentTarget.className = "tab tab_active";
        tabActive.className = "tab";
        contentActiv.className = "tab__content";
    })
})
