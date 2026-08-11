const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

  nav.classList.toggle("open");

  if (nav.classList.contains("open")) {
    menuBtn.textContent = "×";
  } else {
    menuBtn.textContent = "☰";
  }

});


document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");

    menuBtn.textContent = "☰";

  });

});
