//selecting the hamburger icon
const menuToggler = document.getElementById("menu_toggler");
let menuIsDisplayedOnPage = true; //nav menu is currently displayed on the page

//decide what happens when the hamburger icon is clicked
menuToggler.addEventListener("click", function(){
    //toggle the navigation menu
    if(menuIsDisplayedOnPage){
        //remove the navigation menu if it is on the page
       const navMenu = document.getElementById("menu");
       navMenu.style.display = "none";
       document.body.style.display = "block";
    }else{
        //add the nav menu back to the page.
        const navMenu = document.getElementById("menu");
        navMenu.style.display = "block";
        document.body.style.display = "grid"; 
    }
    menuIsDisplayedOnPage = !menuIsDisplayedOnPage;
});