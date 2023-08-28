const dropdownNav = document.querySelector("#nav-dropdown"),
 dropdownContent = document.querySelector("#dropdown-content"),
 openDropdownIcon = document.querySelector(".open-dropdown"),
 closeDropdownIcon = document.querySelector(".close-dropdown");

function navDropdown() {
 dropdownNav.addEventListener("click", () => {
  dropdownContent.classList.toggle("show-dropdown");
  openDropdownIcon.classList.toggle("hide-dropdown");
  closeDropdownIcon.classList.toggle("show-dropdown");
 });
}
navDropdown();

const openMenu = document.querySelector("#burger-btn"),
 navMenu = document.querySelector("#nav-menu"),
 closeMenu = document.querySelector("#close-btn"),
 navBanner = document.querySelector("#nav-banner");
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

const accordionBtn = document.querySelector("#accordion-btn"),
 accordionContent = document.querySelector("#accordion-content"),
 closeAccordion = document.querySelector("#close-accordion"),
 openAccordion = document.querySelector("#open-accordion");

accordionBtn.addEventListener("click", () => {
 accordionContent.classList.toggle("show-accordion");
 openAccordion.classList.toggle("hide-dropdown");
 closeAccordion.classList.toggle("show-dropdown");
});
