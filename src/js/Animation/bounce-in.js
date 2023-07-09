// Удалить CSS-класс square-transition
const square = document.querySelector('.buy-steps-list');
square.classList.remove('bounce-in-right');

// Добавить наблюдение за появлением элемента
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('bounce-in-right');
      return;
    }
    square.classList.remove('bounce-in-right');
  });
});
observer.observe(document.querySelector('.order-buy-container'));
