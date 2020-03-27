import menu from '../menu.json';
import menuTemplate from '../templates/menu.hbs';

const menuListRef = document.querySelector('.js-menu');

// menu.forEach(element => {
//   const markup = menuTemplate(element);
//   menuListRef.insertAdjacentHTML('beforeend', markup);
// });

const addListTag = arr => {
  const item = arr.reduce((acc, element) => {
    const markup = menuTemplate(element);
    acc += markup;
    return acc;
  }, '');
  menuListRef.insertAdjacentHTML('beforeend', item);
};

addListTag(menu);
