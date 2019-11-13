//selecting the hamburger icon
const menuToggler = document.getElementById("menu_toggler");
const navMenu = document.getElementById("menu");

//decide what happens when the hamburger icon is clicked
menuToggler.addEventListener("click", function(){
    //toggle the navigation menu
       navMenu.classList.toggle("navMenu");
       document.body.classList.toggle("body");
});