
const hamburger = document.getElementById('hamburger');
const sidePanel = document.querySelector('.side-panel');


hamburger.addEventListener('click', () => {
  sidePanel.classList.toggle('active');
});

