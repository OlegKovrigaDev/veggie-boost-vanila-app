(() => {
  const refs = {
    // openModalBtn: document.querySelector("[data-modal-open]"),
    firstModalBtn: document.querySelector('[data-first-open]'),
    secondModalBtn: document.querySelector('[data-second-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.firstModalBtn.addEventListener('click', toggleModal);
  refs.secondModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();