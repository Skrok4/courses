'use strict';

const bigImage = document.querySelector('#largeImg');
const smallPics = document.getElementsByClassName('list-item__link');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (showImg) => {
  const curentElement = showImg.target.closest('a');

  if (curentElement) {
    const selectedImg = showImg.target.closest('img');

    bigImage.src = selectedImg.src.replace('-thumb', '');
  }
});

for (let i = 0; i < smallPics.length; i++) {
  const element = smallPics[i];

  element.setAttribute('href', '#');
}