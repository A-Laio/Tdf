// Abertura do lightbox
const lightboxLinks = document.querySelectorAll('.lightbox');
const lightboxModal = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Quando uma imagem for clicada, abrir o lightbox
lightboxLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o link de ser aberto no navegador
    const imgSrc = this.getAttribute('href');
    lightboxImg.src = imgSrc; // Define a imagem no lightbox
    lightboxModal.style.display = 'flex'; // Exibe o modal
  });
});

// Fechar o lightbox quando clicar no "X"
closeBtn.addEventListener('click', function() {
  lightboxModal.style.display = 'none'; // Fecha o modal
});

// Fechar o lightbox se clicar fora da imagem
lightboxModal.addEventListener('click', function(event) {
  if (event.target === lightboxModal) {
    lightboxModal.style.display = 'none'; // Fecha o modal se clicar fora da imagem
  }
});
