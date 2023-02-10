var burger_o = document.getElementsByClassName("burger-open");
var burger_x = document.getElementsByClassName("burger-close");
var bur = document.getElementsByClassName("sidebar");
burger_o[0].onclick = function () {
   bur[0].classList.add("sidebar-active");
   document.getElementById("menu").style.display = "flex";
};
burger_x[0].onclick = function () {
   bur[0].classList.remove("sidebar-active");
   document.getElementById("menu").style.display = "none";
};