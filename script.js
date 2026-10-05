/* ===== CARRUSEL ===== */
// Aquesta funció s'executa quan tota la web s'ha carregat correctament
document.addEventListener('DOMContentLoaded', () => {
  iniciarCarruselTestimonials();
});

// Funció que controla el moviment automàtic del carrusel
function iniciarCarruselTestimonials() {
  const carrusel = document.querySelector('.testimonials-carrusel');

  // Si no troba cap carrusel a la pàgina actual, s'atura per evitar errors
  if (!carrusel) return;

  // Canvia de foto automàticament cada 8 segons (8000 ms)
  setInterval(() => {
    // Comprova si hem arribat a l'última foto
    const esAlFinal = carrusel.scrollLeft + carrusel.clientWidth >= carrusel.scrollWidth - 8;

    if (esAlFinal) {
      // Torna a la primera foto
      carrusel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      // Passa a la següent foto
      carrusel.scrollBy({ left: carrusel.clientWidth, behavior: 'smooth' });
    }
  }, 6000);
}
