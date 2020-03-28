const bodyRef = document.querySelector('body');
const switchRef = document.querySelector('input.js-switch-input');

switchRef.addEventListener('change', switchTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (
  localStorage.getItem('Theme') === null ||
  localStorage.getItem('Theme') === Theme.LIGHT
) {
  bodyRef.classList.add(Theme.LIGHT);
}

if (localStorage.getItem('Theme') === Theme.DARK) {
  switchRef.checked = true;
  bodyRef.classList.add(Theme.DARK);
}

function switchTheme() {
  if (!switchRef.checked) {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  }

  if (switchRef.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  }
}
