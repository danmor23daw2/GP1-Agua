
window.onload = function () {
    
    fetch('/lista_nombres')
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('nombresTable');
            data.forEach(name => {
                const row = table.insertRow();
                const cell = row.insertCell(0);
                cell.textContent = name.nom;
            });
        })

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
