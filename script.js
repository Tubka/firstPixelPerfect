const init = () => {
  const sections = [...document.querySelectorAll('.featured__section')];
  let i = 0;
  const changeOpacity = () => {
    if (i >= sections.length) {
      i = 0;
    }
    sections.forEach(element => {
      element.classList.remove('featured__section--opacity');
    })
    sections[i].classList.add('featured__section--opacity');
    i++;
  }

  setInterval(changeOpacity, 5000);
}

$(".header__button").on('click', function() {
  $('.header-navbar__nav').toggleClass('header-navbar__nav--visible');
})

init();

// let first = 0;
// let secound = 1;
// let number;

// const fibanocci = () => {
//   number = first + secound;
//   console.log(number);
//   first = secound;
//   secound = number;
// }

// setInterval(fibanocci, 2000);