// PIEDRA, PAPEL O TIJERA

const botonPiedra = document.getElementById("btnPiedra");
const botonPapel = document.getElementById("btnPapel");
const botonTijera = document.getElementById("btnTijera");
const resultado = document.getElementById("resultado");

botonPiedra.addEventListener("click", () => jugar("PIEDRA"));
botonPapel.addEventListener("click", () => jugar("PAPEL"));
botonTijera.addEventListener("click", () => jugar("TIJERA"));

function aleatorio() {
  let random = Math.floor(Math.random() * 3 + 1);
  switch (random) {
    case 1:
      return("PIEDRA");
    case 2:
      return("PAPEL");
    case 3:
      return("TIJERA");
    default:
      return("el valor no está en el rango");
  }
}

function jugar(jugadaUsuario) {
  let jugadaMaquina = aleatorio();
  let resultadoTexto = "";
  if (jugadaUsuario === jugadaMaquina) {
    resultadoTexto = "Empate...";
  } else if (
    (jugadaUsuario === "PIEDRA" && jugadaMaquina === "TIJERA") ||
    (jugadaUsuario === "PAPEL" && jugadaMaquina === "PIEDRA") ||
    (jugadaUsuario === "TIJERA" && jugadaMaquina === "PAPEL")
  ) {
    resultadoTexto = "GANASTE !!! 🥳 ";
  } else {
    resultadoTexto = "Perdiste :( ";
  }
  resultado.innerHTML = `Elegiste ${jugadaUsuario} y la maquina eligio ${jugadaMaquina}, <br> por lo tanto... <br> <h2 class="mt-4"> ${resultadoTexto} </h2>`;
}
