let tiempo = 0;
let intervalo = null;

function iniciarCuenta(){
    if(intervalo) return;

    let dias = parseInt(prompt("dias: ")) || 0;
    let horas = parseInt(prompt("Horas:")) || 0;
    let minutos = parseInt(prompt("Minutos:")) || 0;
    let segundos = parseInt(prompt("Segundos:")) || 0

    let objetivo = new Date();
    objetivo.setDate(objetivo.getDate() + 6);

    intervalo = setInterval(() =>{
        let ahora = new Date();
        let diferencia = Math.floor((objetivo - ahora) / 1000);

        if(diferencia <= 0){
            clearInterval(intervalo);
            document.getElementById("contador").textContent = "00d 00h 00m 00s";
            alert("evento activo");
            return;
        }
        actualicar(diferencia);
    }, 1000);
}
function actualicar(tiempo){
    let d = Math.floor(tiempo / 86400);
    let h = Math.floor((tiempo % 86400) / 3600);
    let m = Math.floor((tiempo % 3600) / 60);
    let s = tiempo % 60;

    document.getElementById("contador").textContent = 
        `${String(d).padStart(2, "0")}d ` +
        `${String(h).padStart(2, "0")}h ` +
        `${String(m).padStart(2, "0")}m ` +
        `${String(s).padStart(2, "0")}s`;
}
window.onload = () =>{
    iniciarCuenta();
}