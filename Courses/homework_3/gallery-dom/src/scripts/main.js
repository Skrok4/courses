'use strict';

const BigImg = document.getElementById('largeImg');
const items = document.querySelectorAll('.list-item');

items.forEach(item  => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const currentElement = e.target.closest('a');

    if (!currentElement) {
      return;

    }
    BigImg.src = currentElement.href;
  });
});
