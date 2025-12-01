const bodyEl = document.querySelector("body");
const uvButtonsEl = document.querySelectorAll(".uv-light-button");
const sidebarEl = document.querySelector(".sidebar");
const tarotCardImageEl = document.querySelector(".tarot-card-image");

const UV_SWITCH_NORMAL = "uv.webp";
const UV_SWITCH_UV = "uv_edited.webp";
const TAROT_CARD_IMAGE_NORMAL = tarotCardImageEl.src;
const TAROT_CARD_IMAGE_UV = "assets/tartot_card_image_uv.jpg";

uvButtonsEl.forEach((button) => {
  button.addEventListener("click", () => {
    bodyEl.classList.toggle("uv-light");
    updateUi();
  });
});

function updateUi() {
  uvButtonsEl.forEach((btn) => {
    if (bodyEl.classList.contains("uv-light")) {
      btn.innerHTML = `<img src="assets/uv_edited.webp" alt="UV Light" />`;
      tarotCardImageEl.src = TAROT_CARD_IMAGE_UV;
    } else {
      btn.innerHTML = `<img src="assets/uv.webp" alt="UV Dark" />`;
      tarotCardImageEl.src = TAROT_CARD_IMAGE_NORMAL;
    }
  });
}
