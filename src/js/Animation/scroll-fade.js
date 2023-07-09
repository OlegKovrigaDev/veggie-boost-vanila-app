// Удалить CSS-класс square-transition
const square = document.querySelector('.order-title-pic');
square.classList.remove('fade-in-down');

// Добавить наблюдение за появлением элемента
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('fade-in-down');
      return;
    }
    square.classList.remove('fade-in-down');
  });
});
observer.observe(document.querySelector('.order-top-container'));
