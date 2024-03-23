// Agrega la clase "loaded" al body cuando la página haya cargado completamente
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// Boton UP
document.addEventListener("DOMContentLoaded", function () {
  const btnUp = document.getElementById("boton-up");

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY >= 200) {
      btnUp.style.bottom = "15px"; // Ajusta la posición según tus necesidades
    } else {
      btnUp.style.bottom = "-100px"; // Oculta el botón fuera de la pantalla
    }
  });
});
