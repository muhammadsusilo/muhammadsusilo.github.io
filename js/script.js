// nav
const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", function(){
    navbar.classList.toggle("open");
})

// scroll nav
const header = document.getElementsByTagName("header")[0]
window.addEventListener("scroll (0, 13)", function(){
    header.classList("scrollheader");
})