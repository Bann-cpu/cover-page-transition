const icon_Hamburger = document.querySelector(".fa-bars");
const overlaySecond = document.querySelector(".second_part");
const containerItem = document.querySelector(".container");
const overlayOne = containerItem.closest(".first_part");

if(overlayOne) {
    icon_Hamburger.addEventListener('click', () => {
        overlayOne.classList.toggle("overlay_activated")
        overlaySecond.classList.toggle("overlay_activated_nd")
        containerItem.style.overflow = "hidden";
    })
}
