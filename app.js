document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('btn');
    const button2 = document.getElementById('btn2');
    const mensagem = document.getElementById('mensagem');

    button.addEventListener('click', function() {
        mensagem.textContent = 'Oi, mundo!';
    });

    button2.addEventListener('click', function() {
        mensagem.textContent = '';	
    });
});