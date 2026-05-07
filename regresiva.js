let intervalo;
let mensajeActivo = false;
let clave = "";

// 👀 MENSAJES SECRETOS
let mensajes = [
  "👀 Prepárate… algo especial está por venir 💐",
  "👀 Solo los curiosos encuentran esto 😎",
  "👀 Esto es solo el inicio… 🎨",
  "👀 Si ves esto, eres de los pocos 🔥"
];

let indice = 0;

window.onload = () => {

  iniciarCuenta();

  // 👆 DOBLE CLICK
  document.getElementById("contador").addEventListener("dblclick", () => {
    mostrarMensaje();
  });

  // 🔐 CLAVES SECRETAS
  document.addEventListener("keydown", (e) => {

    clave += e.key.toLowerCase();

    // 🔥 desbloquear manual
    if (clave.includes("evento")) {
      activarEvento();
      clave = "";
    }

    // 👀 mostrar secretos
    if (clave.includes("gus")) {
      mostrarMensaje();
      clave = "";
    }

    if (clave.length > 15) {
      clave = "";
    }

  });

  // 🌈 COLORES DEL CONTADOR
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

  // 💓 LATIDO
  setInterval(() => {

    let contador =
      document.getElementById("contador");

    contador.style.transform = "scale(1.18)";

    setTimeout(() => {
      contador.style.transform = "scale(1)";
    }, 500);

  }, 1200);

  // ✨ FRASES
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

  // 🌈 FONDO CAMBIANTE
  let fondos = [
    "linear-gradient(45deg, #1e1e2f, #2d3436)",
    "linear-gradient(45deg, #2d1b4d, #111827)",
    "linear-gradient(45deg, #3b1f2b, #1e272e)",
    "linear-gradient(45deg, #0f2027, #203a43)",
    "linear-gradient(45deg, #232526, #414345)"
  ];

  setInterval(() => {

    let random =
      fondos[Math.floor(Math.random() * fondos.length)];

    document.body.style.background = random;

  }, 7000);

};

//
// ⏳ CONTADOR
//
function iniciarCuenta() {

  // 📅 FECHA DEL EVENTO
  let objetivo = new Date("2026-05-09T11:00:00");

  let contador =
    document.getElementById("contador");

  intervalo = setInterval(() => {

    if (mensajeActivo) return;

    let ahora = new Date();

    let diferencia =
      Math.floor((objetivo - ahora) / 1000);

    // 🎉 EVENTO
    if (diferencia <= 0) {

      clearInterval(intervalo);

      activarEvento();

      return;
    }

    let d =
      Math.floor(diferencia / 86400);

    let h =
      Math.floor((diferencia % 86400) / 3600);

    let m =
      Math.floor((diferencia % 3600) / 60);

    let s = diferencia % 60;

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
function mostrarMensaje() {

  let msg =
    document.getElementById("mensajeSecreto");

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
// 🎉 ACTIVAR EVENTO
//
function activarEvento() {

  let link =
    document.getElementById("linkEvento");

  let contador =
    document.getElementById("contador");

  // 👀 PANTALLA PREVIA
  let aviso =
    document.createElement("div");

  aviso.innerHTML =
    "👀 El secreto finalmente ha sido revelado...";

  aviso.style.position = "fixed";

  aviso.style.top = "0";
  aviso.style.left = "0";

  aviso.style.width = "100%";
  aviso.style.height = "100%";

  aviso.style.background = "black";

  aviso.style.display = "flex";

  aviso.style.justifyContent = "center";

  aviso.style.alignItems = "center";

  aviso.style.fontSize = "2em";

  aviso.style.color = "#00ffcc";

  aviso.style.zIndex = "99999";

  document.body.appendChild(aviso);

  // ✨ FLASH
  document.body.style.filter =
    "brightness(2)";

  setTimeout(() => {

    document.body.style.filter =
      "brightness(1)";

  }, 300);

  // 🌈 NUEVO FONDO
  document.body.style.background =
    "linear-gradient(45deg,#00b894,#0984e3)";

  // 🎆 CONFETI
  confeti();

  // ⏳ ESPERAR
  setTimeout(() => {

    aviso.remove();

    // 👀 TEXTO GIGANTE
    let mega =
      document.createElement("div");

    mega.innerHTML =
      "🎉 EVENTO DISPONIBLE 🎉";

    mega.style.position = "fixed";

    mega.style.top = "35%";

    mega.style.left = "50%";

    mega.style.transform =
      "translate(-50%, -50%)";

    mega.style.fontSize = "2.2em";

    mega.style.fontWeight = "bold";

    mega.style.color = "#ffffff";

    mega.style.textShadow =
      "0 0 20px #00ffcc";

    mega.style.textAlign = "center";

    mega.style.width = "100%";

    mega.style.zIndex = "9999";

    document.body.appendChild(mega);

    // ✨ PARTÍCULAS
    for (let i = 0; i < 80; i++) {

      let p =
        document.createElement("div");

      p.innerHTML = "✨";

      p.style.position = "fixed";

      p.style.left =
        Math.random() * 100 + "%";

      p.style.top =
        Math.random() * 100 + "%";

      p.style.fontSize = "20px";

      document.body.appendChild(p);

    }

    // 💐 MENSAJE FINAL
    let extra =
      document.createElement("p");

    extra.innerHTML =
      "💐 Gracias por esperar este momento";

    extra.style.marginTop = "40px";

    extra.style.fontSize = "20px";

    extra.style.color = "#ffffff";

    extra.style.textAlign = "center";

    document.body.appendChild(extra);

    // 🔓 DESBLOQUEAR
    link.classList.remove("bloqueado");

    link.classList.add("activo");

    contador.textContent =
      "🎉 EVENTO DESBLOQUEADO 🎉";

  }, 4000);

}

//
// 🎆 CONFETI
//
function confeti() {

  for (let i = 0; i < 40; i++) {

    let c =
      document.createElement("div");

    c.innerHTML = "🎉";

    c.style.position = "fixed";

    c.style.left =
      Math.random() * 100 + "%";

    c.style.top =
      Math.random() * 100 + "%";

    c.style.fontSize = "25px";

    c.style.pointerEvents = "none";

    document.body.appendChild(c);

    setTimeout(() => {

      c.remove();

    }, 3000);

  }

}