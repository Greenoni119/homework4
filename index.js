const bgSelect = document.getElementById('bg-select');
const body = document.body;
const heading = document.querySelector('header');
const text = document.querySelectorAll('p');
const images = [
  'lightblue.jpg',
  'lightgold.jpg'
];
let currentImageIndex = 0;

bgSelect.addEventListener('change', () => {
  currentImageIndex = parseInt(bgSelect.value);
  body.style.backgroundImage = `url(${images[currentImageIndex]})`;
  heading.style.backgroundColor = currentImageIndex === 0 ? 'rgb(120, 123, 133)' : 'rgba(255, 180, 50, 0.807)';
  text.forEach(p => p.style.color = currentImageIndex === 0 ? 'gray' : 'rgb(171, 111, 0)');
  bgSelect.style.backgroundColor = currentImageIndex === 0 ? 'rgb(120, 123, 133)' : 'rgba(255, 180, 50, 0.807)';
});



