const icon_Hamburger = document.querySelector(".fa-bars");
const overlaySecond = document.querySelector(".second_part");
const containerItem = document.querySelector(".container");
const overlayOne = document.querySelector(".first_part");

if(overlayOne) {
    icon_Hamburger.addEventListener('click', () => {
        
        containerItem.classList.add("no-animation");
        overlayOne.classList.add("overlay_activated");
        overlaySecond.classList.add("overlay_activated_nd");
    })
}
