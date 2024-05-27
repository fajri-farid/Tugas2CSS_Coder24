const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    modeToggle.classList.remove("fa-moon");
    modeToggle.classList.add("fa-sun");
    modeToggle.style.color = "#ffffff";
  } else {
    modeToggle.classList.remove("fa-sun");
    modeToggle.classList.add("fa-moon");
    modeToggle.style.color = "#000000";
  }
});
