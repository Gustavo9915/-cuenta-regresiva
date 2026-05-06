let intervalo;
let mensajeActivo = false;

window.onload = () => {

  iniciarCuenta();

  // 👆 DOBLE CLICK
  document.getElementById("contador").addEventListener("dblclick", () => {
    mostrarMensaje();
  });

  // 🔐 CLAVE
  document.addEventListener("keydown", (e) => {
    clave += e.key.toLowerCase();

    if (clave.includes("gus")) {
      mostrarMensaje();
      clave = "";
    }

    if (clave.length > 10) clave = "";
  });
};

//
// 🔥 CONTADOR
//
function iniciarCuenta() {
  let objetivo = new Date("2026-05-10T00:00:00");

  let contador = document.getElementById("contador");
  let link = document.getElementById("linkEvento");

  intervalo = setInterval(() => {

    if (mensajeActivo) return;

    let ahora = new Date();
    let diferencia = Math.floor((objetivo - ahora) / 1000);

    if (diferencia <= 0) {
      clearInterval(intervalo);

      contador.textContent = "🎉 YA DISPONIBLE 🎉";

      link.classList.remove("bloqueado");
      link.classList.add("activo");

      return;
    }

    let d = Math.floor(diferencia / 86400);
    let h = Math.floor((diferencia % 86400) / 3600);
    let m = Math.floor((diferencia % 3600) / 60);
    let s = diferencia % 60;

    contador.textContent =
      `${String(d).padStart(2, "0")}d ` +
      `${String(h).padStart(2, "0")}h ` +
      `${String(m).padStart(2, "0")}m ` +
      `${String(s).padStart(2, "0")}s`;

  }, 1000);
}

//
// 🔥 MENSAJES
//
let mensajes = [
  "👀 Prepárate… algo especial está por venir 💐",
  "👀 Solo los curiosos encuentran esto 😎",
  "👀 Esto es solo el inicio… 🎨",
  "👀 Si ves esto, eres de los pocos 🔥"
];

let indice = 0;

function mostrarMensaje() {
  let msg = document.getElementById("mensajeSecreto");

  msg.textContent = mensajes[indice];

  indice++;
  if (indice >= mensajes.length) indice = 0;

  msg.classList.add("mostrar");

  setTimeout(() => {
    msg.classList.remove("mostrar");
  }, 4000);
}

let clave = "";