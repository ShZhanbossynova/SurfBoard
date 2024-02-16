// let burger  = document.querySelector('.burger');
// let overlay = document.querySelector('.overlay');
// let body = document.querySelector('body');

// let links = document.querySelectorAll('.overlay .menu__link'); [1,2,3,4]

// links.forEach(function(element){
//   element.addEventListener('click' , toggleMenu);
// })

// function toggleMenu(){
//   burger.classList.toggle('burger--active');
//   overlay.classList.toggle('overlay--active');
//   body.classList.toggle('body--active-menu');
// }

// burger.addEventListener('click' , toggleMenu);

// Overlay
const overlay = document.querySelector('.overlay');
const burger = document.querySelector('#burger-menu');
const body = document.body;

const links = document.querySelectorAll('.overlay .menu__link');

links.forEach((element) => {
  element.addEventListener('click',  toggleMenu);
})

function toggleMenu(element) {
  element.preventDefault();

  overlay.classList.toggle('overlay--active');
  burger.classList.toggle('burger--active');
  body.classList.toggle('body--active-menu');
}

burger.addEventListener('click',  toggleMenu);