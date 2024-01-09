window.onload = function () {
    const puntos = [
        { x: 490, y: 1900, video: 'img/camporegado.mp4', texto: 'Campo de futbol siendo regado lloviendo', enlace: 'info1.html' },
        { x: 1060, y: 1680, video: 'img/campogolf.mp4', texto: 'Información del segundo punto.', enlace: 'info2.html' },
        { x: 860, y: 1750, video: 'img/CompeticionAcuatica.mp4', texto: 'Información del tercer punto.', enlace: 'info3.html' },
        { x: 860, y: 1920, video: 'img/r1.mp4', texto: 'Información del cuarto punto.', enlace: 'info4.html' },
        { x: 720, y: 2040, video: 'img/r2.mp4', texto: 'Información del quinto punto.', enlace: 'info5.html' },
    ];

    const mapa = document.getElementById('mapa');
    const popup = document.getElementById('popup');
    const videoElement = document.getElementById('videoPopup');
    const textoElement = document.getElementById('textoPopup');
    const infoPopupBtn = document.getElementById('infoPopup');
    const cerrarPopupBtn = document.getElementById('cerrarPopup');

    puntos.forEach(punto => {
        const marcador = document.createElement('div');
        marcador.className = 'marcador';
        marcador.style.left = punto.x + 'px';
        marcador.style.top = punto.y + 'px';

        marcador.addEventListener('click', function () {
            mostrarPopup(punto);
        });

        mapa.appendChild(marcador);
    });

    function mostrarPopup(infoPunto) {
        videoElement.src = infoPunto.video;
        textoElement.textContent = infoPunto.texto;
        infoPopupBtn.href = infoPunto.enlace;
        popup.classList.remove('oculto');
    }

    cerrarPopupBtn.addEventListener('click', function () {
        popup.classList.add('oculto');
    });
};