const btnOpen = document.querySelector(".item_actionBtn");
const previews = document.querySelector(".previews");
const overlayRowA = document.querySelector(".first_class")


const modalTransition = [
    {transform: 'translateY(-10000px)'},
    {transform: 'translateY(0px)'}
];

const modalTiming = {
    duration: 900,
    iterations: 1,
};

window.onload=function(){
    if(btnOpen){
        btnOpen.addEventListener('click', () => {
        console.log("ITS WORKING");
        previews.style.display = "none";
        })
    } else {
        console.log("ITS NOT WORKING");
    }
}