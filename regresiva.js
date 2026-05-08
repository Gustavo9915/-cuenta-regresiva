let intervalo;
let latido;

let clave = "";
let claveRocy = "";
let claveUlises = "";
let claveEvento = "";
let claveCasi = "";

let mensajes = [
  "👀 Prepárate… algo especial está por venir 💐",
  "🎨 Nuevos dibujos en camino",
  "🔥 Ya casi llega el momento",
  "💖 Gracias por apoyar"
];

let indice = 0;

window.onload = () => {

  iniciarCuenta();

  crearMarco();

  // 💖 DOBLE CLICK
  document.getElementById("contador")
  .addEventListener("dblclick", () => {

    mostrarMensaje();

  });

  // 🔐 CLAVES
  document.addEventListener("keydown", (e) => {

    let k = e.key.toLowerCase();

    clave += k;
    claveRocy += k;
    claveUlises += k;
    claveEvento += k;
    claveCasi += k;

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

    // ⏳ CASI
    if (claveCasi.includes("casi")) {

      mostrarCasi();
      claveCasi = "";

    }

    // 🔐 EVENTO
    if (claveEvento.includes("evento")) {

      mostrarEventoBloqueado();
      claveEvento = "";

    }

    if (clave.length > 20) {
      clave = "";
    }

  });

};

//
// ⏳ CONTADOR
//
function iniciarCuenta() {

  let objetivo =
    new Date("2026-05-09T11:00:00");

  let contador =
    document.getElementById("contador");

  intervalo = setInterval(() => {

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

    let s =
      diferencia % 60;

    contador.innerHTML =
      `💖 ${d}d ${h}h ${m}m ${s}s`;

  }, 1000);

  //
  // 💓 LATIDO FUERTE
  //
  latido = setInterval(() => {

    let c =
      document.getElementById("contador");

    let ahora =
      new Date();

    let objetivo =
      new Date("2026-05-09T11:00:00");

    let diff =
      (objetivo - ahora) / 1000;

    let intensidad = 1.12;

    if (diff < 21600) {
      intensidad = 1.18;
    }

    if (diff < 10800) {
      intensidad = 1.23;
    }

    if (diff < 3600) {
      intensidad = 1.3;
    }

    c.style.transition = "0.2s";

    c.style.transform =
      `scale(${intensidad})`;

    c.style.textShadow =
      "0 0 20px #ff4d88";

    setTimeout(() => {

      c.style.transform = "scale(1)";
      c.style.textShadow = "none";

    }, 200);

  }, 500);

}

//
// 💖 MENSAJES SECRETOS
//
function mostrarMensaje() {

  let msg =
    document.getElementById("mensajeSecreto");

  if (!msg) return;

  msg.textContent =
    mensajes[indice];

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
// 💖 ROCY
//
function mostrarRocy() {

  let box =
    document.createElement("div");

  box.innerHTML = `
    💖 ROCY 💖<br><br>
    Eres como una segunda mamá 🌸<br><br>

    <img src="img/fami.jpg"
    style="
    width:100%;
    border-radius:15px;
    box-shadow:0 0 20px #ff4d88;
    ">
  `;

  estiloCaja(box, "#ff4d88");

  document.body.appendChild(box);

  setTimeout(() => {

    box.remove();

  }, 6000);

}

//
// 🔥 ULISES
//
function mostrarUlises() {

  let box =
    document.createElement("div");

  box.innerHTML = `
    🔥 ULISES 🔥<br><br>
    Gracias carnal 👊<br><br>

    <img src="img/ulices.jpg"
    style="
    width:100%;
    border-radius:15px;
    box-shadow:0 0 20px #00ffcc;
    ">
  `;

  estiloCaja(box, "#00ffcc");

  document.body.appendChild(box);

  setTimeout(() => {

    box.remove();

  }, 6000);

}

//
// ⏳ CASI
//
function mostrarCasi() {

  let box =
    document.createElement("div");

  box.innerHTML =
    "⏳ YA CASI ⏳<br><br>" +
    "🎨 Los nuevos dibujos están por llegar";

  estiloCaja(box, "#00ffcc");

  document.body.appendChild(box);

  setTimeout(() => {

    box.remove();

  }, 4000);

}

//
// 🔐 EVENTO BLOQUEADO
//
function mostrarEventoBloqueado() {

  let box =
    document.createElement("div");

  box.innerHTML =
    "🔐 EVENTO 🔐<br><br>" +
    "⏳ Aún no disponible";

  estiloCaja(box, "#ffd166");

  document.body.appendChild(box);

  setTimeout(() => {

    box.remove();

  }, 3000);

}

//
// 🎉 ACTIVAR EVENTO
//
function activarEvento() {

  // 💥 FLASH
  document.body.style.transition = "0.3s";

  document.body.style.filter =
    "brightness(3)";

  setTimeout(() => {

    document.body.style.filter =
      "brightness(1)";

  }, 300);

  // 🌈 FONDO
  document.body.style.background =
    "linear-gradient(45deg,#ff4d88,#00b894,#0984e3)";

  // 🎆 PARTICULAS
  for (let i = 0; i < 80; i++) {

    let p =
      document.createElement("div");

    p.innerHTML =
      Math.random() > 0.5
      ? "🎉"
      : "💖";

    p.style.position = "fixed";

    p.style.left =
      Math.random() * 100 + "%";

    p.style.top =
      Math.random() * 100 + "%";

    p.style.fontSize = "25px";

    p.style.zIndex = "99999";

    document.body.appendChild(p);

    setTimeout(() => {

      p.remove();

    }, 3000);

  }

  // ⌨️ TEXTO LETRA POR LETRA
  let texto =
    document.createElement("div");

  texto.style.position = "fixed";

  texto.style.top = "50%";

  texto.style.left = "50%";

  texto.style.transform =
    "translate(-50%, -50%)";

  texto.style.color = "white";

  texto.style.fontSize = "2em";

  texto.style.fontWeight = "bold";

  texto.style.textAlign = "center";

  texto.style.textShadow =
    "0 0 20px #00ffcc";

  texto.style.zIndex = "99999";

  document.body.appendChild(texto);

  let mensaje =
    "🎉 EVENTO DISPONIBLE 🎉";

  let i = 0;

  let escribir =
    setInterval(() => {

    texto.innerHTML +=
      mensaje.charAt(i);

    i++;

    if (i >= mensaje.length) {

      clearInterval(escribir);

    }

  }, 100);

}

//
// 💖 ESTILO CAJAS
//
function estiloCaja(box, color) {

  box.style.position = "fixed";

  box.style.top = "50%";

  box.style.left = "50%";

  box.style.transform =
    "translate(-50%, -50%)";

  box.style.background =
    "rgba(0,0,0,0.92)";

  box.style.color = color;

  box.style.padding = "20px";

  box.style.borderRadius = "20px";

  box.style.boxShadow =
    `0 0 25px ${color}`;

  box.style.zIndex = "99999";

  box.style.textAlign = "center";

  box.style.maxWidth = "320px";

}

//
// 💖 MARCO
//
function crearMarco() {

  let marco =
    document.createElement("div");

  marco.style.position = "fixed";

  marco.style.top = "10px";

  marco.style.left = "10px";

  marco.style.right = "10px";

  marco.style.bottom = "10px";

  marco.style.border =
    "5px solid #ffb6c1";

  marco.style.borderRadius =
    "25px";

  marco.style.pointerEvents =
    "none";

  marco.style.zIndex = "9999";

  document.body.appendChild(marco);

}