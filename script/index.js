const listaTeclas = document.querySelectorAll("input[type=button]");
const tel = document.querySelector("input[type='tel']");

function digitar(valorTecla) {
  tel.value += valorTecla;
}

listaTeclas.forEach((elemento) => {
  elemento.addEventListener("click", (e) => {
    digitar(e.target.value);
  });
});
