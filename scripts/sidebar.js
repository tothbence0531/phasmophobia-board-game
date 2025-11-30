const sidebar = document.querySelector(".sidebar");
const sidebarButton = document.querySelector(".sidebar-menu-icon");

sidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", () => {
  sidebar.classList.remove("open");
});
