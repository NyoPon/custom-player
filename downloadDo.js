document.getElementById('download-button').addEventListener('click', function() {
    const messages = [
        "Preparando la descarga...",
        "Verificando el archivo...",
        "Estableciendo conexión segura...",
        "Iniciando la transferencia...",
        "Listo para descargar."
    ];

    const selectedOption = document.querySelector('input[name="download"]:checked').value;
    const messageDiv = document.getElementById('message');
    let currentMessageIndex = 0;

    const showNextMessage = () => {
        if (currentMessageIndex < messages.length) {
            messageDiv.textContent = messages[currentMessageIndex];
            currentMessageIndex++;
            setTimeout(showNextMessage, 1500);
        } else {
            initiateDownload();
        }
    };

    const initiateDownload = () => {
        const selectedLink = document.getElementById(selectedOption);
        if (selectedLink) {
            selectedLink.click();
            // Ocultar el mensaje después de iniciar la descarga
            messageDiv.textContent = '';
        }
    };

    showNextMessage();
});
