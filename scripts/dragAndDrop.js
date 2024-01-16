window.onload = function () {
    var tds = document.querySelectorAll('td');

    tds.forEach(function (item) {
        item.addEventListener('dragover', gestionarSobreDrag, false);
        item.addEventListener('drop', gestionarDrop, false);
    });

    var imatges = document.querySelectorAll('img');

    imatges.forEach(function (item) {
        item.addEventListener('dragstart', gestionarIniciDrag, false);
    });

    function gestionarSobreDrag(ev) {
        ev.preventDefault();
    }

    function gestionarIniciDrag(ev) {
        ev.dataTransfer.setData("imatge", ev.target.id);
        ev.target.style.opacity = '0.5';
    }

    function gestionarDrop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("imatge");
        if (this.childNodes.length < 1) {
            var clonedImage = document.getElementById(data).cloneNode(true);
            this.appendChild(clonedImage);

            var originalImage = document.getElementById(data);
            if (originalImage.parentNode) {
                originalImage.parentNode.removeChild(originalImage);
            }
        }
        document.getElementById(data).style.opacity = '1';
    }
};
