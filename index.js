const hamOpen = document.getElementById("ham-open");
const hamClose = document.getElementById("ham-close");
const headerMenu = document.getAnimations("header-menu");
const ham = document.getElementById("ham");

ham.addEventListener("click", () => {
    ham.parentElement.classList.toggle("active-ham");
});