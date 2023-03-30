const icon_Hamburger = document.querySelector(".fa-bars");
const overlaySecond = document.querySelector(".second_part");
const overlayOne = document.querySelector(".first_part");
const imageBack = document.querySelector(".image_background")

if(overlayOne) {
    icon_Hamburger.addEventListener('click', () => {
        overlayOne.classList.add("overlay_activated");  
        overlaySecond.classList.add("overlay_activated_nd");
        imageBack.classList.add("imageActivated");
    })
}
