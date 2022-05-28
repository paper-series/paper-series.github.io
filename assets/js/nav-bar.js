let navItems = document.getElementsByClassName("nav-item");
let hamIcon = document.getElementById("hamburger-menu-icon");
let navBarName = document.getElementById("nav-bar-name-collapsed");

function navBarHamToggle() {
    let isExpanded = false;
    for (var i = 0; i < navItems.length-1; i++) {
        if (!navItems[i].className.includes("nav-item-small-scr")) {
            isExpanded = true;
            navItems[i].className += " nav-item-small-scr";
        } else {
            navItems[i].className = navItems[i].className.replace('nav-item-small-scr', '');
        }
    }
    if (isExpanded) {
        hamIcon.className = 'fa-solid fa-xmark';
        navBarName.style.visibility = "hidden";
    } else {
        navBarName.style.visibility = "visible";
        hamIcon.className = "fa fa-bars";
    }

}
