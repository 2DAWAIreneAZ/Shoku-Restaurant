document.addEventListener("DOMContentLoaded", function() {
    const navIcon = document.getElementById("nav-icon");
    const menuOn = document.getElementById("menu-on");

    const menuMobile = document.querySelector(".menu_mobile");
    // const logo = document.querySelector(".logo");

    navIcon.addEventListener("click", function() {
        this.classList.toggle("open");
        menuMobile.classList.toggle("grow");
        // logo.classList.toggle("evanescence");
        menuOn.classList.toggle("visible_menu");

        /* Subir la página al abrir el menu */
        window.scrollTo({top: 0, behavior: "smooth"});
    }); 

    /* Cuando pulsemos una opción del nav debe cerrar el menu_mobile */
    const menuLinks = document.querySelectorAll("#menu_mobile_nav li a");

    menuLinks.forEach( link => {
        link.addEventListener("click", function() {
            navIcon.classList.remove("open");
            menuMobile.classList.remove("grow");
            // logo.classList.remove("evanescence");
            menuOn.classList.remove("visible_menu");

        });
    });

});