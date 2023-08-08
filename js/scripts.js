const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerButton = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const cartShoppingIcon = document.querySelector(".navbar-shopping-cart");
const cartShoppingDetail = document.getElementById("id-card-detail");

const main = document.querySelector("main");

const products = [];
const cardsContainer = document.querySelector(".cards-container");

const productDetailClose = document.querySelector(".product-detail-close");
const productDetail = document.getElementById("id-product-detail");

products.push({
    name:"bike",
    price:120.00,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},{
    name:"bikecicle",
    price:250.00,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},{
    name:"Motorcicle",
    price:720.00,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

/*Events*/
navbarEmail.addEventListener("click",toggleDesktopMenu);
burgerButton.addEventListener("click",toggleMobileMenu);
cartShoppingIcon.addEventListener("click",toggleProductDetail);
main.addEventListener("click",mainClick);

productDetailClose.addEventListener("click",closeProductDetail);

/*Funtions */
function toggleDesktopMenu(event) {
    desktopMenu.classList.toggle("inactive");
    addInactive([cartShoppingDetail,productDetail]);
}
function toggleMobileMenu(event){
    mobileMenu.classList.toggle("inactive");
    addInactive([cartShoppingDetail,productDetail]);
}
function toggleProductDetail(event){
    cartShoppingDetail.classList.toggle("inactive");
    addInactive([mobileMenu,desktopMenu,productDetail]);
}
function mainClick(event){
    addInactive([desktopMenu,mobileMenu,cartShoppingDetail]);
}
function closeProductDetail(event){
    addInactive([productDetail]);
}
function openProductDetail(event){
    addActive([productDetail]);
    addInactive([desktopMenu,mobileMenu,cartShoppingDetail]);
}

/*funcion extra */
function addInactive(elements){
    elements.forEach(element => {
        element.classList.add("inactive");
    });
}
function addActive(elements){
    elements.forEach(element => {
        element.classList.remove("inactive");
    });
}
/*main*/
products.forEach(product => {
    const productCard= document.createElement('div');
    productCard.classList.add("product-card");

    const productImg = document.createElement('img');
    productImg.src = product.image;
    productImg.addEventListener("click",openProductDetail);

    const productInfo= document.createElement('div');
    productInfo.classList.add("product-info");

    const divContenedor = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$'+ product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const figureProduct = document.createElement('figure');
    figureProduct.addEventListener("click",openProductDetail);

    const iconProduct = document.createElement('img');
    iconProduct.src = "icons/bt_add_to_cart.svg";

    /*armado inseciones */
    figureProduct.appendChild(iconProduct);

    divContenedor.append(productPrice,productName);
    
    productInfo.append(divContenedor,figureProduct);

    productCard.append(productImg,productInfo);

    cardsContainer.appendChild(productCard);

});
console.log("puto")
/*Funtions */
