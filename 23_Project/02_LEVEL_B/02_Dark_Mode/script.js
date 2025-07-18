document.querySelector("#toggleMode").addEventListener("click", () => {
  let body = document.body;
  if (body.classList.contains("dark-mode")) {
    body.className = "light-mode";
    localStorage.setItem("mode", "light-mode");
  } else {
    body.className = "dark-mode";
    localStorage.setItem("mode", "dark-mode");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("mode") || "light-mode";
  document.body.className = savedMode;
});
