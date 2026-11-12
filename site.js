'use strict';
const theme = document.getElementById('theme');
theme.value = document.documentElement.dataset.theme || 'system';
theme.addEventListener('change', () => {
  if (theme.value === 'system') delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = theme.value;
  try {
    if (theme.value === 'system') localStorage.removeItem('skw-trading-theme');
    else localStorage.setItem('skw-trading-theme', theme.value);
  } catch { /* The selected theme still works when storage is unavailable. */ }
});
const menuButton = document.querySelector('.menu-button');
const menu = document.getElementById('mobile-navigation');
menuButton.hidden = false;
function closeMenu(returnFocus = false) {
  menu.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menu.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !menu.hidden) closeMenu(true);
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  closeMenu();
  if (link.hash && link.origin === location.origin) {
    const target = document.querySelector(link.hash);
    if (target) { target.setAttribute('tabindex', '-1'); target.focus({preventScroll:true}); }
  }
}));
matchMedia('(min-width:1101px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});
