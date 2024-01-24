window.onload = function () {

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
