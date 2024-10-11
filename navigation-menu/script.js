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

const downArrows = document.querySelectorAll('.down-arrow');
console.log(downArrows);

for (let arrow of downArrows) {
  arrow.addEventListener('click', () => {
    const nestedList = arrow.closest('.nav__nested');
    const nested = nestedList.querySelector('#nested');

    // arrow.src = './images/icon-arrow-down.svg';
    
    if (nested.style.display === 'none' || nested.style.display === '') {
      nested.style.display = 'block';
          arrow.src = './images/icon-arrow-down.svg';

    } else {
      nested.style.display = 'none';
          arrow.src = './images/icon-arrow-up.svg';

    }
  });
}
