window.onload = function () {
    const puntos = [
        { x: 700, y: 1870, video: 'img/camporegado.mp4', texto: 'Campo de futbol siendo regado lloviendo', enlace: 'info1.html' },
        { x: 1120, y: 1910, video: 'img/campogolf.mp4', texto: 'Campo de golf siendo regado excesivamente', enlace: 'info2.html' },
        { x: 200, y: 2050, video: 'img/CompeticionAcuatica.mp4', texto: 'Contaminación por culpa de deportes de agua', enlace: 'info3.html' },
        { x: 1200, y: 2220, video: 'img/r1.mp4', texto: 'Funcion de un aspersor', enlace: 'info4.html' },
        { x: 400, y: 2200, video: 'img/bomboclat.mp4', texto: 'Como poder evitar el malgasto', enlace: 'info5.html' },
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

        let section = document.getElementById("section");
        let body = document.body;
    
        setTimeout(function () {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
    
            body.classList.remove("body-index"); 
    
            
        }, 500); 

        const modoOscuroI = document.getElementById('modo-oscuro');

        modoOscuroI.addEventListener('click', function() {
            document.body.classList.toggle('modoOscuro');
            const esModoOscuro = document.body.classList.contains('modoOscuro');
            localStorage.setItem('Oscuro', esModoOscuro);
            if (esModoOscuro) {
                modoOscuroI.src = 'img/on.png';
            } else {
                modoOscuroI.src = 'img/offf.png';
            }
        });
    
        const esModoOscuroGuardar = localStorage.getItem('Oscuro');
        if (esModoOscuroGuardar === 'true') {
            document.body.classList.add('modoOscuro');
        }

        
        
};