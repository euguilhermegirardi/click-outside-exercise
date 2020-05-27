const containerButtons = document.querySelectorAll('.container button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleContainerButtonClick(e) {
  const button = e.currentTarget;
  const container = button.closest('.container');
  // Grab the img src
  const imgSrc = container.querySelector('img').src;
  // Grab the data-description
  const desc = container.dataset.description;
  // Grab the text content
  const name = container.querySelector('p').textContent;

  // Populate the modal with the new info
  modalInner.innerHTML = `
    <img width="600" height="450" src='${imgSrc.replace(
      '200',
      '450',
    )}' alt="${name}"/>
    <p>${desc}</p>
  `;
  // Show the modal
  modalOuter.classList.add('open');
};

containerButtons.forEach(button =>
  button.addEventListener('click', handleContainerButtonClick)
);

function closeModal() {
  modalOuter.classList.remove('open');
};

modalOuter.addEventListener('click', () => {
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
