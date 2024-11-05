const colorModeToggle = document.querySelector("#colorModeToggle");
const bodyElement = document.querySelector("body");

colorModeToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark--mode");

  if (!bodyElement.classList.contains("dark--mode")) {
    colorModeToggle.classList.remove("fa-sun");
    colorModeToggle.classList.add("fa-moon");
  }

  if (bodyElement.classList.contains("dark--mode")) {
    colorModeToggle.classList.remove("fa-moon");
    colorModeToggle.classList.add("fa-sun");
  }
});
