const hamburgerImage = document.querySelector('.ham-cros');
const sidebar = document.querySelector('.sidebar');

// HAMBEGRE AND CROSS ICON 

hamburgerImage.addEventListener('click', () => {
    console.log('okay')
    if (hamburgerImage.src.includes('hamburger.jpg')) {
    sidebar.classList.add('open');
    hamburgerImage.src = './images/cross.png';
  } else {
    sidebar.classList.remove('open');
    hamburgerImage.src = './images/hamburger.jpg';
  }
});

// CLICK OUTSIDE THE SIDEBAR

document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburgerImage.contains(e.target)) {
      sidebar.classList.remove('open');
      hamburgerImage.src = './images/hamburger.jpg';
    }
  });