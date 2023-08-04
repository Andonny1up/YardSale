const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");


/*Events*/
navbarEmail.addEventListener("click",toggleDesktopMenu);

/*Funtions */
function toggleDesktopMenu(event) {
    desktopMenu.classList.toggle("inactive");
}

console.log("puto")