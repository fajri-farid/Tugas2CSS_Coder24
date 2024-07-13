const modeToggle = document.getElementById("modeToggle"); // id icon-nya

function setMode(mode) {
  document.body.classList.toggle("dark-mode", mode === "dark");
  if (mode === "dark") {
    modeToggle.classList.remove("fa-moon");
    modeToggle.classList.add("fa-sun");
    modeToggle.style.color = "#ffffff";
  } else {
    modeToggle.classList.remove("fa-sun");
    modeToggle.classList.add("fa-moon");
    modeToggle.style.color = "#000000";
  }
}

const savedMode = localStorage.getItem("mode");
if (savedMode) {
  setMode(savedMode);
}

modeToggle.addEventListener("click", function () {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  const mode = isDarkMode ? "dark" : "light";
  setMode(mode);
  localStorage.setItem("mode", mode);
});
