const noButton = document.querySelector('#noButton');

noButton.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

const yesButton = document.querySelector('#yesButton');
const image = document.querySelector('#image');

yesButton.addEventListener('click', () => {
  // Oculta todos los elementos dentro del contenedor
  const container = document.querySelector('.container');
  container.style.display = 'none';
  
  // Muestra la imagen
  image.classList.remove('hidden');
});
