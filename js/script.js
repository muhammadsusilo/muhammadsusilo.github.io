const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", function(){
    navbar.classList.toggle("open");
})