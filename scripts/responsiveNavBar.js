/*
  script name: responsiveNavbar
  client: One more Travel
  purpose: For small devices, create for the html page a responsive navbar menu
*/
const btnClose = document.getElementById("btnCloseMenu");
const hamburguerMenu = document.getElementById("hamburguerMenu");
const linkList = document.getElementById("linkList");
btnClose.addEventListener("click", () => {
  hamburguerMenu.classList.toggle("hide");
  btnClose.classList.toggle("hide");
  linkList.classList.remove("activeNav");
});
hamburguerMenu.addEventListener("click", () => {
  hamburguerMenu.classList.toggle("hide");
  btnClose.classList.toggle("hide");
  linkList.classList.add("activeNav");
});
window.addEventListener("resize", () => {
  if (window.innerWidth < 600 && !linkList.classList.contains("activeNav")) {
    hamburguerMenu.classList.remove("hide");
  } else if (
    window.innerWidth < 600 &&
    linkList.classList.contains("activeNav")
  ) {
    btnClose.classList.remove("hide");
  } else {
    hamburguerMenu.classList.add("hide");
    btnClose.classList.add("hide");
  }
});
window.addEventListener("load", () => {
  if (window.innerWidth < 600 && !linkList.classList.contains("activeNav")) {
    hamburguerMenu.classList.remove("hide");
  } else if (
    window.innerWidth < 600 &&
    linkList.classList.contains("activeNav")
  ) {
    btnClose.classList.remove("hide");
  } else {
    hamburguerMenu.classList.add("hide");
    btnClose.classList.add("hide");
  }
});
