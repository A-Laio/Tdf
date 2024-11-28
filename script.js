// Seleciona todos os links de lightbox
const lightboxLinks = document.querySelectorAll('.lightbox');

// Modal e imagem dentro do modal
const lightboxModal = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Função para abrir a imagem no lightbox
lightboxLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Previne o comportamento padrão do link
    const imgSrc = this.getAttribute('href'); // Pega o link da imagem
    lightboxImg.src = imgSrc; // Define a imagem no modal
    lightboxModal.style.display = 'flex'; // Exibe o modal
  });
});

// Função para fechar o lightbox ao clicar no "x"
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', function () {
  lightboxModal.style.display = 'none'; // Fecha o modal
});

// Fecha o modal se o fundo (fora da imagem) for clicado
lightboxModal.addEventListener('click', function (e) {
  if (e.target === lightboxModal) {
    lightboxModal.style.display = 'none'; // Fecha o modal
  }
});
