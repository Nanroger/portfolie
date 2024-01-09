function toggleMenu() {
  var menu = document.getElementById("slide-menu");
  menu.style.top = menu.style.top === "" || menu.style.top === "-100%" ? "0" : "-100%";
}
function closeMenu() {
  var menu = document.getElementById("slide-menu");
  menu.style.top = "-100%";
}
