const share_button = document.querySelector(".card-footer__sharebtn");
const footer_card = document.querySelector(".card-footer");
const footer_author = document.querySelector(".card-footer-wrapper");
const footer_links = document.querySelector(".card-footer__menu");
const footer_sharebtn = document.querySelector(".card-footer__sharebtn");
const footer_sharebtn_img = document.querySelector(".card-footer__sharebtn img");

share_button.addEventListener("click", showMenu);

function showMenu() {
  console.log("hello");
  footer_card.classList.toggle("dark-color");
  footer_author.classList.toggle("inactive");
  footer_links.classList.toggle("inactive");
  footer_sharebtn.classList.toggle("circle-dark");
  footer_sharebtn_img.classList.toggle("filter-white");
}
