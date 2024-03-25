//#region 
const angleI = document.querySelectorAll(".fa-angle-down");
const angleIHover = document.querySelectorAll(".fa-angle-down:hover");
angleI.forEach(el => {
    const angleParent = el.parentElement.parentElement;
    el.addEventListener("mouseenter", (evt) => {
        angleParent.style.height = "130px";
        el.classList.add("hovered");
    });
    angleParent.addEventListener("mouseleave", (evt) => {
        angleParent.style.height = "50px";
        el.classList.remove("hovered");
    });
});
//#endregion