const desplegable = document.getElementById("desplegable-id");
const contenidoDesplegable = document.getElementById("dropdown-ejemplo");

const componentesDropdown = [desplegable, contenidoDesplegable];

componentesDropdown.forEach((elemento) => {
  elemento.addEventListener("pointerover", () => {
    desplegable.style.border = "2px solid #000";
    contenidoDesplegable.style.display = "block";
  });
});

componentesDropdown.forEach((elemento) => {
  elemento.addEventListener("pointerleave", () => {
    desplegable.style.border = "2px solid #fff";
    contenidoDesplegable.style.display = "none";
  });
});