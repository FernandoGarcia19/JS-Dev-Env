import saludar from "./saludador";

const form = document.querySelector("#form-saludator");
const nombre = document.querySelector("#input-nombre");
const div = document.querySelector("#resultado");
const button = document.querySelector("#saludar-button")
const gender = document.querySelector("#gender");

button.addEventListener("click", (event) => {
  event.preventDefault();
  result = saludar(nombre.value, gender.value);
  div.innerHTML = "<p>" + result  + "</p>";
});


