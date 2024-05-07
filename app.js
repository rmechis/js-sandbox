document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('btn');
    const mensagem = document.getElementById('mensagem');

    button.addEventListener('click', function() {
        mensagem.textContent = 'Oi, mundo!';
    });
});
