const icon_Hamburger = document.querySelector(".fa-solid")
const listElement = document.querySelector(".list-link")

window.onload=function(){
    if(icon_Hamburger) {
        icon_Hamburger.addEventListener('click', () => {
            console.log("ITS WORKING");
            listElement.classList.toggle("active")
        })
    }else {
        console.log("its not working");
    }
}