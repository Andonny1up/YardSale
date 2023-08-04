const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerButton = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");


/*Events*/
navbarEmail.addEventListener("click",toggleDesktopMenu);
burgerButton.addEventListener("click",toggleMobileMenu);

/*Funtions */
function toggleDesktopMenu(event) {
    desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(event){
    mobileMenu.classList.toggle("inactive");
}

console.log("puto")