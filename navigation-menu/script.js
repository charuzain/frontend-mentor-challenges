const menuIcon = document.querySelector('#icon-menu');
const navList = document.querySelector('.nav__list');

menuIcon.addEventListener('click', () => {
  if (navList.style.display === '' || navList.style.display === 'none') {
    navList.style.display = 'block';
  } else {
    navList.style.display = 'none';
  }
  overlay.classList.add('active');
});

const closeMenuIcon = document.querySelector('.mobile-menu');
const overlay = document.getElementById('overlay');
console.log(closeMenuIcon);

closeMenuIcon.addEventListener('click', () => {
  overlay.classList.remove('active');
  navList.style.display = 'none';
});
