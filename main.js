let header = document.getElementById("header");
let mobileMenu = document.getElementById("mobile-menu");

let currentHeaderHeight = header.clientHeight;
mobileMenu.onclick = function () {
  let isClosed = currentHeaderHeight === header.clientHeight;
  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

let menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (let i = 0; i < menuItems.length; ++i) {
  menuItems[i].onclick = function (e) {
    //có anh em liền kề và có class subnav
    let isParent =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    if (isParent) {
      e.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}


