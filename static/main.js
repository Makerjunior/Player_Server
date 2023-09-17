document.addEventListener('DOMContentLoaded', function () {
    // Inicialização do player quando a página estiver completamente carregada
    initPlayer();
});

function initPlayer() {
    // Simula o clique no botão "Próxima" quando a página estiver completamente carregada
    var nextButton = document.getElementById('next-button');
    var nextButton2 = document.getElementById('next-button2');
    nextButton2.click();
    nextButton.click();

    // Configura um ouvinte de evento para detectar quando uma música termina
    var audioElement = new Audio();
    audioElement.addEventListener('ended', function() {
        nextTrack(); // Inicia a próxima faixa quando a música termina
    });
}

function playTrack() {
    fetch('/play')
        .then(response => response.json())
        .then(data => {
            document.getElementById('track-name').textContent = data.message;
        });
}

function pauseTrack() {
    fetch('/pause')
        .then(response => response.json())
        .then(data => {
            document.getElementById('track-name').textContent = data.message;
        });
}

function prevTrack() {
    fetch('/prev')
        .then(response => response.json())
        .then(data => {
            document.getElementById('track-name').textContent = data.message;
        });
}

function nextTrack() {
    fetch('/next')
        .then(response => response.json())
        .then(data => {
            document.getElementById('track-name').textContent = data.message;
        });
}
