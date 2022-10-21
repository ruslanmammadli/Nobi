//* NAVBAR MENU *//
const burger = document.querySelector('.navbar_toggler');
const nav = document.querySelector('.navbar-collapse');

burger.addEventListener("click",() =>{
    nav.classList.toggle("show");
    if(nav.classList.contains("show")){
        x()
        sidebarSlide.classList.remove("sidebar-show");
        document.getElementsByTagName("BODY")[0].style.position = "fixed";
    }else{
        document.getElementsByTagName("BODY")[0].style.position = "static";
        burgerButton ()
    }
})


function x (){
    document.getElementById("hide-line").style.display="none"
    document.getElementById("left-line").style.transform="rotate(42deg)"
    document.getElementById("left-line").style.position="absolute"
    document.getElementById("right-line").style.transform="rotate(138deg)"
    document.getElementById("right-line").style.position="absolute"
    burger.style.marginTop="8px"
}

function burgerButton (){
    document.getElementById("hide-line").style.display="block"
    document.getElementById("left-line").style.transform="rotate(0)"
    document.getElementById("left-line").style.position="static"
    document.getElementById("right-line").style.transform="rotate(0)"
    document.getElementById("right-line").style.position="static"
    burger.style.marginTop="0"
}

//* SIDEBAR MENU *//

const sidebarSlide = document.querySelector('.profile');
const img = document.querySelector('.img-prof');

img.addEventListener("click",() =>{
    sidebarSlide.classList.toggle("sidebar-show");
    if(sidebarSlide.classList.contains("sidebar-show")){
        document.getElementsByTagName("BODY")[0].style.position = "fixed";
        nav.classList.remove('show');
        burgerButton ()
    }else{
        document.getElementsByTagName("BODY")[0].style.position = "static";
    }
})