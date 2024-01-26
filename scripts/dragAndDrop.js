window.onload = function () {
    var tds = document.querySelectorAll('td');
    var cuadro = document.getElementById('tabla1');

    tds.forEach(function (item) {
        item.addEventListener('dragover', drag, false);
        item.addEventListener('drop', drop, false);
    });

    var imatges = document.querySelectorAll('img');

    imatges.forEach(function (item) {
        item.addEventListener('dragstart', IniciDrag, false);
    });

    var texto = [
        {
            title: 'Riego por Goteo',
            texto3: [
                'LA QUE MENOS GASTA',
                'Total uso - Al estar utilizando poca agua pero directo en el sitio indicado hace que sea mas eficiente'
                

            ]
        },
        {
            title: 'Aspersión',
            texto3: [
                'Constante - Al estar poniendo agua por todas las zonas que necesiten',
                'Barato - Instalar un regado por aspersion es bastante barato y eficiente pero con algunas perdidas de agua y dinero',
                'Distribucion variada - A veces no puede tener muy buena distribucion del agua y puede desperdiciarla'
            ]
        },
        {
            title: 'Micro Aspersión',
            texto3: [
                'Menos zona - Este metodo es casi igual que el de aspersion con la diferencia de que abarca una pequeña zona',
                'Mas facil - Puede se mas facil de instalar por que exiosten micro aspersores que son portables, no hace falta ponerlos bajo tierra',
                'Mas dinero y consumo - Al abarcar muy pequeña zona se gastaria mas dinero y agua.'
            ]
        },
        {
            title: 'Manguera ',
            texto3: [
                'LA QUE MÁS GASTA',
                'Tiempo - Este metodo no esta mal pero es el mas tedioso por que requiere de uso manual.',
                'Gente - Este metodo necesita mucha mas gente por qu euna sola persona no podria regar un campo entero en 1 dia'
            ]
        }
    ];

    function drag(ev) {
        ev.preventDefault();
    }

    function IniciDrag(ev) {
        ev.dataTransfer.setData("imatge", ev.target.id);
        ev.target.style.opacity = '0.5';
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("imatge");
        if (this.childNodes.length < 1) {
            var clonedImage = document.getElementById(data).cloneNode(true);
            this.appendChild(clonedImage);

            var originalImage = document.getElementById(data);
            if (originalImage.parentNode) {
                originalImage.parentNode.removeChild(originalImage);
            }

            if (cuadro.querySelectorAll('.ho').length === 4) {
                TextoFuera();
            }
        }
        document.getElementById(data).style.opacity = '1';
    }

    function TextoFuera() {
        var contenedorTextos = document.getElementById('contenedorTextos');

        if (!contenedorTextos) {
            contenedorTextos = document.createElement('div');
            contenedorTextos.id = 'contenedorTextos';
            contenedorTextos.style.display = 'flex';
            document.body.appendChild(contenedorTextos);

            texto.forEach(function (texto, index) {
                var article = document.createElement('div');
                article.classList.add('article');
                article.style.marginRight = '20px';
                var h1 = document.createElement('h1');
                h1.textContent = texto.title;
                article.appendChild(h1);

                var description = document.createElement('div');
                description.classList.add('description');

                texto.texto3.forEach(function (paragraphText) {
                    var p = document.createElement('p');
                    p.textContent = paragraphText;
                    description.appendChild(p);
                });

                article.appendChild(description);
                contenedorTextos.appendChild(article);
            });
        }
    }
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
