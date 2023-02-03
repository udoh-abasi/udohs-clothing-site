var nav = document.querySelector("nav");
var menuIcon = document.querySelector("#menuIcon");
var closeIcon = document.querySelector("#menu_button_close");

var men_button = document.querySelector(".men_button");
var women_button = document.querySelector(".women_button");

var header_label = document.querySelector("#magnifyGlass");
var header_label_close = document.querySelector("#SearchClose");
var header = document.querySelector("header");



menuIcon.addEventListener("click", showMenu);
closeIcon.addEventListener("click", removeMenu);


men_button.addEventListener("click", swapToMen);
women_button.addEventListener("click", swapToWomen);

header_label.addEventListener("click", showSearchbar);
header_label_close.addEventListener("click", closeSearchbar);


function showMenu () {
    nav.classList.add("open");
}

function removeMenu () {
    nav.classList.remove("open");
}



function swapToMen() {
    nav.classList.add("men")
}

function swapToWomen() {
    nav.classList.remove("men")
}

function showSearchbar () {
    header.classList.add("header_search_show")
}


function closeSearchbar () {
    header.classList.remove("header_search_show")
}


