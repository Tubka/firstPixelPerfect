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

init();