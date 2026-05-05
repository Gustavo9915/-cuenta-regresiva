let intervalo;
let mensajeActivo = false;

window.onload = () => {
  iniciarCuenta();
};

// 🔥 CONTADOR
function iniciarCuenta() {
  let objetivo = new Date("2026-05-10T00:00:00");

  let contador = document.getElementById("contador");
  let link = document.getElementById("linkEvento");

  intervalo = setInterval(() => {

    // ⛔ si hay mensaje activo, no actualizar contador
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
// 🔐 CÓDIGO SECRETO: "evento"
//
let clave = "";

document.addEventListener("keydown", (e) => {
  clave += e.key.toLowerCase();

  if (clave.includes("evento")) {
    activarEvento();
    clave = "";
  }

  if (clave.length > 10) clave = "";
});

//
// 🚀 ACTIVAR EVENTO MANUAL
//
function activarEvento() {
  let link = document.getElementById("linkEvento");
  let contador = document.getElementById("contador");

  // desbloquear botón
  link.classList.remove("bloqueado");
  link.classList.add("activo");

  // mostrar mensaje
  mensajeActivo = true;
  contador.textContent = "🎉 EVENTO DESBLOQUEADO 🎉";

  // ⏳ mantener 1 minuto
  setTimeout(() => {
    mensajeActivo = false;
  }, 60000);
}
document.getElementById("contador").addEventListener("dblclick", () => {
  let msg = document.getElementById("mensajeSecreto");

  msg.classList.add("mostrar");

  setTimeout(() => {
    msg.classList.remove("mostrar");
  }, 4000); // dura 4 segundos
});