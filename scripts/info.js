window.onload = function () {
document.getElementById('esport').addEventListener('change', function() {
    let selecionarValor = this.value;
    if (selecionarValor) {
        window.location.href = selecionarValor + '.html';
    }
});
}