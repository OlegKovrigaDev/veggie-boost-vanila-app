// Удалить CSS-класс square-transition
const square = document.querySelector('.order-text-list');
square.classList.remove('fade-in-up');

// Добавить наблюдение за появлением элемента
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('fade-in-up');
      return;
    }
    square.classList.remove('fade-in-up');
  });
});
observer.observe(document.querySelector('.order-top-container'));
