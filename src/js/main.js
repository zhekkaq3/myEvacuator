
const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.links');
const navbar = document.querySelector('.navbar');

const hideMenu = () => {
    navbar.classList.remove('collapsed');
};

const closeMenu = (event) => {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        hideMenu();
    }
};

menuBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    navbar.classList.toggle('collapsed');
});

document.addEventListener('click', closeMenu);

// Закрытие меню при изменении размера окна (если перешли на десктопный вид)
window.addEventListener('resize', () => {
    if (window.innerWidth > 850) {
        hideMenu();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Инициализация слайдера, если он есть на странице
    if (typeof ItcSlider !== 'undefined' && document.querySelector('.slider')) {
        ItcSlider.getOrCreateInstance('.slider');
    }
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