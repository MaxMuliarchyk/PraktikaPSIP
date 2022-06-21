function Burger(x) {
    if (x.classList.toggle("change")) openNav();
    else {
    closeNav();
    }
    }
    function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    }
    function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    }