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

burger.addEventListener('click', toggleMenu);

//Accordeon
function accordeonTeam() {
  const workers = document.querySelectorAll(".accordeon__item");
  const teamAccord = document.querySelector(".accordeon");

  teamAccord.addEventListener("click", function (event) {
    event.preventDefault(); // скидываем стандартное состояние (что бы не кидало страницу вверх / или не перенаправляло на другую)
    const target = event.target; // то на что мы клацнули
   
    if (target.classList.contains("accordeon__link")) {
      const worker = target.parentNode; // родитель нашей ссылки (li.accordeon__item)
      const content = target.nextElementSibling; //  элемент который находится рядом с нашей ссылкой на уровне (accordeon__content)
      const contentHeight = content.firstElementChild.clientHeight; // высота wrapper который лежит в accordeon__content

      for (const iterator of workers) {
        if (iterator !== worker) {
          iterator.classList.remove("accordeon__item-active");
          iterator.lastElementChild.style.height = 0;
        }
      }

      if (worker.classList.contains("accordeon__item-active")) {
        worker.classList.remove("accordeon__item-active");
        content.style.height = 0;
      } else {
        worker.classList.add("accordeon__item-active");
        content.style.height = contentHeight + "px";
      }
    }
  });
}

accordeonTeam();

//Reviews

const reviewsBar = document.querySelector('.reviews__switcher');
const reviewsItems = document.querySelectorAll('.reviews__switcher-item');
const reviewWrapp = document.querySelectorAll('.reviews__display');

reviewsBar.addEventListener('click' , e=>{
   e.preventDefault();
  
  // console.log(Array.from(reviewsBar.children))
  
  if(e.target.classList.contains('reviews__link')){
    const currentPeopleLink = e.target;
    const currentPeopleItem = currentPeopleLink.closest('.reviews__item')
    const currentPeopleId = currentPeopleItem.id;
    
    for (const iterator of reviewsItems) {
      if(iterator !== currentPeopleItem){
        iterator.classList.remove("reviews__item--active");
      }
    }
    
    if(!currentPeopleItem.classList.contains('reviews__item--active')){
      currentPeopleItem.classList.add("reviews__item--active");
    }
    
    reviewWrapp.forEach(function(wrapp){
      if(currentPeopleId == wrapp.id){
        wrapp.classList.add('reviews__wrap--active');
      }else{
        wrapp.classList.remove('reviews__wrap--active');
      }
    })
  }
})