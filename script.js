function verificarPassword() {
    const input = document.getElementById('passwordInput');
    const pass = input.value.toLowerCase().trim();

    if (pass === "javidad") {
        document.getElementById('pantalla-1').classList.remove('active');
        document.getElementById('pantalla-2').classList.add('active');
    } else {
        alert("Clave incorrecta. Pista: Es el nombre de la navidad de la javi");
        input.value = "";
    }
}

function mostrarFinal() {
    document.getElementById('pantalla-2').classList.remove('active');
    document.getElementById('pantalla-final').classList.add('active');
    
    const audio = document.getElementById('musica');
    audio.play();
}

function toggleAudio() {
    const audio = document.getElementById('musica');
    const btn = document.getElementById('btn-control-audio');

    if (audio.paused) {
        audio.play();
        btn.innerText = "Pausar Música";
    } else {
        audio.pause();
        btn.innerText = "Reproducir Música";
    }
}