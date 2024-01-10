window.onload = function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 400;

    var years = [2014, 2016, 2018, 2020, 2022, 2024];
    var cantidadFutbol = [100, 200, 240, 270, 350, 400];
    var cantidadGolf = [70, 140, 100, 140, 230, 340];

    var margin = 50;
    var maxY = Math.max(...cantidadFutbol, ...cantidadGolf);
    var minY = 0;
    var scaleX = (canvas.width - 2 * margin) / (years.length - 1);
    var scaleY = (canvas.height - 2 * margin) / (maxY - minY);

    ctx.beginPath();
    ctx.moveTo(margin, margin);
    ctx.lineTo(margin, canvas.height - margin);
    ctx.lineTo(canvas.width - margin, canvas.height - margin);
    ctx.stroke();

    for (var i = 0; i < years.length; i++) {
        var x = margin + i * scaleX;
        var yFutbol = canvas.height - margin - cantidadFutbol[i] * scaleY;
        var yGolf = canvas.height - margin - cantidadGolf[i] * scaleY;

        if (i > 0) {
            ctx.beginPath();
            ctx.moveTo(prevX, prevYFutbol);
            ctx.lineTo(x, yFutbol);
            ctx.strokeStyle = 'rgb(75, 192, 192)';
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(prevX, prevYGolf);
            ctx.lineTo(x, yGolf);
            ctx.strokeStyle = 'rgb(255, 99, 132)';
            ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(x, yFutbol, 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgb(75, 192, 192)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, yGolf, 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgb(255, 99, 132)';
        ctx.fill();

        ctx.fillStyle = '#000';
        ctx.fillText(years[i], x - 10, canvas.height - margin + 20);

        if (i === years.length - 1) {
            ctx.fillStyle = 'rgb(255, 99, 132)';
            ctx.fillText('Fútbol', x + 10, yGolf - 10);

            ctx.fillStyle = 'rgb(75, 192, 192)';
            ctx.fillText('Golf', x + 10, yFutbol + 20);
        }
        var prevX = x;
        var prevYFutbol = yFutbol;
        var prevYGolf = yGolf;
    }
};
