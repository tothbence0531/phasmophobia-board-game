const infoButtonEl = document.querySelector(
  ".deluxe__cards__edition-card__image-container__info"
);
const infoBoxEl = document.querySelector(".deluxe__text");

const toggleVisibility = (el) => {
  el.style.display = el.style.display === "block" ? "none" : "block";
};

infoButtonEl.addEventListener("click", () => {
  console.log("clicked");
  toggleVisibility(infoBoxEl);
});
