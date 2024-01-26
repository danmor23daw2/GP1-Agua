window.onload = function () {

        const modoOscuroI = document.getElementById('modo-oscuro');
    
        modoOscuroI.addEventListener('click', function() {
            document.body.classList.toggle('modoOscuro');
            const esModoOscuro = document.body.classList.contains('modoOscuro');
            localStorage.setItem('Oscuro', esModoOscuro);
            actualizarImagenModoOscuro(modoOscuroI, esModoOscuro);
        });
    
        const esModoOscuroGuardar = localStorage.getItem('Oscuro');
        if (esModoOscuroGuardar === 'true') {
            document.body.classList.add('modoOscuro');
            actualizarImagenModoOscuro(modoOscuroI, true);
        }

    
    function actualizarImagenModoOscuro(elemento, esModoOscuro) {
        if (esModoOscuro) {
            elemento.src = 'img/on.png';
        } else {
            elemento.src = 'img/offf.png';
        }
    }
    

};
