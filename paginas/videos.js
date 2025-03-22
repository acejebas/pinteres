// Função para abrir o modal com o vídeo
function openModal(videoSrc) {
    const modal = document.getElementById('modal');
    const modalVideo = document.getElementById('modal-video');
    modal.style.display = 'flex';
    modalVideo.src = videoSrc;
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('modal');
    const modalVideo = document.getElementById('modal-video');
    modal.style.display = 'none';
    modalVideo.pause(); // Pausa o vídeo quando o modal é fechado
}