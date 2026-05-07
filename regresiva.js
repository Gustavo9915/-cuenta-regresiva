let intervalo;
let mensajeActivo = false;

window.onload = () => {

  iniciarCuenta();

  // 👆 DOBLE CLICK EN EL CONTADOR
  document.getElementById("contador").addEventListener("dblclick", () => {
    mostrarMensaje();
  });

  // 🔐 CLAVE SECRETA
  document.addEventListener("keydown", (e) => {

    clave += e.key.toLowerCase();

    // 🔥 activar evento
    if (clave.includes("evento")) {
      activarEvento();
      clave = "";
    }

    // 👀 mostrar mensajes secretos
    if (clave.includes("gus")) {
      mostrarMensaje();
      clave = "";
    }

    if (clave.length > 15) {
      clave = "";
    }

  });

  // 🌈 CAMBIO DE COLOR DEL CONTADOR
  let colores = [
    "#ffffff",
    "#00ffcc",
    "#ff66cc",
    "#ffd166",
    "#74b9ff"
  ];

  setInterval(() => {

    let random =
      colores[Math.floor(Math.random() * colores.length)];

    document.getElementById("contador").style.color = random;

  }, 2000);

  // ✨ FRASES AUTOMÁTICAS
  let frases = [
    "🎨 Un evento especial lleno de sorpresas y nuevos dibujos",
    "👀 Algunos secretos aparecerán antes del evento…",
    "💐 Gracias por apoyar mis dibujos",
    "🔥 Cada segundo nos acerca más al estreno"
  ];

  let i = 0;

  setInterval(() => {

    let frase = document.querySelector(".frase");

    if (frase) {

      frase.textContent = frases[i];

      i++;

      if (i >= frases.length) {
        i = 0;
      }

    }

  }, 4000);

  // 👀 MENSAJES RANDOM
  let msg = document.getElementById("randomMsg");

  if (msg) {

    let secretos = [
      "👀 Algo se acerca...",
      "🔥 Ya casi llega el momento...",
      "🎨 Nuevas sorpresas pronto...",
      "💐 Gracias por apoyar mis dibujos",
      "⏳ La cuenta regresiva continúa..."
    ];

    setInterval(() => {

      let random =
        secretos[Math.floor(Math.random() * secretos.length)];

      msg.textContent = random;

    }, 5000);

  }

};

//
// 🔥 CONTADOR
//
function iniciarCuenta() {

  // 📅 FECHA DEL EVENTO
  let objetivo = new Date("2026-05-09T12:00:00");

  let contador = document.getElementById("contador");
  let link = document.getElementById("linkEvento");

  intervalo = setInterval(() => {

    // ⛔ pausa si hay mensaje activo
    if (mensajeActivo) return;

    let ahora = new Date();
    let diferencia = Math.floor((objetivo - ahora) / 1000);

    // 🎉 EVENTO DISPONIBLE
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

    // 🚨 SI FALTAN 2 DÍAS
    if (d <= 2) {

      let frase = document.querySelector(".frase");

      if (frase) {
        frase.textContent =
          "👀 Solo faltan 2 días… y los secretos están por revelarse";
      }

    }

    contador.textContent =
      `${String(d).padStart(2, "0")}d ` +
      `${String(h).padStart(2, "0")}h ` +
      `${String(m).padStart(2, "0")}m ` +
      `${String(s).padStart(2, "0")}s`;

  }, 1000);

}

//
// 👀 MENSAJES SECRETOS
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

  if (!msg) return;

  msg.textContent = mensajes[indice];

  indice++;

  if (indice >= mensajes.length) {
    indice = 0;
  }

  msg.classList.add("mostrar");

  setTimeout(() => {
    msg.classList.remove("mostrar");
  }, 4000);

}

//
// 🔓 ACTIVAR EVENTO
//
function activarEvento() {

  let link = document.getElementById("linkEvento");
  let contador = document.getElementById("contador");

  if (!link || !contador) return;

  // 🔓 desbloquear botón
  link.classList.remove("bloqueado");
  link.classList.add("activo");

  // 🎉 mensaje
  mensajeActivo = true;

  contador.textContent = "🎉 EVENTO DESBLOQUEADO 🎉";

  // ⏳ mantener 1 minuto
  setTimeout(() => {
    mensajeActivo = false;
  }, 60000);

}

let clave = "";