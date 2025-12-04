const bodyEl = document.querySelector("body");
const uvButtonsEl = document.querySelectorAll(".uv-light-button");
const sidebarEl = document.querySelector(".sidebar");
const tarotCardImageEl = document.querySelector(".tarot-card-image");
const boardSetupImageEl = document.querySelector(".board-setup-image");

// sources for images in normal and uv mode
const UV_SWITCH_NORMAL = "uv.webp";
const UV_SWITCH_UV = "uv_edited.webp";
const TAROT_CARD_IMAGE_NORMAL = tarotCardImageEl.src;
const TAROT_CARD_IMAGE_UV = "assets/tartot_card_image_uv.jpg";
const BOARD_SETUP_IMAGE_NORMAL = "assets/board_setup.jpg";
const BOARD_SETUP_IMAGE_UV = "assets/board_setup_uv.jpg";

// toggles between normal and uv mode with both nav and sidebar buttons
uvButtonsEl.forEach((button) => {
  button.addEventListener("click", () => {
    bodyEl.classList.toggle("uv-light");
    updateUi();
  });
});

/**
 * Updates the UI to match the current mode
 */
function updateUi() {
  uvButtonsEl.forEach((btn) => {
    if (bodyEl.classList.contains("uv-light")) {
      btn.innerHTML = `<img src="assets/uv_edited.webp" alt="UV Light" />`;
      tarotCardImageEl.src = TAROT_CARD_IMAGE_UV;
      boardSetupImageEl.src = BOARD_SETUP_IMAGE_UV;
    } else {
      btn.innerHTML = `<img src="assets/uv.webp" alt="UV Dark" />`;
      tarotCardImageEl.src = TAROT_CARD_IMAGE_NORMAL;
      boardSetupImageEl.src = BOARD_SETUP_IMAGE_NORMAL;
    }
  });
}
