//selecting the hamburger icon
const menuToggler = document.getElementById("menu_toggler");
const navMenu = document.getElementById("menu");
const body = document.getElementsByTagName("body")[0];

var isVisible = false;

//decide what happens when the hamburger icon is clicked
menuToggler.addEventListener("click", function(){
    //toggle the navigation menu
      if(isVisible){
        navMenu.style.display = "none";  
        body.style.display = "block";
        menuToggler.style.display = "inline-block";
      }else{
          body.style.display = "grid";
          navMenu.style.display = "inline-block";
      }
      isVisible = !isVisible; 
});