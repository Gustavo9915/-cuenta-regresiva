// ======================================
// 🇲🇽 UPDATE INDEPENDENCIA 2026
// ======================================

const FECHA_EVENTO = new Date("2026-09-16T00:00:00");

// ======================================
// 🚀 INICIO
// ======================================

window.onload = () => {

    iniciarContador();

    mensajesRandom();

    particulasMexico();

    efectoCursor();

    clickSecretos();

    cartaEspecial();

    botonSecreto();

};

// ======================================
// ⏳ CUENTA REGRESIVA
// ======================================

function iniciarContador(){

    const contador = document.getElementById("contador");

    if(!contador) return;

    let evento = false;

    function actualizar(){

        const ahora = new Date();
        const tiempo = FECHA_EVENTO - ahora;

        if(tiempo <= 0){

            if(!evento){

                evento = true;

                contador.innerHTML = `
                    <span style="font-size:40px;">🎆</span><br>
                    ¡YA DISPONIBLE!
                `;

                contador.style.animation =
                "latidoFuerte .7s infinite";

                activarEvento();
                desbloquearEvento();

            }

            return;

        }

        const dias = Math.floor(tiempo / 86400000);

        const horas = Math.floor((tiempo % 86400000) / 3600000);

        const minutos = Math.floor((tiempo % 3600000) / 60000);

        const segundos = Math.floor((tiempo % 60000) / 1000);

        contador.innerHTML = `

        <div class="contador-grid">

            <div class="tiempo">
                <span>${dias}</span>
                <small>DÍAS</small>
            </div>

            <div class="tiempo">
                <span>${String(horas).padStart(2,"0")}</span>
                <small>HORAS</small>
            </div>

            <div class="tiempo">
                <span>${String(minutos).padStart(2,"0")}</span>
                <small>MIN</small>
            </div>

            <div class="tiempo">
                <span>${String(segundos).padStart(2,"0")}</span>
                <small>SEG</small>
            </div>

        </div>

        `;

        if(dias <= 7){

            contador.style.animation =
            "latidoFuerte .8s infinite";

        }

    }

    actualizar();

    setInterval(actualizar,1000);

}

// ======================================
// 👨‍💻 PANEL DEL DESARROLLADOR
// ======================================

function panelDev() {

    const panel = document.createElement("div");

    panel.id = "panelDev";

    panel.style = `
        position:fixed;
        bottom:20px;
        right:20px;

        width:280px;

        background:rgba(0,0,0,.88);

        border:2px solid #00ff66;

        border-radius:15px;

        padding:15px;

        color:white;

        font-family:monospace;

        font-size:14px;

        z-index:999999;

        box-shadow:
        0 0 20px #00ff66;

        user-select:none;

        transition:.3s;
    `;

    document.body.appendChild(panel);

    let archivos = 1842;
    let imagenes = 426;
    let noticias = 18;
    let cafes = 0;

    function actualizar() {

        const tiempo =
        FECHA_EVENTO - new Date();

        const dias =
        Math.max(
            0,
            Math.floor(
                tiempo / 86400000
            )
        );

        archivos +=
        Math.floor(
            Math.random()*2
        );

        imagenes +=
        Math.random()>.7 ? 1 : 0;

        cafes +=
        Math.random()>.6 ? 1 : 0;

        panel.innerHTML = `

<b style="font-size:18px;color:#00ff66;">
👨‍💻 DEV PANEL
</b>

<hr>

🟢 Estado
Online

<br><br>

🌐 Versión
2.4.0

<br><br>

🚀 Desarrollo
35%

<br><br>

🎨 Calidad
98%

<br><br>

📂 Archivos
${archivos}

<br><br>

🖼️ Imágenes
${imagenes}

<br><br>

📰 Noticias
${noticias}

<br><br>

☕ Cafés
${cafes}

<br><br>

🐞 Bugs
0

<br><br>

⏳ Faltan
${dias} días

<br><br>

🇲🇽 Próxima Update

16 Septiembre

        `;

    }

    actualizar();

    setInterval(actualizar,5000);

}

panelDev();