
const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');

const hideMenu = (event) => {
  menu.classList.remove('collapsed');
}

const closesMenu = (event) => !menu.contains(event.target) && hideMenu(event);

menuBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  menu.classList.toggle('collapsed');
});

window.addEventListener('click', closesMenu);

document.addEventListener('DOMContentLoaded', () => {
  ItcSlider.getOrCreateInstance('.slider');

});

// ---------------------------------------------------------------------------------------
// ----------------------------------  header  --------------------------------------------

const header = document.querySelector('.header')

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide_header');

let lastScroll = 0;

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > 130) {
    header.classList.add('hide_header')

  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove('hide_header')

  }

  lastScroll = Math.max(scrollPosition(), 0);
});