//selecting the hamburger icon
const menuToggler = document.getElementById("menu_toggler");
let menuIsDisplayedOnPage = true; //nav menu is currently displayed on the page
const navMenu = document.getElementById("menu");

//decide what happens when the hamburger icon is clicked
menuToggler.addEventListener("click", function(){
    //toggle the navigation menu
    if(menuIsDisplayedOnPage){
        //remove the navigation menu if it is on the page
       navMenu.classList.add("navMenu");
       document.body.classList.add("body");
    }else{
        //add the nav menu back to the page.
        navMenu.classList.remove("navMenu");
        document.body.classList.remove("body");
    }
    menuIsDisplayedOnPage = !menuIsDisplayedOnPage;
});