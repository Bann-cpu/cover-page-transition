const enterText = document.querySelector("#text_enter");
const overlaySecond = document.querySelector(".second_part");
const overlayOne = document.querySelector(".first_part");
const imageBack = document.querySelector(".image_background")
const infoImg = document.querySelector(".informations")
const backArrow = document.querySelector(".fa-arrow-circle-left")

if(overlayOne) {
    enterText.addEventListener('click', () => {
        overlayOne.classList.add("overlay_activated");  
        overlaySecond.classList.add("overlay_activated_nd");
        imageBack.classList.add("imageActivated");
        enterText.style.display = "none";
        infoImg.classList.toggle("informationsActivated");  
    })
}

if(backArrow) {
    backArrow.addEventListener('click', () => {
        overlaySecond.classList.toggle("overlay_bs_activated");
        overlayOne.classList.toggle("overlay_bs_activated");
        imageBack.classList.remove("imageActivated");
        imageBack.classList.toggle("disparitionFrame");
        infoImg.classList.remove("informationsActivated");
        infoImg.classList.toggle("disparitionFrame");
        enterText.style.display = "block"
        enterText.classList.toggle("aparitionFrame");

    })
}