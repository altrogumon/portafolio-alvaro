// Buscamos el botón y el párrafo usando sus identificadores.
const botonSaludo = document.getElementById("boton-saludo");
const saludo = document.getElementById("saludo");

// Al hacer clic, mostramos un mensaje en la página.
botonSaludo.addEventListener("click", function () {
    saludo.textContent = "¡Hola! Soy Alvaro. Gracias por visitar mi portafolio.";
});
