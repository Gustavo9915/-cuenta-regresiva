let intervalo;
let mensajeActivo = false;
let clave = "";

let latido;

let mensajes = [
  "👀 Prepárate… algo especial está por venir 💐",
  "👀 Solo los curiosos encuentran esto 😎",
  "👀 Esto es solo el inicio… 🎨",
  "👀 Si ves esto, eres de los pocos 🔥"
];

let indice = 0;

// 🥚 CLAVES EASTER EGGS
let claveRocy = "";
let claveUlises = "";
let claveEvento = "";

window.onload = () => {

  agregarAnimacion();
  crearMarco();
  crearCorazones();

  iniciarCuenta();

  // 👀 MENSAJES
  document.getElementById("contador").addEventListener("dblclick", () => {
    mostrarMensaje();
  });

  // 🔐 TECLAS
  document.addEventListener("keydown", (e) => {

    let k = e.key.toLowerCase();

    clave += k;
    claveRocy += k;
    claveUlises += k;
    claveEvento += k;

    // 🔥 desbloqueo secreto general
    if (clave.includes("gus")) {
      mostrarMensaje();
      clave = "";
    }

    // 💖 ROCY
    if (claveRocy.includes("rocy")) {
      mostrarRocy();
      claveRocy = "";
    }

    // 🔥 ULISES
    if (claveUlises.includes("ulises")) {
      mostrarUlises();
      claveUlises = "";
    }

    // 🔐 EVENTO (SOLO BLOQUEADO)
    if (claveEvento.includes("evento")) {
      mostrarEventoBloqueado();
      claveEvento = "";
    }

    if (clave.length > 20) clave = "";
  });

  // 🌈 COLORES
  let colores = ["#fff", "#00ffcc", "#ff66cc", "#ffd166", "#74b9ff"];

  setInterval(() => {

    document.getElementById("contador").style.color =
      colores[Math.floor(Math.random() * colores.length)];

  }, 2000);

  // 💓 LATIDO NORMAL
  latido = setInterval(() => {

    let c = document.getElementById("contador");

    c.style.transform = "scale(1.12)";

    setTimeout(() => {
      c.style.transform = "scale(1)";
    }, 400);

  }, 1200);

  // 🌈 FONDOS
  let fondos = [
    "linear-gradient(45deg,#1e1e2f,#2d3436)",
    "linear-gradient(45deg,#2d1b4d,#111827)",
    "linear-gradient(45deg,#3b1f2b,#1e272e)",
    "linear-gradient(45deg,#0f2027,#203a43)"
  ];

  setInterval(() => {

    document.body.style.background =
      fondos[Math.floor(Math.random() * fondos.length)];

  }, 7000);

};

//
// ⏳ CONTADOR
//
function iniciarCuenta() {

  let objetivo = new Date("2026-05-09T11:00:00");
  let contador = document.getElementById("contador");

  intervalo = setInterval(() => {

    if (mensajeActivo) return;

    let ahora = new Date();
    let diferencia = Math.floor((objetivo - ahora) / 1000);

    // 💥 FINAL REAL
    if (diferencia <= 0) {

      clearInterval(intervalo);

      contador.style.transition = "0.6s";
      contador.style.transform = "scale(2)";
      contador.style.opacity = "0";

      document.body.style.background =
        "linear-gradient(45deg,#ff4d88,#00b894,#0984e3)";

      for (let i = 0; i < 80; i++) {

        let p = document.createElement("div");
        p.innerHTML = "🎉";
        p.style.position = "fixed";
        p.style.left = Math.random() * 100 + "%";
        p.style.top = Math.random() * 100 + "%";
        p.style.fontSize = "20px";

        document.body.appendChild(p);

        setTimeout(() => p.remove(), 2000);
      }

      setTimeout(() => {
        activarEvento();
      }, 1200);

      return;
    }

    let d = Math.floor(diferencia / 86400);
    let h = Math.floor((diferencia % 86400) / 3600);
    let m = Math.floor((diferencia % 3600) / 60);
    let s = diferencia % 60;

    // 💓 LATIDO FUERTE (18H)
    if (d === 0 && h <= 18) {

      clearInterval(latido);

      latido = setInterval(() => {

        contador.style.transform = "scale(1.25)";
        contador.style.textShadow = "0 0 20px #ff4d88";

        setTimeout(() => {
          contador.style.transform = "scale(1)";
          contador.style.textShadow = "none";
        }, 200);

      }, 400);
    }

    contador.innerHTML =
      `💖 ${d}d ⏰ ${h}h 🌸 ${m}m ✨ ${s}s`;

  }, 1000);

}

//
// 👀 MENSAJE NORMAL
//
function mostrarMensaje() {

  let msg = document.getElementById("mensajeSecreto");
  if (!msg) return;

  msg.textContent = mensajes[indice];
  indice = (indice + 1) % mensajes.length;

  msg.classList.add("mostrar");

  setTimeout(() => msg.classList.remove("mostrar"), 4000);
}

//
// 💖 ROCY
//
function mostrarUlises() {

  let box = document.createElement("div");

  box.style.position = "fixed";
  box.style.top = "50%";
  box.style.left = "50%";
  box.style.transform = "translate(-50%, -50%)";
  box.style.background = "rgba(0,0,0,0.92)";
  box.style.padding = "20px";
  box.style.borderRadius = "20px";
  box.style.boxShadow = "0 0 25px #00ffcc";
  box.style.zIndex = "99999";
  box.style.textAlign = "center";
  box.style.maxWidth = "320px";
  box.style.color = "#00ffcc";

  box.innerHTML = `
    🔥 ULISES 🔥<br><br>
    Gracias carnal 👊<br>
    Parte de este proyecto 💥<br><br>
  `;

  let img = document.createElement("img");
  img.src = "img/ulices.jpg"; // 👈 tu foto
  img.style.width = "100%";
  img.style.borderRadius = "15px";
  img.style.boxShadow = "0 0 15px #00ffcc";

  box.appendChild(img);

  document.body.appendChild(box);

  setTimeout(() => box.remove(), 6000);
}
function mostrarRocy() {

  let box = document.createElement("div");

  box.style.position = "fixed";
  box.style.top = "50%";
  box.style.left = "50%";
  box.style.transform = "translate(-50%, -50%)";
  box.style.background = "rgba(0,0,0,0.92)";
  box.style.padding = "20px";
  box.style.borderRadius = "20px";
  box.style.boxShadow = "0 0 25px #ff4d88";
  box.style.zIndex = "99999";
  box.style.textAlign = "center";
  box.style.maxWidth = "320px";
  box.style.color = "#ff4d88";

  box.innerHTML = `
    💖 ROCY 💖<br><br>
    Eres como una segunda mamá 🌸<br>
    Gracias por todo 💐<br><br>
  `;

  let img = document.createElement("img");
  img.src = "img/fami.jpg"; // 👈 tu foto
  img.style.width = "100%";
  img.style.borderRadius = "15px";
  img.style.boxShadow = "0 0 15px #ff4d88";

  box.appendChild(img);

  document.body.appendChild(box);

  setTimeout(() => box.remove(), 6000);
}
//
// 🔐 EVENTO BLOQUEADO
//
function mostrarEventoBloqueado() {

  let aviso = document.createElement("div");

  aviso.innerHTML =
    "🔐 EVENTO 🔐<br><br>" +
    "⏳ Aún no disponible<br>" +
    "💖 Espera a que la cuenta llegue a 0";

  aviso.style.position = "fixed";
  aviso.style.top = "50%";
  aviso.style.left = "50%";
  aviso.style.transform = "translate(-50%, -50%)";
  aviso.style.background = "rgba(0,0,0,0.95)";
  aviso.style.color = "#ffcc00";
  aviso.style.padding = "25px";
  aviso.style.borderRadius = "20px";
  aviso.style.zIndex = "99999";
  aviso.style.textAlign = "center";

  document.body.appendChild(aviso);

  setTimeout(() => aviso.remove(), 3000);
}

//
// 🎉 EVENTO REAL
//
function activarEvento() {

  let aviso = document.createElement("div");

  aviso.innerHTML = "🎉 EVENTO DISPONIBLE 🎉";

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

  setTimeout(() => aviso.remove(), 4000);
}

//
// 💖 MARCO
//
function crearMarco() {

  let m = document.createElement("div");
  m.style.position = "fixed";
  m.style.top = "12px";
  m.style.left = "12px";
  m.style.right = "12px";
  m.style.bottom = "12px";
  m.style.border = "6px solid #ffd6e7";
  m.style.borderRadius = "25px";
  m.style.pointerEvents = "none";
  m.style.zIndex = "9999";

  document.body.appendChild(m);
}

//
// ❤️ CORAZONES
//
function crearCorazones() {

  let pos = [
    { top: "10px", left: "10px" },
    { top: "10px", right: "10px" },
    { bottom: "10px", left: "10px" },
    { bottom: "10px", right: "10px" }
  ];

  pos.forEach(p => {

    let c = document.createElement("div");
    c.innerHTML = "💖";
    c.style.position = "fixed";
    c.style.fontSize = "18px";
    c.style.opacity = "0.6";
    c.style.zIndex = "9999";

    Object.assign(c.style, p);

    document.body.appendChild(c);
  });

}

//
// ✨ ANIMACIÓN
//
function agregarAnimacion() {

  let s = document.createElement("style");

  s.innerHTML = `
  @keyframes flotar {
    0%{transform:translateY(0)}
    50%{transform:translateY(-8px)}
    100%{transform:translateY(0)}
  }`;

  document.head.appendChild(s);
}