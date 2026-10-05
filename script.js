/* ===== CARRUSEL ===== */
// Aquesta funció s'executa quan tota la web s'ha carregat correctament
document.addEventListener('DOMContentLoaded', () => {
  iniciarCarruselTestimonials();
});

// Funció que controla el moviment automàtic del carrusel
function iniciarCarruselTestimonials() {
  const carrusel = document.querySelector('.testimonials-carrusel');
  const cards = carrusel.querySelectorAll("li");

  let currentCard = 0;

  setInterval(() => {
    currentCard = (currentCard + 1) % cards.length;

    cards[currentCard].scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest"
    });
  }, 4000); /* Cada 4 segons */
}
