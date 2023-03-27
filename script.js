const icon_Hamburger = document.querySelector(".fa-solid")
const listElement = document.querySelector(".list-link")
const otherPart = document.querySelector(".OtherPart")

window.onload=function(){
    if(icon_Hamburger) {
        icon_Hamburger.addEventListener('click', () => {
            console.log("ITS WORKING");
            listElement.classList.toggle("activeSpecial")
            otherPart.classList.toggle("activated")
        })
    }else {
        console.log("its not working");
    }
}