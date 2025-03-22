// Função para abrir o modal
function abrirModal(imagem, titulo, descricao) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');

    modal.style.display = "flex"; // Exibe o modal
    modalImg.src = imagem; // Define a imagem no modal
    modalTitle.textContent = titulo; // Define o título no modal
    modalText.textContent = descricao; // Define a descrição no modal
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none"; // Esconde o modal
}
