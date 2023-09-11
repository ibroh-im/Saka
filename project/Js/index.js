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
function cartalogAccor (btn, arrow, content) {
  btn.addEventListener('click', () => {
    content.classList.toggle('hidden')
    arrow.classList.toggle('ri-arrow-right-s-line')
    arrow.classList.toggle('ri-arrow-down-s-line')
  })
}
cartalogAccor(
  document.querySelector('.catalog-accordion-1'),
  document.querySelector('.catalog-accordion-arrow-1'),
  document.querySelector('.catalog-accordion-content-1')
  )
cartalogAccor(
    document.querySelector('.catalog-accordion-2'),
    document.querySelector('.catalog-accordion-arrow-2'),
    document.querySelector('.catalog-accordion-content-2')
  )
cartalogAccor(
  document.querySelector('.catalog-accordion-3'),
  document.querySelector('.catalog-accordion-arrow-3'),
  document.querySelector('.catalog-accordion-content-3')
)
cartalogAccor(
  document.querySelector('.catalog-accordion-4'),
  document.querySelector('.catalog-accordion-arrow-4'),
  document.querySelector('.catalog-accordion-content-4')
)
const filterBtn = document.querySelector('.filter-catalog'),
    filterContent = document.querySelector('.filter-catalog-content')

filterBtn.addEventListener('click' , () => {
  filterContent.classList.toggle('hidden')
  filterContent.classList.remove('md:block')
})
dropdown(dropdownNav, dropdownContent, openDropdownIcon, closeDropdownIcon);
accordion(accordionBtn, accordionContent, openAccordion, closeAccordion)

//catalog
const dropdownCatalog = document.querySelector('.dropdown-catalog'),
  catalogContent = document.querySelector('.content-catalog'),
  catalogOpen = document.querySelector('.open-catalog'),
  catalogClose = document.querySelector('.close-catalog')
dropdown(dropdownCatalog, catalogContent, catalogOpen, catalogClose)
dropdown(
  document.querySelector('.dropdown-catalog-2'),
  document.querySelector('.content-catalog-2'),
  document.querySelector('.open-catalog-2'),
  document.querySelector('.close-catalog-2')
  )
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

