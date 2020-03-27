import menu from '../menu.json';
import menuTemplate from '../templates/menu.hbs';

const menuListRef = document.querySelector('.js-menu');

menu.forEach(element => {
  const markup = menuTemplate(element);
  menuListRef.insertAdjacentHTML('beforeend', markup);
});
