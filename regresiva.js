// ======================================
// 💖 CONFIG
// ======================================

let intervalo;
let latido;

let clave = "";

let claveRocy = "";
let claveUlises = "";
let claveEvento = "";
let claveCasi = "";
let claveMama = "";

// ⏰ HORARIOS
let ya1Hora = false;
let ya30Min = false;
let ya10Min = false;

// 💬 MENSAJES
let mensajes = [
  "👀 Prepárate… algo especial está por venir 💐",
  "🎨 Nuevos dibujos en camino",
  "🔥 Ya casi llega el momento",
  "💖 Gracias por apoyar"
];

let indice = 0;

// ======================================
// 🚀 INICIO
// ======================================

window.onload = () => {

  iniciarCuenta();

  crearMarco();

  agregarImagenes();

  particulas();

  mensajesRandom();

  efectosCursor();

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
    claveMama += k;

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

    // 💖 MAMA
    if (claveMama.includes("mama")) {

      easterMama();

      claveMama = "";

    }

    // 🧹 LIMPIAR
    if (clave.length > 25) {

      clave = "";

    }

  });

};

// ======================================
// ⏳ CONTADOR
// ======================================

function iniciarCuenta() {

  // 📅 FECHA REAL
  let objetivo =
    new Date("2026-05-09T11:00:00");

  // 🧪 TEST
  // let objetivo =
  // new Date(Date.now() + 60000);

  let contador =
    document.getElementById("contador");

  intervalo = setInterval(() => {

    let ahora =
      new Date();

    let diferencia =
      Math.floor((objetivo - ahora) / 1000);

    revisarHorarios(diferencia);

    // 🎉 EVENTO
    if (diferencia <= 0) {

      clearInterval(intervalo);

      clearInterval(latido);

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

  // 💓 LATIDO
  latido = setInterval(() => {

    let c =
      document.getElementById("contador");

    let ahora =
      new Date();

    let objetivo =
      new Date("2026-05-09T11:00:00");

    let diff =
      (objetivo - ahora) / 1000;

    let intensidad = 1.08;

    // ⏳ MENOS DE 18H
    if (diff < 64800) {
      intensidad = 1.14;
    }

    // ⏳ MENOS DE 6H
    if (diff < 21600) {
      intensidad = 1.18;
    }

    // ⏳ MENOS DE 3H
    if (diff < 10800) {
      intensidad = 1.23;
    }

    // ⏳ MENOS DE 1H
    if (diff < 3600) {
      intensidad = 1.3;
    }

    c.style.transition =
      "0.2s";

    c.style.transform =
      `scale(${intensidad})`;

    c.style.textShadow =
      "0 0 25px #ff4d88";

    setTimeout(() => {

      c.style.transform =
        "scale(1)";

      c.style.textShadow =
        "0 0 10px #00ffcc";

    }, 250);

  }, 800);

}

// ======================================
// ⏰ HORARIOS
// ======================================

function revisarHorarios(diferencia) {

  let minutos =
    Math.floor(diferencia / 60);

  // 🌸 1 HORA
  if (minutos <= 60 && !ya1Hora) {

    ya1Hora = true;

    avisoEspecial(
      "🌸 FALTA 1 HORA 🌸<br><br>" +
      "🎨 Los nuevos dibujos están por llegar"
    );

  }

  // 🔥 30 MIN
  if (minutos <= 30 && !ya30Min) {

    ya30Min = true;

    avisoEspecial(
      "🔥 SOLO FALTAN 30 MINUTOS 🔥"
    );

  }

  // 💥 10 MIN
  if (minutos <= 10 && !ya10Min) {

    ya10Min = true;

    avisoEspecial(
      "💥 ÚLTIMOS 10 MINUTOS 💥"
    );

  }

}

// ======================================
// 📦 AVISO
// ======================================

function avisoEspecial(texto) {

  let box =
    document.createElement("div");

  box.innerHTML = texto;

  estiloCaja(box, "#ff4d88");

  box.style.fontSize =
    "25px";

  document.body.appendChild(box);

  setTimeout(() => {

    box.remove();

  }, 5000);

}

// ======================================
// 💖 MENSAJE
// ======================================

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

// ======================================
// 🖼️ IMÁGENES
// ======================================

function agregarImagenes() {

  // 💖 IZQUIERDA
  let img1 =
    document.createElement("img");

  img1.src =
    "img/amiga.jpg";

  img1.style =
  `
  width:220px;
  position:fixed;
  left:25px;
  bottom:25px;
  border-radius:20px;
  box-shadow:0 0 20px #ff4d88;
  z-index:999;
  animation:flotar 3s infinite;
  `;

  document.body.appendChild(img1);

  // 💖 DERECHA
  let img2 =
    document.createElement("img");

  img2.src =
    "img/amiga2.jpg";

  img2.style =
  `
  width:220px;
  position:fixed;
  right:25px;
  bottom:25px;
  border-radius:20px;
  box-shadow:0 0 20px #00ffcc;
  z-index:999;
  animation:flotar 3s infinite;
  `;

  document.body.appendChild(img2);

}

// ======================================
// 💖 ROCY
// ======================================

function mostrarRocy() {

  let box =
    document.createElement("div");

  box.innerHTML = `
  💖 ROCY 💖<br><br>

  Gracias por siempre apoyarme 🌸<br>
  Eres como una segunda mamá 💖<br><br>

  <img src="img/fami.jpg"
  style="
  width:100%;
  border-radius:15px;
  margin-top:10px;
  ">
  `;

  estiloCaja(box, "#ff4d88");

  document.body.appendChild(box);

  setTimeout(() => {

    box.remove();

  }, 7000);

}

// ======================================
// 🔥 ULISES
// ======================================

function mostrarUlises() {

  let box =
    document.createElement("div");

  box.innerHTML = `
  🔥 ULISES 🔥<br><br>

  Gracias por todo carnal 👊<br><br>

  <img src="img/ulices.jpg"
  style="
  width:100%;
  border-radius:15px;
  margin-top:10px;
  ">
  `;

  estiloCaja(box, "#00ffcc");

  document.body.appendChild(box);

  setTimeout(() => {

    box.remove();

  }, 7000);

}

// ======================================
// ⏳ CASI
// ======================================

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

// ======================================
// 🔐 EVENTO
// ======================================

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

// ======================================
// 💖 EASTER MAMA
// ======================================

function easterMama() {

  let hoy =
    new Date();

  let dia =
    hoy.getDate();

  let mes =
    hoy.getMonth() + 1;

  if (dia == 10 && mes == 5) {

    let suerte =
      Math.random();

    let box =
      document.createElement("div");

    if (suerte <= 0.20) {

      let dibujos =
        Math.floor(Math.random() * 3) + 3;

      box.innerHTML = `
      🎉 FELICIDADES 🎉<br><br>
      🎨 Ganaste ${dibujos} dibujos gratis
      `;

      estiloCaja(box, "#00ffcc");

    } else {

      box.innerHTML = `
      💐 Gracias por participar 💐<br><br>
      👀 Sigue intentando
      `;

      estiloCaja(box, "#ff4d88");

    }

    document.body.appendChild(box);

    setTimeout(() => {

      box.remove();

    }, 5000);

  }

}

// ======================================
// 🎉 EVENTO FINAL
// ======================================

function activarEvento() {

  // 💥 FLASH
  document.body.style.transition =
    "0.3s";

  document.body.style.filter =
    "brightness(3)";

  setTimeout(() => {

    document.body.style.filter =
      "brightness(1)";

  }, 300);

  // 🌈 FONDO
  document.body.style.background =
    "linear-gradient(45deg,#ff4d88,#00b894,#0984e3)";

  // 🎊 PARTICULAS
  for (let i = 0; i < 100; i++) {

    let p =
      document.createElement("div");

    p.innerHTML =
      Math.random() > 0.5
      ? "🎉"
      : "💖";

    p.style =
    `
    position:fixed;
    left:${Math.random()*100}%;
    top:${Math.random()*100}%;
    font-size:25px;
    z-index:99999;
    pointer-events:none;
    `;

    document.body.appendChild(p);

    setTimeout(() => {

      p.remove();

    }, 4000);

  }

  // 🎉 TEXTO
  let texto =
    document.createElement("div");

  texto.style =
  `
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  color:white;
  font-size:2.3em;
  font-weight:bold;
  text-align:center;
  text-shadow:0 0 25px #00ffcc;
  z-index:99999;
  animation:zoom 1s infinite alternate;
  `;

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

  // 🔓 BOTON
  let link =
    document.getElementById("linkEvento");

  link.classList.remove("bloqueado");

  link.classList.add("activo");

}

// ======================================
// 💖 ESTILO CAJAS
// ======================================

function estiloCaja(box, color) {

  box.style =
  `
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  background:rgba(0,0,0,0.93);
  color:${color};
  padding:25px;
  border-radius:20px;
  box-shadow:0 0 25px ${color};
  z-index:999999;
  text-align:center;
  max-width:320px;
  font-size:20px;
  `;

}

// ======================================
// 💖 MARCO
// ======================================

function crearMarco() {

  let marco =
    document.createElement("div");

  marco.style =
  `
  position:fixed;
  top:10px;
  left:10px;
  right:10px;
  bottom:10px;
  border:4px solid #ffb6c1;
  border-radius:25px;
  pointer-events:none;
  z-index:9999;
  box-shadow:0 0 20px #ff4d88;
  animation:brillo 2s infinite alternate;
  `;

  document.body.appendChild(marco);

}

// ======================================
// ✨ PARTICULAS
// ======================================

function particulas() {

  setInterval(() => {

    let p =
      document.createElement("div");

    p.innerHTML =
      Math.random() > 0.5
      ? "💖"
      : "✨";

    p.style =
    `
    position:fixed;
    left:${Math.random()*100}%;
    top:-20px;
    font-size:20px;
    opacity:0.7;
    z-index:1;
    pointer-events:none;
    transition:5s linear;
    `;

    document.body.appendChild(p);

    setTimeout(() => {

      p.style.top =
        "110%";

    }, 50);

    setTimeout(() => {

      p.remove();

    }, 5000);

  }, 400);

}

// ======================================
// 💬 MENSAJES RANDOM
// ======================================

function mensajesRandom() {

  let frases = [

    "💖 Gracias por visitar mi página",

    "🎨 Nuevos dibujos mañana",

    "⏳ El evento está cerca",

    "🌸 Feliz Día de las Madres"

  ];

  let texto =
    document.getElementById("randomMsg");

  if (!texto) return;

  let i = 0;

  texto.innerHTML =
    frases[0];

  setInterval(() => {

    i++;

    if (i >= frases.length) {
      i = 0;
    }

    texto.style.opacity =
      "0";

    setTimeout(() => {

      texto.innerHTML =
        frases[i];

      texto.style.opacity =
        "1";

    }, 300);

  }, 4000);

}

// ======================================
// ✨ CURSOR
// ======================================

function efectosCursor() {

  document.addEventListener("mousemove", (e) => {

    let star =
      document.createElement("div");

    star.innerHTML =
      "✨";

    star.style =
    `
    position:fixed;
    left:${e.clientX}px;
    top:${e.clientY}px;
    pointer-events:none;
    font-size:14px;
    z-index:99999;
    `;

    document.body.appendChild(star);

    setTimeout(() => {

      star.style.transition =
        "1s";

      star.style.opacity =
        "0";

      star.style.transform =
        "translateY(-20px)";

    }, 10);

    setTimeout(() => {

      star.remove();

    }, 1000);

  });

}

// ======================================
// 🎨 CSS EXTRA
// ======================================

let style =
  document.createElement("style");

style.innerHTML = `

@keyframes flotar {

  0%{
    transform:translateY(0px);
  }

  50%{
    transform:translateY(-10px);
  }

  100%{
    transform:translateY(0px);
  }

}

@keyframes brillo {

  from{
    box-shadow:0 0 10px #ff4d88;
  }

  to{
    box-shadow:0 0 25px #00ffcc;
  }

}

@keyframes zoom {

  from{
    transform:translate(-50%,-50%) scale(1);
  }

  to{
    transform:translate(-50%,-50%) scale(1.08);
  }

}

`;

document.head.appendChild(style);

// ======================================
// 🎉 EVENTO FINAL
// ======================================

function activarEvento() {

  // 💥 FLASH
  document.body.style.transition =
    "0.3s";

  document.body.style.filter =
    "brightness(3)";

  setTimeout(() => {

    document.body.style.filter =
      "brightness(1)";

  }, 300);

  // 🌈 FONDO
  document.body.style.background =
    "linear-gradient(45deg,#ff4d88,#00b894,#0984e3)";

  // 🎊 PARTICULAS
  for (let i = 0; i < 120; i++) {

    let p =
      document.createElement("div");

    p.innerHTML =
      Math.random() > 0.5
      ? "🎉"
      : "💖";

    p.style =
    `
    position:fixed;
    left:${Math.random()*100}%;
    top:${Math.random()*100}%;
    font-size:25px;
    z-index:99999;
    pointer-events:none;
    animation:flotar 2s infinite;
    `;

    document.body.appendChild(p);

    setTimeout(() => {

      p.remove();

    }, 5000);

  }

  // ======================================
  // 🎉 PANTALLA DE ESTRENO
  // ======================================

  let pantalla =
    document.createElement("div");

  pantalla.innerHTML =
    `
    <div style="
      text-align:center;
    ">

      🎉 EVENTO ESTRENADO 🎉

      <br><br>

      <span style="
      font-size:0.5em;
      color:#00ffcc;
      ">
      💐 Gracias por esperar 💖
      </span>

    </div>
    `;

  pantalla.style =
  `
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:
    linear-gradient(
      45deg,
      #000000,
      #1e1e2f
    );

  display:flex;
  justify-content:center;
  align-items:center;

  font-size:3em;

  color:white;

  z-index:999999;

  text-shadow:
    0 0 20px #ff4d88,
    0 0 40px #00ffcc;

  animation:
    aparecer 1s ease;
  `;

  document.body.appendChild(pantalla);

  // ⏳ QUITAR PANTALLA
  setTimeout(() => {

    pantalla.remove();

  }, 5000);

  // 🔓 BOTON
  let link =
    document.getElementById("linkEvento");

  link.classList.remove("bloqueado");

  link.classList.add("activo");

  // ⏳ TEXTO
  let contador =
    document.getElementById("contador");

  contador.innerHTML =
    "🎉 EVENTO DISPONIBLE 🎉";

  contador.style.color =
    "#ffffff";

  contador.style.textShadow =
    "0 0 25px #00ffcc";

  // ======================================
  // 👀 PISTA SIGUIENTE EVENTO
  // ======================================

  setTimeout(() => {

    avisoEspecial(
      "👀 La próxima actualización ya comenzó..."
    );

  }, 10000);

}
// ======================================
// 🌸 ANIMACIÓN ESPECIAL DE ESTRENO
// ======================================

function animacionEstreno() {

  // 💐 TEXTO GIGANTE
  let intro =
    document.createElement("div");

  intro.innerHTML =
  `
  <div style="
    text-align:center;
  ">

    💐 MAÑANA SE ESTRENA 💐

    <br><br>

    <span style="
      font-size:0.45em;
      color:#00ffcc;
    ">

      🎨 Nuevos dibujos y sorpresas

    </span>

  </div>
  `;

  intro.style =
  `
  position:fixed;

  top:0;
  left:0;

  width:100%;
  height:100%;

  background:
    radial-gradient(
      circle,
      rgba(20,20,35,0.95),
      black
    );

  display:flex;

  justify-content:center;
  align-items:center;

  color:white;

  font-size:3em;

  z-index:999999;

  text-shadow:
    0 0 20px #ff4d88,
    0 0 40px #00ffcc;

  animation:
    introZoom 4s ease forwards;
  `;

  document.body.appendChild(intro);

  // ✨ CORAZONES
  for (let i = 0; i < 40; i++) {

    let heart =
      document.createElement("div");

    heart.innerHTML =
      Math.random() > 0.5
      ? "💖"
      : "✨";

    heart.style =
    `
    position:fixed;

    left:${Math.random()*100}%;

    top:110%;

    font-size:${20 + Math.random()*20}px;

    z-index:999999;

    pointer-events:none;

    animation:
      subir ${4 + Math.random()*3}s linear forwards;
    `;

    document.body.appendChild(heart);

    setTimeout(() => {

      heart.remove();

    }, 7000);

  }

  // ⏳ DESAPARECER
  setTimeout(() => {

    intro.style.opacity =
      "0";

    setTimeout(() => {

      intro.remove();

    }, 1000);

  }, 5000);

}