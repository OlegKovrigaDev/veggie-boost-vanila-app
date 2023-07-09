// Удалить CSS-класс square-transition
const square = document.querySelector('.order-title');
square.classList.remove('slide-in-left');

// Добавить наблюдение за появлением элемента
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('slide-in-left');
      return;
    }
    square.classList.remove('slide-in-left');
  });
});
observer.observe(document.querySelector('.order-top-container'));
