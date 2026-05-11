// ======================================
// 🎉 CUENTA REGRESIVA ANIVERSARIO
// ======================================

const FECHA_ANIVERSARIO =
new Date("2026-05-16T20:00:00");

let intervaloAniversario;

// ======================================
// 🚀 INICIO
// ======================================

window.onload = () => {

  iniciarCuentaAniversario();

  crearMarcoAniversario();

  particulasAniversario();

  mensajesAniversario();

  efectosCursor();

  agregarImagenes();

  activarLlaveSecreta();

};

// ======================================
// ⏳ CONTADOR
// ======================================

function iniciarCuentaAniversario() {

  let contador =
    document.getElementById("contador");

  intervaloAniversario =
  setInterval(() => {

    let ahora =
      new Date();

    let diferencia =
      Math.floor(
        (FECHA_ANIVERSARIO - ahora) / 1000
      );

    // 🎉 EVENTO
    if (diferencia <= 0) {

      clearInterval(intervaloAniversario);

      activarAniversario();

      return;

    }

    let d =
      Math.floor(diferencia / 86400);

    let h =
      Math.floor(
        (diferencia % 86400) / 3600
      );

    let m =
      Math.floor(
        (diferencia % 3600) / 60
      );

    let s =
      diferencia % 60;

    contador.innerHTML =
      `🎉 ${d}d ${h}h ${m}m ${s}s`;

    // 💓 LATIDO
    contador.style.transform =
      "scale(1.08)";

    setTimeout(() => {

      contador.style.transform =
        "scale(1)";

    }, 400);

  }, 1000);

}

// ======================================
// 🎉 ACTIVAR EVENTO
// ======================================

function activarAniversario() {

  // 🌈 FONDO
  document.body.style.background =
  `
  linear-gradient(
    45deg,
    #0f2027,
    #203a43,
    #2c5364
  )
  `;

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

  // 🎉 PANTALLA
  let pantalla =
    document.createElement("div");

  pantalla.innerHTML =
  `
  <div style="text-align:center;">

    🎉 ANIVERSARIO 🎉

    <br><br>

    <span style="
      font-size:0.45em;
      color:#74b9ff;
    ">

      💖 Gracias por acompañarme
      desde el inicio

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

  display:flex;
  justify-content:center;
  align-items:center;

  background:
    rgba(0,0,0,0.95);

  color:white;

  font-size:3em;

  z-index:999999;

  text-shadow:
    0 0 20px #74b9ff;

  animation:
    aparecer 1s ease;
  `;

  document.body.appendChild(pantalla);

  // 💬 MENSAJE EXTRA
  setTimeout(() => {

    let extra =
      document.createElement("div");

    extra.innerHTML =
    `
    👀 Gracias por todo el apoyo

    <br><br>

    🎨 Nuevos dibujos disponibles
    `;

    extra.style =
    `
    position:fixed;
    bottom:30px;
    left:50%;
    transform:translateX(-50%);
    background:black;
    color:white;
    padding:20px;
    border-radius:20px;
    box-shadow:0 0 20px #74b9ff;
    z-index:999999;
    text-align:center;
    `;

    document.body.appendChild(extra);

  }, 3000);

  // 🔓 BOTON
  let link =
    document.getElementById("linkEvento");

  if (link) {

    link.classList.remove("bloqueado");

    link.classList.add("activo");

  }

  // ⏳ REDIRIGIR
  setTimeout(() => {

    window.location.href =
      "tienda.html";

  }, 15000);

}

// ======================================
// 🔐 LLAVE
// ======================================

function activarLlaveSecreta() {

  let clave = "";

  document.addEventListener("keydown", (e) => {

    clave +=
      e.key.toLowerCase();

    if (clave.includes("aniversario")) {

      mensajeDesarrollo();

      clave = "";

    }

    if (clave.length > 20) {

      clave = "";

    }

  });

}

// ======================================
// 💬 MENSAJE DESARROLLO
// ======================================

function mensajeDesarrollo() {

  let box =
    document.createElement("div");

  box.innerHTML =
  `
  💖 Gracias por acompañarme
  desde las primeras versiones
  de la página.

  <br><br>

  👀 Todo empezó como un pequeño
  proyecto y ahora ya llegó
  el aniversario.
  `;

  box.style =
  `
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  background:rgba(0,0,0,0.95);
  color:white;
  padding:25px;
  border-radius:20px;
  box-shadow:0 0 20px #74b9ff;
  z-index:999999;
  text-align:center;
  max-width:320px;
  `;

  document.body.appendChild(box);

  setTimeout(() => {

    box.remove();

  }, 7000);

}

// ======================================
// 💖 MARCO
// ======================================

function crearMarcoAniversario() {

  let marco =
    document.createElement("div");

  marco.style =
  `
  position:fixed;
  top:10px;
  left:10px;
  right:10px;
  bottom:10px;
  border:4px solid #74b9ff;
  border-radius:25px;
  pointer-events:none;
  z-index:9999;
  box-shadow:0 0 20px #74b9ff;
  animation:brillo 2s infinite alternate;
  `;

  document.body.appendChild(marco);

}

// ======================================
// ✨ PARTICULAS
// ======================================

function particulasAniversario() {

  setInterval(() => {

    let p =
      document.createElement("div");

    p.innerHTML =
      Math.random() > 0.5
      ? "✨"
      : "💙";

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

  }, 350);

}

// ======================================
// 💬 MENSAJES
// ======================================

function mensajesAniversario() {

  let frases = [

    "🎉 Gracias por seguir aquí",

    "💖 Un año más de dibujos",

    "✨ El aniversario se acerca",

    "🎨 Gracias por apoyar mi página",

    "👀 Algo especial llegará pronto"

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
// 🖼️ IMAGENES
// ======================================

function agregarImagenes() {

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
  box-shadow:0 0 20px #74b9ff;
  animation:flotar 3s infinite;
  `;

  document.body.appendChild(img1);

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
  box-shadow:0 0 20px #ffffff;
  animation:flotar 3s infinite;
  `;

  document.body.appendChild(img2);

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
    box-shadow:0 0 10px #74b9ff;
  }

  to{
    box-shadow:0 0 25px #ffffff;
  }

}

@keyframes aparecer {

  from{
    opacity:0;
    transform:scale(1.2);
  }

  to{
    opacity:1;
    transform:scale(1);
  }

}

`;

document.head.appendChild(style);

// ======================================
// 👀 GLITCH ALEATORIO
// ======================================

function glitchAleatorio() {

  let mensajes = [

    "ERROR_404.tmp",
    "restaurando_evento...",
    "cargando_recuerdos...",
    "fase_1_detectada",
    "evento_corrupto?",
    "🎨 recuperando archivos...",
    "💖 cargando aniversario..."

  ];

  setInterval(() => {

    // 🎲 PROBABILIDAD
    let probabilidad =
      Math.random();

    // 👀 SOLO A VECES
    if (probabilidad > 0.20) return;

    // ======================================
    // 📦 CAJA GLITCH
    // ======================================

    let glitch =
      document.createElement("div");

    glitch.innerHTML =
      mensajes[
        Math.floor(
          Math.random() * mensajes.length
        )
      ];

    glitch.style =
    `
    position:fixed;

    top:${Math.random()*80}%;

    left:${Math.random()*70}%;

    background:black;

    color:#00ffcc;

    padding:15px 20px;

    border-radius:10px;

    font-size:20px;

    font-family:monospace;

    z-index:999999;

    box-shadow:
      0 0 20px #00ffcc;

    animation:
      glitchAnim 0.1s infinite;
    `;

    document.body.appendChild(glitch);

    // ======================================
    // ⚡ EFECTO PANTALLA
    // ======================================

    document.body.style.transition =
      "0.1s";

    document.body.style.filter =
      "contrast(1.5) hue-rotate(40deg)";

    let contador =
      document.getElementById("contador");

    if (contador) {

      contador.style.transform =
        "translateX(5px)";

    }

    // ======================================
    // ❌ QUITAR
    // ======================================

    setTimeout(() => {

      glitch.remove();

      document.body.style.filter =
        "none";

      if (contador) {

        contador.style.transform =
          "translateX(0px)";

      }

    }, 700);

  }, 7000);

}

// ======================================
// 🚀 ACTIVAR
// ======================================

// AGREGA ESTO EN window.onload

glitchAleatorio();

// ======================================
// 🎨 CSS EXTRA
// ======================================

let glitchStyle =
document.createElement("style");

glitchStyle.innerHTML = `

@keyframes glitchAnim {

  0%{
    transform:translate(0px);
    opacity:1;
  }

  25%{
    transform:translate(-3px,2px);
  }

  50%{
    transform:translate(3px,-2px);
    opacity:0.8;
  }

  75%{
    transform:translate(-2px,-2px);
  }

  100%{
    transform:translate(0px);
    opacity:1;
  }

}

`;

document.head.appendChild(glitchStyle);