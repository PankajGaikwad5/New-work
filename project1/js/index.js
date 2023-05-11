const menuBtn = document.querySelector('.menu-button');
const menuBtn2 = document.querySelector('.menu-button2');
const mobileNav = document.querySelector('.mobile-nav');

const btnClick = () => {
  mobileNav.classList.toggle('hidden');
  mobileNav.classList.toggle('flex');
  menuBtn.classList.toggle('hidden');
  menuBtn2.classList.toggle('hidden');
};
