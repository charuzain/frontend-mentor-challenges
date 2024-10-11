console.log('hi');

const menuIcon = document.querySelector('#icon-menu');


menuIcon.addEventListener('click', () => {
  const navList = document.querySelector('.nav__list');
  if (navList.style.display === '' || navList.style.display === 'none') {
    navList.style.display = 'block';
  } else {
    navList.style.display = 'none';
  }
});
