const dropdownNav = document.querySelector("#nav-dropdown"),
     dropdownContent = document.querySelector("#dropdown-content"),
     openDropdownIcon = document.querySelector(".open-dropdown"),
     closeDropdownIcon = document.querySelector(".close-dropdown"),
     accordionBtn = document.querySelector("#accordion-btn"),
     accordionContent = document.querySelector("#accordion-content"),
     closeAccordion = document.querySelector("#close-accordion"),
     openAccordion = document.querySelector("#open-accordion"),
     openMenu = document.querySelector("#burger-btn"),
     navMenu = document.querySelector("#nav-menu"),
     closeMenu = document.querySelector("#close-btn"),
     navBanner = document.querySelector("#nav-banner");
     
function dropdown(btn, content, openIcon, closeIcon) {
 btn.addEventListener("click", () => {
  content.classList.toggle("show-dropdown");
  openIcon.classList.toggle("hide-dropdown");
  closeIcon.classList.toggle("show-dropdown");
 });
}
function accordion (btn , content , openIcon , closeIcon) {
  btn.addEventListener("click", () => {
     content.classList.toggle("show-accordion")
     openIcon.classList.toggle("hide-dropdown")
     closeIcon.classList.toggle("show-dropdown")
  })
}
openMenu.addEventListener("click", () => {
   navMenu.classList.toggle("show-menu");
   navBanner.style.display = "block";
   document.body.style.overflow = "hidden";
});
closeMenu.addEventListener("click", () => {
   navMenu.classList.toggle("show-menu");
   navBanner.style.display = "none";
   document.body.style.overflow = "";
});
navBanner.addEventListener("click", (e) => {
   if (e.target == navBanner) {
      navMenu.classList.toggle("show-menu");
      navBanner.style.display = "none";
      document.body.style.overflow = "";
   }
});

dropdown(dropdownNav, dropdownContent, openDropdownIcon, closeDropdownIcon);
accordion(accordionBtn, accordionContent, openAccordion, closeAccordion)


// ibrohim
// tabs
const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}
// tabs
