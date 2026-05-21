// ======================================
// 🎂 FECHA DEL CUMPLE
// ======================================

const FECHA_CUMPLE =
  new Date("2026-05-22T00:00:00");

// ======================================
// 🚀 INICIO
// ======================================

window.onload = () => {

  iniciarContador();

  mensajesRandom();

  particulasCumple();

  efectoCursor();

  clickSecretos();
  cartaEspecial();

};

// ======================================
// ⏳ CONTADOR
// ======================================

function iniciarContador() {

  const contador =
    document.getElementById("contador");

  if (!contador) return;

  let eventoActivado = false;

  setInterval(() => {

    const ahora =
      new Date().getTime();

    const objetivo =
      FECHA_CUMPLE.getTime();

    const diferencia =
      objetivo - ahora;

    // ======================================
    // 🎉 EVENTO FINAL
    // ======================================

    if (
      diferencia <= 0 &&
      !eventoActivado
    ) {

      eventoActivado = true;

      contador.innerHTML =
        "🎂 FELIZ CUMPLEAÑOS 🎂";

      activarEvento();

      return;

    }

    // ======================================
    // ⏳ CALCULO
    // ======================================

    const dias =
      Math.floor(
        diferencia /
        (1000 * 60 * 60 * 24)
      );

    const horas =
      Math.floor(
        (
          diferencia %
          (1000 * 60 * 60 * 24)
        ) /
        (1000 * 60 * 60)
      );

    const minutos =
      Math.floor(
        (
          diferencia %
          (1000 * 60 * 60)
        ) /
        (1000 * 60)
      );

    const segundos =
      Math.floor(
        (
          diferencia %
          (1000 * 60)
        ) / 1000
      );

    // ======================================
    // 🎂 MOSTRAR
    // ======================================

    contador.innerHTML =
    `
    🎂 ${dias}d
    ${horas}h
    ${minutos}m
    ${segundos}s
    `;

  }, 1000);

}

// ======================================
// 🎉 EVENTO FINAL
// ======================================

function activarEvento() {

  // 🌈 CAMBIAR FONDO
  document.body.style.background =
  `
  linear-gradient(
    135deg,
    #ff9a9e,
    #fad0c4,
    #fbc2eb
  )
  `;

  // 🎈 PARTICULAS
  for (let i = 0; i < 120; i++) {

    const p =
      document.createElement("div");

    const emojis = [

      "🎂",
      "🎉",
      "💖",
      "✨",
      "🎈"

    ];

    p.innerHTML =
      emojis[
        Math.floor(
          Math.random() *
          emojis.length
        )
      ];

    p.style =
    `
    position:fixed;

    left:${Math.random()*100}%;

    top:${Math.random()*100}%;

    font-size:30px;

    z-index:999999;

    pointer-events:none;

    animation:
      flotar 2s infinite;
    `;

    document.body.appendChild(p);

    setTimeout(() => {

      p.remove();

    }, 5000);

  }

  // ======================================
  // 💖 MENSAJE PRINCIPAL
  // ======================================

  const pantalla =
    document.createElement("div");

  pantalla.innerHTML =
  `
  <div style="text-align:center;">

    <div style="
      font-size:1.3em;
      margin-bottom:20px;
      animation:latido 2s infinite;
    ">
      🎂 FELIZ CUMPLEAÑOS 🎂
    </div>

    <div style="
      font-size:0.42em;
      line-height:1.8;
      max-width:700px;
      margin:auto;
      color:#ffd6f6;
    ">

      💖 Hoy es un día muy especial
      porque hoy cumple años
      una persona increíble ✨

      <br><br>

      Gracias por cada risa,
      cada momento bonito
      y por siempre iluminar
      todo con tu presencia 🎈

      <br><br>

      Espero que tengas
      un día lleno de felicidad,
      regalos, abrazos
      y muchas sonrisas 🎁

      <br><br>

      💖 Feliz cumpleaños 💖

    </div>

  </div>
  `;

  pantalla.style =
  `
  position:fixed;

  inset:0;

  background:
    rgba(0,0,0,0.92);

  display:flex;

  justify-content:center;

  align-items:center;

  text-align:center;

  color:white;

  font-size:3em;

  padding:30px;

  z-index:999999;

  text-shadow:
    0 0 20px white;

  animation:
    aparecer 1s ease;
  `;

  document.body.appendChild(
    pantalla
  );

}

// ======================================
// 💬 MENSAJES RANDOM
// ======================================

function mensajesRandom() {

  const frases = [

    "🎂 Ya casi comienza el cumpleaños",

    "💖 Preparando sorpresa especial",

    "🎈 Faltan pocos momentos",

    "✨ Cuenta regresiva activada",

    "🎉 Evento especial cargando",

    "👀 Easter eggs escondidos",

    "💌 Mensajes secretos desbloqueables"

  ];

  const texto =
    document.getElementById(
      "randomMsg"
    );

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
// 🎈 PARTICULAS
// ======================================

function particulasCumple() {

  setInterval(() => {

    const p =
      document.createElement("div");

    const emojis = [

      "✨",
      "💖",
      "🎈",
      "🎂"

    ];

    p.innerHTML =
      emojis[
        Math.floor(
          Math.random() *
          emojis.length
        )
      ];

    p.style =
    `
    position:fixed;

    left:${Math.random()*100}%;

    top:-20px;

    font-size:22px;

    opacity:0.8;

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

  }, 500);

}

// ======================================
// ✨ CURSOR
// ======================================

function efectoCursor() {

  document.addEventListener(
    "mousemove",
    (e) => {

      const star =
        document.createElement(
          "div"
        );

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

      document.body.appendChild(
        star
      );

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

    }

  );

}

// ======================================
// 👀 MENSAJES SECRETOS
// ======================================

function clickSecretos() {

  const mensajes = [

    "💖 Feliz cumpleaños",

    "🎂 Espero que sonrías mucho hoy",

    "✨ Eres increíble",

    "🎈 Mini sorpresa desbloqueada",

    "💌 Mensaje secreto encontrado",

    "👀 Gracias por existir",

    "🎁 Has encontrado un easter egg",

    "💖 Nunca olvides lo especial que eres"

  ];

  let bloqueado = false;

  document.addEventListener(
    "click",
    (e) => {

      if (bloqueado) return;

      bloqueado = true;

      const msg =
        document.createElement(
          "div"
        );

      msg.innerHTML =
        mensajes[
          Math.floor(
            Math.random() *
            mensajes.length
          )
        ];

      msg.style =
      `
      position:fixed;

      left:${e.clientX}px;

      top:${e.clientY}px;

      transform:
        translate(-50%,-50%);

      background:
        rgba(0,0,0,0.88);

      color:white;

      padding:14px 20px;

      border-radius:18px;

      font-size:17px;

      z-index:999999;

      pointer-events:none;

      backdrop-filter:blur(6px);

      box-shadow:
        0 0 15px #ff4d88,
        0 0 25px #00ffcc;

      animation:
        aparecerClick 0.4s ease;
      `;

      document.body.appendChild(
        msg
      );

      // ✨ DESAPARECER
      setTimeout(() => {

        msg.style.transition =
          "1.5s";

        msg.style.opacity =
          "0";

        msg.style.transform =
          "translate(-50%,-90px) scale(0.9)";

      }, 3000);

      // ❌ ELIMINAR
      setTimeout(() => {

        msg.remove();

      }, 4500);

      // ⏳ ESPERA
      setTimeout(() => {

        bloqueado = false;

      }, 1200);

    }

  );

}
// ======================================
// 💌 CARTA ESPECIAL
// ======================================

function cartaEspecial() {

  const btn =
    document.getElementById(
      "btnCarta"
    );

  if (!btn) return;

  btn.addEventListener(
    "click",

    () => {

      // 👀 evitar duplicados
      if (
        document.getElementById(
          "cartaPopup"
        )
      ) return;

      // ======================================
      // 📦 CARTA
      // ======================================

      const carta =
        document.createElement(
          "div"
        );

      carta.id =
        "cartaPopup";

      carta.innerHTML =
      `
      <div style="
        font-size:1.2em;
        margin-bottom:20px;
      ">

        💌 Feliz Cumpleaños 💌

      </div>

      <div style="
        font-size:0.5em;
        line-height:1.8;
      ">

        🎂 Espero que tengas
        un día increíble ✨

        <br><br>

        💖 Gracias por todos
        los momentos bonitos
        y por ser tan especial

        <br><br>

        🎈 Hoy todo esto
        fue hecho para ti

      </div>

      <br>

      <button id="cerrarCarta">

        Cerrar

      </button>
      `;

      carta.style =
      `
      position:fixed;

      top:50%;
      left:50%;

      transform:
        translate(-50%,-50%);

      background:
        rgba(0,0,0,0.92);

      color:white;

      padding:35px;

      border-radius:25px;

      text-align:center;

      z-index:999999;

      font-size:2em;

      max-width:600px;

      backdrop-filter:blur(8px);

      box-shadow:
        0 0 20px #ff4d88,
        0 0 35px white;

      animation:
        aparecer 0.7s ease;
      `;

      document.body.appendChild(
        carta
      );

      // ======================================
      // ❌ BOTON CERRAR
      // ======================================

      const cerrar =
        document.getElementById(
          "cerrarCarta"
        );

      cerrar.style =
      `
      margin-top:15px;

      padding:12px 20px;

      border:none;

      border-radius:15px;

      background:#ff4d88;

      color:white;

      cursor:pointer;

      font-size:18px;
      `;

      cerrar.addEventListener(
        "click",

        () => {

          carta.style.transition =
            "0.5s";

          carta.style.opacity =
            "0";

          carta.style.transform =
            "translate(-50%,-50%) scale(0.8)";

          setTimeout(() => {

            carta.remove();

          }, 500);

        }

      );

    }

  );

}
// ======================================
// 📅 DETECTAR HOY
// ======================================

const hoy =
  new Date();

const diaActual =
  hoy.getDate();

const mesActual =
  hoy.getMonth() + 1;

// 🎂 SI ES HOY
if (
  diaActual === 21 &&
  mesActual === 5
) {

  contador.style.animation =
    "latidoFuerte 0.55s infinite";

  contador.style.color =
    "#ffb6c1";

  contador.style.textShadow =
  `
  0 0 10px #ff4d88,
  0 0 25px white,
  0 0 45px #ff4d88
  `;

}