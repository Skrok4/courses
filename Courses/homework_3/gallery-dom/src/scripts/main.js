'use strict';

const bigImg = document.getElementById('largeImg');
const items = document.querySelectorAll('.list-item');

items.forEach(item  => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const currentElement = e.target.closest('a');

    if (!currentElement) {
      return;

    }
    bigImg.src = currentElement.href;
  });
});
