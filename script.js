/* ===== CARRUSEL ===== */
// Aquesta funció s'executa quan tota la web s'ha carregat correctament
document.addEventListener('DOMContentLoaded', () => {
  iniciarCarruselTestimonials();
});

// Funció que controla el moviment automàtic del carrusel
function iniciarCarruselTestimonials() {
  const carrusel = document.querySelector(".testimonials-carrusel");

  if (!carrusel) return;

  const cards = carrusel.querySelectorAll("li");

  if (cards.length === 0) return;

  let currentCard = 0;

  setInterval(() => {
    currentCard = (currentCard + 1) % cards.length;

    carrusel.scrollTo({
      left: currentCard * carrusel.clientWidth,
      behavior: "smooth"
    });
  }, 4000);
}
